<template>
  <div
    class="tab_wrap"
    :class="{fixed:isFixed}"
  >
    <div
      class="tabmenu"
      :class="{scrollable: this.isScrollable}"
      :style="fixedStyle"
    >
      <div
        ref="tablist"
        class="tablist"
        role="tablist"
      >
        <div
          class="tab_line"
          aria-hidden="true"
          :style="{width:`${lineWrapWidth}px`,left:`${lineWrapLeft}px`}"
        >
          <i :style="{width:`${lineWidth}px`,left:`${lineLeft}px`}" />
        </div>
        <slot />
      </div>
      <div
        v-if="isScrollable && isScrollableLeft"
        class="tab_blur left"
      />
      <div
        v-if="isScrollable && isScrollableRight"
        class="tab_blur right"
      />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'kbTabsLink',
  props: {
    fixed: { type: Boolean, default: false },
    tabsClass: { type: String, default: null },
  },
  data() {
    return {
      isFixed: false,
      lineLeft: 0,
      lineWidth: 0,
      lineWrapWidth: 0,
      lineWrapLeft: 0,
      isAniamte: false,
      lastScrollPosition: 0,
      isScrollable: false,
      isScrollableLeft: false,
      isScrollableRight: false,
      isFixedTopChk: false,
      fixedStyle: null,
    };
  },
  computed: {
    tabmenuClass() {
      return [
        'tabmenu',
        this.tabsClass,
      ];
    },
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        let wrap = window;
        if (this.$el.closest('.scl__body') !== null) wrap = this.$el.closest('.scl__body');
        const head = wrap.querySelector('.scl__head');
        const headH = (head !== null) ? head.offsetHeight : parseInt(this.$getStyle(wrap, 'padding-top'), 10);
        const sclTop = this.$getOffset(this.$el).top - headH;
        if (wrap.scrollTop > sclTop) {
          // try {
          //   wrap.scrollTo({
          //     top: sclTop,
          //     behavior: 'smooth',
          //   });
          // } catch (error) {
          //   wrap.scrollTo(0, sclTop);
          // }
          wrap.scrollTo(0, sclTop);
          wrap.dispatchEvent(new Event('scroll'));
        }
        setTimeout(() => {
          this.linePosition();
        }, 100);
      }
    },
  },
  created() {
    window.addEventListener('resize', this.linePosition);
  },
  mounted() {
    this.$nextTick(() => {
      window.dispatchEvent(new Event('resize'));
      this.$el.querySelector('.tablist').addEventListener('scroll', this.lineWrapLeftPosition);
      if (this.fixed) {
        const sclBody = this.$el.closest('.scl__body');
        if (sclBody !== null) {
          sclBody.addEventListener('scroll', this.tabFixed);
          this.tabFixed();
          this.$once('hook:beforeDestroy', () => {
            sclBody.removeEventListener('scroll', this.tabFixed);
          });
        }
      }
      setTimeout(() => {
        this.linePosition();
      }, 100);
    });
  },
  destroyed() {
    this.$el.querySelector('.tablist').removeEventListener('scroll', this.lineWrapLeftPosition);
    window.removeEventListener('resize', this.linePosition);
  },
  methods: {
    lineWrapLeftPosition() {
      const tablist = this.$el.querySelector('.tablist');
      const tablistLeft = tablist.scrollLeft;
      this.lineWrapLeft = -tablistLeft;
      this.isScrollableChk();
    },
    linePosition() {
      const sclWidth = this.$el.querySelector('.tablist').scrollWidth;
      this.lineWrapWidth = sclWidth;
      const active = this.$el.querySelector('.router-link-exact-active');
      if (active === null) return;
      const activeParent = active.parentNode;
      this.lineWidth = activeParent.offsetWidth;
      this.lineLeft = activeParent.offsetLeft;

      const $tablist = this.$refs.tablist;
      const tablistLeft = $tablist.scrollLeft;
      if (tablistLeft !== 0) this.lineWrapLeft = -tablistLeft;

      const sclLeft = this.lineLeft - (document.body.clientWidth / 2) + (this.lineWidth / 2);
      if (this.isAniamte === false) {
        this.isAniamte = true;
        // try {
        //   $tablist.scrollTo({
        //     left: sclLeft,
        //     behavior: 'smooth',
        //   });
        //   setTimeout(() => {
        //     this.isAniamte = false;
        //   }, 300);
        // } catch (error) {
        //   $tablist.scrollTo(sclLeft, 0);
        //   setTimeout(() => {
        //     this.isAniamte = false;
        //   }, 10);
        // }
        this.$scrollTo($tablist, { left: sclLeft }, 300, () => {
          this.isAniamte = false;
        });
      }
      this.isScrollableChk();
    },
    isScrollableChk() {
      const tablist = this.$el.querySelector('.tablist');
      const tablistLeft = tablist.scrollLeft;
      const sclWidth = tablist.scrollWidth;
      if (this.$el.offsetWidth < sclWidth) {
        this.isScrollable = true;
      } else {
        this.isScrollable = false;
      }

      if (tablistLeft <= 16) {
        this.isScrollableLeft = false;
      } else {
        this.isScrollableLeft = true;
      }
      if (tablist.scrollWidth <= (tablistLeft + tablist.offsetWidth) + 16) {
        this.isScrollableRight = false;
      } else {
        this.isScrollableRight = true;
      }
    },
    tabFixed() {
      let wrap = this.$el.closest('.scl__body');
      if (wrap === null) wrap = window;
      if (!wrap.classList.contains('lock') || wrap.classList.contains('pop_body')) {
        const elWrap = (wrap === window) ? document : wrap;
        const fixedEls = elWrap.querySelectorAll('.fixed');
        let fixedTop = 0;
        if (fixedEls.length) {
          fixedEls.forEach((i) => {
            // fixedTop += i.children[0].offsetHeight
            fixedTop += i.firstChild.offsetHeight;
          });
        }
        if (elWrap !== document) {
          const $prevEl = elWrap.previousElementSibling;
          if ($prevEl !== null) {
            const $prevClassList = $prevEl.classList;
            if ($prevClassList.contains('pop_head')) {
              fixedTop += $prevEl.firstChild.offsetHeight;
            }
          }
        }
        let margin = fixedTop;
        const height = this.$el.firstChild.offsetHeight;
        const sclTop = (wrap === window) ? wrap.scrollY : wrap.scrollTop;
        if (sclTop < this.lastScrollPosition) margin -= height;
        if (this.$getOffset(this.$el).top <= (sclTop + margin)) {
          this.isFixed = true;
          if (height > 0 && !this.isFixedTopChk) {
            this.fixedStyle = { top: `${fixedTop}px` };
            this.isFixedTopChk = true;
          }
        } else {
          this.isFixed = false;
          if (this.isFixedTopChk) {
            this.fixedStyle = null;
            this.isFixedTopChk = false;
          }
          setTimeout(() => {
            this.lastScrollPosition = sclTop;
          }, 1);
        }
      }
    },
  },
};
</script>

<template>
  <div
    class="tab_wrap"
    :class="{fixed:isFixed, tab2: type2}"
  >
    <div
      :class="tabmenuClass"
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
        <div
          v-for="(tab, i) in tabs"
          :key="i"
          class="tab"
          role="presentation"
          :class="{ 'active': tab.isActive}"
        >
          <a
            :id="tab.btnId"
            :href="`#${tab.href}`"
            role="tab"
            :aria-controls="tab.href"
            :aria-selected="tab.isActive? 'true': 'false'"
            v-on="tab.listeners"
            @click="selectTab(tab,$event)"
          >{{ tab.title }}</a>
        </div>
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
    <div
      class="tab_content"
      :class="[contentClass]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'kbTabs',
  props: {
    fixed: { type: Boolean, default: false },
    tabsClass: { type: String, default: null },
    contentClass: { type: String, default: null },
    type2: { type: Boolean, default: false },
    type3: { type: Boolean, default: false },
    idx: { type: Number, default: null },
  },
  data() {
    return {
      isFixed: false,
      tabs: [],
      currIdx: null,
      lineLeft: 0,
      lineWidth: 0,
      lineWrapWidth: 0,
      lineWrapLeft: 0,
      lastScrollPosition: 0,
      isScrollable: false,
      isScrollableLeft: false,
      isScrollableRight: false,
      isFixedTopChk: false,
      fixedStyle: null,
    };
  },
  watch: {
    idx() {
      if (this.idx !== null) {
        this.watchEvt(this.idx);
      }
    },
  },
  computed: {
    tabmenuClass() {
      return [
        {
          tabmenu: !this.type2 && !this.type3,
          tabmenu2: this.type2,
          tabmenu3: this.type3,
          scrollable: this.isScrollable,
        },
        this.tabsClass,
      ];
    },
  },
  created() {
    if (this.idx !== null) this.currIdx = this.idx;
    this.tabs = this.$children;
    window.addEventListener('resize', this.linePosition);
  },
  mounted() {
    this.$nextTick(() => {
      window.dispatchEvent(new Event('resize'));
      if (this.tabs.length) {
        if (this.currIdx !== null) this.tabs[this.currIdx].isActive = true;
        const active = this.$el.querySelector('.tab.active');
        if (active === null) this.tabs[0].isActive = true;
      }
      setTimeout(() => {
        this.linePosition();
      }, 100);
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
    });
    this.$el.querySelector('.tablist').addEventListener('scroll', this.lineWrapLeftPosition);
  },
  destroyed() {
    this.$el.querySelector('.tablist').removeEventListener('scroll', this.lineWrapLeftPosition);
    window.removeEventListener('resize', this.linePosition);
  },
  methods: {
    selectTab(selectTab, event) {
      event.preventDefault();
      this.tabs.forEach((tab, i) => {
        if (tab.title === selectTab.title) {
          tab.isActive = true;
          this.sclCenter(event.target);
          this.currIdx = i;
          if (this.idx !== null) this.$emit('idx', i);
        } else {
          tab.isActive = false;
        }
      });
      if (this.isFixed) {
        let margin = 56;
        if (this.type2)margin = 97;
        const sclY = this.$getOffset(this.$el).top - margin;
        let wrap = window;
        if (this.$el.closest('.scl__body') !== null) wrap = this.$el.closest('.scl__body');
        // try {
        //   wrap.scrollTo({
        //     top: sclY,
        //     behavior: 'smooth',
        //   });
        // } catch (error) {
        //   wrap.scrollTo(0, sclY);
        // }
        this.$scrollTo(wrap, { top: sclY }, 300);
      }
    },
    sclCenter(el) {
      const elX = el.parentNode.offsetLeft + el.offsetLeft;
      const elW = el.offsetWidth;
      this.lineWidth = elW;
      this.lineLeft = elX;
      const $tablist = this.$refs.tablist;
      // const $tablistLeft = $tablist.scrollLeft
      const sclLeft = elX - (document.body.clientWidth / 2) + (elW / 2);
      // try {
      //   $tablist.scrollTo({
      //     left: sclLeft,
      //     behavior: 'smooth',
      //   });
      // } catch (error) {
      //   $tablist.scrollTo(sclLeft, 0);
      // }
      this.$scrollTo($tablist, { left: sclLeft }, 300);
    },
    lineWrapLeftPosition() {
      const tablist = this.$el.querySelector('.tablist');
      const tablistLeft = tablist.scrollLeft;
      this.lineWrapLeft = -tablistLeft;
      this.isScrollableChk();
    },
    linePosition() {
      const sclWidth = this.$el.querySelector('.tablist').scrollWidth;
      this.lineWrapWidth = sclWidth;
      const active = this.$el.querySelector('.tab.active');
      if (active !== null) {
        this.lineWidth = active.querySelector('a').offsetWidth;
        this.lineLeft = active.offsetLeft + active.querySelector('a').offsetLeft;
        const tablistLeft = this.$el.querySelector('.tablist').scrollLeft;
        this.lineWrapLeft = -tablistLeft;
        this.isScrollableChk();
      }
    },
    isScrollableChk() {
      const tablist = this.$el.querySelector('.tablist');
      const tablistLeft = tablist.scrollLeft;
      const sclWidth = tablist.scrollWidth;
      if (tablist.offsetWidth < sclWidth) {
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
    watchEvt(idx) {
      this.currIdx = idx;
      this.tabs.forEach((tab, i) => {
        if (i === this.currIdx) {
          tab.isActive = true;
        } else {
          tab.isActive = false;
        }
      });
      setTimeout(() => {
        this.linePosition();
      }, 10);
    },
  },
};
</script>

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
          v-for="(tab, i) in childrens"
          :key="i"
          class="tab"
          :class="{active:tab.isActive, disabled:tab.disabled}"
          role="presentation"
          :style="tab.tabStyle"
        >
          <a
            :id="tab.btnId"
            :href="`#${tab.href}`"
            role="tab"
            :aria-controls="tab.href"
            :aria-selected="tab.isActive? 'true': 'false'"
            :aria-disabled="tab.disabled || disabled"
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
      <div
        v-if="!!$slots.tabNext"
      >
        <slot name="tabNext" />
      </div>
    </div>
    <slot name="between" />
    <div
      ref="tabContent"
      v-show="isContents"
      class="tab_content"
      :class="[contentClass]"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import uiEventBus from '../uiEventBus.vue';

export default {
  name: 'kbTabs',
  props: {
    value: { type: [String, Number], default: null },
    fixed: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    tabsClass: { type: String, default: null },
    contentClass: { type: String, default: null },
    type2: { type: Boolean, default: false },
    type3: { type: Boolean, default: false },
    idx: { type: Number, default: null },
    tabs: { type: Array, default: null },
  },
  data() {
    return {
      isContents: false,
      isFixed: false,
      childrens: [],
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
    value() {
      if (this.value !== null) {
        this.watchEvt(this.value);
      }
    },
    currIdx(t) {
      this.$emit('currentIdxTab', t);
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
          disabled: this.disabled,
          flex_ty: !!this.$slots.tabNext,
        },
        this.tabsClass,
      ];
    },
  },
  created() {
    if (this.idx !== null) this.currIdx = this.idx;
    window.addEventListener('resize', this.linePosition);
  },
  beforeMount() {
  },
  mounted() {
    this.readySet();
    this.$nextTick(() => {
      if (this.childrens.length) {
        this.watchEvt(this.value);
        this.contentsChk();
        if (this.currIdx !== null) this.childrens[this.currIdx].isActive = true;
        setTimeout(() => {
          const active = this.$el.querySelector('.tab.active');
          if (active === null) this.childrens[0].isActive = true;
        }, 5);
      }
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        this.linePosition();
      }, 100);
      if (this.fixed) {
        let sclBody = this.$el.closest('.scl__body');
        if (sclBody === null)sclBody = window;
        sclBody.addEventListener('scroll', this.tabFixed);
        this.tabFixed();
        this.$once('hook:beforeDestroy', () => {
          sclBody.removeEventListener('scroll', this.tabFixed);
        });
      }
    });
    this.$el.querySelector('.tablist').addEventListener('scroll', this.lineWrapLeftPosition);
  },
  destroyed() {
    this.$el.querySelector('.tablist').removeEventListener('scroll', this.lineWrapLeftPosition);
    window.removeEventListener('resize', this.linePosition);
  },
  methods: {
    readySet() {
      this.$children.forEach((el) => {
        if (el.$vnode.componentOptions.tag === 'kb-tab') this.childrens.push(el);
      });

      if (this.tabs !== null) {
        this.tabs.forEach((tab) => {
          const obj = {
            title: tab.title,
            isActive: (tab.active !== undefined ? tab.active : false),
            disabled: (tab.disabled !== undefined ? tab.disabled : false),
            href: (tab.href !== undefined ? tab.href : ''),
          };
          this.childrens.push(obj);
        });
      }
    },
    contentsChk() {
      this.childrens.forEach((tab) => {
        if (tab.href !== '') this.isContents = true;
      });
    },
    selectTab(selectTab, event) {
      event.preventDefault();
      if (this.disabled || selectTab.disabled) return;
      this.childrens.forEach((tab, i) => {
        if (tab.title === selectTab.title) {
          tab.isActive = true;
          this.sclCenter(event.target);
          let emitVal = i;
          if (tab.value !== null) emitVal = tab.value;
          this.currIdx = i;
          this.$emit('input', emitVal);
          if (tab.$el.childNodes.length !== 0 && tab.$el.querySelector('.ui-swiper-wrap') !== null) uiEventBus.$emit('kbSwiperUpdate', 'update');
        } else {
          tab.isActive = false;
        }
      });
      if (this.isFixed) {
        let margin = 56;
        if (this.type2)margin = 97;
        const sclY = this.$getOffset(this.$el).top - margin;
        let wrap = this.$el.closest('.scl__body');
        if (wrap === null)wrap = window.document.scrollingElement || window.document.body || window.document.documentElement;
        this.$scrollTo(wrap, { top: sclY }, 300);
      }
    },
    sclCenter(el) {
      const elX = el.parentNode.offsetLeft + el.offsetLeft;
      const elW = el.offsetWidth;
      this.lineWidth = elW;
      this.lineLeft = elX;
      const $tablist = this.$refs.tablist;
      const sclLeft = elX - (document.body.clientWidth / 2) + (elW / 2);
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
      if (!this.$el.closest('.page_wrap').classList.contains('lock') || wrap.classList.contains('pop_body')) {
        const elWrap = (wrap === window) ? document : wrap;
        const fixedEls = elWrap.querySelectorAll('.fixed');
        let fixedTop = 0;
        if (fixedEls.length) {
          fixedEls.forEach((i) => {
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
    watchEvt(val) {
      if (typeof val === 'string') {
        this.childrens.forEach((tab, i) => {
          if (tab.value !== null) {
            if (tab.value === this.value) {
              this.currIdx = i;
              tab.isActive = true;
            } else {
              tab.isActive = false;
            }
          }
        });
      } else if (typeof val === 'number') {
        this.currIdx = val;
        this.childrens.forEach((tab, i) => {
          if (i === this.currIdx) {
            tab.isActive = true;
          } else {
            tab.isActive = false;
          }
        });
      }
      setTimeout(() => {
        this.linePosition();
      }, 10);
    },
  },
};
</script>

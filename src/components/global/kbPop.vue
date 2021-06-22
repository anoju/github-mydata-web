<template>
  <!-- <div
        class="popup"
        :class="modalClass"
        role="dialog"
    > -->
  <article
    class="pop_wrap"
    :class="{page: !isLayer}"
  >
    <div
      v-if="!noHead"
      class="pop_head"
      :class="[{no_title:((title == null || title == '') && !$slots.title)}, titleClass]"
    >
      <div>
        <slot name="title_prev" />
        <h1
          v-if="title != null"
          ref="title"
          tabindex="-1"
          v-html="title"
        />
        <slot name="title" />
        <slot name="title_next" />
        <template v-if="!noClose">
          <kb-button
            v-if="close !== null"
            class="pop_close"
            not
            aria-label="팝업창 닫기"
            @click="close"
          >팝업창 닫기</kb-button>
          <kb-button
            v-else
            class="pop_close"
            not
            aria-label="팝업창 닫기"
            @click="popClose"
          >팝업창 닫기</kb-button>
        </template>
      </div>
    </div>
    <slot name="head" />
    <slot />
  </article>
  <!-- </div> -->
</template>

<script>
import uiEventBus from '../uiEventBus.vue';

const POP_TYPES = ['full', 'bottom', 'modal'];

export default {
  name: 'kbPop',
  props: {
    title: { type: String, default: null },
    titleClass: { type: String, default: null },
    noHead: { type: Boolean, default: false },
    noClose: { type: Boolean, default: false },
    full: { type: Boolean, default: false },
    modal: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    tooltip: { type: Boolean, default: false },
    close: { type: Function, default: null },
    type: {
      type: String,
      default: null,
      validator(val) {
        return POP_TYPES.includes(val);
      },
    },
  },
  data() {
    return {
      isLayer: true,
      defaultType: 'modal',
      modalTitle: null,
      isShow: false,
      idx: null,
      addClass: [],
    };
  },
  computed: {
    // addClass() {
    //   return [
    //     {
    //       tooltip: this.tooltip,
    //     },
    //   ];
    // },
    modalType() {
      let $typeClass = this.defaultType;
      if (this.full) $typeClass = 'full';
      if (this.modal) $typeClass = 'modal';
      if (this.bottom) $typeClass = 'bottom';
      if (this.type) $typeClass = this.type;
      return $typeClass;
    },
  },
  created() {
    if (this.modal || this.bottom) window.addEventListener('resize', this.maxHeight);
  },
  destroyed() {
    if (this.modal || this.bottom) window.removeEventListener('resize', this.maxHeight);
  },
  mounted() {
    this.isLayerChk();
    this.addClassChk();
    this.idx = this.$el.dataset.idx;
    if (this.idx)uiEventBus.$emit('pop-open', [this.idx, this.modalType, this.addClass]);
    this.$nextTick(() => {
      setTimeout(() => {
        if (this.modal || this.bottom) this.maxHeight();
      }, 10);
    });
    // console.log(this.propsData)
  },
  methods: {
    isLayerChk() {
      this.isLayer = this.$el.parentNode.classList.contains('popup');
    },
    addClassChk() {
      if (this.tooltip) this.addClass.push('tooltip');
    },
    maxHeight() {
      let wrap = window;
      let wrapH = wrap.innerHeight;
      let wrapPdT = 0;
      let wrapPdB = 0;
      if (this.$el.parentNode.classList.contains('popup')) {
        wrap = this.$el.parentNode;
        wrapH = wrap.offsetHeight;
        // wrapPdT = parseInt(window.getComputedStyle(wrap, null).getPropertyValue('padding-top'), 10)
        // wrapPdB = parseInt(window.getComputedStyle(wrap, null).getPropertyValue('padding-bottom'), 10)
        wrapPdT = parseInt(this.$getStyle(wrap, 'padding-top'), 10);
        wrapPdB = parseInt(this.$getStyle(wrap, 'padding-bottom'), 10);
      }
      // const headH = (this.$el.querySelector('.pop_head') != null) ? this.$el.querySelector('.pop_head').offsetHeight : 0;
      // const footH = (this.$el.querySelector('.pop_foot') != null) ? this.$el.querySelector('.pop_foot').offsetHeight : 0;
      // const rtnVal = wrapH - wrapPdT - wrapPdB - headH - footH;
      const rtnVal = wrapH - wrapPdT - wrapPdB;
      this.$el.querySelector('.pop_body').style.maxHeight = `${rtnVal}px`;
    },
    popClose() {
      if (this.isLayer) {
        uiEventBus.$emit('pop-close', this.idx);
      } else {
        window.history.back();
      }
    },
  },
};
</script>

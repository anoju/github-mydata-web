<template>
  <div
    v-if="modals.length || isLike"
    class="modal_container"
  >
    <kb-pop-wrap
      v-for="(modal, i) in modals"
      :key="i"
      v-bind="modal.modalProps"
      @close="onClose(i)"
    >
      <component
        :is="modal.component"
        ref="modals"
        v-bind="modal.componentProps"
        :data-idx="i"
        @mounted="onMounted(i)"
        @close="onClose(i,$event)"
      />
    </kb-pop-wrap>

    <!-- like -->
    <div
      v-if="isLike"
      id="layerLike"
      class="layer_like"
      :class="{show:isLikeShow}"
      aria-hidden="true"
    >
      <div :class="likeClass"></div>
    </div>
  </div>
</template>

<script>
import uiEventBus from '../uiEventBus.vue';

export default {
  name: 'ModalContainer',
  props: {
    // bgClick: { type: Boolean, default: false }
  },
  data() {
    return {
      modals: [],
      isLike: false,
      isLikeShow: false,
      isLikeIng: false,
      likeClass: null,
      isClosing: false,
    };
  },
  created() {
    this.$modalInstance = this;
    uiEventBus.$on('pop-open', (payload) => {
      const idx = payload[0];
      const type = payload[1];
      const addClass = payload[2];
      this.onOpen(idx, type, addClass);
    });
    uiEventBus.$on('pop-close', (payload) => {
      const idx = payload;
      this.onClose(idx);
    });
  },
  mounted() {
    // console.log(this.bgClick)
  },
  beforeDestroy() {
    this.$modalInstance = null;
  },
  destroyed() {
    uiEventBus.$off('pop-open');
    uiEventBus.$off('pop-close');
  },
  methods: {
    isDuplicated(componentName) {
      return this.modals.length && this.modals.some((modal) => modal.componentName === componentName);
    },
    async addModal(resolve, component, componentProps = {}, modalProps = {}, returnFocus) {
      const componentName = (component instanceof Function ? (await component()).default : component).name;

      // 이미 열린 팝업 처리
      if (this.isDuplicated(componentName)) {
        // resolve({ flag: false })
        return;
      }

      this.modals.push({
        component,
        componentProps,
        componentName,
        modalProps,
        resolve,
        // return: { flag: false },
        returnFocus,
      });
    },
    onMounted(index) {
      this.modals[index].initialized = true;
    },
    onOpen(index, type, addClass) {
      if (this.isClosing) return;
      // const time = this.isClosing ? 700 : 0;
      const idx = Number(index);
      const modal = this.$children[idx].$el;
      const wrap = this.$el.childNodes[idx];
      wrap.classList.remove('full', 'modal', 'bottom');
      wrap.classList.add(type);
      wrap.classList.add(...addClass);
      if (idx === 0 && document.querySelector('.lock') === null) uiEventBus.$emit('lock-wrap');
      setTimeout(() => {
        wrap.classList.add('show');
        wrap.setAttribute('aria-hidden', false);
        if (idx > 0)wrap.previousSibling.setAttribute('aria-hidden', true);
      }, 50);
      setTimeout(() => {
        if (modal.querySelector('.pop_head h1') !== null) {
          modal.querySelector('.pop_head h1').focus();
        } else if (modal.querySelector('.pop_head .pop_close') !== null) {
          modal.querySelector('.pop_head .pop_close').focus();
        }
        if (type !== 'full')wrap.classList.add('opend');
      }, 650);
    },
    // onClose(index, { flag = false, payload }) {
    onClose(index, { payload } = {}) {
      this.isClosing = true;
      const idx = Number(index);
      const wrap = this.$el.childNodes[idx];
      const modal = this.modals[idx];
      modal.resolve({ payload });
      wrap.classList.remove('show');
      if (idx > 0)wrap.previousSibling.setAttribute('aria-hidden', false);
      if (idx === 0) uiEventBus.$emit('unlock-wrap');
      const focusEl = modal.returnFocus;
      setTimeout(() => {
        this.modals.splice(idx, 1);
        if (focusEl !== undefined && typeof focusEl !== 'object')focusEl.focus();
        this.isClosing = false;
      }, 600);
    },
    like(addClass) {
      if (!this.isLikeIng) {
        this.likeClass = addClass;
        this.isLikeIng = true;
        this.isLike = true;
        setTimeout(() => {
          this.isLikeShow = true;
          // setTimeout(() => {
          //   this.isLikeShow = false;
          //   setTimeout(() => {
          //     this.isLike = false;
          //     this.isLikeIng = false;
          //   }, 300);
          // }, 2000);
        }, 10);
      }
    },
  },
};
</script>

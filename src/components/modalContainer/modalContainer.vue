<template>
  <div
    v-if="modals.length || likes.length"
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
    <div class="layer_like_wrap" v-if="likes.length">
      <div
        v-for="(like, j) in likes"
        :key="j"
        class="layer_like"
        :class="{show:like.show}"
        aria-hidden="true"
      >
        <div :class="like.class"></div>
      </div>
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
      likeIdx: 0,
      likes: [],
      isLike: false,
      isLikeShow: false,
      isLikeIng: false,
      likeClass: null,
      isClosing: false,
    };
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.likeIdx = 0;
        this.likes = [];
      // this.modals = [];
      }
    },
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
      wrap.classList.remove('show');
      if (idx > 0)wrap.previousSibling.setAttribute('aria-hidden', false);
      if (idx === 0) uiEventBus.$emit('unlock-wrap');
      let focusEl = modal.returnFocus;
      setTimeout(() => {
        this.modals.splice(idx, 1);
        if (focusEl !== undefined) {
          if (focusEl.closest('.button') !== null) focusEl = focusEl.closest('.button');
          focusEl.focus();
        }
        this.isClosing = false;
        modal.resolve({ payload });
      }, 600);
    },
    like(addClass) {
      const idx = this.likeIdx;
      this.likes.push({
        idx,
        class: addClass,
        show: false,
      });
      this.likeIdx += 1;
      setTimeout(() => {
        this.likes[idx].show = true;
        setTimeout(() => {
          this.likes[idx].show = false;
        }, 2000);
      }, 50);
    },
  },
};
</script>

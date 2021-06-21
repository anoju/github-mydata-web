<template>
  <dl
    class="item"
  >
    <slot name="tit_prev" />
    <dt
      class="tit"
    >
      <slot name="title_prev" />
      <kb-button
        :id="btnId"
        not
        a-tag
        :href="`#${panelId}`"
        :aria-expanded="visible?'true':'false'"
        :aria-controls="panelId"
        :class="{open:visible}"
        :disabled="disabled"
        v-on="listeners"
        @click="slide($event)"
      >
        {{ title }}
        <template v-if="visible">{{openTitle}}</template>
        <template v-if="!visible">{{closeTitle}}</template>
        <slot name="title" />
      </kb-button>
      <slot name="title_next" />
    </dt>
    <kb-folding-panel
      :id="panelId"
      :active="visible"
      :aria-labelledby="btnId"
      tag="dd"
      class="panel"
      :duration="duration"
      :end-scroll="isScroll"
    >
      <slot />
    </kb-folding-panel>
  </dl>
</template>

<script>
import uiEventBus from '../uiEventBus.vue';

let uuid = 0;
export default {
  name: 'kbFolding',
  inject: ['items', 'notToggle', 'firstOpen'],
  props: {
    title: { type: String, default: null },
    closeTitle: { type: String, default: null },
    openTitle: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
  },
  data() {
    return {
      index: null,
      isActive: false,
      duration: 300,
      isAnimate: false,
      isScroll: true,
    };
  },
  watch: {
    active() {
      if (this.active !== null) {
        this.slideToggle(this.active);
      }
    },
    isActive() {
      this.$emit('isActive');
    },
  },
  computed: {
    listeners() {
      if (this.disabled) {
        return null;
      }
      return this.$listeners;
    },
    visible() {
      if (this.notToggle) {
        return this.isActive;
      }
      return this.index === this.items.active;
    },
    btnId() {
      return `fd_btn_${this.uuid}`;
    },
    panelId() {
      return `fd_panel_${this.uuid}`;
    },
  },
  created() {
    this.index = this.items.count;
    this.items.count = this.index + 1;
    if (this.notToggle && this.firstOpen && this.index === 0) this.isActive = true;
  },
  beforeCreate() {
    this.uuid = uuid.toString();
    uuid += 1;
  },
  mounted() {
    if (this.active) {
      this.isActive = this.active;
    }
  },
  methods: {
    slide(e) {
      if (e) e.preventDefault();
      if (this.isAnimate) return;
      this.isAnimate = true;
      this.isScroll = true;
      this.$emit('update:active', null);
      if (this.notToggle) {
        this.isActive = !this.isActive;
      } else if (this.visible) {
        this.items.active = null;
      } else {
        this.items.active = this.index;
      }
      setTimeout(() => {
        this.isAnimate = false;
      }, this.duration + 50);

      // if (this.isActive && (this.$el.querySelector('.ui-swiper-wrap') !== null)) {
      if (this.$el.querySelector('.ui-swiper-wrap') !== null) {
        uiEventBus.$emit('kbSwiperUpdate', 'update');
      }
    },
    slideToggle(val) {
      if (this.isAnimate) return;
      this.isAnimate = true;
      this.isScroll = false;
      if (val) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
      setTimeout(() => {
        this.isAnimate = false;
      }, this.duration + 50);

      if (this.isActive && (this.$el.querySelector('.ui-swiper-wrap') !== null)) {
        uiEventBus.$emit('kbSwiperUpdate', 'update');
      }
    },
  },

};
</script>

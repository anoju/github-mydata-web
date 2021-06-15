<template>
  <transition-group
    :tag="tag"
    :name="name"
    @beforeLeave="beforeLeave"
    @enter="enter"
    @afterEnter="afterEnter"
    :duration="duration"
    class="transition_wrap"
  >
    <slot/>
  </transition-group>
</template>

<script>
export default {
  name: 'kbTransitionGroup',
  data() {
    return {
      prevHeight: 0,
      nextHeight: 0,
      transitionName: null,
      pageTimer: '',
    };
  },
  props: {
    name: { type: String, default: 'fade' }, // fade, slide, zoom, page
    tag: { type: String, default: 'div' },
    duration: { type: [Number, Object], default: 300 },
  },
  created() {
    // this.createdEvt();
  },
  methods: {
    // createdEvt() {
    //   const transitionName = this.name;
    //   this.transitionName = transitionName;
    // },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      this.nextHeight = getComputedStyle(element).height;
      const maxHeight = (parseInt(this.prevHeight, 10) <= parseInt(this.nextHeight, 10)) ? this.nextHeight : this.prevHeight;
      this.$el.style.height = maxHeight;
    },
    afterEnter() {
      this.$el.style.height = null;
    },
  },
};
</script>

<style lang="scss">

</style>

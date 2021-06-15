<template>
  <transition
    :name="transitionName"
    :mode="transitionMode"
    :enter-active-class="transitionEnterActiveClass"
    @beforeLeave="beforeLeave"
    @enter="enter"
    @afterEnter="afterEnter"
  >
    <slot/>
  </transition>
</template>

<script>
export default {
  name: 'kbTransitionPage',
  data() {
    return {
      prevHeight: 0,
      nextHeight: 0,
      transitionName: null,
      transitionMode: null,
      transitionEnterActiveClass: '',
      pageTimer: '',
    };
  },
  watch: {
    $route(to, from) {
      if (this.name === 'page') {
        if (to.meta.page !== undefined && from.meta.page !== undefined) {
          this.transitionName = to.meta.page < from.meta.page ? 'prev' : 'next';
        } else {
          // this.transitionName = to.path.split('/')[3] < from.path.split('/')[3] ? 'prev' : 'next';
          this.transitionName = 'fade';
          this.transitionMode = 'out-in';
          this.transitionEnterActiveClass = `${this.transitionName}-enter-active`;
        }
      }
    },
  },
  props: {
    name: { type: String, default: 'fade' }, // fade, slide, zoom, page
    mode: { type: String, default: 'out-in' },
  },
  created() {
    if (this.name !== 'page') {
      this.$router.beforeEach((to, from, next) => {
        let transitionName = to.meta.transitionName || from.meta.transitionName || this.name;

        if (transitionName === 'slide') {
          const toDepth = to.path.split('/').length;
          const fromDepth = from.path.split('/').length;
          transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        }

        this.transitionMode = this.mode;
        this.transitionEnterActiveClass = `${transitionName}-enter-active`;

        if (to.meta.transitionName === 'zoom') {
          this.transitionMode = 'in-out';
          this.transitionEnterActiveClass = 'zoom-enter-active';
          // document.body.style.overflow = 'hidden';
        }

        if (from.meta.transitionName === 'zoom') {
          this.transitionMode = null;
          this.transitionEnterActiveClass = null;
          document.body.style.overflow = null;
        }

        this.transitionName = transitionName;

        next();
      });
    }
  },
  methods: {
    beforeLeave(element) {
      if (this.name === 'page' || this.name === 'slide') {
        const parent = element.parentNode;
        parent.classList.add('transition_wrap');
      }
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      this.nextHeight = getComputedStyle(element).height;
      const maxHeight = (parseInt(this.prevHeight, 10) <= parseInt(this.nextHeight, 10)) ? this.nextHeight : this.prevHeight;
      if (this.name === 'page') {
        const parent = element.parentNode;
        parent.style.height = maxHeight;
      } else {
        element.style.height = this.prevHeight;

        setTimeout(() => {
          element.style.height = this.nextHeight;
        });
      }
    },
    afterEnter(element) {
      if (this.name === 'page' || this.name === 'slide') {
        const parent = element.parentNode;
        if (this.name === 'page') {
          /*
          parent.style.height = this.nextHeight;
          clearTimeout(this.pageTimer);
          this.pageTimer = setTimeout(() => {
            parent.classList.remove('transition_wrap');
            parent.style.height = null;
          }, 310);
          */
          parent.classList.remove('transition_wrap');
          parent.style.height = null;
        } else {
          parent.classList.remove('transition_wrap');
        }
      }
      if (this.name !== 'page') {
        element.style.height = null;
      }
    },
  },
};
</script>

<style lang="scss">

</style>

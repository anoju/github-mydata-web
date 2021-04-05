<template>
  <div class="tbl_scroll">
    <div
      class="tbl_scroll_in"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'kbTableScroll',
  mounted() {
    const scrollTarget = this.$el.querySelector('.tbl_scroll_in');
    this.tableScroll();
    scrollTarget.addEventListener('scroll', this.tableScroll);
    scrollTarget.addEventListener('resize', this.tableScroll);
  },
  destroyed() {
    const scrollTarget = this.$el.querySelector('.tbl_scroll_in');
    scrollTarget.removeEventListener('scroll', this.tableScroll);
    scrollTarget.removeEventListener('resize', this.tableScroll);
  },
  methods: {
    tableScroll() {
      const scrollTarget = this.$el.querySelector('.tbl_scroll_in');
      const scrollWidth = scrollTarget.offsetWidth;
      const { scrollLeft } = scrollTarget;
      const tableCont = scrollTarget.querySelector('.table');
      const tableWiodth = tableCont.offsetWidth;

      if (scrollLeft === 0) {
        this.$el.classList.add('first');
      } else {
        this.$el.classList.remove('first');
      }

      if (scrollWidth + scrollLeft === tableWiodth) {
        this.$el.classList.add('last');
      } else {
        this.$el.classList.remove('last');
      }
      // const width = scrollTarget.outerWidth();
    },
  },
};
</script>

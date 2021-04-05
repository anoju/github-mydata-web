<template>
  <kb-page page-title="FORM VALIDATE">
    <kb-page-body>
      <kb-tabs-link
        class="first"
        fixed
      >
        <div
          class="tab"
          role="presentation"
          v-for="item in items" :key="item"
        >
          <router-link :to="`/validate/${item}`">
            <span>{{item}}</span>
          </router-link>
        </div>
      </kb-tabs-link>
    </kb-page-body>
  </kb-page>
</template>

<script>
export default {
  name: 'validate',
  data: () => ({
    tab: null,
    items: {
    },
  }),
  methods: {
    async init() {
      const vm = this;
      // without index.vue, other list info get
      const requires = require.context('@/views/validate/', false, /^((?!index).)*(\.vue$)/);
      // ./viewname.vue => viewname replace
      const ArrayTabNames = requires.keys().map((e) => e.replace(/^\.\/|\.vue$/g, ''));
      // formSubmission => 0 index and ascending order
      const comp = (a, b) => {
        if (a === 'formSubmission') return -1;
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
      };
      ArrayTabNames.sort(comp);
      vm.items = ArrayTabNames;
    },
    immerTest() {
      const oriObj = {
        name: 'apple',
        type: 'food',
      };
      const copyObj = this.$produce(oriObj, (draft) => {
        draft.amount = 10;
        draft.name = 'banana';
      });
      const oriArray = [1, 2, 3, 4, 5];
      const copyArray = this.$produce(oriArray, (draft) => {
        draft.push(8);
        draft.unshift(100);
      });
      console.log(56, oriObj, copyObj, oriArray, copyArray);
    },
  },
  async mounted() {
    const vm = this;
    await vm.init();
    vm.immerTest();
  },
  created() {
  },
};
</script>

<style>
</style>

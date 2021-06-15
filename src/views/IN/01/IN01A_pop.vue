<template>
  <kb-pop
    full
    :title="titleTxt"
  >
    <template slot="title_prev">
      <kb-button not class="tit_prev" @click="prevStep" aria-label="이전">이전</kb-button>
    </template>
    <template slot="title_next">
      <kb-button not class="tit_next" @click="nextStep" aria-label="다음">다음</kb-button>
    </template>
    <kb-pop-body>
      <IN01A00602 v-if="titleTxt === '주식손익'" />
      <IN01A00603 v-if="titleTxt === '펀드손익'" />
      <IN01A00604 v-if="titleTxt === 'Wrap손익'" />
      <IN01A006 v-if="titleTxt === '입출금내역'" :selVal="selVal" />
    </kb-pop-body>
  </kb-pop>
</template>
<script>
import IN01A006 from '@/views/IN/01/IN01A006.vue';
import IN01A00602 from '@/views/IN/01/IN01A006_2.vue';
import IN01A00603 from '@/views/IN/01/IN01A006_3.vue';
import IN01A00604 from '@/views/IN/01/IN01A006_4.vue';

export default {
  name: 'TO02E_pop',
  components: {
    IN01A006,
    IN01A00602,
    IN01A00603,
    IN01A00604,
  },
  data() {
    return {
      tabIdx: 0,
      total: 0,
      titleTxt: '',
    };
  },
  props: {
    index: { type: Number, default: 0 },
    selVal: { type: [String, Number], default: null },
    views: { type: Array, default: null },
  },
  watch: {
    tabIdx() {
      this.titleTxt = this.views[this.tabIdx];
    },
  },
  beforeMount() {
    this.tabIdx = this.index;
    this.total = this.views.length;
    this.titleTxt = this.views[this.tabIdx];
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
    prevStep() {
      if (this.tabIdx === 0) {
        this.tabIdx = this.total - 1;
      } else {
        this.tabIdx -= 1;
      }
    },
    nextStep() {
      if (this.tabIdx === (this.total - 1)) {
        this.tabIdx = 0;
      } else {
        this.tabIdx += 1;
      }
    },
  },
};
</script>

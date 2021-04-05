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
      <TO02E002 v-if="titleTxt === '주식손익' || titleTxt === '주식 손익'" />
      <TO02E003 v-if="titleTxt === '펀드손익' || titleTxt === '펀드 손익'" />
      <TO02E005 v-if="titleTxt === 'Wrap손익' || titleTxt === 'Wrap 손익'" />
      <TO02E004 v-if="titleTxt === '입출금내역' || titleTxt === '입출금 내역'" :selVal="selVal" />
    </kb-pop-body>
  </kb-pop>
</template>
<script>
import TO02E002 from '@/views/TO/02/TO02E002.vue';
import TO02E003 from '@/views/TO/02/TO02E003.vue';
import TO02E004 from '@/views/TO/02/TO02E004.vue';
import TO02E005 from '@/views/TO/02/TO02E005.vue';

export default {
  name: 'TO02E_pop',
  components: {
    TO02E002,
    TO02E003,
    TO02E004,
    TO02E005,
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

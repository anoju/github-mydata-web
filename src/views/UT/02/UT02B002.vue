<template>
  <kb-pop
    full
    title="약관동의"
  >
    <kb-pop-body>
      <div class="section">
        <div v-if="index === 0">
          <h1>약관1</h1>
          내용1 <br>
          내용1 <br>
          내용1
        </div>
        <div v-if="index === 1">
          <h1>약관2</h1>
          내용2 <br>
          내용2 <br>
          내용2
        </div>
        <div v-if="index === 2">
          <h1>약관3</h1>
          내용3 <br>
          내용3 <br>
          내용3
        </div>
        <div v-if="index === 3">
          <h1>약관4</h1>
          내용4 <br>
          내용4 <br>
          내용4
        </div>
        <div v-if="index === 4">
          <h1>약관5</h1>
          내용5 <br>
          내용5 <br>
          내용5
        </div>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button
        line
        @click="nextStep"
      >
        {{btnTxt}}({{index+1}}/{{total}})
      </kb-button>
      <kb-button
        yellow
        @click="allAgree"
      >
        전체동의
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'UT02B002',
  data() {
    return {
      index: 0,
      total: 5,
      btnTxt: '다음',
    };
  },
  props: {
    step: { type: Number, default: null },
  },
  mounted() {
    this.index = this.step;
    if (this.index === (this.total - 2)) this.btnTxt = '확인';
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
    nextStep() {
      if (this.index === (this.total - 2)) this.btnTxt = '확인';
      if (this.index === (this.total - 1)) {
        // this.index = 0;
        this.$emit('close');
      } else {
        this.index += 1;
      }
    },
    allAgree() {
      this.$emit('close', { payload: true });
    },
  },
};
</script>

<template>
  <kb-pop
    full
    title="마이데이터 연동결과"
  >
    <kb-pop-body>
      <div class="section">
        <div class="result_wrap">
          <h2><i class="ico_big_warning"></i>KB증권 <br />계좌 및 정보연동에 <br />실패하였습니다.</h2>
          <div class="mg_t30">
            <dl class="result_list">
              <dt>계좌번호</dt>
              <dd>KB증권 13923483948</dd>
              <dt>처리결과</dt>
              <dd>
                <span class="fc_red">등록실패</span>
              </dd>
              <dt>계좌번호</dt>
              <dd>오류원인은 무었일까 오류원인은 무었일까 오류원인은 무었일까 오류원인은 무었일까 </dd>
            </dl>
          </div>
        </div>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button
        yellow
        @click="popClose"
      >
        확인
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'UT14C021',
  data() {
    return {
    };
  },
  props: {
  },
  mounted() {
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

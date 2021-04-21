<template>
  <kb-pop
    full
    title="월 관리 등록하기"
  >
    <kb-pop-body>
      <div class="section">
        <div class="info_txt_box type2 mg_t12">
          <ul class="list">
            <li>
              <div class="th">카테고리</div>
              <div class="td"><strong>기타</strong></div>
            </li>
            <li>
              <div class="th">계좌정보</div>
              <div class="td">
                <div><strong>국민은행 KB마이핏통장</strong></div>
                <div><strong>275-123456-21</strong></div>
              </div>
            </li>
            <li>
              <div class="th">출금처</div>
              <div class="td"><strong>KB국민은행 김스타</strong></div>
            </li>
            <li>
              <div class="th">금액</div>
              <div class="td"><strong>912,000원</strong></div>
            </li>
          </ul>
        </div>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button
        line
        @click="popClose"
      >
        취소
      </kb-button>
      <kb-button
        yellow
        @click="popClose"
      >
        등록
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'TO02C008',
  props: {
  },
  data() {
    return {
    };
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

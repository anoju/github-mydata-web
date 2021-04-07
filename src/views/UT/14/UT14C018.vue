<template>
  <kb-pop
    full
    title="전송요청 정보"
  >
    <kb-pop-body>
      <div class="section">
        <div class="info_pop_text">
          <p class="text">
            KB증권 전송요청 상세내역입니다. <br />
            연동 완료 후에도 연동 정보를 변경할 수 있습니다.
          </p>

          <h2>계좌정보</h2>
          <dl>
            <dt>기본정보</dt>
            <dd>
              <ul class="dot_list">
                <li>계좌번호</li>
                <li>계좌명</li>
                <li>계좌종류</li>
                <li>계좌상태</li>
                <li>계좌개설일</li>
                <li>예수금</li>
                <li>신용융자</li>
                <li>대출금</li>
                <li>통화코드</li>
                <li class="full">세제혜택적용여부</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>거래내역</dt>
            <dd>
              <ul class="dot_list">
                <li>종목명(상품명)</li>
                <li class="full">종목코드(상품코드)</li>
                <li>거래일자</li>
                <li>거래종류</li>
                <li>거래수량</li>
                <li>거래금액</li>
                <li>정산금액</li>
                <li>거래후잔액</li>
                <li>통화코드</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>상품종류</dt>
            <dd>
              <ul class="dot_list">
                <li>상품종류</li>
                <li class="full">상품코드(종목코드)</li>
                <li>상품명</li>
                <li>매입금액</li>
                <li>보유수량</li>
                <li>매도가능수량</li>
                <li>평가금액</li>
                <li>가입일자</li>
                <li>납부총액</li>
                <li>기출금액</li>
                <li>최종납입일</li>
                <li>연금기수령액</li>
                <li>통화코드</li>
              </ul>
            </dd>
          </dl>
          <hr aria-hidden="true" class="hr_line">

          <h2>개인형 IRP정보</h2>
          <dl>
            <dt>상품종류</dt>
            <dd>
              <ul class="dot_list">
                <li>적립금액</li>
                <li>계좌평가금액</li>
                <li>사용자부담금</li>
                <li>가입자부담금</li>
                <li>개설일</li>
                <li>최초입금일</li>
                <li>상품유형</li>
                <li class="full">개별운용상품명</li>
                <li>평가금액</li>
                <li>투자원금</li>
                <li>보유좌수</li>
                <li>신규일</li>
                <li>만기일</li>
                <li>약정이자율</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>거래내역</dt>
            <dd>
              <ul class="dot_list">
                <li>거래일시</li>
                <li>거래구분</li>
                <li>거래금액</li>
              </ul>
            </dd>
          </dl>
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
  name: 'UT14C018',
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

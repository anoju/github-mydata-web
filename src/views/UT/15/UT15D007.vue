<template>
  <kb-page noHeader>
    <kb-page-body>
      <div class="util_wrap result">
        <div class="result_wrap">

          <h2><i class="ico_check"></i>거래신청 결과입니다.</h2>
          <p class="sub_text">구매 4주 / 실패 6주</p>
          <!-- 성공 -->
          <div class="bg_txt_box bg_gray2 mg_t12">
            주문 하신금액으로 판매를 완료하였습니다.
          </div>
          <!-- //성공 -->
          <!-- 일부성공 -->
          <div class="bg_txt_box bg_gray2 mg_t12">
            주문하신 금액으로 구매하려는 수량이 부족하여 일부만 체결되었습니다. 추가 판매를 원하시면 가격 변경 후 다시 주문해주세요.
          </div>
          <!-- //일부성공 -->
          <dl class="result_list type3 mg_t0 bt_none pd_t14">
            <dt>종목</dt>
            <dd>
              <kb-button link class="fc_222">
                12324 삼성전자<i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
            </dd>
            <dt>주문 수량</dt>
            <dd>10주</dd>
            <dt>1주 주문 금액</dt>
            <dd>100,000원</dd>
            <dt>총 주문 금액</dt>
            <dd>1,000,000원</dd>
          </dl>
          <dl class="result_list">
            <dt>체결 수량</dt>
            <dd class="fw_bold fc_222">4주</dd>
            <dt>총 체결 금액</dt>
            <dd class="fw_bold fc_222">400,000원</dd>
          </dl>
        </div>
      </div>

      <kb-foldings
        not
        class="accordion_dl section"
      >
        <kb-folding class="pd_b25" title="유의사항">
          <ul class="txt_list">
            <li class="dot">거래 신청 즉시 결과를 확인 할 수 있습니다.
              <ul>
                <li class="dash type2">
                  <span>구매 : </span>
                  입력한 가격 또는 입력한 가격 미만의 가격에 체결 가능한 수량만큼 즉시 체결
                </li>
                <li class="dash type2">
                  <span>판매 : </span>
                  입력한 가격 또는 입력한 가격 초과의 가격에 체결 가능한 수량만큼 즉시체결
                </li>
              </ul>
            </li>
            <li class="dot">체결되지 못한 나머지 수량은 즉시 취소됩니다.
              <p class="mg_t4 fc_gray">예) 시장가 10,000원에 10주를 신청했을 때 체결 가능 수량이 5개라면 <strong>5주만 매수되고 나머지 수량은 취소</strong>됩니다.</p>
            </li>
            <li class="dot">1주 가격은 상품을 조회한 시점으로 보여집니다.</li>
            <li class="dot">거래 가능 시간은 평일 09:00 ~ 15:30 입니다.<br>(토/공휴일 제외)</li>
          </ul>
        </kb-folding>
      </kb-foldings>

      <kb-button-wrap bottom-fixed>
        <kb-button
          yellow
        >
          확인
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT15D001',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

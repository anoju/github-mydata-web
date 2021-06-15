<template>
  <div class="section">
    <h2 class="mg_t32 fz_18 fw_bold">투자상품 안내</h2>
    <h3 class="mg_t16 fz_16 fw_bold">RP형</h3>
    <p class="mg_t8 fz_14">당사가 보유한 채권을 일정기간 후에 일정한 가격으로 재매수하는 조건으로 매수시점의 약정한 약정수익률을 지급하는 금융상품. A등급 이상의 우량한 채권으로 운용하여 안정성이 높음.</p>
    <div class="txt_list">
      <ul>
        <li class="dot mg_t8">약정수익률 지급(31일 단위 자동 재투자)</li>
        <li class="dot mg_t8">우량채권 담보로 당사의 원리금 보장</li>
        <li class="dot mg_t8">시중금리의 급격한 상승 시 유리</li>
      </ul>
    </div>

    <h3 class="mg_t20 fz_16 fw_bold">
      RP형
      <span class="fz_12 fc_blue">비대면 개설 가능</span>
    </h3>
    <p class="mg_t8 fz_14">
      고객을 수취인으로하여, 당사가 직접 발행하고 당사가 원금과 이자를 지급하는 어음으로 운용하는 상품. 당사가 발행한 약속어음을 편입하는 상품.
    </p>
    <div class="txt_list">
      <ul>
        <li class="dot mg_t8">약정수익률 지급(일 단위 자동 재투자)</li>
        <li class="dot mg_t8">당사 신용등급 수준의 단기 유동성 투자 자산</li>
      </ul>
    </div>

    <h3 class="mg_t20 fz_16 fw_bold">MMW형</h3>
    <p class="mg_t8 fz_14">일임형 랩계약을 통해 고객 자산의 운용을 위임받아 운용하는 상품. 한국증권금융(신용등급 AAA)예치</p>
    <div class="txt_list">
      <ul>
        <li class="dot mg_t8">일일 정산으로 일복리 투자 효과</li>
      </ul>
    </div>

    <h3 class="mg_t20 fz_16 fw_bold">MMF형</h3>
    <p class="mg_t8 fz_14">안정성이 높은 단기금융투자상품인 MMF에 투자 운용 하는 상품. 국공채, CD, CP, 콜론 등 수익률이 높은 단기금융 상품에 투자하는 펀드</p>
    <p class="pd_x20 mg_t12 fz_14 fc_666">
      개인용 : KB개인용 MMFP-1호C<br />
      법인용 : KB법인용 MMFI-2호(국공채)C
    </p>
    <div class="txt_list">
      <ul>
        <li class="dot mg_t8">실적배당 상품</li>
        <li class="dot mg_t8">기존 MMF보다 편리한 거래</li>
        <li class="dot mg_t8">금리가 완만하게 상승할 경우 유리</li>
      </ul>
    </div>

    <h2 class="mg_t40 fz_18 fw_bold">투자상품 안내</h2>
    <div class="flex_wrap mg_t16 align_center">
      <h3 class="fz_16 fw_bold">개인</h3>
      <p class="mg_la fz_12 fc_666">기준일 : 2020/02/12. 세전</p>
    </div>

    <kb-table
      caption="투자상품 안내 - 개인"
      :col-width="['80px','80px','auto']"
    >
      <thead>
        <tr>
          <th scope="col">투자상품</th>
          <th scope="col">수익률</th>
          <th scope="col">비고</th>
        </tr>
      </thead>
      <tbody>
        <tr class="t_center">
          <td class="fw_bold">RP</td>
          <td>연 0.25%</td>
          <td>31일 단위 재투자</td>
        </tr>
        <tr class="t_center">
          <td class="fw_bold">발행어음</td>
          <td>연 0.40%</td>
          <td>1일 단위 재투자(일복리)</td>
        </tr>
        <tr class="t_center">
          <td class="fw_bold">MMW</td>
          <td>실적배당</td>
          <td>일복리 계산</td>
        </tr>
        <tr class="t_center">
          <td class="fw_bold">MMF</td>
          <td>실적배당</td>
          <td>운용성과에 따른 수익률</td>
        </tr>
      </tbody>
    </kb-table>

    <div class="flex_wrap mg_t20 align_center">
      <h3 class="fz_16 fw_bold">법인</h3>
      <p class="mg_la fz_12 fc_666">기준일 : 2020/02/12. 세전</p>
    </div>

    <kb-table
      caption="투자상품 안내 - 법인"
      :col-width="['80px','80px','auto']"
    >
      <thead>
        <tr>
          <th scope="col">투자상품</th>
          <th scope="col">수익률</th>
          <th scope="col">비고</th>
        </tr>
      </thead>
      <tbody>
        <tr class="t_center">
          <td class="fw_bold">RP</td>
          <td>연 0.25%</td>
          <td>31일 단위 재투자</td>
        </tr>
        <tr class="t_center">
          <td class="fw_bold">발행어음</td>
          <td>연 0.40%</td>
          <td>1일 단위 재투자(일복리)</td>
        </tr>
        <tr class="t_center">
          <td class="fw_bold">MMW</td>
          <td>실적배당</td>
          <td>일복리 계산</td>
        </tr>
        <tr class="t_center">
          <td class="fw_bold">MMF</td>
          <td>실적배당</td>
          <td>운용성과에 따른 수익률</td>
        </tr>
      </tbody>
    </kb-table>

    <kb-button-wrap class="mg_t24">
      <kb-button
        yellow
      >
        CMA 계좌 개설하기
      </kb-button>
    </kb-button-wrap>
  </div>
</template>
<script>
export default {
  name: 'IN02A012',
  data() {
    return {
    };
  },
};
</script>

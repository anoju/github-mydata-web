<template>
  <div class="section">

    <kb-title-bar class="pd_t24">
      <template slot="left">
        <h2 class="tit">기관명의 정보 보유기간(2022/01/11)까지 기존에 보관된 정보로 서비스 이용이 가능합니다.</h2>
        <!-- <h2 class="tit">첫전째 선택된 기관명 외10개 기관의 정보 보유기간까지 기존에 보관된 정보로 서비스 이요이 가능합니다.</h2> -->
      </template>
    </kb-title-bar>
    <div class="txt_list mg_t16">
      <ul>
        <li class="dot">
          연동을 해지 하실 경우 아래와 같은 일부 서비스 제공이 어려울 수 있습니다.
          <ul>
            <li class="dash">총자산 및 월 자산관리</li>
            <li class="dash">투자 통합자산</li>
            <li class="dash">포트폴리오 진단</li>
            <li class="dash">인퇴 진단 및 제안</li>
            <li class="dash">투자습관 진단</li>
            <li class="dash">추천 테마</li>
            <li class="dash">금융생활 서비스</li>
            <li class="dash">상품매매(KB증권 연동해지)</li>
          </ul>

        </li>
        <li class="dot mg_t16">서비스 이용에 문의 또는 불편사항은 고객센터 상담을 이용해 주세요.</li>
        <li class="dot mg_t16">추후 재연동 시 재연동 시점부터의 정보만 연동 가능합니다. <br>(연동해지 후의 정보는 받아올 수 없습니다.)</li>
      </ul>
    </div>

    <kb-button-wrap bottom-fixed>
      <kb-button
        line
      >
        이전
      </kb-button>
      <kb-button
        yellow
      >
        연동해지
      </kb-button>
    </kb-button-wrap>
  </div>
</template>
<script>
export default {
  name: 'MY10D005',
  data() {
    return {
      chkVal1: false,
    };
  },
  methods: {
  },
};
</script>

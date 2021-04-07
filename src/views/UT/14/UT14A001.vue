<template>
  <kb-page page-title="마이데이터 연동">
    <kb-page-body>
      <div class="section mg_bm35">
        <div class="section full_height_wrap add_dl">
          <kb-title-bar h1 class="pd_t40" title="한 번 클릭으로<br>빠르고 정확한<br>자산관리를 받으세요." />
          <div class="title_bar_sub">계좌, 카드, 세금, 보험 등 자산을<br>한번에 관리 받으세요.</div>
          <kb-title-bar h3 class="mg_t60" title="연동방법 선택">
            <template slot="left">
              <kb-button
                not
                class="tooltip_btn mg_l4"
                v-tooltip="'views/UT/14/UT14A001_tip.vue'"
                aria-label="팝업으로 상세내용 확인"
              >팝업으로 상세내용 확인</kb-button>
            </template>
          </kb-title-bar>

          <ul class="ico_button_list ty2">
            <li>
              <kb-button not class="ico_button ty2"><i class="bt_ic_40 ic1" aria-hidden="true" /><span>한번에 연동</span></kb-button>
            </li>
            <li>
              <kb-button not class="ico_button ty2"><i class="bt_ic_40 ic1" aria-hidden="true" /><span>하나씩 연동</span></kb-button>
            </li>
          </ul>
        </div>
        <kb-foldings
          not
          class="accordion_dl mg_b25"
        >
          <kb-folding>
            <template slot="title">
              이용안내
            </template>
            <ul class="txt_list">
              <li class="dot">자산연동시 '정보전송주기'를 정기적 전송으로 요청하시면 KB증권에서 제공하는 자산관리, 포트폴리오 진단, 투자습관 진단 등의 프리미엄 서비스를 받으실 수 있습니다.</li>
            </ul>
          </kb-folding>
        </kb-foldings>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT14A001',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

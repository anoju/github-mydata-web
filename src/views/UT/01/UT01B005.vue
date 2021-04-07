<template>
  <kb-page page-title="휴면해제">
    <kb-page-body>
      <div class="section mg_bm35">
        <div class="section full_height_wrap add_dl">
          <kb-title-bar h1 class="pd_t40" title="본인확인 후 정상<br>서비스 이용이 가능합니다." />
          <div class="title_bar_sub">최근 1년 이상 서비스를 이용하지 않아 <br>휴면회원으로 전환되었습니다.</div>
          <ul class="ico_button_list">
            <li>
              <kb-button not class="ico_button"><i class="bt_ic_60 ic1" aria-hidden="true" /><span>휴대폰 본인확인</span></kb-button>
            </li>
            <li>
              <kb-button not class="ico_button"><i class="bt_ic_60 ic2" aria-hidden="true" /><span>공동인증서</span></kb-button>
            </li>
            <li>
              <kb-button not class="ico_button"><i class="bt_ic_60 ic3" aria-hidden="true" /><span>카카오페이 인증서</span></kb-button>
            </li>
            <li>
              <kb-button not class="ico_button"><i class="bt_ic_60 ic4" aria-hidden="true" /><span>KB모바일 인증서</span></kb-button>
            </li>
          </ul>
        </div>
        <kb-foldings
          not
          class="accordion_dl mg_b25"
        >
          <kb-folding>
            <template slot="title">
              관련법령 및 이용안내
            </template>
            <ul class="txt_list">
              <li class="dot">정보통신망 이용촉진 및 정보보호 등에 관한 법률 제29조(개인정보의 파기) 2항 및 등법 시행령 제 16조에 의거하여 최근 1년 이상 서비스 미 이용 회원의 개인정보를 별도 분리·보관하고 있습니다.</li>
              <li class="dot">공동인증서를 통해 본인확인을 하신 경우에는 인증서가 바로 등록됩니다.</li>
              <li class="dot">KB증권에 등록된 공동인증서가 있으신 경우에는 해당 인증서로 본인확인을 해주세요.</li>
              <li class="dot">카카오페이 인증서는 카카오톡(카카오페이)의 인증서를 이용하여 본인확인하는 방법이며, 인증서가 없으신 경우에는 카카오페이 인증서 신규발급 후 바로 이용이 가능합니다.</li>
              <li class="dot">KB모바일 인증서는 KB국민은행의 KB스타뱅킹앱과 연계하여 쉽고 안전하게 금융서비스를 지원하는 인증방식입니다.</li>
              <li class="dot">KB모바일인증서 발급/재발급 등 인증서 관리는 KB스타뱅킹 앱을 통해서 가능합니다.</li>
            </ul>
          </kb-folding>
        </kb-foldings>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT01B005',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

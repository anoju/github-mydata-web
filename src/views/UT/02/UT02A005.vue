<template>
  <kb-page page-title="본인확인">
    <kb-page-body>
      <div class="section mg_bm35">
        <div class="section full_height_wrap add_dl">
          <kb-title-bar h1 class="pd_t40" title="본인확인 방법을 <br>선택해주세요." />
          <ul class="ico_button_list">
            <li>
              <kb-button not class="ico_button"><i class="bt_ic_60 ic1" aria-hidden="true" /><span>휴대폰 본인확인</span></kb-button>
            </li>
            <li>
              <kb-button not class="ico_button"><i class="bt_ic_60 ic2" aria-hidden="true" /><span>공동인증서</span></kb-button>
            </li>
            <!-- 2021-05-24 기획수정
            <li>
              <kb-button not class="ico_button"><i class="bt_ic_60 ic3" aria-hidden="true" /><span>카카오페이 인증서</span></kb-button>
            </li>
            <li>
              <kb-button not class="ico_button"><i class="bt_ic_60 ic4" aria-hidden="true" /><span>KB모바일 인증서</span></kb-button>
            </li>
            -->
          </ul>
        </div>
        <kb-foldings
          not
          class="accordion_dl mg_b25"
        >
          <kb-folding title="이용안내">
            <ul class="txt_list">
              <!-- 2021-05-24 기획수정 -->
              <!-- <li class="dot">공동인증서를 통해 본인확인을 하신 경우에는 인증서가 바로 등록됩니다.</li> -->
              <li class="dot">KB증권에 등록된 공동인증서가 있으신 경우에는 해당 인증서로 본인확인을 해 주세요.</li>
              <!-- <li class="dot">카카오페이 인증서는 카카오톡(카카오페이)의 인증서를 이용하여 본인확인하는 방법이며, 인증서가 없으신 경우에는 카카오페이 인증서 신규발급 후 바로 이용이 가능합니다.</li>
              <li class="dot">KB모바일 인증서는 KB국민은행의 KB스타뱅킹앱과 연계하여 쉽고 안전하게 금융서비스를 지원하는 인증방식입니다.</li>
              <li class="dot">KB모바일 인증서 발급/재발급 등 인증서 관리는 KB스타뱅킹 앱을 통해서 가능합니다.</li> -->
            </ul>
          </kb-folding>
        </kb-foldings>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT02A005',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

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
              <li class="dot">정보통신망 이용촉진 및 정보보호 등에 관한 법률 <br>제29조(개인정보의 파기) 2항 및 등법 시행령 제 16조에 의거하여 최근 1년</li>
              <li class="dot">추후 텍스트 추가. 추후 텍스트 추가. 추후 텍스트 추가. 추후 텍스트 추가. 추후 텍스트 추가. </li>
              <li class="dot">추후 텍스트 추가. 추후 텍스트 추가. 추후 텍스트 추가. 추후 텍스트 추가. 추후 텍스트 추가. </li>
              <li class="dot">추후 텍스트 추가. 추후 텍스트 추가. 추후 텍스트 추가. 추후 텍스트 추가. 추후 텍스트 추가. </li>
              <li class="dot">추후 텍스트 추가. 추후 텍스트 추가. 추후 텍스트 추가. 추후 텍스트 추가. 추후 텍스트 추가. </li>
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

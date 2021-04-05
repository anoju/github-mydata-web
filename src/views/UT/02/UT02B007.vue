<template>
  <kb-page page-title="간편인증등록">
    <kb-page-body>
      <div class="section mg_bm35">
        <div class="section full_height_wrap add_dl">
          <kb-title-bar h1 class="pd_t40" title="로그인, 본인인증을 위해 <br>사용할 다른 인증수단을 <br>선택해주세요." />
          <ul class="ico_button_list">
            <li>
              <kb-button not class="ico_button"><i class="bt_ic_60 ic5" aria-hidden="true" /><span>간편인증 비밀번호</span></kb-button>
            </li>
            <li>
              <kb-button not class="ico_button"><i class="bt_ic_60 ic3" aria-hidden="true" /><span>카카오페이 인증서</span></kb-button>
            </li>
            <li>
              <kb-button not class="ico_button"><i class="bt_ic_60 ic6" aria-hidden="true" /><span>지문 인증</span></kb-button>
            </li>
            <li>
              <kb-button not class="ico_button"><i class="bt_ic_60 ic7" aria-hidden="true" /><span>안면 인증</span></kb-button>
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
              <li class="dot">간편인증 방법은 1개 이상 등록해야 합니다.</li>
              <li class="dot">지문인증, 안명인증은 스마트폰에 등록된 정보를 사용하여 인증하므로, 스마트폰에 지문정보, 얼굴정보가 등록되어 있는지 확인해 주세요.</li>
            </ul>
          </kb-folding>
        </kb-foldings>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT02B007',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

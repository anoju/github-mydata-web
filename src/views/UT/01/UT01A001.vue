<template>
  <kb-page page-title="본인확인">
    <kb-page-body>
      <div class="section mg_bm35">
        <div class="section full_height_wrap add_dl">
          <kb-title-bar h1 class="pd_t40" title="안녕하세요 고객님.<br>오늘도 좋은 하루 보내세요." />
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
              <li class="dot">로그인 방법은 1개 이상 등록해야 합니다.</li>
              <li class="dot">등록하지 않은 로그인 방법을 선택하신 경우에는 바로 등록이 진행됩니다.</li>
            </ul>
          </kb-folding>
        </kb-foldings>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT01A001',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

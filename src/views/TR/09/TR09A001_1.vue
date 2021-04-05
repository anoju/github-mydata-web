<template>
  <kb-page page-title="2채널 인증">
    <kb-page-body>
      <div class="section">
        <div class="util_wrap fixed_btn">
          <div class="top_box mg_t0">
            <div class="contact_choice">
              <p class="text">연락처를 선택해 주세요</p>
              <kb-radio
                v-model="radioVal1"
                value="1"
              >
                <span>휴대폰</span>010-12**-12**
              </kb-radio>
              <kb-radio
                v-model="radioVal1"
                value="2"
              >
                <span>자택</span>010-12**-12**
              </kb-radio>
              <kb-radio
                v-model="radioVal1"
                value="3"
                disabled
              >
                <span>직장</span>
              </kb-radio>
            </div>
          </div>
          <div class="text_box"></div>
          <div class="footer_box mg_b7">
            <ul class="txt_list fc_222">
              <li class="dot t_left">선택하신 연락처로 연락이 갑니다. ARS 통신비용은 KB증권에서 부담합니다.</li>
            </ul>
          </div>
        </div>
      </div>
      <kb-button-wrap bottom-fixed>
        <div class="flex">
          <kb-button
            yellow
          >
            다음
          </kb-button>
        </div>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TR09A001_1',
  data() {
    return {
      radioVal1: '1',
    };
  },
  methods: {
  },
};
</script>

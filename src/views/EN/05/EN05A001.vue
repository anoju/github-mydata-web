<template>
  <kb-page page-title="공동인증서 가져오기">
    <kb-page-body>
      <div class="section">
        <div class="mg_t40 t_center">
          <kb-title-bar
            h1
            center
            class="tit_h3"
            title="공동인증서 가져오기를 시작합니다."
          />
          <p class="mg_t4 fz_14">KB증권에 등록된 증권용 인증서를 준비해주세요.</p>
          <div class="ready_box mg_t32">
            <div>
              <i class="ico1">PC/스마트폰 아이콘</i>
              <p>PC/스마트폰</p>
            </div>
            <i class="ico_arrow"></i>
            <div>
              <i class="ico2">스마트폰 아이콘</i>
              <p>스마트폰</p>
            </div>
          </div>
          <p class="mg_t60">아래의 인증번호를 다른기기에 입력하세요.</p>
          <p class="fz_28 fw_bold mg_t16">1234-5678-9101</p>
          <kb-button
            yellow
            class="mg_t40 w_200"
          >
            인증서 가져오기
          </kb-button>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'EN05A001',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

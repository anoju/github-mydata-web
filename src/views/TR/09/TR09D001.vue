<template>
  <kb-page page-title="해외출국확인">
    <kb-page-body>
      <div class="section">
        <div class="util_wrap fixed_btn">
          <div class="top_box mg_t0">
            <div class="contact_choice">
              <kb-checkbox v-model="chkVal">
                해외출국인증 정보확인 동의
              </kb-checkbox>
            </div>
          </div>
          <div class="text_box"></div>
          <div class="footer_box mg_b7">
            <ul class="txt_list fc_222">
              <li class="dot t_left">
                선택하신 연락처로 연락이 갑니다. ARS 통신비용은 KB증권에서 부담합니다. <br />
                고객님께서는 동의를 거부하실 수 있으며, 동의를 거부할 경우 서비스 이용에 제한이 있을 수 있습니다.
              </li>
              <li class="dot t_left">고객님의 출국정보는 별도의 추가 본인인증 절차를 생략하기 위한 목적에 한하여 사용되며, 전자금융거래 기록의 생성 및 보존을 위해 금융회사에 5년 동안 보관됩니다.</li>
              <li class="dot t_left">해외IP임이 확인된 경우에만 출국정보를 이용하실 수 있으며, 법무부 출입국 사무소 시스템에 장애가 발생하거나 출입국정보 업데이트가 지연될 경우 출국정보 이용이 제한 될 수 있습니다.</li>
              <li class="dot t_left">출입국정보 업데이트 주기 : 출입국 후 퇴소 12시간에서 36 시간</li>
            </ul>
          </div>
        </div>
      </div>
      <kb-button-wrap bottom-fixed>
        <div class="flex">
          <kb-button
            yellow
            :disabled="!chkVal"
            @click="showRule('views/TR/09/TR09B002',$event.target)"
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
  name: 'TR09D001',
  data() {
    return {
      chkVal: false,
    };
  },
  methods: {
    showRule(src, el) {
      this.$modal({
        component: () => import('@/' + src),
        returnFocus: el,
      });
    },
  },
};
</script>

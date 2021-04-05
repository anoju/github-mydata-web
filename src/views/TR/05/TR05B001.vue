<template>
  <kb-pop
    full
    title="전자금융사기 예방서비스 안내"
  >
    <kb-pop-body>
      <div class="section">
        <div class="health_service_info">
          <p class="text mg_t0">2013년 9월 26일부터 ‘전자금융사기 예방서비스’ 전면 시행으로 공인인증서 발급/재발급, 타기관인증서 등록, 당일누적 100만원 이상 자금이체/대체시 단말지정서비스 또는 추가인증 절차가 필요합니다.</p>

          <h2>100만원이상 자금이체시 추가인증 적용업무</h2>
          <ul class="dot_list">
            <li>미약정 이체</li>
          </ul>

          <h2>금액에 상관없이 추가인증 적용업무</h2>
          <ul class="dot_list">
            <li>미약정 이체</li>
            <li>자동이체 신청(KB증권→KB증권, KB증권→타금융사)신청</li>
          </ul>

          <div class="header_box">
            <h2>단말지정서비스</h2>
            <kb-button h28 fc_666 fw_bold line aTag href="#">바로가기</kb-button>
          </div>
          <p class="text">고객이 지정한 단말기에서만 공인인증서(재)발급 및 타기관인증서 등록, 자금이체가능(모바일매체 포함하여 최대 5대까지 가능합니다.)</p>

          <div class="header_box">
            <h2>추가인증서비스</h2>
            <kb-button h28 fc_666 fw_bold line aTag href="#">바로가기</kb-button>
          </div>
          <p class="text">지정되지 않은 단말기에서 공인인증서 발급/재발급, 타기관 인증서 등록, 자금이체업무 처리시 다음 방법 중 한 가지 방법으로 추가인증 절차를 수행해야 합니다.</p>

          <h3>2채널인증</h3>
          <p class="text">내용확인 필요</p>

          <h3>해외출국확인</h3>
          <p class="text">한국국적의 해외체류자 및 해외거주자의 경우 법무부 출입국 관리사무소로부터 출국사실이 확인되면 별도 추가인증절차를 생략하는 방식</p>

          <h3>휴대폰 SMS인증</h3>
          <p class="text">본인명의 휴대폰으로 인증번호를 발송하고, 고객은 수신한 인증번호를 입력하는 방식(본인명의의 휴대폰만 가능)</p>

          <p class="small_text">기타 문의사항은 가까운 지점 또는 고객센터(1588-6611)로 문의해주시기 바랍니다.</p>

        </div>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button
        line
        @click="popClose"
      >
        다시보지않기
      </kb-button>
      <kb-button
        yellow
        @click="popClose"
      >
        확인
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'TR05B001',
  data() {
    return {
    };
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

<template>
  <kb-page page-title="Insight">
    <kb-page-body>
      <div class="section">
        <!-- 데이터가 없을때 -->
        <template v-if="false">
          <div class="assets_none_box">
            <div class="none_box">
              <i></i>
              이런, 아직 전달드릴 Insight가 없네요.<br />
              추가연동을 하셔서 내 자산의 변동정보를 확인해 보세요 :)
              <kb-button line blue class="more">추가연동</kb-button>
            </div>
          </div>
        </template>
        <!-- //데이터가 없을때 -->
        <template v-else>
          <div class="insight_wrap">
            <p class="top_tit">30일 간의 Insight Alarm을 보실수 있어요.</p>
            <ul>
              <li>
                <div class="date_info">2021/12/9(수)</div>
                <kb-button not a-tag class="msg_info" v-scroll-animate="'slideInUp'">
                  <!--
                    ico_a : 투자사후관리
                    ico_b : 결제예정
                    ico_c : 현금자산변동
                    ico_d : 투자자산변동
                    ico_e : play
                    ico_f : 투자진단/지신
                    ico_g : 서비스체험
                    ico_h : 기타
                  -->
                  <div class="alarm_box ico_d">
                    <strong>투자 평가금액이 내렸습니다.</strong>
                    <p>카드결제금액 100,000,000원</p>
                    <div class="categoty_info">자산변동 ・ 11:30</div>
                  </div>
                </kb-button>
                <kb-button not a-tag class="msg_info" v-scroll-animate="'slideInUp'">
                  <div class="alarm_box ico_b">
                    <strong>세금 납부일이 3일 남았습니다.</strong>
                    <p>청구금액 100,000,000원</p>
                    <div class="categoty_info">결제예정 ・ 14:00</div>
                  </div>
                </kb-button>
              </li>
              <li>
                <div class="date_info">2021/2/23(화)</div>
                <kb-button not a-tag class="msg_info" v-scroll-animate="'slideInUp'">
                  <div class="alarm_box ico_e">
                    <strong>새로운 뱃지를 획들했습니다.</strong>
                    <p>뱃지명</p>
                    <div class="categoty_info">PLAY ・ 11:30</div>
                  </div>
                </kb-button>
                <kb-button not a-tag class="msg_info" v-scroll-animate="'slideInUp'">
                  <div class="alarm_box ico_e">
                    <strong>새로운 팔로우가 10명 추가되었어요.</strong>
                    <p>업데이트 2021/1/4 12:00</p>
                    <div class="categoty_info">PLAY ・ 11:30</div>
                  </div>
                </kb-button>
                <kb-button not a-tag class="msg_info" v-scroll-animate="'slideInUp'">
                  <div class="alarm_box ico_f">
                    <strong>실전 투자가 망설여 진다면 가상투자로 먼저 시작해보세요!</strong>
                    <p>가상투자자금 1천만원을 드려요.</p>
                    <div class="categoty_info">투자진단 ・ 14:00</div>
                  </div>
                </kb-button>
              </li>
            </ul>
            <kb-button-wrap class="mg_t0">
              <kb-button
                class="more"
              >
                더보기
              </kb-button>
            </kb-button-wrap>
          </div>
        </template>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TO01B001',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

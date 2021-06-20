<template>
  <kb-page page-title="투자습관진단">
    <kb-page-body class="pd_b0">
      <div class="section">
        <!-- 진단전 -->
        <template v-if="true">
          <kb-title-bar
            h1
            class="mg_t40"
            title="어디서 투자 좀 해봤다는 <br>소리를 들어봤다면"
          />
          <div class="mg_t8">
            이제는 투자 성적표를 펼쳐 볼 차례!<br>
            밤낮으로 투자 삼매경에 빠졌던 <br>
            당신의 리얼 솔직 성적표 공개의 시간
          </div>

          <div class="img_box mg_t24"><img src="~@/assets/images/IN/05/img1.png" alt=""></div>
          <kb-button-wrap>
            <kb-button line blue>주식투자습관 진단 요청하기</kb-button>
          </kb-button-wrap>
        </template>
        <!-- //진단전 -->

        <!-- 진단중 -->
        <template v-else>
          <kb-title-bar
            h1
            class="mg_t40"
            title="주식투자습관 <br>분석 진행 중.."
          />
          <div class="mg_t8">
            김스타님의 데이터를 분석하기 위해<br>
            일꾼들을 차출 중입니다.
          </div>
          <div class="img_box mg_t48"><img src="~@/assets/images/IN/05/img2.png" alt=""></div>
          <div class="t_center fz_14 fc_666 mg_t32">
            내일 다시 오시면 멋진 보고서를 보여드릴게요~ <br>조금만 기다려주세요!
          </div>
        </template>
        <!-- //진단중 -->
        <hr aria-hidden="true" class="hr_line mg_t32">
        <kb-title-bar
          h2
          class="mg_t32"
          title="무엇을 볼 수 있을까?"
        />
        <div class="fz_14 fc_666 mg_t8">KB증권의 과학적인 알고리즘이 명쾌하게 투자패턴을 분석하고 진단하여 올바른 투자습관을 갖도록 도움을 드려요.</div>
        <ul class="circle_color_list mg_t24">
          <li>
            <div class="item">
              <div class="ico blue">
                <strong>유사그룹<br>비교</strong>
              </div>
              <div class="txt">나와 유사한 그룹간의 비교 데이터를 통해 현 위치를 활인 할 수 있어요.</div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="ico yellow">
                <strong>패턴분석</strong>
              </div>
              <div class="txt">주로 투자하는 종목군, 규모별, 투자/손익 비중, 추세 매매 스타일, 보유 기간 스타일을 분석해 드려요.</div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="ico purple">
                <strong>투자카드</strong>
              </div>
              <div class="txt">앞서 분석한 투자 습관과 투자 패턴을 종합 점수와 함께 확인 할 수 있어요.</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="section bg_gray bd_top pd_y24 mg_t32">
        <kb-title-bar
          h4
          title="알려드려요"
        />
        <ul class="txt_list mg_t12">
          <li class="dot">본 서비스는 주식시장의 일반 주식종목 매매거래를 시간 순으로 재구성하여 분석하였으며 매매횟수가 15회 이상인 경우 더욱 정확한 분석이 가능합니다.</li>
          <li class="dot">주식 이외의 상품(펀드, 채권, ELS 등)을 거래한 경우 손익 관련 분석결과가 달라질 수 있으니 계좌의 정확한 매매거래, 손익 관련정보는 관련 화면을 참조해 주세요.</li>
        </ul>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN05A001',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

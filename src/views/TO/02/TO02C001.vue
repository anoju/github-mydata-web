<template>
  <div class="section">
    <div class="month_wrap">
      <div class="top_info_check">
        <kb-button not aTag>
          <h2>1월 잔고 체크!</h2>
          <p class="text">출금 예정액 : 12,300,000원</p>
          <p class="text">가까운 출금예정일 : 2021/01/03</p>
        </kb-button>

        <!-- 잔고가 부족한경우 -->
        <div class="infomation_box ico2">
          <p class="tit">1월 2일까지 추가 입금이 필요해요.</p>
          <p class="text">1,000,000원</p>
        </div>

        <!-- 여유자금이 있는 경우 (10만원 이상) -->
        <div class="infomation_box">
          <p class="tit">여유자금이 생겼어요!</p>
          <p class="text">1,000,000원</p>
          <kb-button not aTag>투자하기</kb-button>
        </div>

        <!-- 여유자금이 있는 경우 (9만원 이하) -->
        <div class="infomation_box ico1">
          <p class="tit">현금계좌의 총 잔고가 여유있어요.</p>
          <p class="text">납입대상 계좌를 확인해 주세요.</p>
        </div>
      </div>

      <div class="bar_graph_box">
        <h2 class="tit">지난달보다 출금이 늘었어요.</h2>
        <p class="text">당월(예상) - 지난달: +999,999,999원</p>

        <!-- 차트영역 -->
        <div class="chart">
          <img src="~@/assets/images/TO/02/sample_chart.png" alt="" />
        </div>
        <!-- //차트영역 -->
      </div>

      <hr aria-hidden="true" class="hr_line">

      <div class="graph_detail_List">
        <div class="top_header">
          <h3 class="tit">현금잔고</h3>
          <p class="money">300,000,000,000원</p>
        </div>
        <kb-button not aTag>
          <div class="result_text">
            <!--
              .ico1 : 줄어듬
              .ico2 : 높음
              .ico3 : 같음
            -->
            <i class="ico1"></i>
            <p class="text">23,432,000,000원 줄었어요</p>
            <p class="sub_text">(지난 달 24일 하루 간의 비교)</p>
          </div>
        </kb-button>
      </div>

      <div class="graph_detail_List">
        <div class="top_header">
          <h3 class="tit">투자입출금</h3>
          <p class="money">300,000,000,000원</p>
        </div>
        <kb-button not aTag>
          <div class="result_text">
            <!--
              .ico1 : 줄어듬
              .ico2 : 높음
              .ico3 : 같음
            -->
            <i class="ico2"></i>
            <p class="text">23,432,000,000원 줄었어요</p>
            <p class="sub_text">(지난 달과 이번 달 투자 입출금 비교)</p>
          </div>
        </kb-button>
      </div>

      <div class="graph_detail_List">
        <div class="top_header">
          <h3 class="tit">보험/연금</h3>
          <p class="money">300,000,000,000원</p>
        </div>
        <kb-button not aTag>
          <div class="result_text">
            <!--
              .ico1 : 줄어듬
              .ico2 : 높음
              .ico3 : 같음
            -->
            <i class="ico3"></i>
            <p class="text">지난달과 같아요</p>
            <p class="sub_text">(지난 달과 이번 달 총 청구금 비교)</p>
            <div class="worning">미납이 1건 있어요.</div>
          </div>
        </kb-button>
      </div>

      <div class="graph_detail_List">
        <div class="top_header">
          <h3 class="tit">부채&amp;기타</h3>
          <p class="money">300,000,000,000원</p>
        </div>
        <kb-button not aTag>
          <div class="result_text">
            <!--
              .ico1 : 줄어듬
              .ico2 : 높음
              .ico3 : 같음
            -->
            <i class="ico2"></i>
            <p class="text">3,333,333,333원 늘었어요</p>
            <p class="sub_text">(지난 달과 이번 달 총 청구금 비교)</p>
            <div class="worning">미납이 1건 있어요.</div>
          </div>
        </kb-button>
      </div>

      <kb-button not aTag class="manage_link">
        2개월간 연속 출금된 이력이 있어요.<br />
        함께 관리하시겠어요?
      </kb-button>
    </div>
    <div class="btm_btn_util type2">
      <div class="text">오늘 정보는 마이데이터 제공 데이터를 기반으로 작성되어 실제 정보와 다를 수 있습니다.</div>
      <kb-button aTag not class="btn_refresh">새로고침</kb-button>
      <kb-button aTag not class="btn_linkage">추가연동</kb-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TO02C001',
};
</script>

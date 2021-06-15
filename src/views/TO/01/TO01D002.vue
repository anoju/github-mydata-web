<template>
  <kb-page page-title="내 자산 QnA">
    <kb-page-body>
      <div class="my_qna_banner">
        <div class="bg" v-scroll-animate="'fadeInRight'"></div>
        <div class="inner">
          <h1 class="tit">내 자산은<br>어떻게 운용되고 있을까?</h1>
          <div class="sub">소비패턴과 투자자산 분석 정보를<br>보실 수 있어요.</div>
        </div>
      </div>
      <!--
        ico 아이콘 클래스 규칙
        ico1: 할부금융, 전자금융, 통신
        ico2: 보험, 보증보험
        ico3: 카드
        ico4: 은행, 통합
        ico5: 금투
      -->
      <ul class="ico_qna_list">
        <li>
          <kb-button not a-tag class="item">
            <i class="ico ico1"></i>
            <div class="cont">
              <div class="tit">최근 1년 동안 거래한 주식 종목 중 나에게 가장 많은 수익을 가져다준 효자 종목은?</div>
              <div class="date">2021/03/12</div>
            </div>
          </kb-button>
        </li>
        <li>
          <kb-button not a-tag class="item">
            <i class="ico ico2"></i>
            <div class="cont">
              <div class="tit">미래를 위해 은행에 적립한 나의 예정금액은 얼마일까?</div>
              <div class="date">2021/03/12</div>
            </div>
          </kb-button>
        </li>
        <li>
          <kb-button not a-tag class="item">
            <i class="ico ico3"></i>
            <div class="cont">
              <div class="tit">지난 1년간 나의 총 카드 사용 금액은?</div>
              <div class="date">2021/03/12</div>
            </div>
          </kb-button>
        </li>
        <li>
          <kb-button not a-tag class="item">
            <i class="ico ico4"></i>
            <div class="cont">
              <div class="tit">질문입니다. 무엇일까요? 질문입니다. 무엇일까요?</div>
              <div class="date">2021/03/12</div>
            </div>
          </kb-button>
        </li>
        <li>
          <kb-button not a-tag class="item">
            <i class="ico ico5"></i>
            <div class="cont">
              <div class="tit">질문입니다. 무엇일까요? 질문입니다. 무엇일까요? 질문입니다. 무엇일까요?</div>
              <div class="date">2021/03/12</div>
            </div>
          </kb-button>
        </li>
      </ul>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TO01D002',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

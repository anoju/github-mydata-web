<template>
  <kb-page page-title="은퇴준비 진단">
    <kb-page-body>
      <div class="section retire_wrap">
        <h2>김스타님 노후 준비가 <br />70% 진행중이예요</h2>
        <p class="sub_tit"><strong>은퇴준비기간</strong> 2021년~2042년</p>

        <div class="retire_age">
          <p><span>현재</span>35세</p>
          <p class="center">21년</p>
          <p><span>은퇴</span>56세</p>
        </div>

        <hr aria-hidden="true" class="hr_line">

        <div class="mg_t32 mg_b48">
          <kb-title-bar
            h3
            title="예상 은퇴 자산"
          />

          <div class="retire_money">
            <p class="tit">
              은퇴 시점 예상 보유 자산
              <span class="money">1,233,000,000원</span>
            </p>

            <div class="box type1">
              <p class="text">
                기대 수명까지
                <span class="money">매월 3,000,000원 수령 예상</span>
              </p>
            </div>
          </div>

          <div class="retire_money">
            <!-- 2021-06-15 -->
            <p class="tit ico2">
              은퇴 후 생활 필요 자금
              <span class="money">1,233,000,000원</span>
            </p>

            <div class="box type2">
              <p class="text">
                기대 수명까지
                <span class="money">매월 3,000,000원 지출 가능</span>
              </p>
            </div>
          </div>

          <div class="retire_money">
            <!-- 2021-06-15 -->
            <p class="tit ico3">
              은퇴 시점 예상 과부족 금액
              <span class="money">1,233,000,000원</span>
            </p>

            <div class="box type3">
              <p class="text">
                <span class="money">부족금액 10,000,000원</span>
                여유로운 은퇴를 위해 더 대비해야 되요.
              </p>
            </div>

            <div class="box type4">
              <p class="text">
                <span class="money">여유금액 10,000,000원</span>
                여유로운 여유로운 생활이 가능해요.
              </p>
            </div>
          </div>

        </div>

        <hr aria-hidden="true" class="hr_line">

        <div class="mg_t32 mg_b40">
          <kb-title-bar
            h3
            title="예상 보유 순자산 추이"
          >
            <p class="fz_12 fc_666">미래가치기준 / 단위:원</p>
          </kb-title-bar>

          <p class="chart_remark">
            <span>은퇴준비자금</span>
          </p>
          <div class="chart_area"><img src="~@/assets/images/IN/sample_chart_retire.png" alt="" /></div>
        </div>

        <hr aria-hidden="true" class="hr_line">

        <div class="mg_t32 mg_b32">
          <kb-title-bar
            h3
            title="진단 결과"
          />

          <!--
            필요 : type1
            여유 : type2
          -->
          <div class="result_box type1">
            <i></i>
            <p class="tit">월 10만원 <br />추가 대비가 필요해요!</p>
          </div>
          <div class="result_box type2">
            <i></i>
            <p class="tit">은퇴 이후<br />월 12만원 여유 있어요!</p>
          </div>

          <!-- 연금계좌가 없는경우 -->
          <kb-button  aTag not class="retire_no_bank">
            <p class="tit">KB증권에 연금계좌가 없으시군요.</p>
            <p class="text">
              연금저축계좌 개설해서 <br />
              은퇴도 대비하고 세액공제도 받으세요.
            </p>
          </kb-button>
          <!-- //연금계좌가 없는경우 -->

          <!-- 상품추천영역 -->
          <div class="portfolio_wrap">
            <ul class="product_list">
              <li>
                <div class="top">
                  <kb-button not a-tag>
                    <span class="stit">미래가 불안하다면?<br /> 안정적으로 수익을 불리는 노후 펀드 가입</span>
                    <p class="tit">한국판 뉴딜 관련 수혜주를 중심으로 한 그린뉴딜 테마형</p>
                  </kb-button>
                </div>
                <div class="return pd_b0">
                  <span>3개월 수익률</span>
                  <strong class="fc_up">21.02%</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- //상품추천영역 -->

        <hr aria-hidden="true" class="hr_line">

        <div class="retire_restart">
          <p class="text">은퇴설계를 다시하고 싶으세요?</p>
          <kb-button yellow h48>은퇴설계 새로하기</kb-button>
        </div>

      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>

export default {
  name: 'IN09A008',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

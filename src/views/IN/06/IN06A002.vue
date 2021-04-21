<template>
  <kb-page page-title="고수의 Pick">
    <kb-page-body>
      <div class="pick_view_wrap">
        <!--
          진행형 고수 pick : type1
          햄릿 고수의 pick : type2
          동레벨 고수의 pick : type3
          운빨최고 고수의 pick : type4
          5자이내로 고수의 pick : type5
          -->
        <div class="top_info_box type1">
          <div class="text_box">
            <h2>장기보유 고수가<br />1주일 동안 매수한 종목은?</h2>
            <!--
              상승 : fc_up
              하락 : fc_down
            -->
            <p class="rate">최근1년 수익률<span class="fc_up">+15.26%</span></p>
          </div>
          <i class="ico"></i>

          <div class="info_box">
            <dl>
              <dt>장기보유 기준</dt>
              <dd>종목 보유기간 6개월 이상</dd>
            </dl>
            <dl>
              <dt>장기보유 고수</dt>
              <dd>최근 2년 수익률 상위 5%</dd>
            </dl>
          </div>
        </div>
        <div class="section">
          <div class="list_box">
            <div class="top_info">
              <p class="text">상위 20위 종목</p>
              <p class="date">2021/02/22 ~ 2021/08/기준</p>
            </div>
            <ul class="list">
              <!-- 리스트 갯수 반복 -->
              <li>
                <span class="number">1</span>
                <div class="text_box">
                  <h3>삼성전자</h3>
                  <p class="cash">59,300원</p>
                  <!--
                    상승 : fc_up
                    하락 : fc_down
                  -->
                  <p class="up_down fc_up">▲350원 (+13.25%)</p>
                </div>
                <div class="other_box">
                  <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                  <kb-button
                    like
                    :class="{checked:true}"
                    role="checkbox"
                    :aria-checked="true?'true':'false'"
                  >즐겨찾기</kb-button>
                  <dl>
                    <dt>평균매수단가</dt>
                    <dd>59,300원</dd>
                  </dl>
                </div>
              </li>
              <!-- //리스트 갯수 반복 -->
              <!-- 리스트 갯수 반복 -->
              <li>
                <span class="number">2</span>
                <div class="text_box">
                  <h3>삼성전자</h3>
                  <p class="cash">59,300원</p>
                  <!--
                    상승 : fc_up
                    하락 : fc_down
                  -->
                  <p class="up_down fc_down">▼350원 (-13.25%)</p>
                </div>
                <div class="other_box">
                  <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                  <kb-button
                    like
                    :class="{checked:true}"
                    role="checkbox"
                    :aria-checked="true?'true':'false'"
                  >즐겨찾기</kb-button>
                  <dl>
                    <dt>평균매수단가</dt>
                    <dd>59,300원</dd>
                  </dl>
                </div>
              </li>
              <!-- //리스트 갯수 반복 -->
              <!-- 리스트 갯수 반복 -->
              <li>
                <span class="number">3</span>
                <div class="text_box">
                  <h3>삼성전자</h3>
                  <p class="cash">59,300원</p>
                  <!--
                    상승 : fc_up
                    하락 : fc_down
                  -->
                  <p class="up_down fc_up">▲350원 (+13.25%)</p>
                </div>
                <div class="other_box">
                  <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                  <kb-button
                    like
                    :class="{checked:false}"
                    role="checkbox"
                    :aria-checked="false?'true':'false'"
                  >즐겨찾기</kb-button>
                  <dl>
                    <dt>평균매수단가</dt>
                    <dd>59,300원</dd>
                  </dl>
                </div>
              </li>
              <!-- //리스트 갯수 반복 -->
            </ul>
          </div>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN06A002',
};
</script>

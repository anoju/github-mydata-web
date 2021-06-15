<template>
  <kb-page page-title="추천테마">
    <kb-page-body>
      <div class="section theme_wrap">
        <div class="visual">
          <p class="tit">
            손쉽게 시작하는 <br />
            투자의 쉬운 맛
          </p>
          <p class="hashtag">
            <span>#내 일상 가까이</span><span>#어디선가 들어본</span>
          </p>
        </div>

        <!-- 항목1 -->
        <div class="theme_list">
          <kb-button class="tit" style="background:#3bae6c">코로나로 주목 받은 바이오</kb-button>
          <!-- 색상정의
          fc_up : 상승
          fc_down : 하락
          -->
          <p class="status">3개월<span class="fc_up">+34.77%</span></p>

          <div class="list_box">
            <ul class="list">
              <li>
                <kb-button not aTag>
                  <p class="text">삼성전자</p>
                  <!-- 색상정의
                  fc_up : 상승
                  fc_down : 하락
                  -->
                  <p class="status fc_up">+13.25%</p>
                </kb-button>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  like
                  :class="{checked:isLike1}"
                  role="checkbox"
                  :aria-checked="isLike1?'true':'false'"
                  @click="isLike1 = !isLike1"
                >즐겨찾기</kb-button>
              </li>
              <li>
                <kb-button not aTag>
                  <p class="text">삼성전자</p>
                  <!-- 색상정의
                  fc_up : 상승
                  fc_down : 하락
                  -->
                  <p class="status fc_up">+13.25%</p>
                </kb-button>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  like
                  :class="{checked:isLike2}"
                  role="checkbox"
                  :aria-checked="isLike2?'true':'false'"
                  @click="isLike2 = !isLike2"
                >즐겨찾기</kb-button>
              </li>
              <li>
                <kb-button not aTag>
                  <p class="text">삼성전자</p>
                  <!-- 색상정의
                  fc_up : 상승
                  fc_down : 하락
                  -->
                  <p class="status fc_up">+13.25%</p>
                </kb-button>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  like
                  :class="{checked:isLike3}"
                  role="checkbox"
                  :aria-checked="isLike3?'true':'false'"
                  @click="isLike3 = !isLike3"
                >즐겨찾기</kb-button>
              </li>
            </ul>
          </div>
        </div>
        <!-- //항목1 -->

        <!-- 항목2 -->
        <div class="theme_list">
          <kb-button class="tit" style="background:#3e61ba">LG 사업철수 스마트폰</kb-button>
          <!-- 색상정의
          fc_up : 상승
          fc_down : 하락
          -->
          <p class="status">3개월<span class="fc_up">+34.77%</span></p>

          <div class="list_box">
            <ul class="list">
              <li>
                <kb-button not aTag>
                  <p class="text">삼성전자</p>
                  <!-- 색상정의
                  fc_up : 상승
                  fc_down : 하락
                  -->
                  <p class="status fc_up">+13.25%</p>
                </kb-button>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  like
                  :class="{checked:isLike4}"
                  role="checkbox"
                  :aria-checked="isLike4?'true':'false'"
                  @click="isLike4 = !isLike4"
                >즐겨찾기</kb-button>
              </li>
              <li>
                <kb-button not aTag>
                  <p class="text">삼성전자</p>
                  <!-- 색상정의
                  fc_up : 상승
                  fc_down : 하락
                  -->
                  <p class="status fc_up">+13.25%</p>
                </kb-button>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  like
                  :class="{checked:isLike5}"
                  role="checkbox"
                  :aria-checked="isLike5?'true':'false'"
                  @click="isLike5 = !isLike5"
                >즐겨찾기</kb-button>
              </li>
              <li>
                <kb-button not aTag>
                  <p class="text">삼성전자</p>
                  <!-- 색상정의
                  fc_up : 상승
                  fc_down : 하락
                  -->
                  <p class="status fc_up">+13.25%</p>
                </kb-button>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  like
                  :class="{checked:isLike6}"
                  role="checkbox"
                  :aria-checked="isLike6?'true':'false'"
                  @click="isLike6 = !isLike6"
                >즐겨찾기</kb-button>
              </li>
            </ul>
          </div>
        </div>
        <!-- //항목2 -->

      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>

export default {
  name: 'IN11A001',
  data() {
    return {
      result: null,
      isLike1: false,
      isLike2: false,
      isLike3: false,
      isLike4: false,
      isLike5: false,
      isLike6: false,
    };
  },
  methods: {

  },
};
</script>

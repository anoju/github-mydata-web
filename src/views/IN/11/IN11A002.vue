<template>
  <kb-page page-title="주식테마 큐레이션">
    <kb-page-body>
      <div class="section theme_wrap">

        <!-- <kb-tabs
          v-model="tabIdx"
          class="theme_tab"
        >
          <template v-for="(data, i) in dataTest">
            <kb-tab :title="data.name" :tab-style="`background:${data.color}`" :key="i" />
          </template>
        </kb-tabs> -->

        <!-- <kb-tabs
          v-model="tabIdx"
          class="theme_tab"
        >
          <kb-tab
            title="바이오"
            tab-style="background:#3bae6c"
          />
          <kb-tab
            title="스마트폰"
            tab-style="background:#3e61ba"
          />
          <kb-tab
            title="디스플레이"
            tab-style="background:#74cacc"
          />
          <kb-tab
            title="전기차"
            tab-style="background:#7040b1"
          />
          <kb-tab
            title="패션"
            tab-style="background:#3bae6c"
          />
        </kb-tabs> -->
        <!-- radio 타입 추가: 기존 탭방식으로 써도 무방 -->
        <kb-btn-toggle class="theme_tab">
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal1"
              button
              value="1"
              lbl-style="background:#3bae6c"
              name="radioName"
            >
              바이오
            </kb-radio>
            <kb-radio
              v-model="toggleVal1"
              button
              value="2"
              lbl-style="background:#3e61ba"
              name="radioName"
            >
              스마트폰
            </kb-radio>
            <kb-radio
              v-model="toggleVal1"
              button
              value="3"
              lbl-style="background:#74cacc"
              name="radioName"
            >
              디스플레이
            </kb-radio>
            <kb-radio
              v-model="toggleVal1"
              button
              value="4"
              lbl-style="background:#7040b1"
              name="radioName"
            >
              전기차
            </kb-radio>
            <kb-radio
              v-model="toggleVal1"
              button
              value="5"
              lbl-style="background:#3bae6c"
              name="radioName"
            >
              패션
            </kb-radio>
          </kb-btn-toggle-row>
        </kb-btn-toggle>

        <!-- 항목별 하나씩 -->
        <div class="tab_view">
          <div class="top">
            <h2>코로나로 주목 받은 <br />바이오</h2>
            <!-- 색상정의
            fc_up : 상승
            fc_down : 하락
            -->
            <p class="status fc_up">+34.77%</p>
          </div>
          <kb-btn-toggle small inline>
            <kb-btn-toggle-row>
              <kb-radio
                v-model="toggleVal2"
                button
                value="1"
              >
                1개월
              </kb-radio>
              <kb-radio
                v-model="toggleVal2"
                button
                value="2"
              >
                3개월
              </kb-radio>
              <kb-radio
                v-model="toggleVal2"
                button
                value="3"
              >
                6개월
              </kb-radio>
              <kb-radio
                v-model="toggleVal2"
                button
                value="4"
              >
                1년
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>

          <p class="chart_area">
            <img src="~@/assets/images/IN/sample_chart.png" alt="" />
          </p>

          <hr aria-hidden="true" class="hr_line">

          <div class="list_box">
            <p class="tit">관련종목<span>98</span></p>
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
            </ul>
          </div>

        </div>
        <!-- //항목별 하나씩 -->

      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>

export default {
  name: 'IN11A002',
  data() {
    return {
      tabIdx: 0,
      result: null,
      isLike1: false,
      isLike2: false,
      toggleVal1: '1',
      toggleVal2: '1',

      dataTest: [
        { name: '바이오', color: '#3bae6c' },
        { name: '스마트폰', color: '#3e61ba' },
        { name: '디스플레이', color: '#74cacc' },
        { name: '전기차', color: '#7040b1' },
        { name: '패션', color: '#3bae6c' },
      ],
    };
  },
  methods: {
  },
};
</script>

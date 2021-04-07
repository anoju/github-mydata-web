<template>
  <kb-page page-title="투자상상 퀴즈">
    <kb-page-body>
      <div class="section">
        <div class="invest_quiz_box" v-if="this.result == null">
          <h2 class="tit">투자상상 퀴즈</h2>
          <p class="quiz">10년 전, 삼성전자에 투자했다면 현재 수익률은 얼마나 될까요?</p>
          <div class="btn_group">
            <kb-button line @click="quizResult(false)">100 ~ 500%</kb-button>
            <kb-button line @click="quizResult(true)">1000 ~ 2000%</kb-button>
            <kb-button line @click="quizResult(false)">3000% 이상</kb-button>
          </div>
        </div>

        <!-- 정답 -->
        <div class="invest_quiz_box success" v-if="this.result" v-scroll-animate="'flipInY'">
          <kb-complete-ef>
            <div class="img"></div>
          </kb-complete-ef>
          <h2 class="tit_result">정답이예요! <span>와우! 정말 대단한 통찰력이군요.</span></h2>
          <p class="quiz">10년 전, 삼성전자에 투자했다면 현재 수익률은 얼마나 될까요?</p>
          <div class="btn_group">
            <span class="button line bt_blue">1000 ~ 2000%</span>
            <!-- <kb-button line blue>1000 ~ 2000%</kb-button> -->
          </div>
          <div class="mg_t30 t_center">
            <kb-button link blue>
              상세정보 확인<i class="bt_ic_arr" aria-hidden="true" />
            </kb-button>
          </div>
        </div>
        <!-- //정답 -->

        <!-- 오답 -->
        <div class="invest_quiz_box fail" v-if="this.result == false" v-scroll-animate="'flipInY'">
          <h2 class="tit_result">오답이예요; <span>정답을 확인해볼까요?</span></h2>
          <p class="quiz">10년 전 삼성전자에 투자했다면 현재수익률은 <span class="answer">1000 ~2000%</span></p>
          <div class="mg_t90 t_center">
            <kb-button link blue>
              상세정보 확인<i class="bt_ic_arr" aria-hidden="true" />
            </kb-button>
          </div>
        </div>
        <!-- //오답 -->
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>

export default {
  name: 'IN10A000',
  data() {
    return {
      result: null,
    };
  },
  methods: {
    quizResult(result) {
      this.result = result;
    },

  },
};
</script>

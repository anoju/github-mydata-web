<template>
  <kb-pop
    full
    title="나는 어떤유형일까?"
  >
    <kb-pop-body>
      <div class="section">
        <kb-step :total="7" :now="(step + 1)"></kb-step>

        <div class="mg_t40">
          <kb-transition-group :name="slideDirection">
            <div v-if="step === 0" :key="0">
              <p class="fz_20 fw_bold">
                당신의 소비스타일은 <br>어떤가요?
              </p>

              <div class="radiochoice">
                <kb-radio
                  v-model="radioVal1"
                  value="1"
                >
                  가격과 유행에 상관없이 내가 만족하는 소비는 후회하지 않아요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal1"
                  value="2"
                >
                  돈 쓸 때는 쓰지만, 저축도 열심히 해요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal1"
                  value="3"
                >
                  지출 내역을 자주 확인하고, 최대한 아끼고 절약하기 위해 노력해요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal1"
                  value="4"
                >
                  나보다 가족이나 친구들을 위해 돈 쓰는 것이 즐거워요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal1"
                  value="5"
                >
                  돈 쓰는데 크게 관심 없어요. 필요한 것만 사면 되죠.
                </kb-radio>
              </div>
            </div>
            <div v-if="step === 1" :key="1">
              <p class="fz_20 fw_bold">
                자산관리의 목적은 <br>무엇인가요?
              </p>

              <div class="radiochoice">
                <kb-radio
                  v-model="radioVal2"
                  value="1"
                >
                  취미와 여가비용 마련
                </kb-radio>
                <kb-radio
                  v-model="radioVal2"
                  value="2"
                >
                  미래 대비를 위한 목돈 마련
                </kb-radio>
                <kb-radio
                  v-model="radioVal2"
                  value="3"
                >
                  입출금 및 소비 관리
                </kb-radio>
                <kb-radio
                  v-model="radioVal2"
                  value="4"
                >
                  투자금 마련
                </kb-radio>
              </div>
            </div>
            <div v-if="step === 2" :key="2">
              <p class="fz_20 fw_bold">
                그동안 어떻게 자산을 <br>관리하고 있었나요?
              </p>

              <div class="radiochoice">
                <kb-radio
                  v-model="radioVal3"
                  value="1"
                >
                  자산 관리도 신경 쓰고,  적당한 투자로 수익도 얻으려고 노력해요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal3"
                  value="2"
                >
                  적극적으로 투자해서 돈을 불리는데 관심이 많아요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal3"
                  value="3"
                >
                  투자에는 관심이 없거나, 여유가 없어요.
                </kb-radio>
              </div>
            </div>
            <div v-if="step === 3" :key="3">
              <p class="fz_20 fw_bold">
                현재 자산관리는 <br>어떻게 하고 계신가요?
              </p>

              <div class="radiochoice">
                <kb-radio
                  v-model="radioVal4"
                  value="1"
                >
                  예적금이나 연금, 보험 등 안정적인 방법으로 관리하고 있어요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal4"
                  value="2"
                >
                  주로 예적금을 들고 있고, 부담되지 않을 정도로 투자도 하고 있어요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal4"
                  value="3"
                >
                  예적금과 투자뿐만 아니라 연금, 보험 등 다양한 방법으로 관리하고 있어요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal4"
                  value="4"
                >
                  예적금보다는 주식, 펀드 등 적극적인 투자방법을 선호해요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal4"
                  value="5"
                >
                  따로 하고 있지 않아요.
                </kb-radio>
              </div>
            </div>
            <div v-if="step === 4" :key="4">
              <p class="fz_20 fw_bold">
                당신과 가까운 <br>투자 스타일을 선택해주세요.
              </p>

              <div class="radiochoice">
                <kb-radio
                  v-model="radioVal5"
                  value="1"
                >
                  주로 주변에서 좋다고 하는 종목에 투자하는 편이에요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal5"
                  value="2"
                >
                  내가 직접 정보를 알아보고 분석해서 포트폴리오를 구성해 투자하는 편이에요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal5"
                  value="3"
                >
                  내가 신경쓰지 않아도 알아서 투자가 이뤄지는 자동화 상품을 선호해요.
                </kb-radio>
                <kb-radio
                  v-model="radioVal5"
                  value="4"
                >
                  투자를 직접 해본 적이 없어서 잘 모르겠어요.
                </kb-radio>
              </div>
            </div>
            <div v-if="step === 5" :key="5">
              <p class="fz_20 fw_bold">
                당신의 미래 투자 금액은 <br>어느 정도로 예상 하시나요?
              </p>

              <div class="radiochoice">
                <kb-radio
                  v-model="radioVal6"
                  value="1"
                >
                  없거나 5백만원 미만
                </kb-radio>
                <kb-radio
                  v-model="radioVal6"
                  value="2"
                >
                  5백만원 이상 ~ 2천만원 미만
                </kb-radio>
                <kb-radio
                  v-model="radioVal6"
                  value="3"
                >
                  2천만원 ~ 1억 미만
                </kb-radio>
                <kb-radio
                  v-model="radioVal6"
                  value="4"
                >
                  1억 이상
                </kb-radio>
              </div>
            </div>
            <div v-if="step === 6" :key="6">
              <p class="fz_20 fw_bold">
                투자할 때 선호하시는 <br>수익과 위험의 밸런스 정도는?
              </p>

              <div class="radiochoice">
                <kb-radio
                  v-model="radioVal7"
                  value="1"
                >
                  원금 보전이 중요, 낮은 위험만
                </kb-radio>
                <kb-radio
                  v-model="radioVal7"
                  value="2"
                >
                  낮은 위험, 낮은 수익의 안정적 투자
                </kb-radio>
                <kb-radio
                  v-model="radioVal7"
                  value="3"
                >
                  적당한 위험, 적당한 수익의 균형투자
                </kb-radio>
                <kb-radio
                  v-model="radioVal7"
                  value="4"
                >
                  높은 위험, 높은 수익의 투자
                </kb-radio>
                <kb-radio
                  v-model="radioVal7"
                  value="5"
                >
                  높은 수익이 최우선
                </kb-radio>
              </div>
            </div>
          </kb-transition-group>
        </div>
      </div>
      <div class="loading_analysis" v-if="loading">
        <div class="imgChange">
          <span></span>
          <p class="fz_16 fw_bold">유형을 분석하고 있습니다.</p>
        </div>

      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button line v-if="step !== 0" @click="toStep(step-1)">뒤로</kb-button>
      <kb-button yellow v-if="step !== 6" :disabled="next(step)" @click="toStep(step+1)">다음</kb-button>
      <kb-button yellow v-if="step === 6" :disabled="next(step)" @click="popClose">결과보기</kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'PE02A001',
  data() {
    return {
      step: 0,
      slideDirection: 'next',
      radioVal1: '',
      radioVal2: '',
      radioVal3: '',
      radioVal4: '',
      radioVal5: '',
      radioVal6: '',
      radioVal7: '',
      loading: false,
    };
  },
  watch: {

  },
  methods: {
    toStep(i) {
      if (this.step > i) {
        this.slideDirection = 'prev';
      } else {
        this.slideDirection = 'next';
      }
      this.step = i;
    },
    next(i) {
      const list = [this.radioVal1, this.radioVal2, this.radioVal3, this.radioVal4, this.radioVal5, this.radioVal6, this.radioVal7];
      if (list[i] === '') {
        return true;
      }
      return false;
    },
    popClose() {
      this.loading = true;
      setTimeout(() => {
        this.$emit('close');
      }, 3000);
    },
  },
};
</script>

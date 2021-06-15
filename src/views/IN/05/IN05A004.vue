<template>
  <kb-pop
    full
    title="투자나이 수정"
  >
    <kb-pop-body>
      <div class="section">
        <div
          v-if="spinnerVal === 0"
          class="user_medal_box type2"
        >
          <div class="ico">
            <i class="medal lv0"></i>
          </div>
          <div class="info">
            <div class="tit">전설의 시작</div>
            <div class="txt">어느 화창한 날 투자계을 제패하겠다는<br>청운의 뜻을 품고 도전장을 내밀다.</div>
          </div>
        </div>
        <div
          v-else-if="spinnerVal <= 5"
          class="user_medal_box type2"
        >
          <div class="ico">
            <i class="medal lv1"></i>
          </div>
          <div class="info">
            <div class="tit">초심자의 행운</div>
            <div class="txt">초심자에게만 부여된다는 행운의 버프가<br>당신을 감싸고 있으니 분명 이길 것이다.</div>
          </div>
        </div>
        <div
          v-else-if="spinnerVal <= 10"
          class="user_medal_box type2"
        >
          <div class="ico">
            <i class="medal lv2"></i>
          </div>
          <div class="info">
            <div class="tit">질풍노도의 투자</div>
            <div class="txt">몇 번의 기쁨과 몇번의 고배를 마시며<br>매섭게 오르내리는 추세의 바람을 깨닫다.</div>
          </div>
        </div>
        <div
          v-else-if="spinnerVal <= 15"
          class="user_medal_box type2"
        >
          <div class="ico">
            <i class="medal lv3"></i>
          </div>
          <div class="info">
            <div class="tit">혜안의 투자 버프</div>
            <div class="txt">예로부터 투자의 고수들은 해탈의 경지에서<br>비로소 미래를 내다보는 눈을 얻었다.</div>
          </div>
        </div>
        <div
          v-else
          class="user_medal_box type2"
        >
          <div class="ico">
            <i class="medal lv4"></i>
          </div>
          <div class="info">
            <div class="tit">투자계의 붉은 전설</div>
            <div class="txt">손대는 것마다 붉은 상승 곡선이 치솟으니<br>모든 사람들이 그를 전설이라 칭했다.</div>
          </div>
        </div>
        <kb-form-item
          label="몇 년 동안 투자하셨어요?"
        >
          <kb-spinner
            :min="0"
            :max="100"
            v-model="spinnerVal"
            unit="살"
            title="투자나이입력"
          />
        </kb-form-item>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button yellow @click="complete">
        수정완료
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'IN05A004',
  data() {
    return {
      spinnerVal: 0,
    };
  },
  props: {
    value: { type: [String, Number], default: null },
  },
  mounted() {
    if (this.value !== null) this.spinnerVal = this.value;
  },
  methods: {
    complete() {
      this.$emit('close', { payload: this.spinnerVal });
    },
  },
};
</script>

<template>
  <kb-page page-title="가상투자">
    <kb-page-body class="pd_b0">
      <div class="roulette_wrap">
        <div class="roulette_in">
          <h1 class="tit">투자자금을 확보하라!</h1>
          <div class="sub">가상투자 진행을 위한 투자자금을 드립니다!<br>
            룰렛을 돌려보세요.<br>
            행운의 여신은 당신편입니다!</div>
        </div>
        <div class="roulette">
          <kb-complete-ef v-if="isSpinEnd" />
          <div class="pan_wrap">
            <div
              class="coin3"
              :class="{ing:isClick}"
            />
            <div class="pan" ref="pan"></div>
            <div
              class="coin1"
              :class="{ing:isClick}"
            />
            <div
              class="coin2"
              :class="{ing:isClick}"
            />
            <div class="pin" />
            <div class="btn">
              <kb-button
                v-if="!isClick"
                not
                a-tag
                class="circle_btn"
                @click="rouletteSpinStart"
              >
                <span class="start">룰렛 돌리기</span>
              </kb-button>
              <kb-button
                v-else-if="!isSpinEnd"
                class="circle_btn ing"
                @click="rouletteSpinStop"
              >
                <span class="mg_r20">돌려~!</span>
                <span class="mg_l20">돌려~!</span>
              </kb-button>
              <kb-button
                v-else
                class="circle_btn end"
                to="/IN/07/IN07A001"
              >
                <span class="animated zoomIn">{{endText}}<br>받기!</span>
              </kb-button>
            </div>
            <div
              class="character"
              :class="{end:isSpinEnd}"
            />
          </div>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN07A000',
  data() {
    return {
      isClick: false,
      isSpinEnd: false,
      notStop: false,
      random: 0,
      endText: '',
      spinAnime: '',
      money: [
        { text: '천만원', number: 10000000 },
        { text: '백만원', number: 1000000 },
        { text: '오십만원', number: 500000 },
        { text: '오백만원', number: 5000000 },
      ],
    };
  },
  methods: {
    randomNumber(min, max) {
      return ((Math.random() * (max - min)) + min);
    },
    rouletteSpinStart() {
      const time = 5000;
      this.isClick = true;
      const random = Math.round(this.randomNumber(0, 179));
      const $rotate = 7200 + random;
      this.rouletteSpin($rotate, time);
      setTimeout(() => {
        this.notStop = true;
      }, (time - 500));
    },
    rouletteSpinStop() {
      if (this.notStop) return;
      this.spinAnime.pause();
      const nowRotateDeg = this.spinAnime.animations[0].currentValue;
      const nowRotate = Number(nowRotateDeg.replace(/[^-.0-9]/g, '')).toFixed(1);
      const random = Math.round(this.randomNumber(180, 359));
      const $rotate = Math.floor(Number(nowRotate)) + random;
      this.rouletteSpin($rotate, 500);
    },
    rouletteSpin(rotate, speed) {
      const $el = this.$refs.pan;
      this.spinAnime = this.$anime({
        targets: $el,
        rotate,
        duration: speed,
        easing: 'easeOutCirc',
        complete: (() => {
          this.rouletteSpinEnd(rotate);
        }),
      });
    },
    rouletteSpinEnd(rotate) {
      const $rotate = rotate % 180;
      const idx = Math.floor($rotate / 45);
      this.endText = this.money[idx].text;
      this.isSpinEnd = true;
      setTimeout(() => {
        this.$alert(`<div class="fz_14 fc_666">가상투자자금</div> <div class="fz_20 mg_t4"><strong>${this.endText} 획득!</strong></div>`, null, null, {
          addClass: 'character',
        }).then(() => {
          console.log('확인');
        });
      }, 300);
    },
  },
};
</script>

<template>
  <div class="section pd_bottom">
    <h2 class="gd__h1">v-scroll-fixed<small>:자체제작</small></h2>
    <div>
      <div
        v-scroll-fixed="{el:'.inner'}"
        class="gd__img"
      >
        <div class="inner">
          <img src="@/assets/images/temp/360x203.png" alt="">
        </div>
      </div>
    </div>
    <h2 class="gd__h1">v-scroll-visual<small>:자체제작</small></h2>
    <div>
      <h3 class="gd__h2">기본:top(true)</h3>
      <div
        v-scroll-visual="{el:'.item'}"
        class="gd__img ty2"
      >
        <div class="item">
          <img src="@/assets/images/temp/360x203.png" alt="">
        </div>
      </div>
      <h3 class="gd__h2">bottom</h3>
      <div
        v-scroll-visual="{el:'.item',top:false,bottom:true}"
        class="gd__img ty2"
      >
        <div class="item">
          <img src="@/assets/images/temp/360x203.png" alt="">
        </div>
      </div>
      <h3 class="gd__h2">top, bottom</h3>
      <div
        v-scroll-visual="{el:'.item', bottom:true}"
        class="gd__img ty2"
      >
        <div class="item">
          <img src="@/assets/images/temp/360x203.png" alt="">
        </div>
      </div>
      <h3 class="gd__h2">opacity</h3>
      <div
        v-scroll-visual="{el:'.item', bottom:true, opacity: true, items:[{el:'.tit',direction:'top'},{el:'.sub',direction:'bottom'},{el:'.btn1',direction:'left'},{el:'.btn2',direction:'right'}]}"
        class="gd__img ty2"
      >
        <div class="item">
          <img src="@/assets/images/temp/360x203.png" alt="">
        </div>
        <div class="cont">
          <h3 class="tit">제목타이틀 제목타이틀 제목타이틀 제목타이틀</h3>
          <p class="sub">설명글 입니다. 설명글 입니다. 설명글 입니다. 설명글 입니다.</p>
          <div class="flex mg_t15">
            <kb-button line blue class="btn1">버튼</kb-button>
            <kb-button line red class="btn2">버튼</kb-button>
          </div>
        </div>
      </div>
    </div>

    <h2 class="gd__h1">v-scroll-number<small>:자체제작</small></h2>
    <div class="gd__wrap">
      <strong v-scroll-number="{start:1000, comma:true, complete: numberComplete}">70,000</strong>
      <!-- <span
        v-scroll-in="scrollIn2"
        class="gd__box"
      >
        v-scroll-in
      </span> -->
    </div>

    <h2 class="gd__h1">v-scroll-animate<small>:자체제작</small></h2>
    <div class="gd__wrap">
      <h3 class="gd__h2">옵션</h3>
      <div>
        <div
          v-scroll-animate="'fadeIn'"
          class="gd__box"
        >
          fadeIn
        </div>
        <div
          v-scroll-animate.infinite="'swing'"
          class="gd__box"
        >
          swing(infinite)
        </div>
        <div
          v-scroll-animate.repeat="'bounce'"
          class="gd__box"
        >
          bounce(repeat)
        </div>
        <div
          v-scroll-animate="{class:'fadeInLeft', delay:2000}"
          class="gd__box"
        >
          fadeInLeft
        </div>
        <div
          v-scroll-animate="{class:'fadeInRight', duration:5000}"
          class="gd__box"
        >
          fadeInRight
        </div>
        <div
          v-scroll-animate="{class:'slideInLeft', delay:1000, duration:3000}"
          class="gd__box"
        >
          slideInLeft
        </div>
      </div>
      <h3 class="gd__h2">종류: anumate.css 기반</h3>
      <div>
        <div class="gd__box" v-scroll-animate="'fadeIn'">fadeIn</div>
        <div class="gd__box" v-scroll-animate="'fadeInDown'">fadeInDown</div>
        <div class="gd__box" v-scroll-animate="'fadeInLeft'">fadeInLeft</div>
        <div class="gd__box" v-scroll-animate="'fadeInLeftBig'">fadeInLeftBig</div>
        <div class="gd__box" v-scroll-animate="'fadeInRight'">fadeInRight</div>
        <div class="gd__box" v-scroll-animate="'fadeInRightBig'">fadeInRightBig</div>
        <div class="gd__box" v-scroll-animate="'fadeInUp'">fadeInUp</div>

        <div class="gd__box" v-scroll-animate="'flash'">flash</div>
        <div class="gd__box" v-scroll-animate="'pulse'">pulse</div>
        <div class="gd__box" v-scroll-animate="'rubberBand'">rubberBand</div>
        <div class="gd__box" v-scroll-animate="'shake'">shake</div>
        <div class="gd__box" v-scroll-animate="'headShake'">headShake</div>
        <div class="gd__box" v-scroll-animate="'swing'">swing</div>
        <div class="gd__box" v-scroll-animate="'tada'">tada</div>
        <div class="gd__box" v-scroll-animate="'tada2'">tada2</div>
        <div class="gd__box" v-scroll-animate="'wobble'">wobble</div>
        <div class="gd__box" v-scroll-animate="'jello'">jello</div>

        <div class="gd__box" v-scroll-animate="'bounce'">bounce</div>
        <div class="gd__box" v-scroll-animate="'bounceUp'">bounceUp</div>
        <div class="gd__box" v-scroll-animate="'bounceIn'">bounceIn</div>
        <div class="gd__box" v-scroll-animate="'bounceInDown'">bounceInDown</div>
        <div class="gd__box" v-scroll-animate="'bounceInLeft'">bounceInLeft</div>
        <div class="gd__box" v-scroll-animate="'bounceInRight'">bounceInRight</div>
        <div class="gd__box" v-scroll-animate="'bounceInUp'">bounceInUp</div>

        <div class="gd__box" v-scroll-animate="'flip'">flip</div>
        <div class="gd__box" v-scroll-animate="'flipInX'">flipInX</div>
        <div class="gd__box" v-scroll-animate="'flipInY'">flipInY</div>

        <div class="gd__box" v-scroll-animate="'lightSpeedIn'">lightSpeedIn</div>
        <div class="gd__box" v-scroll-animate="'lightSpeedIn'">rotateIn</div>

        <div class="gd__box" v-scroll-animate="'rotateInDownLeft'">rotateInDownLeft</div>
        <div class="gd__box" v-scroll-animate="'rotateInDownRight'">rotateInDownRight</div>
        <div class="gd__box" v-scroll-animate="'rotateInUpLeft'">rotateInUpLeft</div>
        <div class="gd__box" v-scroll-animate="'rotateInUpRight'">rotateInUpRight</div>

        <div class="gd__box" v-scroll-animate="'rollIn'">rollIn</div>
        <div class="gd__box" v-scroll-animate="'zoomIn'">zoomIn</div>
        <div class="gd__box" v-scroll-animate="'zoomInDown'">zoomInDown</div>
        <div class="gd__box" v-scroll-animate="'zoomInLeft'">zoomInLeft</div>
        <div class="gd__box" v-scroll-animate="'zoomInRight'">zoomInRight</div>
        <div class="gd__box" v-scroll-animate="'zoomInUp'">zoomInUp</div>

        <div class="gd__box" v-scroll-animate="'slideInDown'">slideInDown</div>
        <div class="gd__box" v-scroll-animate="'slideInLeft'">slideInLeft</div>
        <div class="gd__box" v-scroll-animate="'slideInRight'">slideInRight</div>
        <div class="gd__box" v-scroll-animate="'slideInUp'">slideInUp</div>
      </div>
      <h3 class="gd__h2">transition용 클래스: on, active 만 사용가능</h3>
      <div>
        <div class="gd__box" v-scroll-animate="'on'">on</div>
        <div class="gd__box" v-scroll-animate="'active'">active</div>
      </div>
    </div>
    <h2 class="gd__h1">v-scroll-in<small>:자체제작</small></h2>
    <div class="gd__wrap">
      <h3 class="gd__h2">function: 함수실행</h3>
      <div
        v-scroll-in="scrollIn"
        class="gd__box anime"
      >
        anime.js
      </div>
      <div
        v-scroll-in="scrollIn"
        class="gd__box anime"
      >
        anime.js
      </div>
      <h3 class="gd__h2">string: addClass(클래스명 제한없음)</h3>
      <div
        v-scroll-in="activeClass"
        class="gd__box"
      >
        v-scroll-in
      </div>
      <div
        v-scroll-in="'on'"
        class="gd__box"
      >
        v-scroll-in
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animateGuide',
  data() {
    return {
      activeClass: 'active',
      scrollInIdx: 0,
    };
  },
  methods: {
    scrollIn(el) {
      const $el = el;
      const $delay = this.scrollInIdx * 300;
      this.$anime({
        targets: $el,
        translateX: 100,
        rotate: '1turn',
        backgroundColor: '#dd0000',
        color: '#fff',
        delay: $delay,
        duration: 2000,
      });
      this.scrollInIdx += 1;
    },
    scrollIn2(el) {
      const $el = el;
      this.$anime({
        targets: $el,
        translateX: 100,
        duration: 500,
        complete: (() => {
          console.log('scrollIn2 complete');
        }),
      });
    },
    numberComplete() {
      console.log(' number Complete');
    },
  },
};
</script>

<template>
  <div class="section pd_bottom">
    <h2 class="gd__h1">swipe</h2>
    <h3 class="gd__h2">기본</h3>
    <kb-swiper>
      <swiper-slide>
        <div class="dummy">
          임시박스1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스3
        </div>
      </swiper-slide>
    </kb-swiper>
    <h3 class="gd__h2">full-width</h3>
    <kb-swiper full-width>
      <swiper-slide>
        <div class="dummy">
          임시박스1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스3
        </div>
      </swiper-slide>
    </kb-swiper>

    <h3 class="gd__h2">auto-width</h3>
    <kb-swiper auto-width>
      <swiper-slide>
        <div class="dummy">
          임시박스임시박스임시박스1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스임시박스임시박스임시박스임시박스2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스임시박스3
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스임시박스임시박스1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스임시박스임시박스임시박스임시박스2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스임시박스3
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스임시박스임시박스1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스임시박스임시박스임시박스임시박스2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스임시박스3
        </div>
      </swiper-slide>
    </kb-swiper>
    <h3 class="gd__h2">auto-height full-width</h3>
    <kb-swiper
      auto-height
      full-width
    >
      <swiper-slide>
        <div class="dummy">
          임시박스1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스2
        </div>
        <div class="dummy">
          임시박스2
        </div>
        <div class="dummy">
          임시박스2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스3
        </div>
        <div class="dummy">
          임시박스3
        </div>
      </swiper-slide>
    </kb-swiper>
    <h3 class="gd__h2">index</h3>
    <kb-swiper
      :index="2"
    >
      <swiper-slide>
        <div class="dummy">
          임시박스1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스3
        </div>
      </swiper-slide>
    </kb-swiper>

    <h3 class="gd__h2">loop</h3>
    <kb-swiper loop>
      <swiper-slide>
        <div class="dummy">
          임시박스1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스3
        </div>
      </swiper-slide>
    </kb-swiper>
    <h3 class="gd__h2">navi full-width</h3>
    <kb-swiper
      navi
      full-width
    >
      <swiper-slide>
        <div class="dummy">
          임시박스1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스3
        </div>
      </swiper-slide>
    </kb-swiper>
    <h3 class="gd__h2">navi loop full-width</h3>
    <kb-swiper
      navi
      loop
      full-width
    >
      <swiper-slide>
        <div class="dummy">
          임시박스1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스3
        </div>
      </swiper-slide>
    </kb-swiper>
    <h3 class="gd__h2">autoplay full-width</h3>
    <kb-swiper
      autoplay
      full-width
    >
      <swiper-slide>
        <div class="dummy">
          임시박스1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스3
        </div>
      </swiper-slide>
    </kb-swiper>
    <h3 class="gd__h2">추가, 빼기</h3>
    <kb-swiper>
      <swiper-slide
        v-for="(idx, i) in swipers"
        :key="i"
      >
        <div class="dummy">
          임시박스{{ idx }}
        </div>
      </swiper-slide>
    </kb-swiper>
    <kb-button-wrap>
      <kb-button
        line
        @click="addSwiper"
      >
        추가
      </kb-button>
      <kb-button
        line
        @click="removeSwiper"
      >
        빼기
      </kb-button>
    </kb-button-wrap>

    <h3 class="gd__h2">v-model</h3>
    <kb-swiper v-model="swiperVal">
      <swiper-slide>
        <div class="dummy">
          임시박스1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스3
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          임시박스4
        </div>
      </swiper-slide>
    </kb-swiper>
    <kb-input v-model="swiperVal" />
    {{swiperVal}}
  </div>
</template>
<script>
export default {
  name: 'Swipe',
  data() {
    return {
      swiperVal: 2,
      swipers: [1, 2],
    };
  },
  methods: {
    addSwiper() {
      this.swipers.push(this.swipers.length + 1);
    },
    removeSwiper() {
      if (this.swipers.length > 1) {
        this.swipers.pop();
      }
    },
  },
};
</script>

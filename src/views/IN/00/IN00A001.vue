<template>
  <div class="section">
    <kb-title-bar h3 title="김스타님의 투자생활 가이드" class="first">
      <kb-button link to="/guide/txt">코딩가이드<i class="bt_ic_arr" aria-hidden="true" /></kb-button>
    </kb-title-bar>
    <kb-swiper class="first">
      <swiper-slide>
        <div class="dummy">
          투자생활 컨텐츠1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          투자생활 컨텐츠2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          투자생활 컨텐츠3
        </div>
      </swiper-slide>
    </kb-swiper>
    <kb-button-wrap>
      <kb-button
        line
        to="/guide/txt"
      >
        퍼블 코딩 가이드
      </kb-button>
    </kb-button-wrap>
    <kb-button-wrap>
      <kb-button
        line
        to="/validate/formSubmission"
      >
        개발 가이드
      </kb-button>
    </kb-button-wrap>
  </div>
</template>
<script>
export default {
  name: 'IN00A001',
  inject: ['isSwiperTouch'],
};
</script>

<template>
  <div class="section">
    <kb-title-bar h3 title="김스타님의 오늘" class="first">
      LV.1 웰컴루키
    </kb-title-bar>
    <kb-swiper class="first">
      <swiper-slide>
        <div class="dummy">
          오늘 컨텐츠1
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          오늘 컨텐츠2
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          오늘 컨텐츠3
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dummy">
          오늘 컨텐츠4
        </div>
      </swiper-slide>
    </kb-swiper>

    <kb-title-bar h3 title="김스타님의 오늘리스트" />
    <kb-foldings>
      <kb-folding
        title="폴딩제목 폴딩제목 폴딩제목 폴딩제목1"
      >
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠
      </kb-folding>
      <kb-folding
        title="폴딩제목 폴딩제목 폴딩제목 폴딩제목2"
      >
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠
      </kb-folding>
      <kb-folding
        title="폴딩제목 폴딩제목 폴딩제목 폴딩제목3"
      >
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠
      </kb-folding>
      <kb-folding
        title="폴딩제목 폴딩제목 폴딩제목 폴딩제목4"
      >
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠<br>
        폴딩컨텐츠
      </kb-folding>
    </kb-foldings>
  </div>
</template>
<script>
export default {
  name: 'TO00A001',
  inject: ['isSwiperTouch'],
};
</script>

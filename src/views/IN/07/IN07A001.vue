<template>
  <kb-page page-title="가상투자">
    <kb-page-body>
      <div class="section">
        <div class="ticket_money">
          <div class="inner">
            <div class="box">
              <div class="info">김스타님의 가상 투자자금</div>
              <div class="money">
                <div class="word">일천만원</div>
                <div class="num">10,000,000원</div>
              </div>
            </div>
          </div>
        </div>
        <kb-title-bar h4 center tit-class="firecracker" class="mg_t12" title="축하합니다!" />

        <div class="fz_14 fc_666 t_center mg_t8">
          가상 투자 진행을 위한 자금을 획득하셨어요!<br>
          본격적인 투자를 위해 포트폴리오를 골라볼까요?
        </div>
        <hr class="hr_line mg_t24" aria-hidden="true">
        <!--
            포스아거(공격투자형) : type1
            루나키키(적극투자형) : type2
            멜랑콜리(위험중립형) : type3
            심쿵비비(안정추구형) : type4
            롤로라무(안정형) : type5
          -->
        <kb-swiper
          full-width
          index="2"
        >
          <swiper-slide>
            <div class="in_chart_item">
              <div class="tit">
                <div class="name">김스타님은</div>
                <div>수익보다는 위험요소가 가장 낮은 상품을 선호하는
                  <strong class="line">롤로라무</strong>
                  와 유사한 성향을 가지고 있어요!
                </div>
              </div>
              <div class="summary">관심 분야에 투자하여 자산을 키우는 안정추구형 상품을 준비해봤어요.</div>
              <div class="chart_wrap ">
                <div class="character type1"></div>
                <div class="chart">
                  <img src="@/assets/images/temp/chart_donut1.png" alt="" class="wp_100">
                </div>
              </div>
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
        <hr class="hr_line mg_t24" aria-hidden="true">
        <div class="t_center mg_t32">
          <div>할까말까 망설여 질땐, <br>
            가볍게 가상투자 G0!</div>
          <div class=" mg_t16">
            <kb-button yellow class="w_200">가상투자 시작하기</kb-button>
          </div>
        </div>
        <kb-slider
          v-model="sliderVal"
          :step="5"
          :marks="[0, 25, 50, 75, 100]"
        />
        {{sliderVal}}
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN07A001',
  data() {
    return {
      sliderVal: 20,
    };
  },
  methods: {
  },
};
</script>

<template>
  <kb-pop
    full
  >
    <kb-pop-body>
      <kb-swiper full-width auto-height>
        <swiper-slide>
          <div class="section">
            <pose />
            <kb-button-wrap class="mg_t42">
              <kb-button yellow>프렌즈 선택하기</kb-button>
            </kb-button-wrap>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="section">
            <luna />
            <kb-button-wrap class="mg_t42">
              <kb-button yellow>프렌즈 선택하기</kb-button>
            </kb-button-wrap>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="section">
            <mellang />
            <kb-button-wrap class="mg_t42">
              <kb-button yellow>프렌즈 선택하기</kb-button>
            </kb-button-wrap>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="section">
            <bibi />
            <kb-button-wrap class="mg_t42">
              <kb-button yellow>프렌즈 선택하기</kb-button>
            </kb-button-wrap>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="section">
            <lollo />
            <kb-button-wrap class="mg_t42">
              <kb-button yellow>프렌즈 선택하기</kb-button>
            </kb-button-wrap>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="section">
            <div class="friends_wrap">
              <p class="mg_t60 fz_26 fw_bold t_center">어떤 유형인지 <br />모르겠다면..</p>

              <i class="ico_no"></i>

              <p class="fz_18 mg_t24 t_center">간단한 설문을 통해 <br />나는 어떤 유형인지 알아볼까요?</p>
            </div>

            <kb-button-wrap class="mg_t80">
              <kb-button yellow>유형 설문 테스트하기</kb-button>
            </kb-button-wrap>
          </div>
        </swiper-slide>
      </kb-swiper>
      <div class="flex_wrap align_center justify_center mg_t32">
        <kb-button
          not
          class="tooltip_btn mg_r5"
          v-tooltip="'views/PE/01/PE01A001_tip.vue'"
          aria-label="팝업으로 상세내용 확인"
        >팝업으로 상세내용 확인</kb-button>
        <kb-button link blue>투자성향 만들기 <i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
import pose from '../character/pose.vue';
import luna from '../character/luna.vue';
import mellang from '../character/mellang.vue';
import bibi from '../character/bibi.vue';
import lollo from '../character/lollo.vue';

export default {
  name: 'PE01A001',
  components: {
    pose,
    luna,
    mellang,
    bibi,
    lollo,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<template>
  <div class="section">
    <kb-title-bar h2 class="pd_t24" title="예상 투자 수익률은<br>얼마인가요?" />
    <p class="mg_t32">평균 투자수익률을 설정해주세요.</p>
    <div class="flex_wrap space_between mg_t24">
      <div class="">
        <div class="fz_14">{{minVal}}</div>
      </div>
      <div class="t_right">
        <div class="fz_14">{{maxVal}}%</div>
      </div>
    </div>
    <kb-slider
      class="mg_t4"
      v-model="sliderVal"
      :min="minVal"
      :max="maxVal"
      :step="0.5"
      :marks="false"
    />
    <div class="t_center mg_t24">
      <kb-input class="w_80" input-class="t_center" not-del type="tel" title="투자수익률 입력" v-model="sliderVal" />
      <strong class="mg_l8">%</strong>
    </div>

    <kb-button-wrap bottom-fixed>
      <kb-button
        line
        to="/IN/09/IN09A010/4"
      >
        이전
      </kb-button>
      <kb-button
        yellow
        to="/IN/09/IN09A010/6"
      >
        다음
      </kb-button>
    </kb-button-wrap>
  </div>
</template>
<script>

export default {
  name: 'IN09A006',
  data() {
    return {
      minVal: 0,
      maxVal: 25,
      sliderVal: 2,
    };
  },
  methods: {
  },
};
</script>

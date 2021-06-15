<template>
  <div class="section">
    <kb-title-bar h2 class="pd_t24" title="은퇴 후<br>미래 경제지표를 확인하세요." />
    <p class="mg_t32">평균 물가 상승률을 불러왔어요.</p>
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
      <kb-input class="w_80" input-class="t_center" not-del type="tel" title="예상 물가 상승률 입력" v-model="sliderVal" />
      <strong class="mg_l8">%</strong>
    </div>

    <kb-button-wrap bottom-fixed>
      <kb-button
        line
        to="/IN/09/IN09A010/5"
      >
        이전
      </kb-button>
      <kb-button
        yellow
        to="/IN/09/IN09A008"
      >
        진단완료
      </kb-button>
    </kb-button-wrap>
  </div>
</template>
<script>

export default {
  name: 'IN09A007',
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

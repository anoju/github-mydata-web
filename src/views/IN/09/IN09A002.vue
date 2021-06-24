<template>
  <div class="section">
    <kb-title-bar h2 class="pd_t24">
      <template slot="left">
        <h2 class="tit">
          {{userName}}님의 <br>
          은퇴 계획은 언제인가요?</h2>
      </template>
    </kb-title-bar>
    <p class="mg_t32">예상 은퇴 시기를 설정해주세요.</p>
    <div class="flex_wrap space_between mg_t24">
      <div class="">
        <div class="fz_12 fc_666">현재</div>
        <div class="fz_18 mg_t2"><strong>{{minVal}}세</strong></div>
      </div>
      <div class="t_right">
        <div class="fz_12 fc_666">기대수명</div>
        <div class="fz_18 mg_t2"><strong>{{maxVal}}세</strong></div>
      </div>
    </div>
    <kb-slider
      class="mg_t4"
      v-model="sliderVal"
      :min="minVal"
      :max="maxVal"
      :marks="false"
    />
    <div class="t_center mg_t24 flex_wrap align_center justify_center">
      <kb-input class="w_80" input-class="t_center" not-del type="tel" title="은퇴시기 입력" v-model="sliderVal" />
      <strong class="mg_l8">세</strong>
    </div>

    <kb-button-wrap bottom-fixed>
      <kb-button
        line
        to="/IN/09/IN09A001"
      >
        취소
      </kb-button>
      <kb-button
        yellow
        to="/IN/09/IN09A010/2"
      >
        다음
      </kb-button>
    </kb-button-wrap>
  </div>
</template>
<script>

export default {
  name: 'IN09A002',
  data() {
    return {
      userName: '김스타',
      minVal: 35,
      maxVal: 90,
      sliderVal: 60,
    };
  },
  methods: {
  },
};
</script>

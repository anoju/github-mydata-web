<template>
  <!-- <kb-page page-title="즉시이체"> -->
  <kb-page>
    <template slot="header">
      <div class="header_flex">
        <h1>즉시이체</h1>
        <kb-button not class="ico_tip" @click="showRule('views/TR/07/TR07A001',$event.target)">도움말</kb-button>
      </div>
    </template>
    <kb-page-body>
      <div class="util_wrap">
        <div class="text_box flex_center">
          <i class="ico_big_warning"></i>
          <h2 class="mg_t32">지금은 <br />이체 가능시간이 아닙니다.</h2>
          <p class="mg_t8 fz_16 fc_666">이체 가능시간에 다시 시도해 주세요.</p>
          <p class="mg_t32 fz_16"><span class="fw_bold fc_666">이체가능시간</span><span class="mg_l8 fc_blue fw_bold">00:15 ~ 23:45</span></p>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TR08A001',
  data() {
    return {
    };
  },
  methods: {
    showRule(src, el) {
      this.$modal({
        component: () => import('@/' + src),
        returnFocus: el,
      });
    },
  },
};
</script>

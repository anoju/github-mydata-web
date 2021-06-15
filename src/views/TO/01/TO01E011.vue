<template>
  <kb-pop
    full
    title="카드 소비 줄이기 진행중"
  >
    <kb-pop-body>
      <div
        class="mission_cont_wrap"
        :class="{success: isSeccess, fail: isFail,}"
      >
        <div class="ico_txt_wrap">
          <ico-txt blue>진행중</ico-txt>
          <ico-txt>D-12</ico-txt>
        </div>
        <div class="tit">
          <strong>2021/04/28 목요일</strong>
        </div>
        <div class="sub_info">
          <dl>
            <dt>시작일</dt>
            <dd>2021/05/02</dd>
          </dl>
          <dl>
            <dt>종료일</dt>
            <dd>2021/05/21</dd>
          </dl>
        </div>
        <dl class="info_txt_box no_line dl_type2">
          <dt class="dt"><strong>목표 달성까지<br>
            오늘부터 8만원 남았어요.</strong></dt>
          <dd class="dd">
            <div class="horizon_bar_wrap">
              <div class="bar_info">
                <div class="fc_blue">2만원</div>
                <div>10만원</div>
              </div>
              <div class="horizon_bar">
                <i style="width:20%;"></i>
              </div>
            </div>
          </dd>
        </dl>
        <dl class="info_txt_box no_line dl_type2">
          <dt class="dt"><strong>이번주까지<br>
            49,000원 줄여야되요!</strong></dt>
          <dd class="dd mg_t32">
            <ico-txt large blue>목표달성 TIP</ico-txt>
            <div class="mg_t12">매주 48,200원씩 생활, 식비, 쇼핑, 문화, 미용에서 절약하면돼요!</div>
          </dd>
        </dl>
        <ul class="txt_list mg_t12">
          <li class="dot">종료하기를 눌러야 포인트를 획득 할 수 있어요!</li>
        </ul>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button line v-if="!isFail && !isSeccess">종료하기</kb-button>
      <kb-button yellow @click="stateChange">목표 다시 세우기</kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'TO01E011',
  data() {
    return {
      isFail: false,
      isSeccess: false,
    };
  },
  methods: {
    stateChange() {
      if (!this.isSeccess && !this.isFail) {
        this.isSeccess = true;
      } else if (!this.isFail) {
        this.isSeccess = false;
        this.isFail = true;
      } else {
        this.isFail = false;
      }
    },
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

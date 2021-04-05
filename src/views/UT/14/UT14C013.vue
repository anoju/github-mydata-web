<template>
  <kb-page page-title="하나씩 연동">
    <kb-page-body>
      <div class="section">
        <div class="inner_box">
          <div class="top_logo_txt">
            <p class="img_logo"><img src="@/assets/images/common/img_logo_sub.png" alt="KB증권"></p>
            <p class="txt">연동계좌 및 정보를 선택하세요.</p>
          </div>
        </div>
        <div class="acc_info_box">
          <kb-checkbox
            v-model="chkVal"
            value="1"
            class="acc_info_chkbox type2"
          >
            <strong>종합위탁</strong>
            <strong>종합위탁</strong>
            <template slot="summary">
              <strong class="ico_state">활동</strong>
              <strong>종합계좌</strong>
            </template>
            <template slot="last">
              <span class="acc_num">123-124212-31 01</span>
            </template>
          </kb-checkbox>

          <kb-checkbox
            v-model="chkVal"
            value="2"
            class="acc_info_chkbox type2"
          >
            <strong>CMA</strong>
            <strong>홍길동</strong>
            <template slot="summary">
              <strong class="">비활동</strong>
              <strong>종합계좌</strong>
            </template>
            <template slot="last">
              <span class="acc_num">123-124234-12 02 </span>
            </template>
          </kb-checkbox>

          <kb-checkbox
            v-model="chkVal"
            value="3"
            class="acc_info_chkbox type2"
          >
            <strong>퇴직연금운용</strong>
            <strong>퇴직연금운용</strong>
            <template slot="summary">
              <strong class="ico_state">활동</strong>
              <strong>개인형IRP</strong>
            </template>
            <template slot="last">
              <span class="acc_num">123-124212-31 01</span>
            </template>
          </kb-checkbox>
        </div>

        <kb-button-wrap bottom-fixed>
          <kb-button
            yellow
          >
            다음
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT14C013',
  data() {
    return {
      chkVal: ['2'],
    };
  },
  methods: {
  },
};
</script>

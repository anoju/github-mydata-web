<template>
  <kb-page page-title="포인트 목록">
    <kb-page-body>
      <div class="section">
        <div class="flex_wrap space_between align_center mg_b12">
          <div>
            <div v-if="true" class="error_txt icon mg_t0">연동 실패</div>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연결 정보를 확인하세요.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">금융사 약관 동의가 필요합니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연동 유효기간이 만료되었습니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          </div>
          <div>
            <kb-button button class="refresh">09:00:03</kb-button>
          </div>
        </div>
        <div class="fz_12 fc_666 mg_t12">총 보유 포인트</div>
        <div class="fz_20 mg_t4"><strong>123,400P</strong></div>
        <hr aria-hidden="true" class="hr_line ty2 inset mg_t16 mg_b16">
        <div class="flex_wrap fz_14 fc_666 align_center space_between">
          <div>소멸예정 포인트
            <kb-button
              not
              class="tooltip_btn"
              v-tooltip="'views/FI/02/FI02A007_tip.vue'"
              aria-label="팝업으로 상세내용 확인"
            >팝업으로 상세내용 확인</kb-button>
          </div>
          <div><strong>1,000P</strong></div>
        </div>
        <hr aria-hidden="true" class="hr_line mg_t26">
        <ul class="ico_info_list type2">
          <li>
            <div class="ico_info_item">
              <div class="info">
                <div class="left">
                  <i class="ico" style="background:skyblue"></i>
                  <p class="tit">포인트리</p>
                </div>
                <div class="right">
                  <p class="money">300,000P</p>
                </div>
              </div>
            </div>
            <div class="fz_12 fc_666 mg_t4 t_right">소멸예정 123,000P</div>
          </li>
          <li>
            <div class="ico_info_item">
              <div class="info">
                <div class="left">
                  <i class="ico" style="background:skyblue"></i>
                  <p class="tit">보너스 포인트</p>
                </div>
                <div class="right">
                  <p class="money">300,000P</p>
                </div>
              </div>
            </div>
            <!-- <div class="fz_12 fc_666 mg_t4 t_right">소멸예정 123,000P</div> -->
          </li>
          <li>
            <div class="ico_info_item">
              <div class="info">
                <div class="left">
                  <i class="ico" style="background:skyblue"></i>
                  <p class="tit">M포인트</p>
                </div>
                <div class="right">
                  <p class="money">300,000P</p>
                </div>
              </div>
            </div>
            <div class="fz_12 fc_666 mg_t4 t_right">소멸예정 123,000P</div>
          </li>
          <li>
            <div class="ico_info_item">
              <div class="info">
                <div class="left">
                  <i class="ico" style="background:skyblue"></i>
                  <p class="tit">H-Coin</p>
                </div>
                <div class="right">
                  <p class="money">300,000P</p>
                </div>
              </div>
            </div>
            <div class="fz_12 fc_666 mg_t4 t_right">소멸예정 123,000P</div>
          </li>
        </ul>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI02A007',
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

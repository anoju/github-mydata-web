<template>
  <kb-page page-title="연동정보 보기 설정">
    <kb-page-body>
      <div class="section">
        <p class="mg_t12 fz_14 fc_666">개인신용정보 연동 자산의 금액 숨김 여부를 정하실 수 있습니다. <br />금액을 숨기시면 전체 서비스 화면에서 금액은 보이지 않고 자산연동/평가는 그대로 유지됩니다.</p>

        <div class="setting_info">
          <h2>연동자산/정보
            <kb-button
              not
              class="tooltip_btn"
              v-tooltip="'views/IN/07/IN07A003_tip7.vue'"
              aria-label="팝업으로 상세내용 확인"
            >팝업으로 상세내용 확인</kb-button>
          </h2>

        </div>

        <kb-foldings type1 not-toggle class="acc_info_list mg_t24" first-open>
          <kb-folding>
            <template slot="title">
              <div class="acc_info_head">
                <strong>은행</strong>
                <strong class="cut">3</strong>
              </div>
            </template>
            <div class="accordion_box type2">
              <div class="acc_info_box">
                <ul class="transfer_acc_list">
                  <li>
                    <div>
                      <span>우리은행</span>
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                    <kb-button to="#">
                      재연동<i class="bt_ic_arr" aria-hidden="true" />
                    </kb-button>
                    <p class="error">재연동이 필요합니다.</p>
                  </li>
                  <li>
                    <div>
                      <span>우리은행</span>
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                    <kb-button to="#">
                      <i class="bt_ic_arr" aria-hidden="true" />
                    </kb-button>
                    <p class="error">곧 연동 유효기간이 만료됩니다.</p>
                  </li>
                  <li>
                    <div>
                      <span>우리은행</span>
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                    <kb-button to="#">
                      연장하기<i class="bt_ic_arr" aria-hidden="true" />
                    </kb-button>
                    <p class="error">연동 유효기간이 만료되었습니다.</p>
                  </li>
                  <li>
                    <div>
                      <span>우리은행</span>
                      <span>우리급여 저축예금</span>
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                    <i class="state">출금가능</i>
                    <p class="error">에러 메시지 노출(최대 2줄)<br>에러 메시지 노출</p>
                  </li>
                </ul>
              </div>
            </div>
          </kb-folding>
          <kb-folding>
            <template slot="title">
              <div class="acc_info_head">
                <strong>증권</strong>
                <strong class="cut">2</strong>
              </div>
            </template>
            <div class="accordion_box type2">
              <div class="acc_info_box">
                <ul class="transfer_acc_list">
                  <li>
                    <div>
                      <span>우리은행</span>
                      <span>우리급여 저축예금</span>
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>우리은행</span>
                      <span>우리급여 저축예금</span>
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span>우리은행</span>
                      <span>우리급여 저축예금</span>
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </kb-folding>
        </kb-foldings>
        <kb-button class="btn_add mg_t5">
          계좌추가
        </kb-button>

      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY09A001',
  data() {
    return {
      slideCheck: false,
    };
  },
  methods: {
  },
};
</script>

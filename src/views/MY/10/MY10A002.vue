<template>
  <kb-page page-title="연동정보 보기 설정">
    <kb-page-body>
      <div class="section">
        <p class="mg_t12 fz_14 fc_666">개인신용정보 연동 자산 및 정보의 전송요철변경 및 연동해지를 하실 수 있습니다.</p>

        <div class="setting_info">
          <p class="tit">
            선택된 기관 <span>23</span>개
          </p>

          <div class="right">
            <kb-checkbox class="checkbox_all" small>
              전체해제
            </kb-checkbox>
          </div>
        </div>

        <kb-foldings type1 not-toggle class="acc_info_list mg_t0" first-open>
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
                    <kb-checkbox
                      v-model="checkVal1"
                      value="1"
                      title="체크박스"
                      class="no_style"
                    >
                      <p class="text">우리은행</p>
                      <p class="error">자산연동관련 메시지.</p>
                    </kb-checkbox>
                  </li>
                  <li>
                    <kb-checkbox
                      v-model="checkVal1"
                      value="2"
                      title="체크박스"
                      class="no_style"
                    >
                      <p class="text">우리은행</p>
                      <p class="error">연동 유효기간이 만료되었습니다.</p>
                    </kb-checkbox>
                  </li>
                  <li>
                    <kb-checkbox
                      v-model="checkVal1"
                      value="3"
                      title="체크박스"
                      class="no_style"
                    >
                      <p class="text">우리은행</p>
                    </kb-checkbox>
                  </li>
                </ul>
              </div>
            </div>
          </kb-folding>
          <kb-folding>
            <template slot="title">
              <div class="acc_info_head">
                <strong>투자</strong>
                <strong class="cut">3</strong>
              </div>
            </template>
            <div class="accordion_box type2">
              <div class="acc_info_box">
                <ul class="transfer_acc_list">
                  <li>
                    <kb-checkbox
                      v-model="checkVal1"
                      value="1"
                      title="체크박스"
                      class="no_style"
                    >
                      <p class="text">우리은행</p>
                      <p class="error">자산연동관련 메시지.</p>
                    </kb-checkbox>
                  </li>
                  <li>
                    <kb-checkbox
                      v-model="checkVal1"
                      value="2"
                      title="체크박스"
                      class="no_style"
                    >
                      <p class="text">우리은행</p>
                      <p class="error">연동 유효기간이 만료되었습니다.</p>
                    </kb-checkbox>
                  </li>
                  <li>
                    <kb-checkbox
                      v-model="checkVal1"
                      value="3"
                      title="체크박스"
                      class="no_style"
                    >
                      <p class="text">우리은행</p>
                    </kb-checkbox>
                  </li>
                </ul>
              </div>
            </div>
          </kb-folding>
        </kb-foldings>

        <kb-button-wrap bottom-fixed>
          <kb-button
            line
          >
            연동해지
          </kb-button>
          <kb-button
            yellow
          >
            전송요구변경
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY10A002',
  data() {
    return {
      checkVal1: [],
    };
  },
  methods: {
  },
};
</script>

<template>
  <kb-pop
    full
    title="은행/증권계좌"
    class=""
  >
    <kb-pop-body>
      <div class="section">
        <p class="mg_t12 fz_14">출금계좌로 등록이 가능한 계좌입니다.</p>
        <p class="mg_t4 fz_14 fc_666">마이데이터 인증을 통해 계좌등록하고, KB증권 오픈뱅킹 출금동의 후 출금이 가능합니다.</p>

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
                      <span>우리급여 저축예금</span>
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                    <kb-button to="#">
                      동의하기<i class="bt_ic_arr" aria-hidden="true" />
                    </kb-button>
                  </li>
                  <li>
                    <div>
                      <span>우리은행</span>
                      <span>우리급여 저축예금</span>
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                    <i class="state">출금가능</i>
                  </li>
                  <li>
                    <div>
                      <span>우리은행</span>
                      <span>우리급여 저축예금</span>
                      <p class="acc_num">123-124234-12 02</p>
                    </div>
                    <kb-button to="#">
                      동의하기<i class="bt_ic_arr" aria-hidden="true" />
                    </kb-button>
                    <p class="error">출금을 위한 재동의가 필요합니다</p>
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
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TR01A005',
  data() {
    return {
    };
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

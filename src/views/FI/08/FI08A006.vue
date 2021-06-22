<template>
  <kb-pop
    full
    title="다른 계약 보기"
  >
    <kb-pop-body>
      <div class="section">
        <kb-foldings type1 not-toggle class="acc_info_list mg_t0">
          <kb-folding active>
            <template slot="title">
              <div class="acc_info_head">
                <strong>휴대폰</strong>
                <strong class="cut">3</strong>
              </div>
            </template>
            <div class="accordion_box type2">
              <div class="acc_info_box">
                <ul class="transfer_acc_list">
                  <li class="type3">
                    <kb-button aTag not>
                      <i class="img_bank"><span style="background: skyblue;">통신 로고</span></i>
                      <div class="text">
                        <span>휴대폰</span>
                        <p class="acc_num">123-124234-12 02</p>
                      </div>
                    </kb-button>
                  </li>
                  <li class="type3">
                    <kb-button aTag not>
                      <i class="img_bank"><span style="background: skyblue;">통신 로고</span></i>
                      <div class="text">
                        <span>휴대폰</span>
                        <p class="acc_num">123-124234-12 02</p>
                      </div>
                      <p class="fz_12 fc_blue align_slef_center">고객정지</p>
                    </kb-button>
                  </li>
                </ul>
              </div>
            </div>
          </kb-folding>
          <kb-folding active>
            <template slot="title">
              <div class="acc_info_head">
                <strong>인터넷/집전화</strong>
                <strong class="cut">3</strong>
              </div>
            </template>
            <div class="accordion_box type2">
              <div class="acc_info_box">
                <ul class="transfer_acc_list">
                  <li class="type3">
                    <kb-button aTag not>
                      <i class="img_bank"><span style="background: skyblue;">통신 로고</span></i>
                      <div class="text">
                        <span>휴대폰</span>
                        <p class="acc_num">123-124234-12 02</p>
                      </div>
                    </kb-button>
                  </li>
                </ul>
              </div>
            </div>
          </kb-folding>
        </kb-foldings>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'FI08A006',
  props: {
  },
  mounted() {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<template>
  <kb-pop
    full
    title="다른 계좌 보기"
  >
    <kb-pop-body>
      <div class="section">
        <kb-foldings type1 not-toggle class="acc_info_list mg_t0">
          <kb-folding active>
            <template slot="title">
              <div class="acc_info_head">
                <strong>은행</strong>
                <strong class="cut">3</strong>
              </div>
            </template>
            <div class="accordion_box type2">
              <div class="acc_info_box">
                <ul class="transfer_acc_list">
                  <li class="type3">
                    <kb-button aTag not>
                      <!-- 즐겨찾기 mark 클래스 적용  -->
                      <i class="img_bank mark"><span style="background: skyblue;">은행위치</span></i>
                      <div class="text">
                        <span>우리급여 저축예금</span> <!-- 상품명 -->
                        <p class="acc_num">123-124234-12 02</p>
                      </div>
                      <span class="money">123,000,000원</span>
                    </kb-button>
                  </li>
                  <li class="type3">
                    <kb-button aTag not>
                      <!-- 즐겨찾기 mark 클래스 적용  -->
                      <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                      <div class="text">
                        <span>우리급여 저축예금</span> <!-- 상품명 -->
                        <p class="acc_num">123-124234-12 02</p>
                      </div>
                      <span class="money">123,000,000원</span>
                    </kb-button>
                  </li>
                </ul>
              </div>
            </div>
          </kb-folding>
          <kb-folding active>
            <template slot="title">
              <div class="acc_info_head">
                <strong>투자</strong>
                <strong class="cut">3</strong>
              </div>
            </template>
            <div class="accordion_box type2">
              <div class="acc_info_box">
                <ul class="transfer_acc_list">
                  <li class="type3">
                    <kb-button aTag not>
                      <!-- 즐겨찾기 mark 클래스 적용  -->
                      <i class="img_bank mark"><span style="background: skyblue;">은행위치</span></i>
                      <div class="text">
                        <span>우리급여 저축예금</span> <!-- 상품명 -->
                        <p class="acc_num">123-124234-12 02</p>
                      </div>
                      <span class="money">123,000,000원</span>
                    </kb-button>
                  </li>
                  <li class="type3">
                    <kb-button aTag not>
                      <!-- 즐겨찾기 mark 클래스 적용  -->
                      <i class="img_bank"><span style="background: skyblue;">은행위치</span></i>
                      <div class="text">
                        <span>우리급여 저축예금</span> <!-- 상품명 -->
                        <p class="acc_num">123-124234-12 02</p>
                      </div>
                      <span class="money">123,000,000원</span>
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
  name: 'FI04A005',
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

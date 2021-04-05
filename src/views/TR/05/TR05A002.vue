<template>
  <kb-page>
    <template slot="header">
      <div class="header_flex">
        <h1>즉시이체</h1>
        <kb-button not class="ico_tip" @click="showRule('views/TR/07/TR07A001',$event.target)">도움말</kb-button>
      </div>
    </template>
    <kb-page-body>
      <div class="section">
        <div class="transfer_imm_wrap">
          <kb-button aTag class="btn_select_type" @click="withdrawPopup($event.target)">
            <p class="tit">KB국민 종합위탁 김국민</p>
            <strong class="acc">275-666-22132-01</strong>
          </kb-button>
          <!-- 이체금액 -->
          <kb-form-item
            label="이체금액"
          >
            <template slot="labelRight">
              <span class="fz_12">출금가능금액 12,345,000원</span>
            </template>
            <kb-input
              v-model="inpVal1"
              type="tel"
              input-class="t_right"
              unit="원"
              placeholder="이체금액 입력"
              title="이체금액 입력"
            />
          </kb-form-item>
          <!-- //이체금액 -->

          <!-- 입금계좌 -->
          <kb-form-item
            label="입금계좌"
          >
            <template slot="labelRight">
              <kb-button line h28 small @click="depositPopup($event.target)">
                최근계좌
              </kb-button>
              <kb-button line h28 small class="mg_l6" @click="depositPopup($event.target)">
                내계좌
              </kb-button>
            </template>
            <div class="select acc_type">
              <a href="#" class="btn_select" @click="financialPopup($event.target)">
                <div class="cut">
                  <i class="logo"><img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" /></i>
                  <span class="name">우리은행</span>
                </div>
              </a>
              <kb-input v-model="fmVal1" type="tel" title="입금계좌번호 입력" />
            </div>
          </kb-form-item>
          <!-- //입금계좌 -->

          <!-- 이체메모 -->
          <kb-form-item label="이체메모" class="tbl_type">
            <div>
              <label>내통장 표시</label>
              <div><kb-input v-model="inpVal2" placeholder="한글 7자 이내" title="내통장 표시 입력" /></div>
            </div>
            <div>
              <label>받는통장 표시</label>
              <div><kb-input v-model="inpVal3" placeholder="미입력시 출금계좌명 표시" title="받는통장 표시 입력" /></div>
            </div>
          </kb-form-item>
          <!-- //이체메모 -->
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
  name: 'TR05A002',
  data() {
    return {
      inpVal1: '1,000,000',
      inpVal2: '',
      inpVal3: '',
      fmVal1: '123456789012345',
    };
  },
  methods: {
    showRule(src, el) {
      this.$modal({
        component: () => import('@/' + src),
        returnFocus: el,
      });
    },
    depositPopup(el) { // 입금계좌선택
      this.$modal({
        component: () => import('@/views/TR/04/TR04A002.vue'),
        returnFocus: el,
      });
    },
    financialPopup(el) { // 입금기관선택
      this.$modal({
        component: () => import('@/views/TR/04/TR04B001.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>

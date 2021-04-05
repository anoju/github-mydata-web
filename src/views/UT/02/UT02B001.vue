<template>
  <kb-page page-title="약관동의">
    <kb-page-body>
      <div class="section">
        <div class="section">
          <kb-title-bar h1 class="pd_t40" title="KB증권 마이데이터서비스 <br>이용을 위해 <br>약관에 동의해주세요." />
          <div class="chk_list">
            <div class="chk_item">
              <kb-checkbox
                v-model="agreeAll"
                @change="agreeAllEvt"
                class="full"
              >
                전체 동의합니다.
              </kb-checkbox>
              <div class="chk_child">
                <div class="inner">
                  <kb-checkbox
                    v-model="agree1"
                    @change="agreeItemEvt"
                  >
                    (필수)서비스 이용 약관
                    <template slot="last">
                      <kb-button
                        not
                        class="chk_link"
                        aria-label="해당약관 상세 확인하기"
                        @click="showRule(0,$event.target)"
                      >해당약관 상세 확인하기</kb-button>
                    </template>
                  </kb-checkbox>
                  <kb-checkbox
                    v-model="agree2"
                    @change="agreeItemEvt"
                  >
                    (필수)마이데이터 서비스 이용약관
                    <template slot="last">
                      <kb-button
                        not
                        class="chk_link"
                        aria-label="해당약관 상세 확인하기"
                        @click="showRule(1,$event.target)"
                      >해당약관 상세 확인하기</kb-button>
                    </template>
                  </kb-checkbox>
                  <kb-checkbox
                    v-model="agree3"
                    @change="agreeItemEvt"
                  >
                    (필수)개인(신용)정보 수집・이용・제공 동의서
                    <template slot="last">
                      <kb-button
                        not
                        class="chk_link"
                        aria-label="해당약관 상세 확인하기"
                        @click="showRule(2,$event.target)"
                      >해당약관 상세 확인하기</kb-button>
                    </template>
                  </kb-checkbox>
                  <kb-checkbox
                    v-model="agree4"
                    @change="agreeItemEvt"
                  >
                    (선택)개인(신용)정보 수집・이용・제공 동의서 (마케팅)
                    <template slot="last">
                      <kb-button
                        not
                        class="chk_link"
                        aria-label="해당약관 상세 확인하기"
                        @click="showRule(3,$event.target)"
                      >해당약관 상세 확인하기</kb-button>
                    </template>
                  </kb-checkbox>
                  <div class="chk_child_txt">상품서비스 등 마케팅을 위한 연락방식(동의채널)</div>
                  <div class="chk_wrap">
                    <kb-checkbox
                      small
                      v-model="marketingVal1"
                    >
                      전화
                    </kb-checkbox>
                    <kb-checkbox
                      small
                      v-model="marketingVal2"
                    >
                      SMS
                    </kb-checkbox>
                    <kb-checkbox
                      small
                      v-model="marketingVal3"
                    >
                      이메일
                    </kb-checkbox>
                    <kb-checkbox
                      small
                      v-model="marketingVal4"
                    >
                      DM
                    </kb-checkbox>
                    <kb-checkbox
                      small
                      v-model="marketingVal5"
                    >
                      App Push
                    </kb-checkbox>
                  </div>
                  <kb-checkbox
                    v-model="agree5"
                    @change="agreeItemEvt"
                  >
                    (선택)개인(신용)정보 제공 동의서 (마케팅/계열사정보제공용)
                    <template slot="last">
                      <kb-button
                        not
                        class="chk_link"
                        aria-label="해당약관 상세 확인하기"
                        @click="showRule(4,$event.target)"
                      >해당약관 상세 확인하기</kb-button>
                    </template>
                  </kb-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>

        <kb-form-item
          label="(필수)이메일 정보"
          class="mg_t30"
        >
          <kb-input
            v-model="inpVal1"
            title="이메일 정보입력"
          />
        </kb-form-item>

        <kb-button-wrap bottom-fixed>
          <kb-button
            yellow
            :disabled="!agree1 || !agree2 || !agree3"
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
  name: 'UT02B001',
  data() {
    return {
      inpVal1: '',
      // 약관
      agreeShow: false,
      agreeAll: false,
      agreeOpen: true,
      agree1: false,
      agree2: false,
      agree3: false,
      agree4: false,
      agree5: false,
      marketingVal1: false,
      marketingVal2: false,
      marketingVal3: false,
      marketingVal4: false,
      marketingVal5: false,
    };
  },
  methods: {
    // 약관
    agreeAllEvt() {
      if (this.agreeAll) {
        this.agree1 = true;
        this.agree2 = true;
        this.agree3 = true;
        this.agree4 = true;
        this.agree5 = true;
      } else {
        this.agree1 = false;
        this.agree2 = false;
        this.agree3 = false;
        this.agree4 = false;
        this.agree5 = false;
      }
    },
    popAgreeAllEvt() {
      this.agreeAll = true;
      this.agree1 = true;
      this.agree2 = true;
      this.agree3 = true;
      this.agree4 = true;
      this.agree5 = true;
    },
    agreeItemEvt() {
      if (this.agree1 && this.agree2 && this.agree3 && this.agree4 && this.agree5) {
        this.agreeAll = true;
      } else {
        this.agreeAll = false;
      }
    },
    showRule(num, el) {
      this.$modal({
        component: () => import('@/views/UT/02/UT02B002.vue'),
        componentProps: {
          step: num,
        },
        returnFocus: el,
      }).then((result) => {
        if (result.payload) {
          this.popAgreeAllEvt();
        }
      });
    },
  },
};
</script>

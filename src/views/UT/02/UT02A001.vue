<template>
  <kb-page page-title="본인확인" :back="backEvt">
    <kb-page-body>
      <div class="section">
        <div class="user_check_wrap">
          <kb-transition-group :name="slideDirection">
            <div v-if="step === 0" :key="0">
              <div class="section">
                <kb-title-bar h1 class="pd_t40" title="본인확인을 위해 <br>약관에 동의해주세요." />
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
                          개인(신용)정보 동의서
                          <template slot="last">
                            <kb-button
                              not
                              class="chk_link"
                              aria-label="해당약관 상세 확인하기"
                              @click="showRule('views/UT/02/UT02A003.vue',$event.target)"
                            >해당약관 상세 확인하기</kb-button>
                          </template>
                        </kb-checkbox>
                        <kb-checkbox
                          v-model="agree2"
                          @change="agreeItemEvt"
                        >
                          개인정보 수집 이용 동의(이동통신)
                          <template slot="last">
                            <kb-button
                              not
                              class="chk_link"
                              aria-label="해당약관 상세 확인하기"
                              @click="showRule('views/UT/02/UT02A006.vue',$event.target)"
                            >해당약관 상세 확인하기</kb-button>
                          </template>
                        </kb-checkbox>
                        <kb-checkbox
                          v-model="agree3"
                          @change="agreeItemEvt"
                        >
                          고객식별정보 처리 동의
                          <template slot="last">
                            <kb-button
                              not
                              class="chk_link"
                              aria-label="해당약관 상세 확인하기"
                              @click="showRule('views/UT/02/UT02A007.vue',$event.target)"
                            >해당약관 상세 확인하기</kb-button>
                          </template>
                        </kb-checkbox>
                        <kb-checkbox
                          v-model="agree4"
                          @change="agreeItemEvt"
                        >
                          통신사 이용약관 동의
                          <template slot="last">
                            <kb-button
                              not
                              class="chk_link"
                              aria-label="해당약관 상세 확인하기"
                              @click="showRule('views/UT/02/UT02A008.vue',$event.target)"
                            >해당약관 상세 확인하기</kb-button>
                          </template>
                        </kb-checkbox>
                        <kb-checkbox
                          v-model="agree5"
                          @change="agreeItemEvt"
                        >
                          서비스 이용약관 동의
                          <template slot="last">
                            <kb-button
                              not
                              class="chk_link"
                              aria-label="해당약관 상세 확인하기"
                              @click="showRule('views/UT/02/UT02A009.vue',$event.target)"
                            >해당약관 상세 확인하기</kb-button>
                          </template>
                        </kb-checkbox>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="step === 1" :key="1">
              <kb-folding-panel
                :active="isShow2"
                class="mg_b24"
              >
                <kb-form-item
                  class="mg_t0"
                  label="휴대폰번호"
                >
                  <div class="form_box">
                    <div class="wp_35">
                      <kb-select
                        v-model="phoneVal1"
                        ref="select1"
                        title="휴대폰번호 통신사 선택"
                        :options="phoneOpt"
                        @change="isValChk4"
                      />
                    </div>
                    <div class="wp_65">
                      <kb-input
                        ref="input4"
                        type="number"
                        v-model="phoneVal2"
                        title="휴대폰번호 입력"
                        maxlength="13"
                        @keyup.enter="isValChk5"
                        @change="isValChk5"
                      />
                    </div>
                  </div>
                </kb-form-item>
              </kb-folding-panel>

              <kb-folding-panel
                :active="isShow1"
                class="mg_b24"
              >
                <kb-form-item
                  class="mg_t0"
                  label="주민등록번호"
                >
                  <div class="form_user_number">
                    <div class="left">
                      <kb-input
                        ref="input2"
                        v-model="inpVal2"
                        type="tel"
                        title="주민등록번호 앞 6자리입력"
                        maxlength="6"
                        @keyup="isValChk2"
                        @change="isValChk2"
                      />
                    </div>
                    <div class="wf_20 t_center">-</div>
                    <div class="right">
                      <kb-input
                        ref="input3"
                        v-model="inpVal3"
                        maxlength="1"
                        tag="label"
                        type="tel"
                        not-del
                        title="주민등록번호 뒷 1자리입력"
                        @keyup="isValChk3"
                        @change="isValChk3"
                      >
                        <span aria-hidden="true">●</span>
                        <span aria-hidden="true">●</span>
                        <span aria-hidden="true">●</span>
                        <span aria-hidden="true">●</span>
                        <span aria-hidden="true">●</span>
                        <span aria-hidden="true">●</span>
                      </kb-input>
                    </div>
                  </div>
                </kb-form-item>
              </kb-folding-panel>

              <kb-form-item
                class="mg_t0"
                label="이름"
              >
                <kb-input
                  ref="input1"
                  v-model="inpVal1"
                  title="이름입력"
                  @keyup.enter="isValChk1Enter"
                  @change="isValChk1Enter"
                />
              </kb-form-item>
            </div>

            <div v-if="step === 2" :key="2">
              <kb-form-item
                class="mg_t0"
                label="인증번호"
              >
                <kb-input
                  ref="input5"
                  type="tel"
                  v-model="phoneVal3"
                  placeholder="인증번호를 입력해주세요."
                  maxlength="6"
                  title="인증번호 입력"
                  @keyup="isValChk6"
                  @change="isValChk6"
                >
                  <div class="timer">03:00</div>
                </kb-input>
              </kb-form-item>
            </div>
          </kb-transition-group>
        </div>

        <kb-button-wrap class="mg_t0">
          <kb-button class="fw_normal fz_14">
            다른 방법으로 본인확인
          </kb-button>
        </kb-button-wrap>

        <kb-button-wrap bottom-fixed>
          <kb-button yellow v-if="step === 0" :disabled="agreeChecked" @click="agreeClick">다음</kb-button>
          <kb-button yellow v-if="step === 1" :disabled="phoneVal2.length < 10" @click="isValChk5">다음</kb-button>
          <kb-button line v-if="step === 2">인증번호 재전송</kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT02A001',
  data() {
    return {
      step: 0,
      slideDirection: 'next',
      inpVal1: '',
      isShow1: false,
      inpVal2: '',
      inpVal3: '',
      isShow2: false,
      phoneVal1: '',
      phoneVal2: '',
      isShow3: false,
      phoneVal3: '',
      phoneOpt: [
        { text: '통신사', value: '' },
        { text: 'SKT', value: '1' },
        { text: 'KT', value: '2' },
        { text: 'LG U+', value: '3' },
        { text: 'SKT(알뜰폰)', value: '5' },
        { text: 'KT(알뜰폰)', value: '6' },
      ],
      phoneChecked: false,
      // 약관
      agreeShow: false,
      agreeAll: false,
      agreeOpen: false,
      agree1: false,
      agree2: false,
      agree3: false,
      agree4: false,
      agree5: false,
      nextStep: false,
    };
  },
  computed: {
    agreeChecked() {
      if (this.agree1 === true && this.agree2 === true && this.agree3 === true && this.agree4 === true && this.agree5 === true) return false;
      return true;
    },
  },
  methods: {
    backEvt() {
      if (this.step === 0) {
        window.history.back();
      } else {
        this.toStep(this.step - 1);
      }
    },
    toStep(i) {
      if (this.step > i) {
        this.slideDirection = 'prev';
      } else {
        this.slideDirection = 'next';
      }
      this.step = i;
    },
    agreeClick() {
      this.toStep(1);
      setTimeout(() => {
        this.$refs.input1.focus();
      }, 300);
    },
    isValChk1Enter() {
      if (this.inpVal1.length >= 2) {
        this.isShow1 = true;
        setTimeout(() => {
          this.$refs.input2.focus();
        }, 300);
      }
    },
    isValChk2(e) {
      console.log(e.type);
      if (this.inpVal2.length >= 6) {
        if (this.inpVal3.length >= 1) {
          this.isShow2 = true;
          setTimeout(() => {
            this.$refs.select1.focus();
          }, 300);
        } else {
          this.$refs.input3.focus();
        }
      } else if (e.type === 'change') {
        this.$alert('주민등록번호 앞 6자리를 입력해주세요').then(() => {
          this.$refs.input2.focus();
        });
      }
    },
    isValChk3() {
      if (this.inpVal3.length >= 1) {
        if (this.inpVal2.length >= 6) {
          this.isShow2 = true;
          setTimeout(() => {
            this.$refs.select1.focus();
          }, 300);
        } else {
          this.$refs.input2.focus();
        }
      }
    },
    isValChk4() {
      setTimeout(() => {
        if (this.phoneVal1 !== '') this.$refs.input4.focus();
      }, 300);
    },
    isValChk5() {
      if (this.phoneVal2.length >= 10) {
        this.toStep(2);
        setTimeout(() => {
          this.$refs.input5.focus();
        }, 300);
      }
    },
    isValChk6() {
      if (this.phoneVal3.length === 6) {
        if (this.phoneChecked) {
          // 인증번호 맞으면 이전으로
          this.$alert('인증번호 맞음').then(() => {
            // this.toStep(1); // 입력화면으로 다시보내거나
            this.$router.push('/TO/00'); // 페이지 이동하거나
          });
        } else {
          // 틀리면 알럿 후 다시 포커스
          this.$alert('인증번호 틀림').then(() => {
            this.phoneChecked = true;
            this.$refs.input5.focus();
          });
        }
      }
    },
    // 약관
    agreeAllEvt() {
      if (this.agreeAll) {
        this.agreeOpen = true;
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
    agreeToggleEvt() {
      this.agreeOpen = !this.agreeOpen;
    },
    agreeItemEvt() {
      if (this.agree1 === true && this.agree2 === true && this.agree3 === true && this.agree4 === true && this.agree5 === true) {
        this.agreeAll = true;
      } else {
        this.agreeAll = false;
      }
    },
    showRule(src, el) {
      this.$modal({
        component: () => import('@/' + src),
        returnFocus: el,
      });
    },
  },
};
</script>

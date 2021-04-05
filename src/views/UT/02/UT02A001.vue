<template>
  <kb-page page-title="본인확인">
    <kb-page-body>
      <div class="section">
        <div class="chk_list" v-if="agreeShow">
          <div class="chk_item">
            <kb-checkbox
              v-model="agreeAll"
              @change="agreeAllEvt"
            >
              휴대폰 인증 약관 동의
              <template slot="last">
                <kb-button
                  not
                  class="chk_link toggle"
                  :class="{open:agreeOpen}"
                  aria-label="상세약관목록 확인하기"
                  @click="agreeToggleEvt"
                >상세약관목록 확인하기</kb-button>
              </template>
            </kb-checkbox>
            <kb-folding-panel
              class="chk_child"
              :active="agreeOpen"
            >
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
            </kb-folding-panel>
          </div>
        </div>

        <kb-form-item
          v-if="inpVal2 !== '' || (phoneVal1 !== '' && phoneVal2 !== '')"
          label="휴대폰번호"
        >
          <div class="form_box">
            <div class="wp_35">
              <kb-select
                v-model="phoneVal1"
                title="휴대폰번호 통신사 선택"
                :options="phoneOpt"
              />
            </div>
            <div class="wp_65">
              <kb-input
                v-model="phoneVal2"
                title="휴대폰번호 나머지번호 입력"
              />
            </div>
          </div>

          <kb-input
            v-if="phoneSend"
            v-model="phoneVal3"
            placeholder="인증번호를 입력해주세요."
            title="인증번호 입력"
            class="mg_t8"
          >
            <div class="timer">03:00</div>
          </kb-input>

          <kb-button-wrap>
            <kb-button v-if="phoneSend" line>인증번호 재전송</kb-button>
            <kb-button v-if="phoneSend" yellow @click="agreeShow = true">확인</kb-button>
            <kb-button v-if="!phoneSend" line :disabled="phoneVal1 === '' || phoneVal2 === ''" @click="phoneSend = true">인증번호 요청</kb-button>
          </kb-button-wrap>
        </kb-form-item>

        <kb-form-item
          v-if="isShow1"
          label="주민등록번호"
        >
          <div class="form_box">
            <div>
              <kb-input
                v-model="inpVal2"
                type="tel"
                title="주민등록번호 앞자리입력"
              />
            </div>
            <div class="wf_20 t_center">-</div>
            <div>
              <kb-input
                v-model="inpVal3"
                title="주민등록번호 뒷지리입력"
              />
            </div>
          </div>

        </kb-form-item>

        <kb-form-item
          label="이름"
        >
          <kb-input
            v-model="inpVal1"
            title="이름입력"
            @focusout="isValChk1"
          />
        </kb-form-item>

        <kb-button-wrap bottom-fixed vertical>
          <kb-button class="fw_normal fz_14">
            다른 방법으로 본인확인
          </kb-button>
          <kb-button
            yellow
            :disabled="!phoneSend"
          >
            확인
          </kb-button>
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
      inpVal1: '',
      isShow1: false,
      inpVal2: '',
      inpVal3: '',
      phoneVal1: '',
      phoneVal2: '',
      phoneVal3: '',
      phoneOpt: [
        { text: '통신사', value: '' },
        { value: '010', text: '010' },
      ],
      phoneSend: false,
      // 약관
      agreeShow: false,
      agreeAll: false,
      agreeOpen: false,
      agree1: false,
      agree2: false,
      agree3: false,
      agree4: false,
      agree5: false,
    };
  },
  methods: {
    isValChk1() {
      if (this.inpVal1 !== '') this.isShow1 = true;
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

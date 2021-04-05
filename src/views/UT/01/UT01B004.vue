<template>
  <kb-pop
    full
    title="약관동의"
    :close="popClose"
  >
    <kb-pop-body>
      <div class="section">
        <div class="section">
          <kb-title-bar h1 class="pd_t40" title="KB증권 오늘 서비스 <br>새로운 약관에 동의해주세요." />
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
                      >해당약관 상세 확인하기</kb-button>
                    </template>
                  </kb-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button
        yellow
        :disabled="!agree1 || !agree2 || !agree3"
        @click="popClose"
      >
        확인
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'UT01B004',
  props: {
  },
  data() {
    return {
      agreeShow: false,
      agreeAll: false,
      agreeOpen: true,
      agree1: false,
      agree2: false,
      agree3: false,
      agree4: false,
    };
  },
  mounted() {
  },
  methods: {
    agreeAllEvt() {
      if (this.agreeAll) {
        this.agree1 = true;
        this.agree2 = true;
        this.agree3 = true;
        this.agree4 = true;
      } else {
        this.agree1 = false;
        this.agree2 = false;
        this.agree3 = false;
        this.agree4 = false;
      }
    },
    agreeItemEvt() {
      if (this.agree1 && this.agree2 && this.agree3 && this.agree4) {
        this.agreeAll = true;
      } else {
        this.agreeAll = false;
      }
    },
    popClose() {
      if (this.agree1 && this.agree2 && this.agree3) {
        this.$emit('close');
      } else {
        this.$alert('<strong>동의해주세요</strong><br><br>서비스 이용을 위해<br>필수 약관동의가 필요합니다.');
      }
    },
  },
};
</script>

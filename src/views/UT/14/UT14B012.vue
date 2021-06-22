<template>
  <kb-page page-title="한번에 연동">
    <kb-page-body>
      <div class="section">
        <div class="inner_box">
          <kb-title-bar
            h2
            tit-tag="h1"
            title="연동할 계좌 및 정보를<br>선택해주세요."
          />
        </div>
        <div class="chk_list type2">
          <div class="chk_item">
            <div class="right">
              <kb-checkbox
                v-model="chkAll"
                @change="chkAllEvt"
                class="full"
              >
                {{chkAll ? '선택해제' : '전체선택'}}
              </kb-checkbox>
            </div>
            <kb-foldings type1 not-toggle class="acc_info_list" first-open>
              <kb-folding>
                <template slot="title">
                  <div class="acc_info_head">
                    <strong>은행</strong>
                    <strong class="cut">3</strong>
                  </div>
                </template>
                <!-- 계좌정보 -->
                <div class="accordion_box type2">
                  <div class="acc_info_box">
                    <!-- 2021-04-12 no_style 추가 -->
                    <kb-checkbox
                      v-model="chk1"
                      @change="chkItemEvt"
                      class="acc_info_chkbox bg no_style"
                    >
                      <strong>KB국민은행</strong>
                      <strong>멀티플랜무배당국민통합</strong>
                      <template slot="summary">
                        <strong class="ico_state">활동</strong>
                        <strong>입출금</strong>
                      </template>
                      <template slot="last">
                        <span class="acc_num">69630101222222</span>
                      </template>
                    </kb-checkbox>
                  </div>
                  <!-- //계좌정보 -->
                  <div class="acc_info_box">
                    <!-- 2021-04-12 no_style 추가 -->
                    <kb-checkbox
                      v-model="chk2"
                      @change="chkItemEvt"
                      class="acc_info_chkbox bg no_style"
                    >
                      <strong>우리은행</strong>
                      <strong>우리급여저축예금</strong>
                      <template slot="summary">
                        <strong class="">비활동</strong>
                        <strong>입출금</strong>
                      </template>
                      <template slot="last">
                        <span class="acc_num">69630101222222</span>
                      </template>
                    </kb-checkbox>
                  </div>
                  <div class="acc_info_box">
                    <!-- 2021-04-12 no_style 추가 -->
                    <kb-checkbox
                      v-model="chk3"
                      @change="chkItemEvt"
                      class="acc_info_chkbox bg no_style"
                    >
                      <strong>수산업협동조합중앙회</strong>
                      <strong>SH-아문디 필승코리아 국내 주식형 펀드</strong>
                      <template slot="summary">
                        <strong class="ico_state">활동</strong>
                        <strong>수익증권</strong>
                      </template>
                      <template slot="last">
                        <span class="acc_num">69630101222222</span>
                      </template>
                    </kb-checkbox>
                  </div>
                </div>
              </kb-folding>
              <kb-folding>
                <template slot="title">
                  <div class="acc_info_head">
                    <strong>투자</strong>
                    <strong class="cut">2</strong>
                  </div>
                </template>
                <div class="accordion_box type2">
                  <div class="acc_info_box">
                    <!-- 2021-04-12 no_style 추가 -->
                    <kb-checkbox
                      v-model="chk4"
                      @change="chkItemEvt"
                      class="acc_info_chkbox bg no_style"
                    >
                      <strong>KB국민은행</strong>
                      <strong>멀티플랜무배당국민통합</strong>
                      <template slot="summary">
                        <strong class="ico_state">활동</strong>
                        <strong>입출금</strong>
                      </template>
                      <template slot="last">
                        <span class="acc_num">69630101222222</span>
                      </template>
                    </kb-checkbox>
                  </div>
                  <div class="acc_info_box">
                    <!-- 2021-04-12 no_style 추가 -->
                    <kb-checkbox
                      v-model="chk5"
                      @change="chkItemEvt"
                      class="acc_info_chkbox bg no_style"
                    >
                      <strong>우리은행</strong>
                      <strong>우리급여저축예금</strong>
                      <template slot="summary">
                        <strong class="">비활동</strong>
                        <strong>입출금</strong>
                      </template>
                      <template slot="last">
                        <span class="acc_num">69630101222222</span>
                      </template>
                    </kb-checkbox>
                  </div>
                </div>
              </kb-folding>
              <kb-folding>
                <template slot="title">
                  <div class="acc_info_head">
                    <strong>보험</strong>
                    <strong class="cut">3</strong>
                  </div>
                </template>
                <div class="accordion_box type2">
                  <div class="acc_info_box">
                    <!-- 2021-04-12 no_style 추가 -->
                    <kb-checkbox
                      v-model="chk6"
                      @change="chkItemEvt"
                      class="acc_info_chkbox bg no_style"
                    >
                      <strong>KB증권</strong>
                      <strong>개인퇴직연금(IRP)</strong>
                      <strong>김국민</strong>
                      <template slot="summary">
                        <strong class="ico_state">정상</strong>
                        <strong>퇴직연금</strong>
                      </template>
                      <template slot="last">
                        <span class="acc_num">69630101222222</span>
                      </template>
                    </kb-checkbox>
                  </div>
                  <div class="acc_info_box">
                    <!-- 2021-04-12 no_style 추가 -->
                    <kb-checkbox
                      v-model="chk7"
                      @change="chkItemEvt"
                      class="acc_info_chkbox bg no_style"
                    >
                      <strong>KB생명</strong>
                      <strong>멀티플랜무배당국민통합</strong>
                      <template slot="summary">
                        <strong class="ico_state">정상</strong>
                        <strong>상해</strong>
                      </template>
                      <template slot="last">
                        <span class="acc_num">69630101222222</span>
                      </template>
                    </kb-checkbox>
                  </div>
                  <div class="acc_info_box">
                    <!-- 2021-04-12 no_style 추가 -->
                    <kb-checkbox
                      v-model="chk8"
                      @change="chkItemEvt"
                      class="acc_info_chkbox bg no_style"
                    >
                      <strong>삼성화재</strong>
                      <strong>휴대폰보험</strong>
                      <template slot="summary">
                        <strong class="">실효</strong>
                        <strong>보험기타</strong>
                      </template>
                      <template slot="last">
                        <span class="acc_num">69630101222222</span>
                      </template>
                    </kb-checkbox>
                  </div>
                </div>
              </kb-folding>
            </kb-foldings>
          </div>
        </div>

        <kb-button-wrap bottom-fixed>
          <kb-button
            yellow
            :disabled="!this.chk1 && !this.chk2 && !this.chk3 && !this.chk4 && !this.chk5 && !this.chk6 && !this.chk7 && !this.chk8"
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
  name: 'UT14B012',
  data() {
    return {
      chkAll: false,
      chkOpen: true,
      chk1: false,
      chk2: false,
      chk3: false,
      chk4: false,
      chk5: false,
      chk6: false,
      chk7: false,
      chk8: false,
    };
  },
  methods: {
    chkAllEvt() {
      if (this.chkAll) {
        this.chk1 = true;
        this.chk2 = true;
        this.chk3 = true;
        this.chk4 = true;
        this.chk5 = true;
        this.chk6 = true;
        this.chk7 = true;
        this.chk8 = true;
      } else {
        this.chk1 = false;
        this.chk2 = false;
        this.chk3 = false;
        this.chk4 = false;
        this.chk5 = false;
        this.chk6 = false;
        this.chk7 = false;
        this.chk8 = false;
      }
    },
    chkItemEvt() {
      if (this.chk1 && this.chk2 && this.chk3 && this.chk4 && this.chk5 && this.chk6 && this.chk7 && this.chk8) {
        this.chkAll = true;
      } else {
        this.chkAll = false;
      }
    },
  },
};
</script>

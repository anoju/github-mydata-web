<template>
  <kb-pop
    bottom
    title="입금계좌선택"
  >
    <kb-pop-body>
      <div class="section">
        <kb-btn-toggle>
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal"
              button
              value="1"
            >
              최근계좌
            </kb-radio>
            <kb-radio
              v-model="toggleVal"
              button
              value="2"
            >
              내계좌
            </kb-radio>
          </kb-btn-toggle-row>
        </kb-btn-toggle>
        <div v-if="toggleVal === '1'" class="pop_content">
          <div class="selete_list" v-if="selectVal1 !== '4'">
            <div class="item">
              <kb-radio
                checkbox
                v-model="selectVal1"
                button
                value="1"
              >
                <div class="txt">
                  <span class="mg_r8">우리은행</span>
                  <span>김국민</span>
                  <div class="num mg_t4">1002666666666</div>
                </div>
              </kb-radio>
            </div>
            <div class="item">
              <kb-radio
                checkbox
                v-model="selectVal1"
                button
                value="2"
              >
                <div class="txt">
                  <span class="mg_r8">KB증권</span>
                  <span>종합위탁 김국민</span>
                  <div class="num mg_t4">245666111 01</div>
                </div>
              </kb-radio>
            </div>
            <div class="item">
              <kb-radio
                checkbox
                v-model="selectVal1"
                button
                value="3"
              >
                <div class="txt">
                  <span class="mg_r8">카카오뱅크</span>
                  <span>김국민</span>
                  <div class="num mg_t4">333333333333</div>
                </div>
              </kb-radio>
            </div>
            <div class="item">
              <kb-radio
                checkbox
                v-model="selectVal1"
                button
                value="4"
              >
                <div class="txt">
                  <span class="mg_r8">기업은행</span>
                  <span>김국민</span>
                  <div class="num mg_t4">최근 입금계좌 없을때</div>
                </div>
              </kb-radio>
            </div>
          </div>
          <div v-if="selectVal1 === '4'">
            <div class="no_list_txt h231">
              <strong class="tit">최근 입금계좌가 없습니다.</strong>
            </div>
          </div>
        </div>
        <div v-if="toggleVal === '2'" class="pop_content">
          <kb-tabs
            type2
            class="mg_t16"
            tabs-class="no_line"
            content-class="mg_t0"
          >
            <kb-tab
              title="은행계좌"
              active
            >
              <div v-if="selectVal2 !== '3'">
                <div class="selete_list">
                  <div class="item">
                    <kb-radio
                      checkbox
                      v-model="selectVal2"
                      button
                      value="1"
                    >
                      <div class="txt">
                        <span class="mg_r8">우리은행</span>
                        <span>우리급여저축예금</span>
                        <div class="num mg_t4">1002666666666</div>
                      </div>
                    </kb-radio>
                  </div>
                  <div class="item">
                    <kb-radio
                      checkbox
                      v-model="selectVal2"
                      button
                      value="2"
                    >
                      <div class="txt">
                        <span class="mg_r8">기업은행</span>
                        <span>자유저축예금</span>
                        <div class="num mg_t4">222222222222</div>
                      </div>
                    </kb-radio>
                  </div>
                  <div class="item">
                    <kb-radio
                      checkbox
                      v-model="selectVal2"
                      button
                      value="3"
                    >
                      <div class="txt">
                        <span class="mg_r8">우리은행</span>
                        <span>우리급여저축예금</span>
                        <div class="num mg_t4">등록계좌없을때</div>
                      </div>
                    </kb-radio>
                  </div>
                </div>
                <div class="btm_btn_util type3">
                  <kb-button not class="btn_linkage">계좌추가</kb-button>
                </div>
              </div>
              <div v-if="selectVal2 === '3'">
                <div class="no_list_txt h117">
                  <strong class="tit">등록된 은행 계좌가 없습니다.</strong>
                  <div class="txt">아직 다른 은행 계좌를 등록하지 않으셨네요.<br>간단한 인증만으로 즉시 등록됩니다.</div>
                </div>
                <kb-button-wrap bottom-fixed>
                  <kb-button
                    yellow
                  >
                    +계좌추가
                  </kb-button>
                </kb-button-wrap>
              </div>
            </kb-tab>
            <kb-tab
              title="증권계좌"
            >
              <div v-if="selectVal3 !== '3'">
                <div class="selete_list">
                  <div class="item">
                    <kb-radio
                      checkbox
                      v-model="selectVal3"
                      button
                      value="1"
                    >
                      <div class="txt">
                        <span class="mg_r8">종합위탁</span>
                        <span>김국민</span>
                        <div class="num mg_t4">275666111 01</div>
                      </div>
                    </kb-radio>
                  </div>
                  <div class="item">
                    <kb-radio
                      checkbox
                      v-model="selectVal3"
                      button
                      value="2"
                    >
                      <div class="txt">
                        <span class="mg_r8">종합위탁</span>
                        <span>김국민</span>
                        <div class="num mg_t4">275666111 01</div>
                      </div>
                    </kb-radio>
                  </div>
                  <div class="item">
                    <kb-radio
                      checkbox
                      v-model="selectVal3"
                      button
                      value="3"
                    >
                      <div class="txt">
                        <span class="mg_r8">종합위탁</span>
                        <span>김국민</span>
                        <div class="num mg_t4">등록계좌없을때</div>
                      </div>
                    </kb-radio>
                  </div>
                </div>
                <div class="btm_btn_util type3">
                  <kb-button not class="btn_linkage">계좌추가</kb-button>
                </div>
              </div>
              <div v-if="selectVal3 === '3'">
                <div class="no_list_txt h117">
                  <strong class="tit">등록된 증권 계좌가 없습니다.</strong>
                  <div class="txt">아직 다른 증권 계좌를 등록하지 않으셨네요.<br>간단한 인증만으로 즉시 등록됩니다.</div>
                </div>
                <kb-button-wrap bottom-fixed>
                  <kb-button
                    yellow
                  >
                    +계좌추가
                  </kb-button>
                </kb-button-wrap>
              </div>
            </kb-tab>
          </kb-tabs>
        </div>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TR04A002',
  data() {
    return {
      toggleVal: '1',
      selectVal1: '1',
      selectVal2: '',
      selectVal3: '',
    };
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

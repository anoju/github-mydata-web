<template>
  <kb-pop
    bottom
    title="출금계좌선택"
    title-class="flex_ty"
  >
    <template slot="title_next">
      <kb-button link blue v-if="toggleVal === '2'">
        은행/증권계좌
      </kb-button>
    </template>
    <kb-pop-body>
      <div class="section">
        <kb-btn-toggle>
          <kb-btn-toggle-row>
            <kb-radio
              v-model="toggleVal"
              button
              value="1"
            >
              KB증권
            </kb-radio>
            <kb-radio
              v-model="toggleVal"
              button
              value="2"
            >
              다른금융기관
            </kb-radio>
          </kb-btn-toggle-row>
        </kb-btn-toggle>
        <div v-if="toggleVal === '1'" class="pop_content">
          <div class="selete_list" v-if="selectVal1 !== '2' && selectVal1 !== '3'">
            <div class="item">
              <kb-radio
                checkbox
                v-model="selectVal1"
                button
                value="1"
              >
                <div class="txt">
                  <span class="mg_r8">종합위탁</span>
                  <span>김국민</span>
                  <div class="num mg_t4">123-124234-12 02</div>
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
                  <span class="mg_r8">CMA</span>
                  <span>김국민</span>
                  <div class="num mg_t4">계좌없을때 케이스 확인 시 선택</div>
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
                  <span class="mg_r8">선물옵션</span>
                  <span>김국민</span>
                  <div class="num mg_t4">추가등록 케이스 확인 시 선택</div>
                </div>
              </kb-radio>
            </div>
          </div>
          <div v-if="selectVal1 === '2'">
            <div class="no_list_txt">
              <strong class="tit">KB증권 계좌가 없습니다.</strong>
              <div class="txt">계좌개설 후 이체는 물론 상품가입, 매매까지 이용해 보세요.</div>
            </div>
            <kb-button-wrap bottom-fixed>
              <kb-button
                yellow
              >
                비대면 계좌개설
              </kb-button>
            </kb-button-wrap>
          </div>
          <div v-if="selectVal1 === '3'">
            <div class="no_list_txt">
              <strong class="tit">KB증권 계좌를 추가등록 해주세요.</strong>
              <div class="txt">아직 KB증권 계좌를 등록하지 않으셨네요.<br>간단한 인증만으로 즉시 등록됩니다.</div>
            </div>
            <kb-button-wrap bottom-fixed>
              <kb-button
                yellow
              >
                KB증권 계좌추가
              </kb-button>
            </kb-button-wrap>
          </div>
        </div>
        <div v-if="toggleVal === '2'" class="pop_content">
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
                  disabled
                >
                  <div class="txt">
                    <span class="mg_r8">우리은행</span>
                    <span>우리급여저축예금</span>
                    <i class="ico_error" aria-hidden="true"></i><!-- 비활성화 시 추가 -->
                    <div class="num mg_t4">1002666666666</div>
                  </div>
                </kb-radio>
                <!-- //비활성화 시 추가 -->
                <kb-button link blue>
                  계좌관리<i class="bt_ic_arr" aria-hidden="true"></i>
                </kb-button>
                <!-- 비활성화 시 추가 -->
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
                    <div class="num mg_t4">출금가능 등록계좌없을때</div>
                  </div>
                </kb-radio>
              </div>
            </div>
            <div class="btm_btn_util type3">
              <kb-button not class="btn_linkage">계좌추가</kb-button>
            </div>
          </div>
          <div v-if="selectVal2 === '3'">
            <div class="no_list_txt">
              <strong class="tit">출금가능한 등록 계좌가 없습니다.</strong>
              <div class="txt">타기관 계좌에서 출금을 하시려면 계좌 등록과 해당 계좌의 출금동의가 필요합니다.<br>(KB증권 오픈뱅킹 출금동의)</div>
            </div>
            <kb-button-wrap bottom-fixed>
              <kb-button
                yellow
              >
                +계좌추가
              </kb-button>
              <kb-button
                yellow
              >
                출금동의
              </kb-button>
            </kb-button-wrap>
          </div>
        </div>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TR01A001',
  data() {
    return {
      toggleVal: '1',
      selectVal1: '1',
      selectVal2: '',
    };
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

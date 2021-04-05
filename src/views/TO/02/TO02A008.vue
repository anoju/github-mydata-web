<template>
  <kb-pop
    full
    title="실물자산 수정"
    class="assets_fullpop_wrap"
  >
    <kb-pop-body>
      <div class="section">
        <!-- 부동산 검색 전 -->
        <template v-if="!tab2Search">
          <p class="small_text">부동산 정보를 입력해주세요.</p>
          <kb-form-item
            label="주거형태"
          >
            <kb-validate-item
              success=""
              error=""
            >
              <kb-select
                v-model="selectVal1"
                :options="selectOpt1"
              />
            </kb-validate-item>
          </kb-form-item>

          <kb-form-item
            label="주소"
          >
            <kb-validate-item
              success=""
              error=""
            >
              <kb-input />
            </kb-validate-item>
          </kb-form-item>

          <kb-button-wrap bottom-fixed>
            <template slot="inner">
              <div class="flex">
                <kb-button
                  yellow
                  @click="searchClick"
                >
                  조회
                </kb-button>
              </div>
            </template>
          </kb-button-wrap>
        </template>
        <!-- //부동산 검색 전 -->

        <!-- 부동산 주소검색 완료후 -->
        <template v-if="tab2Search">
          <div class="assets_info_box">
            <div class="assets_info">
              <p class="tit">아파트</p>
              <div class="txt">서울특별시 강동구 문원동 강동엘센트로 푸르지오 줄바꿈 생기면 높이조절</div>
              <kb-button aTag not class="btn_refresh" @click="searchClick">재조회</kb-button>
            </div>
          </div>
          <kb-form-item
            label="면적"
          >
            <kb-select
              v-model="selectVal2"
              :options="selectOpt2"
            />
          </kb-form-item>
          <kb-form-item
            label="소유여부"
          >
            <kb-btn-toggle>
              <kb-btn-toggle-row>
                <kb-radio
                  v-model="toggleVal2"
                  button
                  value="0"
                >
                  자가
                </kb-radio>
                <kb-radio
                  v-model="toggleVal2"
                  button
                  value="1"
                >
                  전세
                </kb-radio>
                <kb-radio
                  v-model="toggleVal2"
                  button
                  value="2"
                >
                  월세
                </kb-radio>
              </kb-btn-toggle-row>
            </kb-btn-toggle>
          </kb-form-item>
          <kb-form-item
            :label="labelText2[toggleVal2][0]"
          >
            <kb-validate-item
              success=""
              error=""
            >
              <kb-input
                value="2,000"
                readonly
                class="ty2"
                input-class="t_right"
                unit="만원"
                :title="labelText2[toggleVal2][0]"
              />
            </kb-validate-item>
          </kb-form-item>
          <kb-form-item
            :label="labelText2[toggleVal2][1]"
          >
            <kb-validate-item
              success=""
              error=""
            >
              <kb-input
                type="tel"
                input-class="t_right"
                placeholder="입력하세요"
                unit="만원"
                :title="labelText2[toggleVal2][1] + '입력'"
                v-model="number"
              />
            </kb-validate-item>
          </kb-form-item>

          <kb-button-wrap bottom-fixed>
            <template slot="inner">
              <div class="flex">
                <kb-button
                  line
                >
                  삭제
                </kb-button>
                <kb-button
                  yellow
                >
                  수정
                </kb-button>
              </div>
            </template>
          </kb-button-wrap>
        </template>
        <!-- //부동산 주소검색 완료후 -->
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TO02A008',
  props: {
  },
  mounted() {
  },
  data() {
    return {
      inpVal1: '종류',
      inpVal2: '명칭',
      inpVal3: '',
      selectVal1: 'A',
      selectOpt1: [
        { text: '선택하기', value: '' },
        { text: '아파트', value: 'A' },
        { text: '그 외', value: 'B' },
      ],
      selectVal2: '84㎡',
      selectOpt2: [
        { text: '선택하기', value: '' },
        { text: '84㎡', value: '84' },
        { text: '90㎡', value: '90' },
        { text: '100㎡', value: '100' },
      ],
      toggleVal2: '0',
      labelText2: [['시세', '구매가'], ['시세', '구매가'], ['월세', '보증금']],
      tab2Search: true,
    };
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
    searchClick() {
      this.tab2Search = !this.tab2Search;
    },
  },
};
</script>

<template>
  <kb-pop
    full
    title="실물자산 입력"
    class="assets_fullpop_wrap"
  >
    <kb-pop-body>
      <div class="section">
        <kb-tabs fixed>
          <!-- 기타 -->
          <kb-tab
            title="기타"
            active
          >
            <p class="small_text">추가하실 자산 정보를 직접 입력해주세요.</p>
            <kb-form-item
              label="명칭"
            >
              <kb-validate-item
                success=""
                error=""
              >
                <kb-input
                  v-model="inpVal2"
                />
              </kb-validate-item>
            </kb-form-item>

            <kb-form-item
              label="금액"
            >
              <kb-validate-item
                success=""
                error=""
              >
                <kb-input
                  v-model="inpVal3"
                  type="tel"
                  input-class="t_right"
                  unit="만원"
                />
              </kb-validate-item>
            </kb-form-item>

            <!-- 새로 추가되는 항목 -->
            <div class="assets_add_box">
              <kb-form-item
                label="명칭"
              >
                <kb-validate-item
                  success=""
                  error=""
                >
                  <kb-input
                    v-model="inpVal2"
                  />
                </kb-validate-item>
              </kb-form-item>

              <kb-form-item
                label="금액"
              >
                <kb-validate-item
                  success=""
                  error=""
                >
                  <kb-input
                    v-model="inpVal3"
                    type="tel"
                    input-class="t_right"
                    unit="만원"
                  />
                </kb-validate-item>
              </kb-form-item>

              <kb-button not aTag class="btn_delete">
                삭제
              </kb-button>
            </div>
            <!-- //새로 추가되는 항목 -->

            <kb-button-wrap>
              <kb-button
                line
                class="more fz_16"
              >
                추가하기
              </kb-button>
            </kb-button-wrap>

            <kb-button-wrap bottom-fixed>
              <template slot="inner">
                <div class="flex">
                  <kb-button
                    yellow
                  >
                    등록
                  </kb-button>
                </div>
              </template>
            </kb-button-wrap>
          </kb-tab>
          <!-- //기타 -->

          <!-- 부동산 -->
          <kb-tab
            title="부동산"
          >
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
                      yellow
                    >
                      등록
                    </kb-button>
                  </div>
                </template>
              </kb-button-wrap>
            </template>
            <!-- //부동산 주소검색 완료후 -->
          </kb-tab>
          <!-- //부동산 -->

          <!-- 자동차 -->
          <kb-tab
            title="자동차"
          >
            <!-- 자동차 검색 전 -->
            <template v-if="!tab3Search">
              <p class="small_text">차량 정보를 입력해주세요.</p>

              <kb-form-item
                label="차량번호"
              >
                <kb-validate-item
                  success=""
                  error=""
                >
                  <kb-input
                    placeholder="12가1234 또는 123가1234"
                  />
                </kb-validate-item>
              </kb-form-item>

              <kb-button-wrap bottom-fixed>
                <template slot="inner">
                  <div class="flex">
                    <kb-button
                      yellow
                      @click="searchClick2"
                    >
                      조회
                    </kb-button>
                  </div>
                </template>
              </kb-button-wrap>
            </template>
            <!-- 자동차 검색 전 -->

            <!-- 자동차 검색 후 -->
            <template v-if="tab3Search">

              <div class="assets_info_box">
                <div class="assets_info">
                  <p class="tit">차량정보</p>
                  <div class="txt">산타페 더 프라임 2015년식</div>
                  <kb-button aTag not class="btn_refresh" @click="searchClick2">재조회</kb-button>
                </div>
              </div>
              <kb-form-item
                label="등급"
              >
                <kb-select />
              </kb-form-item>

              <kb-form-item
                label="주행거리"
              >
                <kb-select />
              </kb-form-item>

              <kb-form-item
                label="현재시세"
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
                  />
                </kb-validate-item>
              </kb-form-item>

              <kb-button-wrap bottom-fixed>
                <template slot="inner">
                  <div class="flex">
                    <kb-button
                      yellow
                    >
                      등록
                    </kb-button>
                  </div>
                </template>
              </kb-button-wrap>
            </template>
            <!-- //자동차 검색 후 -->
          </kb-tab>
          <!-- //자동차 -->
        </kb-tabs>

      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TO02A007',
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
      tab2Search: false,
      tab3Search: false,
    };
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
    searchClick() {
      this.tab2Search = !this.tab2Search;
    },
    searchClick2() {
      this.tab3Search = !this.tab3Search;
    },
  },
};
</script>

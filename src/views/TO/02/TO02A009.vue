<template>
  <kb-pop
    full
    title="실물자산 수정"
    class="assets_fullpop_wrap"
  >
    <kb-pop-body>
      <div class="section">
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
                title="현재시세"
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
        <!-- //자동차 검색 후 -->
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TO02A009',
  props: {
  },
  mounted() {
  },
  data() {
    return {
      inpVal1: '종류',
      inpVal2: '명칭',
      inpVal3: '',
      tab3Search: true,
    };
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
    searchClick2() {
      this.tab3Search = !this.tab3Search;
    },
  },
};
</script>

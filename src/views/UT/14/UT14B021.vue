<template>
  <kb-page page-title="한번에 연동">
    <kb-page-body>
      <div class="section">
        <div class="inner_box">
          <kb-title-bar
            h2
            tit-tag="h1"
            title=" 연동정보를 확인해 주세요."
          />
        </div>

        <div class="mg_t32">
          <kb-foldings type1 not-toggle class="acc_info_list" first-open>
            <kb-folding>
              <template slot="title">
                <div class="acc_info_head">
                  <strong>은행</strong>
                  <strong class="cut">3</strong>
                </div>
              </template>
              <div class="section_list">
                <div class="flex_wrap pd_t14 pd_b15">
                  <p class="fz_14 flex11">KB국민은행</p>
                  <kb-button not class="btn_delete">삭제</kb-button>
                </div>
                <div class="flex_wrap pd_t14 pd_b15">
                  <p class="fz_14 flex11">KB국민은행</p>
                  <kb-button not class="btn_delete">삭제</kb-button>
                </div>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>

        <kb-button-wrap bottom-fixed>
          <kb-button
            yellow
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
  name: 'UT14B021',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<template>
  <kb-page
    page-title="개인정보 변경"
  >
    <kb-page-body>
      <div class="section">
        <kb-title-bar h3 class="mg_t16">
          <template slot="left">
            <h2 class="tit">기본정보</h2>
          </template>
        </kb-title-bar>
        <kb-form-item
          label="휴대전화"
        >
          <kb-input
            v-model="fmVal1"
          />
        </kb-form-item>
        <kb-form-item
          label="이메일"
        >
          <kb-input
            v-model="fmVal2"
          />
        </kb-form-item>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button yellow>
          변경하기
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY04A017',
  data() {
    return {
      fmVal1: '010-12**-56**',
      fmVal2: 'abc****@kb.com',
    };
  },
  mounted() {
  },
  methods: {

  },
};
</script>

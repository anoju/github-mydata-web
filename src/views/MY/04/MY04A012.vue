<template>
  <kb-page page-title="마이페이지">
    <kb-page-body>
      <div class="section">
        <div class="section">
          <h2 class="mg_t40 fz_24">
            KB증권 오늘 서비스를 <br />
            탈퇴합니다.
          </h2>

          <ul class="txt_list mg_t16">
            <li class="dot fz_14 fc_666">회원 탈퇴 시 개인 신용정보와 연동하신 정보가 즉시 삭제됩니다.</li>
            <li class="dot fz_14 fc_666 mg_t12">‘KB오늘’ 서비스를 탈퇴 하셔도 KB증권의 서비스(able, M-able 등)는 이용이 가능합니다.</li>
          </ul>

          <div class="mg_t40 pd_t16" style="border-top:1px solid #eee;">
            <kb-checkbox
              v-model="checkVal1"
              value="1"
            >
              위의 내용에 동의합니다.
            </kb-checkbox>
          </div>
        </div>
      </div>

      <kb-button-wrap bottom-fixed>
        <kb-button
          yellow
        >
          탈퇴하기
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY04A012',
  data() {
    return {
      checkVal1: false,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

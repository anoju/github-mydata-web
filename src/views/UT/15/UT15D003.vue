<template>
  <kb-pop
    full
    title="약관동의"
  >
    <kb-pop-body>
      <div class="section">
        <div class="flex_wrap mg_t16">
          <kb-checkbox
            v-model="checkVal1"
            value="1"
          >
            [필수]동의하기
          </kb-checkbox>
          <div class="mg_la">
            <kb-button link blue class="">전문보기 <i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          </div>
        </div>

        <h2 class="mg_t24 fz_20 fw_bold">주식/ETF 적립식 매수 서비스 약관</h2>

        <h3 class="fz_14 fc_666">제 1 조 (목적)</h3>
        <p class="mg_t8 fz_14 fc_666">
          주식회사 카카오(이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다.
          회사는 여러분이 다양한 인터넷과 모바일 서비스를 좀 더 편리하게 이용할 수 있도록 회사 또는 관계사의 개별
          서비스에 모두 접속 가능한 통합로그인계정 체계를 만들고 그에 적용되는 '카카오계정 약관(이하 '본 약관')을
          마련하였습니다. 본 약관은 여러분이 카카오계정 서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건
          및 절차 등 기본적인 사항을 규정하고 있으므로 조금만 시간을 내서 주의 깊게 읽어주시기 바랍니다.
        </p>

        <h3 class="mg_t32 fz_14 fc_666">제 1 조 (목적)</h3>
        <p class="mg_t8 fz_14 fc_666">
          주식회사 카카오(이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다.
          회사는 여러분이 다양한 인터넷과 모바일 서비스를 좀 더 편리하게 이용할 수 있도록 회사 또는 관계사의 개별
          서비스에 모두 접속 가능한 통합로그인계정 체계를 만들고 그에 적용되는 '카카오계정 약관(이하 '본 약관')을
          마련하였습니다. 본 약관은 여러분이 카카오계정 서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건
          및 절차 등 기본적인 사항을 규정하고 있으므로 조금만 시간을 내서 주의 깊게 읽어주시기 바랍니다.
        </p>

      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button
        yellow
        @click="popClose"
      >
        확인
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'UT15D003',
  data() {
    return {
      checkVal1: '',
    };
  },
  props: {
  },
  mounted() {
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

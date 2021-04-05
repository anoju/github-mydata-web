<template>
  <kb-page page-title="간편인증 비밀번호">
    <kb-page-body>
      <div class="section">
        <div class="section full_height_wrap add_dl t_center">
          <kb-title-bar
            h1
            center
            class="pd_t40"
            title="간편인증 비밀번호를<br>입력해 주세요."
          />
          <div class="dot_password">
            <i :class="{on:passwordVal.length > 0}" aria-hidden="true" />
            <i :class="{on:passwordVal.length > 1}" aria-hidden="true" />
            <i :class="{on:passwordVal.length > 2}" aria-hidden="true" />
            <i :class="{on:passwordVal.length > 3}" aria-hidden="true" />
            <i :class="{on:passwordVal.length > 4}" aria-hidden="true" />
            <i :class="{on:passwordVal.length > 5}" aria-hidden="true" />
            <input type="password" maxlength="6" title="간편비밀번호 입력" v-model="passwordVal" @keyup="keyUpEvt">
          </div>
          <div
            v-if="errorMsg !== ''"
            class="dot_password_alert"
          >
            <div
              class="error_txt icon"
            >
              {{ errorMsg }}
            </div>
          </div>
        </div>
        <div class="login_btm_btn">
          <kb-button
            to="#"
            link
          >
            재등록
          </kb-button>
          <kb-button
            to="#"
            link
          >
            다른 방법으로 로그인
          </kb-button>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT01B006',
  data() {
    return {
      passwordVal: '',
      errorMsg: '',
    };
  },
  methods: {
    keyUpEvt() {
      if (this.passwordVal.length === 6) {
        this.errorMsg = '비밀번호를 다시 확인해주세요.(1/5)';
        this.passwordVal = '';
      }
    },
  },
};
</script>

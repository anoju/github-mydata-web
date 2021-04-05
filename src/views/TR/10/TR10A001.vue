<template>
  <kb-pop
    full
  >
    <kb-pop-body>
      <div class="section">
        <div class="section full_height_wrap add_dl t_center">
          <kb-title-bar
            v-if="isRePassword"
            h1
            center
            class="pd_t40"
            title="간편인증 비밀번호를 <br>다시 입력해 주세요."
          />
          <kb-title-bar
            v-else
            h1
            center
            class="pd_t40"
            title="간편인증 비밀번호를 <br>입력해주세요."
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
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TR10A001',
  data() {
    return {
      isRePassword: false,
      passwordVal: '',
      errorMsg: '',
    };
  },
  methods: {
    keyUpEvt() {
      if (this.passwordVal.length === 6) {
        if (!this.isRePassword) {
          this.isRePassword = true;
        } else {
          this.errorMsg = '입력하신 비밀번호와 다릅니다.';
        }
        this.passwordVal = '';
      }
    },
  },
};
</script>

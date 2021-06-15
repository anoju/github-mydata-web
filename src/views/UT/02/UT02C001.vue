<template>
  <kb-page page-title="간편인증 비밀번호">
    <kb-page-body>
      <div class="section mg_bm35">
        <div class="section full_height_wrap add_dl t_center">
          <kb-title-bar
            v-if="isRePassword"
            h1
            center
            class="pd_t40"
            title="간편인증 비밀번호를<br>다시 입력해 주세요."
          />
          <kb-title-bar
            v-else
            h1
            center
            class="pd_t40"
            title="간편인증 비밀번호를<br>입력해주세요."
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
        <kb-foldings
          not
          class="accordion_dl"
        >
          <kb-folding title="이용안내">
            <ul class="txt_list">
              <li class="dot">생년월일, 휴대폰번호, 연속된 숫자, 연속적으로 반복된 숫자는 사용하실수 없습니다.</li>
            </ul>
          </kb-folding>
        </kb-foldings>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
/* 2021-05-24 스크립트 확인 */
export default {
  name: 'UT02C001',
  data() {
    return {
      isRePassword: false,
      passwordVal: '',
      errorMsg: '',
      errorCount: 0,
    };
  },
  methods: {
    keyUpEvt() {
      if (this.passwordVal.length === 6) {
        if (!this.isRePassword) {
          this.isRePassword = true;
        } else {
          this.errorCount += 1;
          this.errorMsg = `입력하신 비밀번호와 다릅니다. (${this.errorCount}/4)`;
        }
        this.passwordVal = '';
      }
    },
  },
};
</script>

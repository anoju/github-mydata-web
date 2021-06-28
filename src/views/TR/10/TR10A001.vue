<template>
  <kb-pop
    full
    title=" "
  >
    <kb-pop-body class="pd_b0">
      <div class="keypad_wrap number"><!-- 쿼티 일때는 number 대신 qwerty -->
        <div class="full_height_wrap t_center">
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
          <div id="contents">
            <div class="secret_field">
              <span></span>
              <span class="non_empty"></span>
              <span class="secret"></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
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

          <form id="Password_Form">
            <!-- <input class="input" type="password" id="passwordVal" name="passwordVal" maxlength="6" title="간편비밀번호 입력"> -->

            <div id="keypad">
              <ul class="number">
                <li><a><span>&nbsp;</span></a></li>
                <li><a><span>&nbsp;</span></a></li>
                <li><a><span>&nbsp;</span></a></li>
                <li><a><span>&nbsp;</span></a></li>
                <li><a><span>&nbsp;</span></a></li>

                <li><a><span>&nbsp;</span></a></li>
                <li><a><span>&nbsp;</span></a></li>
                <li><a><span>&nbsp;</span></a></li>

                <li><a><span>&nbsp;</span></a></li>
                <li><a><span>&nbsp;</span></a></li>
                <li><a><span>&nbsp;</span></a></li>
                <li><a><span>&nbsp;</span></a></li>

                <li class="func"><a><span>&nbsp;</span></a></li>
                <li class="func"><a><span>&nbsp;</span></a></li>
              </ul>
            </div>
          </form>
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

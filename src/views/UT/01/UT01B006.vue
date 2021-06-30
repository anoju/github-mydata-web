<template>
  <kb-page page-title="간편인증 비밀번호" no-btntop no-footer>
    <kb-page-body class="pd_b0">
      <div class="keypad_wrap number"><!-- 쿼티 일때는 number 대신 qwerty -->
        <div class="full_height_wrap t_center">
          <kb-title-bar
            h1
            center
            class="pd_t40"
            title="간편인증 비밀번호를<br>입력해주세요."
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
          <div class="login_btm_btn">
            <kb-button
              link
              @click="reRegister"
            >
              재등록
            </kb-button>
            <kb-button
              to="/UT/01/UT01A001"
              link
            >
              다른 방법으로 로그인
            </kb-button>
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
    </kb-page-body>
  </kb-page>
</template>
<script>
/* 2021-05-24 스크립트 확인 */
export default {
  name: 'UT01B006',
  data() {
    return {
      passwordVal: '',
      errorMsg: '',
      errorCount: 0,
    };
  },
  methods: {
  },
};
</script>

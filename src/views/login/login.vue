<template>
  <kb-page>
    <div class="t_center">
      <h1>Login</h1>
    </div>
    <kb-page-body>
      <div class="section">
        <form id="Login_Form">
          <kb-input
            input-id="phoneNum"
            keypad
            placeholder="휴대폰번호"
          />
          <kb-input empty>
            <input id="userid" name="ID" placeholder="ID">
          </kb-input>
          <br>
          <input id="userpw" name="PassWord" type="password" placeholder="PassWord"><br>
          <input id="num" name="Number" placeholder="Number"><br>
        </form>

        <div>
          <kb-button-wrap>
            <kb-button line @click="login">로그인</kb-button>
          </kb-button-wrap>
        </div>
        <br>
        <!-- 네이버아이디로로그인 버튼 노출 영역 -->
        <div id="naverIdLogin" class="t_center" @click="loginType('naver')" v-if="false">
          <a id="naverIdLogin_loginButton" href="#">
            <img src="@/assets/images/login/naver_login.png" height="60"/>
          </a>
        </div>
        <!-- 카카오아이디로로그인 버튼 노출 영역 -->
        <div id="kakaoIdLogin" class="t_center" @click="loginType('kakao')" v-if="false">
          <a id="kakaoIdLogin_loginButton" href="#">
            <img src="@/assets/images/login/kakao_login.png" height="60" style="width: 280px;"/>
          </a>
        </div>
      </div>
    </kb-page-body>
    <!-- //네이버아이디로로그인 버튼 노출 영역 -->

  </kb-page>
</template>

<script>

export default {
  name: 'Login',

  data: () => ({
    showPassword: false,
    msg: '',
    snackbar: false,
    loginParam: {
      sid: '',
    },
  }),

  mounted() {
    // this.naver();
    // this.mountKakao();
    // window.vKeypadGlobal.setDefaultServletURL('/api/servlets/vKeypad');// 서블릿 설정
    window.vKeypadGlobal.setDefaultServletURL('/kings/servlets/vKeypad.do');// 서블릿 설정
    window.vKeypadGlobal.newInstance(this.$el.querySelector('#Login_Form'), this.$el.querySelector('#phoneNum'), null, 'NUMBERPAD', 20, null);
    window.vKeypadGlobal.newInstance(this.$el.querySelector('#Login_Form'), this.$el.querySelector('#userid'), null, 'KEYBOARD', 20, null);
    window.vKeypadGlobal.newInstance(this.$el.querySelector('#Login_Form'), this.$el.querySelector('#userpw'), null, 'KEYBOARD', 20, null);
    window.vKeypadGlobal.newInstance(this.$el.querySelector('#Login_Form'), this.$el.querySelector('#num'), null, 'NUMBERPAD', 20, null);
    window.vKeypadGlobal.setOptionAll('ImagesRoute_pop', '/images/static/');
    window.vKeypadGlobal.setOptionAll('isMobile', true);
    window.vKeypadGlobal.loadAll();
  },

  methods: {
    login() {
      console.log(this.$el.querySelector('#num').value);
      window.vKeypadGlobal.prepareSubmitAll();

      const xhr = new XMLHttpRequest();
      // xhr.open('POST', '/api/manuallyDecrypt/decrypt', true);
      xhr.open('POST', '/kings/Manually_Decrypt.jsp', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      const formTag = this.$el.querySelector('#Login_Form');
      let formString = '';
      for (let i = 0; i < formTag.length; i += 1) {
        formString += formTag[i].name + '=' + formTag[i].value;
        if (i < formTag.length - 1) {
          formString += '&';
        }
      }
      console.log(formString);

      xhr.send(formString);
      // xhr.send(new FormData(this.$el.querySelector('#Login_Form')));
      xhr.onload = () => {
        console.log('xhr.status', xhr.status);
        if (xhr.status === 200) {
          console.log('xhr.responseText', xhr.responseText);
        }
      };

      // console.log(this.loginParam.sid);
      // if (this.loginParam.sid === '') {
      //   alert('휴대폰 번호를 입력하세요.');
      //   return;
      // }

      // this.$store.dispatch('auth/LOGIN', this.loginParam).then(() => {
      //   // Signed in
      //   this.$router.replace({
      //     name: 'home',
      //   });
      // })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    },

    naver() {
      // eslint-disable-next-line no-restricted-globals
      location.href = 'http://localhost:8080/login';

      console.log('호출완료');
    },

    mountKakao() {
      window.Kakao.init('830552eedbb6e4183b45347bcedcda69');
      console.log(window.Kakao.isInitialized());
    },

    kakaoLogin() {
      window.Kakao.Auth.authorize({
        redirectUri: 'http://localhost:8082',
      });
    },

    loginType(type) {
      // eslint-disable-next-line no-restricted-globals
      location.href = 'http://localhost:8080/login/' + type;
    },

  },
};
</script>

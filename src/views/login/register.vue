<template>
  <v-container>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1>회원가입</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="username"
            label="username"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn color="info" @click="check">Register</v-btn>
      </v-card-actions>
    </v-card>

    <v-snackbar
      v-model="snackbar"
      absolute
      centered
      color="deep-purple accent-4"
      timeout="1000"
    >
      {{ msg }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>

export default {
  name: 'Login',

  data: () => ({
    showPassword: false,
    username: '',
    password: '',
    msg: '',
    snackbar: false,
  }),

  methods: {
    register() {
      console.log(this.username, this.password);

      /*
      [START auth_signup_password]
      firebase.auth().createUserWithEmailAndPassword(`${this.username}@kbstock.com`, this.password)
      */
      this.$utils.auth
        .join(this.username, this.password)
        .then((user) => {
          // Signed in
          // ...
          console.log(user);
          this.$router.replace({
            name: 'mypage',
          });
        })
        .catch((error) => {
          this.msg = error.message;
          this.snackbar = true;
        });
      // [END auth_signup_password]
    },
    check() {
      if (this.username === '' || this.password === '') {
        this.msg = '아이디 또는 비밀번호를 입력하세요.';
        this.snackbar = true;
        return;
      }

      this.$utils.auth
        .checkUsernameDup(this.username)
        .then((user) => {
          // Signed in
          // ...
          console.log(user);
          if (user.length === 0) {
            this.register();
          } else {
            this.msg = '사용중인 아이디 입니다.';
            this.snackbar = true;
          }
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
    },
  },
};
</script>

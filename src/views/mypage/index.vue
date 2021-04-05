<template>
  <v-container>
    <div>마이페이지</div>
    <v-btn @click="logout"> 로그아웃 </v-btn>
  </v-container>
</template>

<script>

export default {
  name: 'Mypage',

  data: () => ({}),

  async mounted() {
    /*
      let i=0;
      await this.$utils.await(function() {
        return ++i > 100;
      })
      .catch(error => {
        console.log("대기 타임아웃 초과, elapsedTime=" + error)
      })

      console.log("await 대기처리 완료");
      */
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/LOGOUT').then(() => {
        this.$router.replace({
          name: 'index',
        });
      });
    },
  },
};
</script>

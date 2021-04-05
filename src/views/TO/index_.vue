<template>
  <v-container>
    <a href="#" @click.prevent="clickToday()">오늘</a>

    <div>로긴 상태</div>
    <v-text-field v-model="loginStatus" />
  </v-container>
</template>

<script>
import { sync } from 'vuex-pathify';

export default {
  name: 'Today',

  data: () => ({}),
  mounted() {
    console.log(this.$store.state.user.isLogin);
    console.log('this.$store.get', this.$store.get('user/isLogin'));
    console.log('this.$store.get', this.$store.set('user/isLogin', 'true'));
    console.log('get', this);
  },
  computed: {
    loginStatus: sync('user/isLogin'),
  },
  methods: {
    async clickToday() {
      await this.$utils.request('GET', 'http://localhost:8081/test1', {
        param: {
          a: '1',
          b: '2',
          c: '3',
        },
      });

      console.log('호출완료 ㄱㄱ');
    },
  },
};
</script>

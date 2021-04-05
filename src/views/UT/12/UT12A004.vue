<template>
  <kb-pop
    full
    :close="goFirst"
  >
    <kb-pop-body>
      <div class="util_wrap">
        <div class="text_box">
          <i class="ico_big_logout" aria-hidden="true" />
          <p class="pop_tit">다른 기기에서 로그인되어 <br>자동 로그아웃 되었습니다.</p>
          <p class="pop_stit">확인 버튼을 누르시면 <br>메인화면으로 이동합니다.</p>
        </div>
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
  name: 'UT12A004',
  data() {
    return {
    };
  },
  props: {
  },
  mounted() {
  },
  methods: {
    goFirst() {
      console.log('메인으로');
    },
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

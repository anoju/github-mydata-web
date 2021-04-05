<template>
  <kb-pop
    full
  >
    <kb-pop-body>
      <div class="section">
        <div class="section pd_t96 t_center">
          <kb-title-bar h2 center title="OTP 화면에 표시된 <br />숫자를 입력해 주세요" />
          <kb-input class="mg_t32" type="password" title="OTP 숫자 6자리" placeholder="OTP 숫자 6자리" />
        </div>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TR10A002',
  data() {
    return {
    };
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

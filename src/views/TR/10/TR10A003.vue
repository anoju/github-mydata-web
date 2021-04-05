<template>
  <kb-pop
    full
  >
    <kb-pop-body>
      <div class="section">
        <div class="section pd_t96 t_center">
          <kb-title-bar h2 center title="인증서의 비밀번호를 <br />입력해 주세요." />
          <kb-input class="mg_t32" type="password" title="인증서 비밀번호 입력" placeholder="특수문자 포함 10자리 이상" />
        </div>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TR10A003',
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

<template>
  <kb-pop
    full
    title="개인정보 수집 이용 동의(이동통신)"
  >
    <kb-pop-body>
      <div class="section">
        약관 상세 내용은 추후 추가 <br>
        약관 상세 내용은 추후 추가 <br>
        약관 상세 내용은 추후 추가 <br>
        약관 상세 내용은 추후 추가 <br>
        약관 상세 내용은 추후 추가 <br>
        약관 상세 내용은 추후 추가 <br>
        약관 상세 내용은 추후 추가 <br>
        약관 상세 내용은 추후 추가 <br>
        약관 상세 내용은 추후 추가 <br>
        약관 상세 내용은 추후 추가 <br>
        약관 상세 내용은 추후 추가 <br>
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
  name: 'UT02A006',
  data() {
    return {
    };
  },
  props: {
  },
  mounted() {
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

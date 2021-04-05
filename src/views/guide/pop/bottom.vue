<template>
  <kb-pop
    bottom
    title="하단팝업"
  >
    <!-- <kb-pop-head
            title="하단팝업"
        /> -->
    <kb-pop-body>
      <div class="section">
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
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
  name: 'bottom',
  methods: {
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

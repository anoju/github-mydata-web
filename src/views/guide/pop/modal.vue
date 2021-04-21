<template>
  <kb-pop
    title="모달팝업 타이틀"
  >
    <!-- <kb-pop-head
            title="모달팝업"
        /> -->
    <kb-pop-body>
      <div class="section">
        원활한 서비스 제공을 위해 최선을 다하고 있습니다.<br>
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
        팝업 컨텐츠
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button
        v-if="allClose"
        yellow
        @click="popClose('all')"
      >
        팝업 모두 닫기
      </kb-button>
      <kb-button
        v-else
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
  name: 'modal',
  props: {
    allClose: { type: Boolean, default: false },
  },
  methods: {
    popClose(type) {
      if (type === 'all') {
        this.$emit('close', { payload: 'close' });
      } else {
        this.$emit('close');
      }
    },
  },
};
</script>

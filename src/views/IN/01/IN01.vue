<template>
  <kb-page page-title="투자 통합자산">
    <kb-page-body>
      <kb-tabs-link
        class="first"
        :tabs="tabLink"
        fixed
      />
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN01',
  data() {
    return {
      tabLink: [
        { to: 'IN01A001', text: '투자자산 통계' },
        { to: 'IN01A003', text: '보유 상품' },
        { to: 'IN01A005', text: '투자자산 변동' },
      ],
    };
  },
};
</script>

<template>
  <kb-page page-title="모델 포트폴리오">
    <kb-page-body class="pd_b0">
      <kb-tabs-link
        fixed
        :tabs="tabLink"
      />
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN12',
  data() {
    return {
      tabLink: [
        { to: 'IN12A001', text: '공격투자형' },
        { to: 'IN12A002', text: '적극투자형' },
        { to: 'IN12A003', text: '위험중립형' },
        { to: 'IN12A004', text: '안전추구형' },
        { to: 'IN12A005', text: '안전형' },
      ],
    };
  },
  computed: {
  },
  mounted() {
  },
};
</script>

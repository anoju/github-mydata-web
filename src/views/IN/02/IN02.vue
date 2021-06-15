<template>
  <kb-page page-title="금융상품 검색">
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
  name: 'IN02',
  data() {
    return {
      tabLink: [
        { to: 'IN02A002', text: '국내주식' },
        { to: 'IN02A003', text: '해외주식' },
        { to: 'IN02A004', text: '펀드' },
        { to: 'IN02A006', text: '채권' },
        { to: 'IN02A008', text: 'ELS/DLS' },
        { to: 'IN02A009', text: 'WRAP' },
        { to: 'IN02A011', text: '발행어음' },
        { to: 'IN02A012', text: 'CMA' },
        { to: 'IN02A013', text: '공모주' },
      ],
    };
  },
};
</script>

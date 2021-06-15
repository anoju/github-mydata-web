<template>
  <kb-page page-title="나의 관심 정보">
    <kb-page-body>
      <div class="section">
        <kb-tabs-link
          fixed
          :tabs="tabLink"
        />
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY06A002',
  data() {
    return {
      tabLink: [
        { to: 'MY06A005', text: '내 자산' },
        { to: 'MY06A001', text: '찜 상품' },
        { to: 'MY06A004', text: '내 서랍' },
      ],
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

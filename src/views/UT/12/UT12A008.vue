<template>
  <kb-page noHeader>
    <kb-page-body>
      <div class="util_wrap">
        <div class="text_box">
          <i class="ico_big_logout" aria-hidden="true" />
          <p class="pop_tit">장기간 거래가 없어<br>안전한 이용을 위해<br>자동 로그아웃 되었습니다.</p>
          <p class="pop_stit">로그인 후 다시 이용해주세요.</p>
        </div>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          yellow
        >
          다시 로그인 하기
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT12A008',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<template>
  <kb-page noHeader>
    <kb-page-body>
      <div class="util_wrap">
        <div class="text_box">
          <i class="ico_big_warning" aria-hidden="true" />
          <p class="pop_tit">해당 페이지를<br>찾을 수 없습니다.</p>
          <p class="pop_stit">이용에 불편을 드려 죄송합니다.<br>원활한 서비스 제공을 위해 최선을 다하고<br>있습니다. 잠시 후 이용해주세요.</p>
        </div>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          yellow
          to="/TO/00"
        >
          홈으로 가기
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT12A009',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

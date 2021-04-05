<template>
  <kb-page page-title="한번에 연동">
    <kb-page-body>
      <div class="util_wrap">
        <div class="text_box">
          <i class="ico_big_warning" aria-hidden="true" />
          <p class="pop_tit">연동할 계좌 및 정보가 <br />없습니다.</p>
          <p class="pop_stit">마이데이터 자산연동이 불가한 기관이거나 <br />보안계좌, 숨김계좌일 수 있습니다.</p>
        </div>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          line
        >
          다시시도
        </kb-button>
        <kb-button
          yellow
        >
          확인
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT14B013',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

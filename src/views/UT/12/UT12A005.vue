<template>
  <kb-page header-type="close">
    <kb-page-body>
      <div class="util_wrap">
        <div class="top_box">
          <p class="top_tit">잠시만 기다려주세요. <br />서비스 접속 대기중입니다.</p>
        </div>
        <div class="text_box">
          <i class="ico1"></i>
          <p class="wating_count">
            <span>현재 대기자</span>
            1,210 명
          </p>
        </div>
        <div class="footer_box">
          <dl class="wating_box">
            <dt>예상 대기시간</dt>
            <dd>92분</dd>
          </dl>
          <p class="info_text">현재 접속 사용자가 많아 대기중입니다. <br />잠시만 기다리시면 서비스로 자동 접속됩니다.</p>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT12A005',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<template>
  <kb-page header-type="close">
    <kb-page-body>
      <div class="util_wrap">
        <div class="top_box">
          <p class="top_tit">잠시만 기다려주세요. <br />서비스 접속 대기중입니다.</p>
        </div>
        <div class="text_box">
          <i class="ico1"></i>
          <div class="wating_count">
            <dl>
              <dt>현재 대기자</dt>
              <dd><strong>1,210</strong> 명</dd>
            </dl>
            <!-- <dl>
              <dt>이후 대기자</dt>
              <dd><strong>1,210</strong> 명</dd>
            </dl> -->
          </div>
        </div>
        <div class="footer_box">
          <dl class="wating_box">
            <dt>예상 대기시간</dt>
            <dd><span>92분</span></dd>
          </dl>
          <p class="info_text">현재 접속 사용자가 많아 대기중입니다. <br>잠시만 기다리시면 대기 순서에 따라 자동 접속 됩니다. <br>※ 재접속하시면 대기시간이 더 길어집니다.</p>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

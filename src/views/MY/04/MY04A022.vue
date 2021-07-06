<template>
  <kb-page header-type="close" close="/UT/02/UT02A004">
    <kb-page-body>
      <div class="util_wrap fixed_btn">
        <div class="top_box">
          <p class="top_tit">정상적으로 <br />로그아웃 되었습니다.</p>
        </div>
        <div class="text_box">
          <i class="ico_logout"></i>
        </div>
        <div class="footer_box mg_b8">
          <p class="fz_14">이용해주셔서 감사합니다. <br>즐거운 하루 보내시길 바랍니다.</p>
          <p class="mg_t16 fz_12 fc_666">확인 버튼을 누르시면 메인화면으로 이동합니다.</p>
        </div>
      </div>
      <kb-button-wrap bottom-fixed>
        <kb-button
          yellow
          to="/UT/02/UT02A004"
        >
          확인
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY04A022',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

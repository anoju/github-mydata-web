<template>
  <kb-page page-title="마이페이지">
    <kb-page-body>
      <div class="section">
        <div class="mypage_user">
          <kb-button aTag not class="user_img">
            <!--
              케릭터 이미지 별 클래스 정의
              루나키키 : ico1
              포스악어 : ico2
              심쿵비비 : ico3
              롤로나무 : ico4
              멜랑콜리 : ico5
              의문의 낯선자 : ico6
            -->
            <i class="character_ico ico1"></i>
          </kb-button>
          <div class="text_box">
            <p class="tit">김스타님, 환영합니다! <kb-button aTag line class="btn_logout">로그아웃</kb-button></p>
            <p class="connection_date">최근접속일 2021/01/15</p>
          </div>
        </div>

        <div class="mypage_list">
          <dl class="type1">
            <dt>금융정보</dt>
            <dd>256</dd>
          </dl>
          <dl class="type2">
            <dt>찜 상품</dt>
            <dd>256</dd>
          </dl>
          <dl class="type3">
            <dt>내 서랍</dt>
            <dd>256</dd>
          </dl>
        </div>

        <hr aria-hidden="true" class="hr_line">

        <div class="option_list">
          <kb-button
            class="item_list"
            @click="showFullPopup($event.target)"
          >
            개인정보 관리<i class="ico_arrow_type1" aria-hidden="true" />
          </kb-button>
          <kb-button
            class="item_list"
          >
            연동정보 관리<i class="ico_arrow_type1" aria-hidden="true" />
          </kb-button>
          <kb-button
            class="item_list"
          >
            나의 투자성향
            <span class="mg_r8 mg_la fc_blue fz_14 fw_bold">공격투자형</span>
            <i class="ico_arrow_type1" aria-hidden="true" />
          </kb-button>
          <kb-button
            class="item_list"
          >
            퍼소나 관리
            <span class="mg_r8 mg_la fc_blue fz_14 fw_bold">롤로라무</span>
            <i class="ico_arrow_type1" aria-hidden="true" />
          </kb-button>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY04A003',
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    showFullPopup(el) {
      this.$modal({
        component: () => import('@/views/MY/04/MY04A010.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>

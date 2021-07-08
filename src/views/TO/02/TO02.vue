<template>
  <kb-page page-title="오늘 나의 자산">
    <kb-page-body class="pd_b0">
      <div class="section">
        <div class="assets_header">
          <p class="tit">오늘 순자산</p>
          <!-- <kb-button aTag not class="btn_linkage">내 자산 연동하기</kb-button> -->
          <kb-button aTag not class="btn_linkage">추가연동</kb-button>
          <p class="money">
            <!-- <span class="txt">고객님의 <span class="bg_line">자산을 연동</span>해주세요.</span> -->
            <span v-scroll-number="{to:userAsset, comma:true}">{{userAsset}}</span>원
          </p>

          <div class="info_box">
            <kb-button button class="refresh">09:00:03</kb-button>
            <kb-checkbox
              v-model="moneyValue"
              switch
              class="right"
            >
              금액보기
            </kb-checkbox>
            <div class="linkage_error_box">
              현대카드 연동이 원활하지 않습니다.
            </div>
          </div>

        </div>
      </div>
      <kb-tabs-link
        fixed
        :disabled="tabDisabled"
        :tabs="tabLink"
      />
    </kb-page-body>
    <template slot="floating">
      <div class="quick" :class="{open:quickOpen}">
        <div class="quick_bg" @click="quickOpen = false" />
        <kb-button not class="btn btn_quick" @click="quickOpen = !quickOpen" >
          퀵메뉴
          {{quickOpen ? '닫기' : '열기'}}
        </kb-button>
        <div class="quick_list">
          <ul>
            <li><kb-button a-tag not><i class="ico_quick_1" />추가연동</kb-button></li>
            <li><kb-button a-tag not><i class="ico_quick_2" />계좌개설</kb-button></li>
            <li><kb-button a-tag not><i class="ico_quick_3" />이체하기</kb-button></li>
            <li><kb-button a-tag not><i class="ico_quick_4" />주식구매</kb-button></li>
            <li><kb-button a-tag not><i class="ico_quick_5" />주식판매</kb-button></li>
            <li><kb-button a-tag not><i class="ico_quick_6" />관심정보</kb-button></li>
          </ul>
        </div>
      </div>
    </template>
  </kb-page>
</template>
<script>
export default {
  name: 'TO02',
  data() {
    return {
      moneyValue: true,
      quickOpen: false,
      userAsset: '999,999,999,999',
      tabDisabled: false,
      tabLink: [
        { to: 'TO02A002', text: '총자산' },
        { to: 'TO02D001', text: '타임라인' },
        { to: 'TO02C001', text: '월 지출' },
        { to: 'TO02E001', text: '투자변화' },
      ],
    };
  },
  computed: {
  },
  mounted() {
  },
};
</script>

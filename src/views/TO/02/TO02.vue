<template>
  <kb-page page-title="오늘 나의 자산">
    <kb-page-body class="pd_b0">
      <div class="section">
        <div class="assets_header">
          <p class="tit">오늘 순자산</p>
          <kb-button aTag not class="btn_linkage">추가연동</kb-button>
          <p class="money"><span v-scroll-number="{to:userAsset, comma:true}">{{userAsset}}</span>원</p>

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
        v-if="isMain"
        fixed
      >
        <div class="tab" role="presentation">
          <router-link to="/TO/00/TO02A002">
            <span>총자산</span>
          </router-link>
        </div>
        <div class="tab" role="presentation">
          <router-link to="/TO/00/TO02C001">
            <span>월관리</span>
          </router-link>
        </div>
        <div class="tab" role="presentation">
          <router-link to="/TO/00/TO02D001">
            <span>타임라인</span>
          </router-link>
        </div>
        <div class="tab" role="presentation">
          <router-link to="/TO/00/TO02E001">
            <span>오늘투자</span>
          </router-link>
        </div>
      </kb-tabs-link>

      <kb-tabs-link
        v-else
        fixed
      >
        <div class="tab" role="presentation">
          <router-link to="/TO/02/TO02A002">
            <span>총자산</span>
          </router-link>
        </div>
        <div class="tab" role="presentation">
          <router-link to="/TO/02/TO02C001">
            <span>월관리</span>
          </router-link>
        </div>
        <div class="tab" role="presentation">
          <router-link to="/TO/02/TO02D001">
            <span>타임라인</span>
          </router-link>
        </div>
        <div class="tab" role="presentation">
          <router-link to="/TO/02/TO02E001">
            <span>오늘투자</span>
          </router-link>
        </div>
      </kb-tabs-link>
    </kb-page-body>
    <template slot="floating">
      <div class="quick" :class="{open:quickOpen}">
        <kb-button not class="btn btn_quick" @click="quickOpen = !quickOpen" >퀵메뉴 열기</kb-button>
        <div>
          <ul>
            <li><a href="#">메뉴1</a></li>
            <li><a href="#">메뉴2</a></li>
            <li><a href="#">메뉴3</a></li>
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
      isMain: false,
      moneyValue: true,
      quickOpen: false,
      userAsset: '999,999,999,999',
    };
  },
  computed: {

  },
  mounted() {
    if (this.$el.closest('.main_layer_view') !== null) this.isMain = true;
  },
};
</script>

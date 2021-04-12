<template>
  <kb-page page-title="가이드">
    <kb-page-body>
      <kb-tabs-link
        class="first"
        fixed
      >
        <div
          class="tab"
          role="presentation"
        >
          <router-link to="/guide/txt">
            <span>텍스트</span>
          </router-link>
        </div>
        <div
          class="tab"
          role="presentation"
        >
          <router-link to="/guide/button">
            <span>버튼</span>
          </router-link>
        </div>
        <div
          class="tab"
          role="presentation"
        >
          <router-link to="/guide/form">
            <span>form 요소</span>
          </router-link>
        </div>
        <div
          class="tab"
          role="presentation"
        >
          <router-link to="/guide/list">
            <span>리스트</span>
          </router-link>
        </div>
        <div
          class="tab"
          role="presentation"
        >
          <router-link to="/guide/table">
            <span>테이블</span>
          </router-link>
        </div>
        <div
          class="tab"
          role="presentation"
        >
          <router-link to="/guide/popup">
            <span>팝업</span>
          </router-link>
        </div>
        <div
          class="tab"
          role="presentation"
        >
          <router-link to="/guide/swiper">
            <span>swiper</span>
          </router-link>
        </div>
        <div
          class="tab"
          role="presentation"
        >
          <router-link to="/guide/animate">
            <span>animate</span>
          </router-link>
        </div>
        <div
          class="tab"
          role="presentation"
        >
          <router-link to="/guide/etc">
            <span>etc</span>
          </router-link>
        </div>
        <div
          class="tab"
          role="presentation"
        >
          <router-link to="/guide/calendar">
            <span>calendar</span>
          </router-link>
        </div>
        <div
          class="tab"
          role="presentation"
        >
          <router-link to="/guide/test">
            <span>test</span>
          </router-link>
        </div>
      </kb-tabs-link>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'guide',
};
</script>

<template>
  <kb-page page-title="가이드">
    <kb-page-body>
      <kb-tabs-link
        class="first"
        :tabs="tabLink"
        fixed
      />
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'guide',
  data() {
    return {
      tabLink: [
        { to: '/guide/txt', text: '텍스트' },
        { to: '/guide/button', text: '버튼' },
        { to: '/guide/form', text: '폼 요소' },
        { to: '/guide/list', text: '리스트' },
        { to: '/guide/table', text: '테이블' },
        { to: '/guide/popup', text: '팝업' },
        { to: '/guide/swiper', text: 'swiper' },
        { to: '/guide/animate', text: 'animate' },
        { to: '/guide/etc', text: 'etc' },
        { to: '/guide/calendar', text: 'calendar' },
        { to: '/guide/drag', text: 'drag' },
        { to: '/guide/test', text: 'test' },
      ],
    };
  },
};
</script>

// 퍼블리싱 페이지 경로
export default [
  {
    name: 'home',
    path: '/',
    redirect: '/pub',
  },
  {
    path: '*',
    // redirect: '/404',
    component: () => import('@/views/UT/12/UT12A009.vue'),
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/views/UT/12/UT12A009.vue'),
  },
  // 코딩 가이드
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('@/views/guide/guide.vue'),
    redirect: '/guide/txt',
    children: [
      { path: 'txt', component: () => import('@/views/guide/txt.vue'), meta: { page: 1 } },
      { path: 'button', component: () => import('@/views/guide/button.vue'), meta: { page: 2 } },
      { path: 'form', component: () => import('@/views/guide/form.vue'), meta: { page: 3 } },
      { path: 'list', component: () => import('@/views/guide/list.vue'), meta: { page: 4 } },
      { path: 'table', component: () => import('@/views/guide/table.vue'), meta: { page: 5 } },
      { path: 'popup', component: () => import('@/views/guide/popup.vue'), meta: { page: 6 } },
      { path: 'swiper', component: () => import('@/views/guide/swiper.vue'), meta: { page: 7 } },
      { path: 'animate', component: () => import('@/views/guide/animate.vue'), meta: { page: 8 } },
      { path: 'etc', component: () => import('@/views/guide/etc.vue'), meta: { page: 9 } },
      { path: 'calendar', component: () => import('@/views/guide/calendar.vue'), meta: { page: 10 } },
      { path: 'drag', component: () => import('@/views/guide/drag.vue'), meta: { page: 11 } },
      { path: 'test', component: () => import('@/views/guide/test.vue'), meta: { page: 12 } },
    ],
  },
  {
    path: '/pub',
    name: 'pubList',
    component: () => import('@/views/guide/pub.vue'),
  },
];

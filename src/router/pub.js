// 퍼블리싱 페이지 경로
export default [
  {
    name: 'home',
    path: '/',
    redirect: '/pub',
  },
  // 코딩 가이드
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('@/views/guide/guide.vue'),
    children: [
      { path: 'txt', component: () => import('@/views/guide/txt.vue') },
      { path: 'button', component: () => import('@/views/guide/button.vue') },
      { path: 'form', component: () => import('@/views/guide/form.vue') },
      { path: 'list', component: () => import('@/views/guide/list.vue') },
      { path: 'table', component: () => import('@/views/guide/table.vue') },
      { path: 'popup', component: () => import('@/views/guide/popup.vue') },
      { path: 'swiper', component: () => import('@/views/guide/swiper.vue') },
      { path: 'animate', component: () => import('@/views/guide/animate.vue') },
      { path: 'etc', component: () => import('@/views/guide/etc.vue') },
      { path: 'test', component: () => import('@/views/guide/test.vue') },
    ],
  },
  {
    path: '/pub',
    name: 'pubList',
    component: () => import('@/views/guide/pub.vue'),
  },
];

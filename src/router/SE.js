// 퍼블리싱 페이지 경로
export default [
  // 유틸
  {
    path: '/SE',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '01',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'SE01A001', component: () => import('@/views/SE/01/SE01A001.vue') }, // 환경설정
        ],
      },
    ],
  },

];

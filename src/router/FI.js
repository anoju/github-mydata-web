// 퍼블리싱 페이지 경로
export default [
  // 금융생활
  {
    path: '/FI',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '02',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'FI02A006', component: () => import('@/views/FI/02/FI02A006.vue') }, // 환경설정
        ],
      },
    ],
  },

];

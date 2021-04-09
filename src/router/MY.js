// 퍼블리싱 페이지 경로
export default [
  // 유틸
  {
    path: '/MY',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '09',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'MY09A001', component: () => import('@/views/MY/09/MY09A001.vue') }, // 환경설정
        ],
      },
    ],
  },

];

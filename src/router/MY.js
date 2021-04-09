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
      {
        path: '10',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'MY10A001', component: () => import('@/views/MY/10/MY10A001.vue') }, // 연동정보관리 연동해지
          { path: 'MY10B001', component: () => import('@/views/MY/10/MY10B001.vue') }, // 연동정보관리 연동정보상세
        ],
      },
    ],
  },

];

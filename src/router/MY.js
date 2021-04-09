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
          { path: 'MY09A001', component: () => import('@/views/MY/09/MY09A001.vue') }, // 연동기관
          { path: 'MY09A001_1', component: () => import('@/views/MY/09/MY09A001_1.vue') }, // 연동기관 목록
          { path: 'MY09A002', component: () => import('@/views/MY/09/MY09A002.vue') }, // 일괄 정보변경/해지
        ],
      },
      {
        path: '10',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'MY10A001', component: () => import('@/views/MY/10/MY10A001.vue') }, // 연동정보관리 연동해지
        ],
      },
    ],
  },

];

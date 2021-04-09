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
        ],
      },
      {
        path: '10',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'MY10B001', component: () => import('@/views/MY/10/MY10B001.vue') }, // 연동정보관리 연동정보상세
          { path: 'MY10A001', component: () => import('@/views/MY/10/MY10A001.vue') }, // 연동정보관리 연동해지 (스텝1:1개일때)
          { path: 'MY10D002', component: () => import('@/views/MY/10/MY10D002.vue') }, // 연동정보관리 연동해지 (스텝2:1개일때)
          { path: 'MY10D005', component: () => import('@/views/MY/10/MY10D005.vue') }, // 연동정보관리 연동해지 (스텝3)
          { path: 'MY10D006', component: () => import('@/views/MY/10/MY10D006.vue') }, // 연동정보관리 연동해지 완료(1개일때)
          { path: 'MY10D007', component: () => import('@/views/MY/10/MY10D007.vue') }, // 연동정보관리 연동해지 완료(여러개일때)
        ],
      },
    ],
  },

];

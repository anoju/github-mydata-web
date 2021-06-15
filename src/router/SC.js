// 퍼블리싱 페이지 경로
export default [
  // 고객센터
  {
    path: '/SC',
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
          { path: 'SC01A001', component: () => import('@/views/SC/01/SC01A001.vue') }, // 상담 신청(비대면 고객)
          { path: 'SC01A002', component: () => import('@/views/SC/01/SC01A002.vue') }, // 상담 신청 결과
          { path: 'SC01A005', component: () => import('@/views/SC/01/SC01A005.vue') }, // 상담 신청 (지점고객)
        ],
      },
      {
        path: '02',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'SC02A001', component: () => import('@/views/SC/02/SC02A001.vue') }, // 공지사항
        ],
      },
      {
        path: '03',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'SC03A001', component: () => import('@/views/SC/03/SC03A001.vue') }, // FAQ
        ],
      },
      {
        path: '04',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'SC04A001', component: () => import('@/views/SC/04/SC04A001.vue') }, // 이벤트
        ],
      },
    ],
  },

];

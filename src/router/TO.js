// 퍼블리싱 페이지 경로
export default [
  // 오늘
  {
    path: '/TO',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '00', // 오늘 메인
        component: () => import('@/views/TO/00/index.vue'),
        children: [
          {
            path: '',
            component: () => import('@/views/TO/02/TO02.vue'),
            children: [
              { path: 'TO02A002', component: () => import('@/views/TO/02/TO02A002.vue') }, // 총자산
              { path: 'TO02C001', component: () => import('@/views/TO/02/TO02C001.vue') }, // 월관리
              { path: 'TO02D001', component: () => import('@/views/TO/02/TO02D001.vue') }, // 타임라인
              { path: 'TO02E001', component: () => import('@/views/TO/02/TO02E001.vue') }, // 오늘투자
            ],
          },
        ],
      },
      {
        path: '01',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'TO01B001', component: () => import('@/views/TO/01/TO01B001.vue') }, // insight
        ],
      },
      {
        path: '02',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          {
            path: '',
            component: () => import('@/views/TO/02/TO02.vue'),
            children: [
              { path: 'TO02A002', component: () => import('@/views/TO/02/TO02A002.vue') }, // 총자산
              { path: 'TO02C001', component: () => import('@/views/TO/02/TO02C001.vue') }, // 월관리
              { path: 'TO02D001', component: () => import('@/views/TO/02/TO02D001.vue') }, // 타임라인
              { path: 'TO02E001', component: () => import('@/views/TO/02/TO02E001.vue') }, // 오늘투자
            ],
          },
          { path: 'TO02A003', component: () => import('@/views/TO/02/TO02A003.vue') }, // 총자산변동추이
          { path: 'TO02C002', component: () => import('@/views/TO/02/TO02C002.vue') }, // 월 예상 잔고 체크
          { path: 'TO02C003', component: () => import('@/views/TO/02/TO02C003.vue') }, // 현금잔고 전월 비교
          { path: 'TO02C004', component: () => import('@/views/TO/02/TO02C004.vue') }, // 투자매입 전월 비교
          { path: 'TO02C005', component: () => import('@/views/TO/02/TO02C005.vue') }, // 보험연금납입 전월 비교
          { path: 'TO02C006', component: () => import('@/views/TO/02/TO02C006.vue') }, // 부채청구납입 전월 비교
        ],
      },
    ],
  },

];

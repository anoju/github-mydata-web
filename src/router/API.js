export default [
  {
    path: '/API',
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
      { path: 'TO01B001', component: () => import('@/views/TO/01/TO01B001.vue') }, // insight

      /* 2021-06-04 계열사 전달 용 */
      { path: 'IN02A002', component: () => import('@/views/IN/02/IN02A002.vue') }, // 금융상품검색 - 국내주식
      { path: 'IN04A001', component: () => import('@/views/IN/04/IN04A001.vue') }, // 주식종목 진단
      { path: 'IN06A001', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의 pick
      { path: 'IN06A002', component: () => import('@/views/IN/06/IN06A002.vue') }, // 고수의 pick
      { path: 'IN10A000', component: () => import('@/views/IN/10/IN10A000.vue') }, // 투자상상퀴즈
      { path: 'IN10A001', component: () => import('@/views/IN/10/IN10A001.vue') }, // 투자상상퀴즈 - 상세
      { path: 'IN11A001', component: () => import('@/views/IN/11/IN11A001.vue') }, // 추천테마
      { path: 'IN11A002', component: () => import('@/views/IN/11/IN11A002.vue') }, // 추천테마 - 상세
    ],
  },
];

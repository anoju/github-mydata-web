// 퍼블리싱 페이지 경로
export default [
  // 투자생활
  {
    path: '/TR',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '03',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'TR03A001', component: () => import('@/views/TR/03/TR03A001.vue') }, // 이체금액입력
        ],
      },
      {
        path: '05',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'TR05A003', component: () => import('@/views/TR/05/TR05A003.vue') }, // 이체정보확인
        ],
      },
      {
        path: '06',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'TR06A001', component: () => import('@/views/TR/06/TR06A001.vue') }, // 이체완료
          { path: 'TR06A002', component: () => import('@/views/TR/06/TR06A002.vue') }, // 이체실패
        ],
      },
      {
        path: '08',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'TR08A001', component: () => import('@/views/TR/08/TR08A001.vue') }, // 이체불가시간안내
        ],
      },
      {
        path: '09',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'TR09A001', component: () => import('@/views/TR/09/TR09A001.vue') }, // 추가인증
          { path: 'TR09A001_1', component: () => import('@/views/TR/09/TR09A001_1.vue') }, // 2채널 인증
          { path: 'TR09C001', component: () => import('@/views/TR/09/TR09C001.vue') }, // 휴대폰 SMS인증
          { path: 'TR09D001', component: () => import('@/views/TR/09/TR09D001.vue') }, // 해외출국확인
        ],
      },
    ],
  },

];

// 퍼블리싱 페이지 경로
export default [
  // 유틸
  {
    path: '/EN',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '04',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'EN04A002', component: () => import('@/views/EN/04/EN04A002.vue') }, // 간편인증비밀번호
          { path: 'EN04B001', component: () => import('@/views/EN/04/EN04B001.vue') }, // 지문등록 시작
          { path: 'EN04C001', component: () => import('@/views/EN/04/EN04C001.vue') }, // 안면등록 시작
        ],
      },
      {
        path: '05',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'EN05A001', component: () => import('@/views/EN/05/EN05A001.vue') }, // 공동인증서 가져오기
          { path: 'EN05A002', component: () => import('@/views/EN/05/EN05A002.vue') }, // 공동인증서 가져오기 완료
          { path: 'EN05B001', component: () => import('@/views/EN/05/EN05B001.vue') }, // 카카오페이 인증서 발급
        ],
      },
      {
        path: '06',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'EN06A001', component: () => import('@/views/EN/06/EN06A001.vue') }, // 로그인 로그인방법선택
        ],
      },
    ],
  },

];

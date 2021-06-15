// 퍼블리싱 페이지 경로
export default [
  // 투자생활
  {
    path: '/IN',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '01',
        component: () => import('@/views/IN/01/IN01.vue'),
        children: [
          { path: 'IN01A001', component: () => import('@/views/IN/01/IN01A001.vue') }, // 투자자산 통계
          { path: 'IN01A003', component: () => import('@/views/IN/01/IN01A003.vue') }, // 보유 상품
          { path: 'IN01A005', component: () => import('@/views/IN/01/IN01A005.vue') }, // 투자자산 변동
        ],
      },
      {
        path: '02',
        component: () => import('@/views/IN/02/IN02.vue'),
        children: [
          { path: 'IN02A002', component: () => import('@/views/IN/02/IN02A002.vue') }, // 국내주식
          { path: 'IN02A003', component: () => import('@/views/IN/02/IN02A003.vue') }, // 해외주식
          { path: 'IN02A004', component: () => import('@/views/IN/02/IN02A004.vue') }, // 펀드
          { path: 'IN02A006', component: () => import('@/views/IN/02/IN02A006.vue') }, // 채권
          { path: 'IN02A008', component: () => import('@/views/IN/02/IN02A008.vue') }, // ELS/DLS
          { path: 'IN02A009', component: () => import('@/views/IN/02/IN02A009.vue') }, // WRAP
          { path: 'IN02A011', component: () => import('@/views/IN/02/IN02A011.vue') }, // 발행어음
          { path: 'IN02A012', component: () => import('@/views/IN/02/IN02A012.vue') }, // CMA
          { path: 'IN02A013', component: () => import('@/views/IN/02/IN02A013.vue') }, // 공모주
        ],
      },
      {
        path: '03',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN03A001', component: () => import('@/views/IN/03/IN03A001.vue') }, // 포트폴리오 진단
        ],
      },
      {
        path: '04',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN04A001', component: () => import('@/views/IN/04/IN04A001.vue') }, // 주식종목 진단
        ],
      },
      {
        path: '05',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN05A001', component: () => import('@/views/IN/05/IN05A001.vue') },
          { path: 'IN05A002', component: () => import('@/views/IN/05/IN05A002.vue') },
        ],
      },
      {
        path: '06',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN06A001', component: () => import('@/views/IN/06/IN06A001.vue') }, // 투자/고수의Pick
          { path: 'IN06A002', component: () => import('@/views/IN/06/IN06A002.vue') }, // 고수의 pick 상세
        ],
      },
      {
        path: '07',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN07A000', component: () => import('@/views/IN/07/IN07A000.vue') }, // 가상투자 룰렛
          { path: 'IN07A001', component: () => import('@/views/IN/07/IN07A001.vue') }, // 가상투자 시작하기
          { path: 'IN07A002', component: () => import('@/views/IN/07/IN07A002.vue') }, // 가상투자 메인
          { path: 'IN07A005', component: () => import('@/views/IN/07/IN07A005.vue') }, // 비중변경 로딩페이지
          { path: 'IN07A006', component: () => import('@/views/IN/07/IN07A006.vue') }, // 가상투자 페이퍼
        ],
      },
      {
        path: '09',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN09A001', component: () => import('@/views/IN/09/IN09A001.vue') }, // 은퇴준비진단 시작하기
          {
            path: 'IN09A010',
            component: () => import('@/views/IN/09/IN09A010.vue'),
            redirect: '/IN/09/IN09A010/1',
            children: [
              { path: '1', component: () => import('@/views/IN/09/IN09A002.vue'), meta: { page: 1 } }, // 은퇴준비진단 스텝1
              { path: '2', component: () => import('@/views/IN/09/IN09A003.vue'), meta: { page: 2 } }, // 은퇴준비진단 스텝2
              { path: '3', component: () => import('@/views/IN/09/IN09A004.vue'), meta: { page: 3 } }, // 은퇴준비진단 스텝3
              { path: '4', component: () => import('@/views/IN/09/IN09A005.vue'), meta: { page: 4 } }, // 은퇴준비진단 스텝4
              { path: '5', component: () => import('@/views/IN/09/IN09A006.vue'), meta: { page: 5 } }, // 은퇴준비진단 스텝5
              { path: '6', component: () => import('@/views/IN/09/IN09A007.vue'), meta: { page: 6 } }, // 은퇴준비진단 스텝6
            ],
          },
          { path: 'IN09A008', component: () => import('@/views/IN/09/IN09A008.vue') }, // 은퇴준비진단 진단완료
        ],
      },
      {
        path: '10',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN10A000', component: () => import('@/views/IN/10/IN10A000.vue') }, // 투자상상 퀴즈 (임시)
          { path: 'IN10A001', component: () => import('@/views/IN/10/IN10A001.vue') }, // 투자상상 퀴즈 상세
        ],
      },
      {
        path: '11',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN11A001', component: () => import('@/views/IN/11/IN11A001.vue') }, // 추천테마 리스트
          { path: 'IN11A002', component: () => import('@/views/IN/11/IN11A002.vue') }, // 추천테마 상세
        ],
      },
      {
        path: '12',
        component: () => import('@/views/IN/12/IN12.vue'),
        children: [
          { path: 'IN12A001', component: () => import('@/views/IN/12/IN12A001.vue') },
          { path: 'IN12A002', component: () => import('@/views/IN/12/IN12A002.vue') },
          { path: 'IN12A003', component: () => import('@/views/IN/12/IN12A003.vue') },
          { path: 'IN12A004', component: () => import('@/views/IN/12/IN12A004.vue') },
          { path: 'IN12A005', component: () => import('@/views/IN/12/IN12A005.vue') },
        ],
      },
    ],
  },

];

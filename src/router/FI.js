// 퍼블리싱 페이지 경로
export default [
  // 금융생활
  {
    path: '/FI',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '02',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'FI02A001', component: () => import('@/views/FI/02/FI02A001.vue') }, // 카드
          { path: 'FI02A002', component: () => import('@/views/FI/02/FI02A002.vue') }, // 신용카드청구서관리
          { path: 'FI02A003', component: () => import('@/views/FI/02/FI02A003.vue') }, // 신용카드청구서관리 상세
          { path: 'FI02A005', component: () => import('@/views/FI/02/FI02A005.vue') }, // 월별승인금액
          { path: 'FI02A006', component: () => import('@/views/FI/02/FI02A006.vue') }, // 소비달력
          { path: 'FI02A007', component: () => import('@/views/FI/02/FI02A007.vue') }, // 포인트목록
          { path: 'FI02A008', component: () => import('@/views/FI/02/FI02A008.vue') }, // 할부관리
          { path: 'FI02A009', component: () => import('@/views/FI/02/FI02A009.vue') }, // 상세조회
          { path: 'FI02A010', component: () => import('@/views/FI/02/FI02A010.vue') }, // 단일거래상세
        ],
      },
      {
        path: '03',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'FI03A001', component: () => import('@/views/FI/03/FI03A001.vue') }, //  보험
          { path: 'FI03A002', component: () => import('@/views/FI/03/FI03A002.vue') }, //  상세조회(기본) - 계약정보, 납입내역
          { path: 'FI03A004', component: () => import('@/views/FI/03/FI03A004.vue') }, //  상세조회(자동차보험)
          { path: 'FI03A005', component: () => import('@/views/FI/03/FI03A005.vue') }, //  상세조회(IRP)
          { path: 'FI03A006', component: () => import('@/views/FI/03/FI03A006.vue') }, //  상세조회(대출)
        ],
      },
      {
        path: '04',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'FI04A001', component: () => import('@/views/FI/04/FI04A001.vue') }, // 금융생활 - 은행
          { path: 'FI04A002', component: () => import('@/views/FI/04/FI04A002.vue') }, // 금융생활 - 은행 - 입출금 내역
          { path: 'FI04A003', component: () => import('@/views/FI/04/FI04A003.vue') }, // 금융생활 - 은행 - 상세조회
          { path: 'FI04A004', component: () => import('@/views/FI/04/FI04A004.vue') }, // 금융생활 - 은행 - 단일거래 상세
          { path: 'FI04A005', component: () => import('@/views/FI/04/FI04A005.vue') }, // 금융생활 - 은행 - 다른계좌보기
          { path: 'FI04A006', component: () => import('@/views/FI/04/FI04A006.vue') }, // 금융생활 - 은행 - 내역메모
        ],
      },
      {
        path: '08',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'FI08A001', component: () => import('@/views/FI/08/FI08A001.vue') }, // 금융생활 - 보증보험
          { path: 'FI08A002', component: () => import('@/views/FI/08/FI08A002.vue') }, // 금융생활 - 보증보험 상세
          { path: 'FI08A003', component: () => import('@/views/FI/08/FI08A003.vue') }, // 금융생활 - 통신
          { path: 'FI08A004', component: () => import('@/views/FI/08/FI08A004.vue') }, // 금융생활 - 통신 납부내역
          { path: 'FI08A005', component: () => import('@/views/FI/08/FI08A005.vue') }, // 금융생활 - 통신 상세조회
        ],
      },
      {
        path: '09',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'FI09A001', component: () => import('@/views/FI/09/FI09A001.vue') }, // 금융생활 - 페이
          { path: 'FI09A002', component: () => import('@/views/FI/09/FI09A002.vue') }, // 금융생활 - 페이 - 충전관리
          { path: 'FI09A004', component: () => import('@/views/FI/09/FI09A004.vue') }, // 금융생활 - 페이 - 결제내역
          { path: 'FI09A006', component: () => import('@/views/FI/09/FI09A006.vue') }, // 금융생활 - 페이 - 상세조회
          { path: 'FI09A010', component: () => import('@/views/FI/09/FI09A010.vue') }, // 금융생활 - 페이 - 단일거래상세
        ],
      },
      {
        path: '10',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'FI10A001', component: () => import('@/views/FI/10/FI10A001.vue') }, // 금융생활 - 할부금융
          { path: 'FI10A002', component: () => import('@/views/FI/10/FI10A002.vue') }, // 금융생활 - 할부금융 - 상세조회
        ],
      },
    ],
  },

];

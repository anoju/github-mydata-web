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
        path: '02',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'MY02A001', component: () => import('@/views/MY/02/MY02A001.vue') }, // 내서랍 메모리스트
          { path: 'MY02A003', component: () => import('@/views/MY/02/MY02A003.vue') }, // 내서랍 메모상세
        ],
      },
      {
        path: '03',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'MY03A004', component: () => import('@/views/MY/03/MY03A004.vue') }, // 내서랍 메모상세(이벤트)
        ],
      },
      {
        path: '04',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'MY04A003', component: () => import('@/views/MY/04/MY04A003.vue') }, // mypage
          { path: 'MY04A010', component: () => import('@/views/MY/04/MY04A010.vue') }, // 개인정보 관리
          { path: 'MY04A017', component: () => import('@/views/MY/04/MY04A017.vue') }, // 개인정보 관리수정
          { path: 'MY04A012', component: () => import('@/views/MY/04/MY04A012.vue') }, // 회원탈퇴
          { path: 'MY04A014', component: () => import('@/views/MY/04/MY04A014.vue') }, // 거래내역
          { path: 'MY04A018', component: () => import('@/views/MY/04/MY04A018.vue') }, // 탈퇴완료
        ],
      },

      {
        path: '06',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          {
            path: '',
            component: () => import('@/views/MY/06/MY06A002.vue'), // 나의관심정보
            children: [
              { path: 'MY06A005', component: () => import('@/views/MY/06/MY06A005.vue') }, // 나의관심정보 - 내 자산
              { path: 'MY06A001', component: () => import('@/views/MY/06/MY06A001.vue') }, // 나의관심정보 - 찜상품
              { path: 'MY06A004', component: () => import('@/views/MY/06/MY06A004.vue') }, // 나의관심정보 - 내서랍
            ],
          },
          { path: 'MY06A007', component: () => import('@/views/MY/06/MY06A007.vue') }, // 순서편집
        ],
      },
      {
        path: '09',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'MY09A001', component: () => import('@/views/MY/09/MY09A001.vue') }, // 연동기관
        ],
      },
      {
        path: '10',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'MY10A001', component: () => import('@/views/MY/10/MY10A001.vue') }, // 연동기관 목록
          { path: 'MY10A002', component: () => import('@/views/MY/10/MY10A002.vue') }, // 일괄 정보변경/해지
          { path: 'MY10B001', component: () => import('@/views/MY/10/MY10B001.vue') }, // 연동정보관리 연동정보상세
          { path: 'MY10C001', component: () => import('@/views/MY/10/MY10C001.vue') }, // 연동정보관리 전송요구 변경완료
          { path: 'MY10D010', component: () => import('@/views/MY/10/MY10D010.vue') }, // 연동정보관리 연동해지 스텝1
          {
            path: 'MY10D010',
            component: () => import('@/views/MY/10/MY10D010.vue'),
            redirect: '/IN/09/MY10D010/1',
            children: [
              { path: '1', component: () => import('@/views/MY/10/MY10D001.vue'), meta: { page: 1 } }, // 연동정보관리 연동해지 (스텝1:1개일때)
              { path: '2', component: () => import('@/views/MY/10/MY10D002.vue'), meta: { page: 2 } }, // 연동정보관리 연동해지 (스텝2:1개일때)
              { path: '3', component: () => import('@/views/MY/10/MY10D003.vue'), meta: { page: 1 } }, // 연동정보관리 연동해지 (스텝1:여러개일때)
              { path: '4', component: () => import('@/views/MY/10/MY10D004.vue'), meta: { page: 2 } }, // 연동정보관리 연동해지 (스텝2:여러개일때)
              { path: '5', component: () => import('@/views/MY/10/MY10D005.vue'), meta: { page: 3 } }, // 연동정보관리 연동해지 (스텝3)
            ],
          },
          { path: 'MY10D006', component: () => import('@/views/MY/10/MY10D006.vue') }, // 연동정보관리 연동해지 완료(1개일때)
          { path: 'MY10D007', component: () => import('@/views/MY/10/MY10D007.vue') }, // 연동정보관리 연동해지 완료(여러개일때)
        ],
      },
    ],
  },

];

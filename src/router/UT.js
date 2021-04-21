// 퍼블리싱 페이지 경로
export default [
  // 유틸
  {
    path: '/UT',
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
          { path: 'UT01A001', component: () => import('@/views/UT/01/UT01A001.vue') }, // 로그인 로그인방법선택

          { path: 'UT01B006', component: () => import('@/views/UT/01/UT01B006.vue') }, // 로그인 간편비밀번호
          { path: 'UT01B001', component: () => import('@/views/UT/01/UT01B001.vue') }, // 로그인 지문인증로그인
          { path: 'UT01B002', component: () => import('@/views/UT/01/UT01B002.vue') }, // 로그인 안면인증로그인
          { path: 'UT01B005', component: () => import('@/views/UT/01/UT01B005.vue') }, // 로그인 휴면해제
        ],
      },
      {
        path: '02',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'UT02A004', component: () => import('@/views/UT/02/UT02A004.vue') }, // 시작하기
          { path: 'UT02A005', component: () => import('@/views/UT/02/UT02A005.vue') }, // 회원가입 본인확인선택
          { path: 'UT02A001', component: () => import('@/views/UT/02/UT02A001.vue') }, // 회원가입 휴대폰본인확인
          { path: 'UT02A010', component: () => import('@/views/UT/02/UT02A010.vue') }, // 회원가입 공동인증서
          { path: 'UT02A011', component: () => import('@/views/UT/02/UT02A011.vue') }, // 회원가입 공동인증서 선택
          { path: 'UT02B001', component: () => import('@/views/UT/02/UT02B001.vue') }, // 회원가입 약관동의
          { path: 'UT02B007', component: () => import('@/views/UT/02/UT02B007.vue') }, // 회원가입 간편인증선택
          { path: 'UT02C001', component: () => import('@/views/UT/02/UT02C001.vue') }, // 회원가입 간편비밀번호
          { path: 'UT02D002', component: () => import('@/views/UT/02/UT02D002.vue') }, // 회원가입 지문인증등록
          { path: 'UT02D003', component: () => import('@/views/UT/02/UT02D003.vue') }, // 회원가입 지문인증등록완료
          { path: 'UT02D004', component: () => import('@/views/UT/02/UT02D004.vue') }, // 회원가입 안면인증등록안내
          { path: 'UT02D006', component: () => import('@/views/UT/02/UT02D006.vue') }, // 회원가입 안면인증등록
          { path: 'UT02F001', component: () => import('@/views/UT/02/UT02F001.vue') }, // 회원가입 정보입력
        ],
      },
      {
        path: '12',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'UT12A004', component: () => import('@/views/UT/12/UT12A004.vue') }, // 이중로그인
          { path: 'UT12A005', component: () => import('@/views/UT/12/UT12A005.vue') }, // 접속대기중
          { path: 'UT12A008', component: () => import('@/views/UT/12/UT12A008.vue') }, // 다시로그인하기
          { path: 'UT12A009', component: () => import('@/views/UT/12/UT12A009.vue') }, // 오류안내
        ],
      },
      {
        path: '14',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'UT14A001', component: () => import('@/views/UT/14/UT14A001.vue') }, // 마이데이터연동 인증방법선택
          { path: 'UT14B001', component: () => import('@/views/UT/14/UT14B001.vue') }, // 마이데이터연동 통합인증 기관/업체선택
          { path: 'UT14B012', component: () => import('@/views/UT/14/UT14B012.vue') }, // 마이데이터연동 통합인증 계좌선택
          { path: 'UT14B013', component: () => import('@/views/UT/14/UT14B013.vue') }, // 마이데이터연동 통합인증 연동계좌 없음
          { path: 'UT14C001', component: () => import('@/views/UT/14/UT14C001.vue') }, // 마이데이터연동 개별인증 기관/업체선택

          { path: 'UT14C012', component: () => import('@/views/UT/14/UT14C012.vue') }, // KB증권 인증
          { path: 'UT14C019', component: () => import('@/views/UT/14/UT14C019.vue') }, // 연동중
          { path: 'UT14C020_1', component: () => import('@/views/UT/14/UT14C020_1.vue') }, // 개별인증 연동결과
          { path: 'UT14C020_2', component: () => import('@/views/UT/14/UT14C020_2.vue') }, // 통합인증 연동결과
          { path: 'UT14C021', component: () => import('@/views/UT/14/UT14C021.vue') }, // 연동결과 - 실패
          { path: 'UT14C013', component: () => import('@/views/UT/14/UT14C013.vue') }, // 하나씩연동 계좌선택
          { path: 'UT14C014', component: () => import('@/views/UT/14/UT14C014.vue') }, // 개별인증 전송요구서
        ],
      },
      {
        path: '15',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'UT15D001', component: () => import('@/views/UT/15/UT15D001.vue') }, // 구매하기
          { path: 'UT15D004', component: () => import('@/views/UT/15/UT15D004.vue') }, // 판매하기
          { path: 'UT15D005', component: () => import('@/views/UT/15/UT15D005.vue') }, // 구매하기 주문결과(거래성공,일부성공)
          { path: 'UT15D006', component: () => import('@/views/UT/15/UT15D006.vue') }, // 구매하기 주문결과(거래실패)
          { path: 'UT15D005_2', component: () => import('@/views/UT/15/UT15D005_2.vue') }, // 구매하기 상세주문내역
          { path: 'UT15D007', component: () => import('@/views/UT/15/UT15D007.vue') }, // 판매하기 주문결과(거래성공,일부성공)
          { path: 'UT15D008', component: () => import('@/views/UT/15/UT15D008.vue') }, // 판매하기 주문결과(거래실패)
          { path: 'UT15D010', component: () => import('@/views/UT/15/UT15D010.vue') }, // 구매하기(일괄) 상세주문내역
        ],
      },
    ],
  },

];

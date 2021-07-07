import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    redirect: '/pub',
  },
  {
    path: '*',
    // redirect: '/404',
    component: () => import('@/views/UT/12/UT12A009.vue'),
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/views/UT/12/UT12A009.vue'),
  },
  // dev
  {
    path: '/validate',
    // beforeEnter: notRequireAuth(),
    component: () => import('@/views/validate/index.vue'),
    children: [
      { path: '', redirect: 'formSubmission' },
      { path: 'basicForm', component: () => import('@/views/validate/basicForm.vue') },
      { path: 'formSubmission', component: () => import('@/views/validate/formSubmission.vue') },
      { path: 'withoutVm', component: () => import('@/views/validate/withoutVm.vue') },
      { path: 'contextifiedValidators', component: () => import('@/views/validate/contextifiedValidators.vue') },
      { path: 'dataNesting', component: () => import('@/views/validate/dataNesting.vue') },
      { path: 'errorVsAnyError', component: () => import('@/views/validate/errorVsAnyError.vue') },
      { path: 'validationGroups', component: () => import('@/views/validate/validationGroups.vue') },
      { path: 'collectionsValidation', component: () => import('@/views/validate/collectionsValidation.vue') },
      { path: 'asynchronousValidation', component: () => import('@/views/validate/asynchronousValidation.vue') },
      { path: 'delayedValidationErrors', component: () => import('@/views/validate/delayedValidationErrors.vue') },
      { path: 'accessingValidatorParameters', component: () => import('@/views/validate/accessingValidatorParameters.vue') },
      { path: 'dynamicValidationSchema', component: () => import('@/views/validate/dynamicValidationSchema.vue') },
      { path: 'dynamicParameters', component: () => import('@/views/validate/dynamicParameters.vue') },
    ],
  },
  {
    path: '/debounce',
    name: 'debounce',
    component: () => import('@/views/debounce/index.vue'),
  },
  {
    path: '/dev',
    name: 'dev',
    component: () => import('@/views/dev/index.vue'),
    children: [
      { path: '', redirect: 'axios' },
      { path: 'axios', component: () => import('@/views/dev/axios.vue') },
      { path: 'await', component: () => import('@/views/dev/await.vue') },
      { path: 'chart', component: () => import('@/views/dev/chart.vue') },
      { path: 'highchart', component: () => import('@/views/dev/highchart.vue') },
    ],
  },
  // 코딩 가이드
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('@/views/guide/guide.vue'),
    redirect: '/guide/txt',
    children: [
      { path: 'txt', component: () => import('@/views/guide/txt.vue'), meta: { page: 1 } },
      { path: 'button', component: () => import('@/views/guide/button.vue'), meta: { page: 2 } },
      { path: 'form', component: () => import('@/views/guide/form.vue'), meta: { page: 3 } },
      { path: 'list', component: () => import('@/views/guide/list.vue'), meta: { page: 4 } },
      { path: 'table', component: () => import('@/views/guide/table.vue'), meta: { page: 5 } },
      { path: 'popup', component: () => import('@/views/guide/popup.vue'), meta: { page: 6 } },
      { path: 'swiper', component: () => import('@/views/guide/swiper.vue'), meta: { page: 7 } },
      { path: 'animate', component: () => import('@/views/guide/animate.vue'), meta: { page: 8 } },
      { path: 'etc', component: () => import('@/views/guide/etc.vue'), meta: { page: 9 } },
      { path: 'calendar', component: () => import('@/views/guide/calendar.vue'), meta: { page: 10 } },
      { path: 'drag', component: () => import('@/views/guide/drag.vue'), meta: { page: 11 } },
      { path: 'test', component: () => import('@/views/guide/test.vue'), meta: { page: 12 } },
    ],
  },
  { path: '/guide/pdf', component: () => import('@/views/guide/pdf.vue') },
  { path: '/guide/full', component: () => import('@/views/guide/pop/full.vue') },
  { path: '/guide/modal', component: () => import('@/views/guide/pop/modal.vue') },
  { path: '/guide/bottom', component: () => import('@/views/guide/pop/bottom.vue') },
  {
    path: '/pub',
    name: 'pubList',
    component: () => import('@/views/guide/pub.vue'),
  },
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
          { path: 'IN05A005', component: () => import('@/views/IN/05/IN05A002.vue') },
          { path: 'IN05A006', component: () => import('@/views/IN/05/IN05A002.vue') },
        ],
      },
      {
        path: '06',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          // { path: 'IN06A001', redirect: 'IN06A001/0' },
          // { path: 'IN06A001/:tab', component: () => import('@/views/IN/06/IN06A001.vue') }, // 투자/고수의Pick
          { path: 'IN06A001', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(나의북마크)
          { path: 'IN06A002', component: () => import('@/views/IN/06/IN06A002.vue') }, // 고수의 pick 상세
          { path: 'IN06AZ01', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(투자품격)
          { path: 'IN06AZ02', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(보유멘탈)
          { path: 'IN06AZ03', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(자본포스)
          { path: 'IN06AZ04', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(운빨충만)
          { path: 'IN06AZ05', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(찐진고수)
          { path: 'IN06AZ07', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(전체)
          { path: 'IN06AZ08', redirect: '/IN/06/IN06A002' },
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
          { path: 'IN11A001', component: () => import('@/views/IN/11/IN11A001.vue') }, // 주식테마 큐레이션 리스트
          { path: 'IN11A002', component: () => import('@/views/IN/11/IN11A002.vue') }, // 주식테마 큐레이션 상세
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
  // 마이페이지+유틸
  {
    path: '/MY',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      { path: '02/MY02A001', component: () => import('@/views/MY/02/MY02A001.vue') }, // 내메모 (종목메모)
      { path: '02/MY02A002', component: () => import('@/views/MY/02/MY02A001.vue') }, // 내메모 (비종목메모)
      { path: '02/MY02A003', component: () => import('@/views/MY/02/MY02A003.vue') }, // 내메모 메모상세
      { path: '03/MY03A001', component: () => import('@/views/MY/02/MY02A001.vue') }, // 내메모 (이벤트)
      { path: '03/MY03A004', component: () => import('@/views/MY/03/MY03A004.vue') }, // 내메모 메모상세(이벤트)
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
          { path: 'MY04A016', component: () => import('@/views/MY/04/MY04A014.vue') }, // 체결내역
          { path: 'MY04A014', component: () => import('@/views/MY/04/MY04A014.vue') }, // 체결예정내역
          { path: 'MY04A018', component: () => import('@/views/MY/04/MY04A018.vue') }, // 탈퇴완료
          { path: 'MY04A022', component: () => import('@/views/MY/04/MY04A022.vue') }, // 로그아웃
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
              { path: 'MY06A004', component: () => import('@/views/MY/06/MY06A004.vue') }, // 나의관심정보 - 내메모
            ],
          },
          { path: 'MY06A007', component: () => import('@/views/MY/06/MY06A007.vue') }, // 순서편집
        ],
      },
      { path: '09/MY09A001', component: () => import('@/views/MY/10/MY10A001.vue') }, // 연동기관
      { path: '10/MY10A001', component: () => import('@/views/MY/10/MY10A001.vue') }, // 연동기관 목록
      { path: '10/MY10A002', component: () => import('@/views/MY/10/MY10A002.vue') }, // 일괄 정보변경/해지
      { path: '10/MY10B001', component: () => import('@/views/MY/10/MY10B001.vue') }, // 연동정보관리 연동정보상세
      { path: '10/MY10C001', component: () => import('@/views/MY/10/MY10C001.vue') }, // 연동정보관리 전송요구 변경완료
      { path: '10/MY10D010', component: () => import('@/views/MY/10/MY10D010.vue') }, // 연동정보관리 연동해지 스텝1
      {
        path: '10/MY10D010',
        component: () => import('@/views/MY/10/MY10D010.vue'),
        redirect: '/IN/10/MY10D010/1',
        children: [
          { path: '1', component: () => import('@/views/MY/10/MY10D001.vue'), meta: { page: 1 } }, // 연동정보관리 연동해지 (스텝1:1개일때)
          { path: '2', component: () => import('@/views/MY/10/MY10D002.vue'), meta: { page: 2 } }, // 연동정보관리 연동해지 (스텝2:1개일때)
          { path: '3', component: () => import('@/views/MY/10/MY10D003.vue'), meta: { page: 1 } }, // 연동정보관리 연동해지 (스텝1:여러개일때)
          { path: '4', component: () => import('@/views/MY/10/MY10D004.vue'), meta: { page: 2 } }, // 연동정보관리 연동해지 (스텝2:여러개일때)
          { path: '5', component: () => import('@/views/MY/10/MY10D005.vue'), meta: { page: 3 } }, // 연동정보관리 연동해지 (스텝3)
        ],
      },
      { path: '10/MY10D006', component: () => import('@/views/MY/10/MY10D006.vue') }, // 연동정보관리 연동해지 완료(1개일때)
      { path: '10/MY10D007', component: () => import('@/views/MY/10/MY10D007.vue') }, // 연동정보관리 연동해지 완료(여러개일때)
    ],
  },
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
          { path: 'SC04A001', component: () => import('@/views/SC/04/SC04A001.vue') }, // 이벤트(진행중)
          { path: 'SC04A003', component: () => import('@/views/SC/04/SC04A001.vue') }, // 이벤트(전체)
          { path: 'SC04A005', component: () => import('@/views/SC/04/SC04A001.vue') }, // 이벤트(당첨자발표)
        ],
      },
    ],
  },
  // 환경설정
  {
    path: '/SE',
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
          { path: 'SE01A001', component: () => import('@/views/SE/01/SE01A001.vue') }, // 환경설정
        ],
      },
    ],
  },
  // 오늘
  { path: '/FI/00/FI00A001', component: () => import('@/views/FI/00/index.vue') },
  { path: '/IN/00/IN00A001', component: () => import('@/views/IN/00/index.vue') },
  { path: '/TO/00/TO00A001', redirect: '/TO/00' },
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
          { path: 'TO01D002', component: () => import('@/views/TO/01/TO01D002.vue') }, // 내잔 QnA
          { path: 'TO01D003', component: () => import('@/views/TO/01/TO01D003.vue') }, // 내잔 QnA
          { path: 'TO01D004', component: () => import('@/views/TO/01/TO01D004.vue') }, // 내잔 QnA
          { path: 'TO01D005', component: () => import('@/views/TO/01/TO01D005.vue') }, // 내잔 QnA
          { path: 'TO01D006', component: () => import('@/views/TO/01/TO01D006.vue') }, // 내잔 QnA
          { path: 'TO01D007', component: () => import('@/views/TO/01/TO01D007.vue') }, // 내잔 QnA
          { path: 'TO01D008', component: () => import('@/views/TO/01/TO01D008.vue') }, // 내잔 QnA
          { path: 'TO01D009', component: () => import('@/views/TO/01/TO01D009.vue') }, // 내잔 QnA
          { path: 'TO01E001', component: () => import('@/views/TO/01/TO01E001.vue') }, // 내자산비타민(오늘의퀘스트)
          { path: 'TO01E014', component: () => import('@/views/TO/01/TO01E001.vue') }, // 내자산비타민(소비줄이기)
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
          {
            path: 'TO02C007', name: 'TO02C007', component: () => import('@/views/TO/02/TO02C007.vue'), props: true,
          }, // 월관리 추천 목록(추천)
          { path: 'TO02C010', component: () => import('@/views/TO/02/TO02C007.vue') }, // 월관리 추천 목록(등록)
          { path: 'TO02C012', component: () => import('@/views/TO/02/TO02C007.vue') }, // 월관리 추천 목록(제외)
        ],
      },
    ],
  },
  // 즉시이체
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
          { path: 'UT14B021', component: () => import('@/views/UT/14/UT14B021.vue') }, // 마이데이터연동 통합인증 한번에 연동
          { path: 'UT14B022', component: () => import('@/views/UT/14/UT14B022.vue') }, // 마이데이터연동 통합인증 한번에 연동 전송요구서(기관/업체)
          { path: 'UT14B024', component: () => import('@/views/UT/14/UT14B024.vue') }, // 마이데이터연동 통합인증 약관동의
          { path: 'UT14B030', component: () => import('@/views/UT/14/UT14B030.vue') }, // 마이데이터연동 통합인증 요청결과

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
          { path: 'UT15H001', component: () => import('@/views/UT/15/UT15H001.vue') }, // 서비스체험
        ],
      },
    ],
  },
  // VAPI
  {
    path: '/VAPI',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: 'UT',
        component: { render(c) { return c('router-view'); } },
        children: [
          {
            path: '14',
            component: { render(c) { return c('router-view'); } },
            children: [
              { path: 'UT14C012', component: () => import('@/views/UT/14/UT14C012.vue') }, // 국내주식
            ],
          },
        ],
      },
      {
        path: 'IN',
        component: { render(c) { return c('router-view'); } },
        children: [
          {
            path: '02',
            component: () => import('@/views/IN/02/IN02.vue'),
            children: [
              { path: 'IN02A002', component: () => import('@/views/IN/02/IN02A002.vue') }, // 국내주식
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
            path: '06',
            component: {
              render(c) { return c('router-view'); },
            },
            children: [
              { path: 'IN06A001', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(나의북마크)
              { path: 'IN06A002', component: () => import('@/views/IN/06/IN06A002.vue') }, // 고수의 pick 상세
              { path: 'IN06AZ01', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(투자품격)
              { path: 'IN06AZ02', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(보유멘탈)
              { path: 'IN06AZ03', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(자본포스)
              { path: 'IN06AZ04', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(운빨충만)
              { path: 'IN06AZ05', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(찐진고수)
              { path: 'IN06AZ07', component: () => import('@/views/IN/06/IN06A001.vue') }, // 고수의Pick(전체)
              { path: 'IN06AZ08', redirect: 'IN06A002' },
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
              { path: 'IN11A001', component: () => import('@/views/IN/11/IN11A001.vue') }, // 상품추천큐페이션
            ],
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

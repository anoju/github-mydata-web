<template>
  <kb-pop
    full
    title="상담 신청 결과"
  >
    <kb-pop-body>
      <div class="result_wrap">
        <h2><i class="ico_check"></i>
          상담예약 신청이<br />
          완료되었습니다.</h2>
        <dl class="result_list type2">
          <dt>고객명</dt>
          <dd>김*타</dd>

          <dt>연락처</dt>
          <dd>010-23**-12**</dd>

          <!-- 지점관련 -->
          <dt>지역</dt>
          <dd>서울시 강서구</dd>

          <dt>지점</dt>
          <dd>서울스타점<br />서울시 영등포구 여의도동 1234 스타빌딩</dd>
          <!-- //지점관련 -->

          <dt>예약날짜</dt>
          <dd>2021/02/12 월요일</dd>

          <dt>예약시간</dt>
          <dd>09:00 ~ 10:00</dd>

          <dt>문의사항</dt>
          <dd>주식종목</dd>

          <dt>문의내용</dt>
          <dd>한국항공우주</dd>
        </dl>

      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button yellow>
        확인
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'SC01A003',
  props: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

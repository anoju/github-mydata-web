<template>
  <kb-page page-title="상담 신청/조회">
    <kb-page-body>
      <div class="util_wrap fixed_btn">
        <div class="top_box">
          <div class="result_wrap mg_t0">
            <h2 class="t_center">
              김*타 고객님 <br />상담예약 내역입니다.</h2>
            <dl class="result_list type2">
              <dt class="t_left">고객명</dt>
              <dd>김*타</dd>

              <dt class="t_left">연락처</dt>
              <dd>010-23**-12**</dd>

              <!-- 지점관련 -->
              <dt class="t_left">지역</dt>
              <dd>서울시 강서구</dd>

              <dt class="t_left">지점</dt>
              <dd>서울스타점<br />서울시 영등포구 여의도동 1234 스타빌딩</dd>
              <!-- //지점관련 -->

              <dt class="t_left">예약날짜</dt>
              <dd>2021/02/12 월요일</dd>

              <dt class="t_left">예약시간</dt>
              <dd>09:00 ~ 10:00</dd>

              <dt class="t_left">문의사항</dt>
              <dd>주식종목</dd>

              <dt class="t_left">문의내용</dt>
              <dd>한국항공우주</dd>
            </dl>
          </div>
        </div>
        <div class="text_box"></div>
        <div class="footer_box mg_b8">
          <div class="section t_left">
            <ul class="txt_list">
              <li class="dot">당일에 신청한 상담 예약이 존재합니다.</li>
              <li class="dot">현재 상담 예약 취소만 가능합니다.</li>
            </ul>
          </div>
        </div>

        <kb-button-wrap bottom-fixed>
          <kb-button line>
            상담예약 취소
          </kb-button>
          <kb-button yellow>
            확인
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'SC01A002',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

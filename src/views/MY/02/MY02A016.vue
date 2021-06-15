<template>
  <kb-pop
    full
    title="메모 페이지 편집하기"
  >
    <kb-pop-body>
      <div class="section">
        <div class="t_right mg_t12">
          <kb-button h32 class="fc_blue"><div class="bt_ic_add blue"></div> 종목추가</kb-button>
          <kb-button h32 class="fc_blue"><div class="bt_ic_write blue"></div> 직접작성</kb-button>
        </div>
        <div class="select_item_wrap mg_t13">
          <div class="select_item">
            삼성전자
            <kb-button not class="del">삭제</kb-button>
          </div>
          <div class="select_item">
            삼성SDI
            <kb-button not class="del">삭제</kb-button>
          </div>
          <div class="select_item">
            현대자동차
            <kb-button not class="del">삭제</kb-button>
          </div>
          <div class="select_item">
            삼성바이오로직스
            <kb-button not class="del">삭제</kb-button>
          </div>
          <div class="select_item">
            종목명
            <kb-button not class="del">삭제</kb-button>
          </div>
        </div>
        <div class="memo_write_wrap mg_t16">
          <kb-input
            placeholder="스크랩 제목을 입력하세요."
            title="스크랩 제목 입력"
            v-model="titleVal"
          />
          <div class="text_wrap">
            <kb-textarea
              v-model="textareaVal1"
              auto-height
              placeholder="내용을 입력하세요."
              title="내용입력"
            />
          </div>
          <div class="text_wrap">
            <kb-textarea
              v-model="textareaVal2"
              auto-height
              placeholder="내용을 입력하세요."
              title="내용입력"
            />
            <div class="link_info_box">
              <div class="link_info_img">
                <img src="~@/assets/images/temp/news_img1.png" alt="" />
              </div>
              <div class="link_info_txt">
                <div class="fz_14 text_line_1"><strong>링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀</strong></div>
                <div class="fz_12 fc_666 mg_t4">m.news.naver.com</div>
              </div>
            </div>
            <div class="del_wrap">
              <kb-button not class="memo_text_del">삭제</kb-button>
            </div>
          </div>
        </div>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button line>삭제</kb-button>
      <kb-button yellow>저장</kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'MY02A016',
  data() {
    return {
      titleVal: '',
      textareaVal1: '',
      textareaVal2: '',
    };
  },
  methods: {
  },
};
</script>

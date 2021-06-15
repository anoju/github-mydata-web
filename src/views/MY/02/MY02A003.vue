<template>
  <kb-page
    page-title="내 메모"
  >
    <kb-page-body>
      <div class="section">
        <div class="memo_item mg_t32">
          <div class="memo_item_util">
            <kb-button
              class="btn_util"
              star
              :class="{checked:isStar}"
              role="checkbox"
              :aria-checked="isStar?'true':'false'"
              @click="isStar = !isStar"
            >관심등록</kb-button>
          </div>
          <div class="inner">
            <div class="tit text_line_2">
              <strong>메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀메모타이틀</strong>
            </div>
            <div class="sub_info">
              <ul>
                <li>2021/03/24</li>
                <li>작성자 홍길동</li>
              </ul>
              <div>
                <ico-txt large>이벤트응모중</ico-txt>
                <ico-txt large red>응모불가</ico-txt>
                <ico-txt large blue>이벤트개시</ico-txt>
              </div>
            </div>
            <div class="sub_info mg_t23">
              <div>
                <kb-button h32 round line>삼성전자</kb-button>
                <kb-button link line class="mg_l12" @click="showCompany($event.target)">외 10</kb-button>
                <span class="fz_14">종목 미분류</span>
              </div>
              <div>
                <kb-button h32 class="fc_blue"><div class="bt_ic_add blue"></div> 종목추가</kb-button>
              </div>
            </div>
            <div class="cont_item">
              <div class="cont">
                메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
                메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
                메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
              </div>
              <kb-button not a-tag class="link_info_box">
                <div class="link_info_img">
                  <img src="~@/assets/images/temp/news_img1.png" alt="" />
                </div>
                <div class="link_info_txt">
                  <div class="fz_14 text_line_1"><strong>링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀</strong></div>
                  <div class="fz_12 fc_666 mg_t4">m.news.naver.com</div>
                </div>
              </kb-button>
            </div>
            <div class="cont_item">
              <div class="cont">
                메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
                메모내용 출력 입력 제한없음. 메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음.메모내용 출력 입력 제한없음 입력 제한없음.
              </div>
              <kb-button not a-tag class="link_info_box">
                <div class="link_info_img">
                  <img src="~@/assets/images/temp/news_img1.png" alt="" />
                </div>
                <div class="link_info_txt">
                  <div class="fz_14 text_line_1"><strong>링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀링크타이틀</strong></div>
                  <div class="fz_12 fc_666 mg_t4">m.news.naver.com</div>
                </div>
              </kb-button>
            </div>
          </div>
        </div>
      </div>
      <kb-button-wrap bottom-fixed scl-hide class="icon_type">
        <kb-button>
          <div class="bt_ic_edit"></div>
          <div class="txt">화면편집</div>
        </kb-button>
        <kb-button>
          <div class="bt_ic_add"></div>
          <div class="txt">종목추가</div>
        </kb-button>
        <kb-button>
          <div class="bt_ic_share"></div>
          <div class="txt">공유</div>
        </kb-button>
        <kb-button>
          <div class="bt_ic_event"></div>
          <div class="txt">응모하기</div>
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY02A003',
  data() {
    return {
      isStar: false,
    };
  },
  methods: {
    showCompany(el) {
      this.$modal({
        component: () => import('@/views/MY/02/MY02A004.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>

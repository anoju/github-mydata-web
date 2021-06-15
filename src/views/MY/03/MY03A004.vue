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
              like2
              :class="{checked:isStar}"
              role="checkbox"
              :aria-checked="isStar?'true':'false'"
              @click="isStar = !isStar"
            >99</kb-button>
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
                <ico-txt large blue>이벤트개시</ico-txt>
              </div>
            </div>
            <div class="sub_info mg_t23">
              <div>
                <kb-button h32 round line>삼성전자</kb-button>
                <kb-button link line class="mg_l12" @click="showCompany($event.target)">외 10</kb-button>
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
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY03A004',
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

<template>
  <kb-page page-title="이벤트">
    <kb-page-body>
      <div class="section">
        <kb-tabs
          class="mg_b0"
          v-model="tabIdx"
        >
          <kb-tab title="진행중" to="/SC/04/SC04A001">
            <div class="t_right mg_b12">
              <kb-select
                v-model="sortVal"
                :options="sortOpt"
                inline
                dir="rtl"
              />
            </div>
            <div class="box_list_ty1">
              <ul>
                <li>
                  <div class="evt_item">
                    <kb-button a-tag not class="inner" @click="showPopup($event.target)">
                      <div class="cont">
                        <div class="fz_12 fc_666 mg_t4"><strong>기타</strong></div>
                        <div class="text_line_2 mg_t4"><strong>이벤트 타이틀입니다. 이벤트 타이틀입니다. 이벤트 타이틀입니다. 이벤트 타이틀입니다.</strong></div>
                        <div class="fz_12 fc_666 mg_t8">2020/12/23</div>
                      </div>
                      <div class="img">
                        <img src="~@/assets/images/temp/sample_pop.png" alt="" />
                      </div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="evt_item">
                    <kb-button a-tag not class="inner" @click="showPopup($event.target)">
                      <div class="cont">
                        <div class="fz_12 fc_666 mg_t4"><strong>기타</strong></div>
                        <div class="text_line_2 mg_t4"><strong>이벤트 타이틀입니다. 이벤트 타이틀입니다. 이벤트 타이틀입니다. 이벤트 타이틀입니다.</strong></div>
                        <div class="fz_12 fc_666 mg_t8">2020/12/23</div>
                        <!-- 2021-06-15 수정 -->
                        <div class="text_line_1 fz_14 mg_t16">보조 설명 텍스트 영역입니다.보조 설명 텍스트 영역입니다.보조 설명 텍스트 영역입니다.</div>
                        <!-- //2021-06-15 -->
                      </div>
                      <div class="img">
                        <img src="~@/assets/images/temp/sample_pop.png" alt="" />
                      </div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="evt_item">
                    <kb-button a-tag not class="inner" @click="showPopup($event.target)">
                      <div class="cont">
                        <div class="fz_12 fc_666 mg_t4"><strong>기타</strong></div>
                        <div class="text_line_2 mg_t4"><strong>이벤트 타이틀입니다. 이벤트 타이틀입니다. 이벤트 타이틀입니다. 이벤트 타이틀입니다.</strong></div>
                        <div class="fz_12 fc_666 mg_t8">2020/12/23</div>
                      </div>
                      <div class="img">
                        <img src="~@/assets/images/temp/sample_pop.png" alt="" />
                      </div>
                    </kb-button>
                  </div>
                </li>
              </ul>
            </div>
            <div class="no_list_txt icon vh_50">
              <strong class="tit">조회 내역이 없습니다.</strong>
            </div>
          </kb-tab>
          <kb-tab title="전체" to="/SC/04/SC04A003">
            <div class="t_right mg_b12">
              <kb-select
                v-model="sortVal"
                :options="sortOpt"
                inline
                dir="rtl"
              />
            </div>
            <div class="line_list_ty2 border_ty2">
              <ul>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner" @click="showPopup($event.target)">
                      <div class="text_line_1">이벤트 타이틀 영엽입니다. 이벤트 타이틀 영엽입니다. 이벤트 타이틀 영엽입니다.</div>
                      <div class="fz_12 fc_666 mg_t8">2021/12/23 ~ 2021/12/25</div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner" @click="showPopup($event.target)">
                      <div class="text_line_1">이벤트 타이틀 영엽입니다. 이벤트 타이틀 영엽입니다. 이벤트 타이틀 영엽입니다.</div>
                      <div class="fz_12 fc_666 mg_t8">2021/12/23 ~ 2021/12/25</div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner" @click="showPopup($event.target)">
                      <div class="text_line_1">이벤트 타이틀 영엽입니다. 이벤트 타이틀 영엽입니다. 이벤트 타이틀 영엽입니다.</div>
                      <div class="fz_12 fc_666 mg_t8">2021/12/23 ~ 2021/12/25</div>
                    </kb-button>
                  </div>
                </li>
              </ul>
            </div>
            <div class="no_list_txt icon vh_50">
              <strong class="tit">조회 내역이 없습니다.</strong>
            </div>
          </kb-tab>
          <kb-tab title="당첨자발표" to="/SC/04/SC04A005">
            <div class="t_right mg_b12">
              <kb-select
                v-model="sortVal"
                :options="sortOpt"
                inline
                dir="rtl"
              />
            </div>
            <div class="line_list_ty2 border_ty2">
              <ul>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="text_line_1">이벤트 타이틀 영엽입니다. 이벤트 타이틀 영엽입니다. 이벤트 타이틀 영엽입니다.</div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="text_line_1">이벤트 타이틀 영엽입니다. 이벤트 타이틀 영엽입니다. 이벤트 타이틀 영엽입니다.</div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="text_line_1">이벤트 타이틀 영엽입니다. 이벤트 타이틀 영엽입니다. 이벤트 타이틀 영엽입니다.</div>
                    </kb-button>
                  </div>
                </li>
              </ul>
            </div>
            <div class="no_list_txt icon vh_50">
              <strong class="tit">조회 내역이 없습니다.</strong>
            </div>
          </kb-tab>
        </kb-tabs>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'SC04A001',
  data() {
    return {
      tabIdx: 0,
      sortVal: '1',
      sortOpt: [
        { text: '전체', value: '1' },
        { text: '펀드', value: '2' },
        { text: '체크카드', value: '3' },
        { text: '모바일', value: '4' },
        { text: '은행연계/비대면', value: '5' },
        { text: '기타', value: '6' },
      ],
    };
  },
  watch: {
    $route(to) {
      if (to.path.indexOf('SC04A001') > 0) this.tabIdx = 0;
      else if (to.path.indexOf('SC04A003') > 0) this.tabIdx = 1;
      else if (to.path.indexOf('SC04A005') > 0) this.tabIdx = 2;
    },
  },
  mounted() {
    if (this.$route.path.indexOf('SC04A003') > 0) this.tabIdx = 1;
    else if (this.$route.path.indexOf('SC04A005') > 0) this.tabIdx = 2;
  },
  methods: {
    showPopup(el) {
      this.$modal({
        component: () => import('@/views/SC/04/SC04A002.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>

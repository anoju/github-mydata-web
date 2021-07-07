<template>
  <kb-page page-title="월 지출 추천 목록">
    <kb-page-body>
      <div class="section">
        <kb-tabs
          fixed
          content-class="mg_t0"
          v-model="tabIdx"
        >
          <kb-tab
            title="추천목록"
            to="/TO/02/TO02C007"
          >
            <div class="line_list_ty1">
              <ul>
                <li>
                  <div class="item">
                    <i class="ico" style="background:skyblue"></i>
                    <div class="inner">
                      <div class="flex">
                        <div class="left">
                          <div class="tit"><strong>KB 국민은행 김스타</strong></div>
                        </div>
                        <div class="right">
                          <div class="price"><strong>300,000,000원</strong></div>
                        </div>
                      </div>
                      <ul class="sub">
                        <li><strong>출금</strong></li>
                        <li>03/04 13:50:23</li>
                      </ul>
                    </div>
                    <kb-button-wrap>
                      <kb-button line h40>
                        제외하기
                      </kb-button>
                      <kb-button line h40 blue @click="showFullPopup($event.target)">
                        등록하기
                      </kb-button>
                    </kb-button-wrap>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <i class="ico" style="background:skyblue"></i>
                    <div class="inner">
                      <div class="flex">
                        <div class="left">
                          <div class="tit"><strong>KB 국민은행 김스타</strong></div>
                        </div>
                        <div class="right">
                          <div class="price"><strong>300,000,000원</strong></div>
                        </div>
                      </div>
                      <ul class="sub">
                        <li><strong>출금</strong></li>
                        <li>03/04 13:50:23</li>
                      </ul>
                    </div>
                    <kb-button-wrap>
                      <kb-button line h40>
                        제외하기
                      </kb-button>
                      <kb-button line h40 blue @click="showFullPopup($event.target)">
                        등록하기
                      </kb-button>
                    </kb-button-wrap>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <i class="ico" style="background:skyblue"></i>
                    <div class="inner">
                      <div class="flex">
                        <div class="left">
                          <div class="tit"><strong>KB 국민은행 김스타KB 국민은행 김스타</strong></div>
                        </div>
                        <div class="right">
                          <div class="price"><strong>300,300,000,000원</strong></div>
                        </div>
                      </div>
                      <ul class="sub">
                        <li><strong>출금</strong></li>
                        <li>03/04 13:50:23</li>
                      </ul>
                    </div>
                    <kb-button-wrap>
                      <kb-button line h40>
                        제외하기
                      </kb-button>
                      <kb-button line h40 blue @click="showFullPopup($event.target)">
                        등록하기
                      </kb-button>
                    </kb-button-wrap>
                  </div>
                </li>
              </ul>
            </div>

            <!-- 데이터 없을때 -->
            <div class="no_list_txt">
              <strong class="tit">새롭게 추천해 드릴 정보가 없네요 :)</strong>
            </div>
            <!-- //데이터 없을때 -->
          </kb-tab>
          <kb-tab
            title="등록완료"
            to="/TO/02/TO02C010"
          >
            <div class="line_list_ty1">
              <ul>
                <li>
                  <div class="item">
                    <i class="ico" style="background:skyblue"></i>
                    <div class="inner">
                      <div class="flex">
                        <div class="left">
                          <div class="tit"><strong>KB 국민은행 김스타</strong></div>
                        </div>
                        <div class="right">
                          <div class="price"><strong>300,000,000원</strong></div>
                        </div>
                      </div>
                      <ul class="sub">
                        <li><strong>출금</strong></li>
                        <li>03/04 13:50:23</li>
                      </ul>
                    </div>
                    <kb-button-wrap>
                      <kb-button line h40>
                        제외하기
                      </kb-button>
                    </kb-button-wrap>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <i class="ico" style="background:skyblue"></i>
                    <div class="inner">
                      <div class="flex">
                        <div class="left">
                          <div class="tit"><strong>KB 국민은행 김스타KB 국민은행 김스타</strong></div>
                        </div>
                        <div class="right">
                          <div class="price"><strong>300,300,000,000원</strong></div>
                        </div>
                      </div>
                      <ul class="sub">
                        <li><strong>출금</strong></li>
                        <li>03/04 13:50:23</li>
                      </ul>
                    </div>
                    <kb-button-wrap>
                      <kb-button line h40>
                        제외하기
                      </kb-button>
                    </kb-button-wrap>
                  </div>
                </li>
              </ul>
            </div>

            <!-- 데이터 없을때 -->
            <div class="no_list_txt">
              <strong class="tit">아직 등록된 정보가 없어요.</strong>
            </div>
            <!-- //데이터 없을때 -->
          </kb-tab>
          <kb-tab
            title="제외목록"
            to="/TO/02/TO02C012"
          >
            <div class="line_list_ty1">
              <ul>
                <li>
                  <div class="item">
                    <i class="ico" style="background:skyblue"></i>
                    <div class="inner">
                      <div class="flex">
                        <div class="left">
                          <div class="tit"><strong>KB 국민은행 김스타</strong></div>
                        </div>
                        <div class="right">
                          <div class="price"><strong>300,000,000원</strong></div>
                        </div>
                      </div>
                      <ul class="sub">
                        <li><strong>출금</strong></li>
                        <li>03/04 13:50:23</li>
                      </ul>
                    </div>
                    <kb-button-wrap>
                      <kb-button line h40 blue @click="showFullPopup($event.target)">
                        등록하기
                      </kb-button>
                    </kb-button-wrap>
                  </div>
                </li>
              </ul>
            </div>

            <!-- 데이터 없을때 -->
            <div class="no_list_txt">
              <strong class="tit">아직 제외된 정보가 없어요.</strong>
            </div>
            <!-- //데이터 없을때 -->
          </kb-tab>
        </kb-tabs>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI02A006',
  data() {
    return {
      tabIdx: 0,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        if (to.path.indexOf('TO02C007') > 0) this.tabIdx = 0;
        else if (to.path.indexOf('TO02C010') > 0) this.tabIdx = 1;
        else if (to.path.indexOf('TO02C012') > 0) this.tabIdx = 2;
      },
    },
  },
  mounted() {
  },
  methods: {
    showFullPopup(el) {
      this.$modal({
        component: () => import('@/views/TO/02/TO02C008.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>

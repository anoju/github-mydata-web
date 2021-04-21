<template>
  <kb-page page-title="월 관리 추천 목록">
    <kb-page-body>
      <div class="section">
        <kb-tabs
          fixed
          content-class="mg_t0"
        >
          <kb-tab
            title="추천목록"
            active
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
          </kb-tab>
          <kb-tab
            title="등록완료"
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
          </kb-tab>
          <kb-tab
            title="제외목록"
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
    };
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

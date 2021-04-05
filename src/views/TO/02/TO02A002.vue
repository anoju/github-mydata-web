<template>
  <div class="section">
    <!-- banner -->
    <div class="top_banner">
      <kb-button aTag not>
        <p>올 해 내 자산은<br>얼마가 늘었을까?</p>
        <img src="@/assets/images/TO/02/img_banner_total_assets.png" alt="총 자산 이미지">
      </kb-button>
    </div>
    <!-- //banner -->
    <!-- 총 자산 -->
    <div class="total_assets_box">
      <kb-foldings class="not_border">
        <kb-folding>
          <div slot="title" class="stit">
            <strong>오늘 총 자산은<br>100,523,456,000원입니다.</strong>
            <!-- <p class="tip_txt">어제보다 3,454,000원 올랐어요!</p> -->
          </div>
          <ul class="total_assets_list">
            <li>
              <div>
                <span>부채(카드+대출)</span>
                <span>- 1,000,000,000원</span>
              </div>
              <!-- <p class="amount_money plus">+990,000</p> -->
            </li>
            <li>
              <div>
                <span>순자산</span>
                <span>123,456,000,000원</span>
              </div>
              <!-- <p class="amount_money minus">-990,000</p> -->
            </li>
          </ul>
        </kb-folding>
      </kb-foldings>
      <div class="btm_btn">
        <kb-button to="#" link>
          내 계좌 간 이체하기<i class="bt_ic_arr" aria-hidden="true" />
        </kb-button>
        <kb-checkbox
          switch small
          class="right"
        >
          증감액
        </kb-checkbox>
      </div>
    </div>
    <!-- //총 자산 -->
    <div class="assets_type_box">
      <kb-tabs type3>
        <kb-tab
          title="자산유형별"
          active
        >
          <kb-foldings type1 not-toggle class="ty3">
            <!-- 현금 -->
            <kb-folding>
              <template slot="title">
                <div class="accodion_header">
                  <p class="title">
                    <!--
                      ico1 : 현금
                      ico2 : 투자
                      ico3 : 카드,대출
                      ico4 : 보험
                      ico5 : 연금
                      ico6 : 실물
                    -->
                    <i class="ico1"></i>현금<span>예금총액</span>
                  </p>
                  <p class="money">300,000,000,000 원</p>
                  <p class="amount_money">454,000원 올랐어요!</p>
                </div>
              </template>
              <div class="accordion_box">
                <div class="box_header">
                  <p class="sub_tit">
                    <span>입출금</span>
                    <span>1,000,000,000원</span>
                  </p>
                  <!-- 증감액
                    fc_up : 상승
                    fc_down : 하락
                  -->
                  <p class="amount_money">+990,000</p>
                </div>
                <ul class="bank_list">
                  <li>
                    <div class="info">
                      <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                      <i class="ico" style="background:skyblue"></i>
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money">+990,000</p>
                  </li>
                  <li>
                    <div class="info">
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money">+990,000</p>
                  </li>
                  <li>
                    <div class="info">
                      <i class="ico" style="background:skyblue"></i>
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money">+990,000</p>
                  </li>
                </ul>
              </div>

              <div class="accordion_box">
                <div class="box_header">
                  <p class="sub_tit">
                    <span>비상금 <a href="#" class="link" @click="openAssetListEditorPop">직접입력</a></span>
                    <span>1,000,000,000원</span>
                  </p>
                  <p class="amount_money fc_down">990,000원 올랐어요!</p>
                </div>
                <ul class="bank_list">
                  <li>
                    <div class="info">
                      <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                      <p class="list_tit" @click="openAssetEditorPop">직접입력 문구</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <!-- 증감액
                      fc_up : 상승
                      fc_down : 하락
                    -->
                    <p class="amount_money fc_down">+990,000</p>
                  </li>
                </ul>
              </div>
            </kb-folding>
            <!-- //현금 -->
            <!-- 투자 -->
            <kb-folding>
              <template slot="title">
                <div class="accodion_header">
                  <p class="title">
                    <!--
                      ico1 : 현금
                      ico2 : 투자
                      ico3 : 카드,대출
                      ico4 : 보험
                      ico5 : 연금
                      ico6 : 실물
                    -->
                    <i class="ico2"></i>투자<span>평가금액</span>
                  </p>
                  <p class="money">300,000,000,000 원</p>
                  <p class="amount_money">-454,000원 내렸어요!</p>
                </div>
              </template>
              <div class="accordion_box">
                <div class="box_header">
                  <p class="sub_tit">
                    <span>국내주식</span>
                    <span>1,000,000,000원</span>
                  </p>
                  <!-- 증감액
                    fc_up : 상승
                    fc_down : 하락
                  -->
                  <p class="amount_money fc_down">+990,000(1.25%)</p>
                </div>
                <ul class="bank_list">
                  <li>
                    <div class="info">
                      <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                      <i class="ico" style="background:skyblue"></i>
                      <p class="list_tit">삼성전자</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money">+990,000</p>
                  </li>
                  <li>
                    <div class="info">
                      <p class="list_tit">삼성잔자</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money">+990,000</p>
                  </li>
                  <li>
                    <div class="info">
                      <i class="ico" style="background:skyblue"></i>
                      <p class="list_tit">테슬라</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money">+990,000</p>
                  </li>
                </ul>
              </div>
            </kb-folding>
            <!-- //투자 -->

            <!-- 카드 -->
            <kb-folding>
              <template slot="title">
                <div class="accodion_header">
                  <p class="title">
                    <!--
                      ico1 : 현금
                      ico2 : 투자
                      ico3 : 카드,대출
                      ico4 : 보험
                      ico5 : 연금
                      ico6 : 실물
                    -->
                    <i class="ico3"></i>카드<span>누적사용 총액</span>
                  </p>
                  <p class="money">300,000,000,000 원</p>
                  <p class="amount_money">+454,000원 올랐어요!</p>
                </div>
              </template>
              <div class="accordion_box type2">
                <div class="box_header">
                  <p class="sub_tit">
                    <span>이번 달 결제총액</span><!-- 2021/03/26 수정 -->
                    <span>1,000,000,000원</span>
                  </p>
                  <div class="sub_info">
                    <p class="due_date">결제일: 2020/12/12 - 12/21</p><!-- 2021/03/26 수정 -->
                    <p class="amount_money">+990,000</p>
                  </div>
                </div>

                <ul class="bank_list">
                  <li>
                    <div class="info">
                      <i class="ico" style="background:skyblue"></i>
                      <p class="list_tit">KB 올림카드</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money">+990,000</p>
                    <p class="due_date t_right">결제일: 2020/12/12 - 12/21</p><!-- 2021/03/26 수정 -->

                    <!-- card 리스트 -->
                    <div class="card_list">
                      <div class="scroll">
                        <div class="box">
                          <div>
                            <p class="due_date">1월 24일 결제예정</p>
                            <p class="money">300,000,000원</p>
                          </div>
                          <p class="amount_money">+990,000</p>
                        </div>
                        <div class="box">
                          <div>
                            <p class="due_date">1월 24일 결제예정</p>
                            <p class="money">300,000,000원</p>
                          </div>
                          <!-- <p class="amount_money minus">-990,000</p> -->
                        </div>
                        <div class="box">
                          <div>
                            <p class="due_date">1월 24일 결제예정</p>
                            <p class="money">300,000,000원</p>
                          </div>
                          <!-- <p class="amount_money minus">-990,000</p> -->
                        </div>
                      </div>
                    </div>
                    <!-- //card 리스트 -->
                  </li>

                  <li>
                    <div class="info">
                      <i class="ico" style="background:skyblue"></i>
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money minus">-990,000</p>
                    <p class="due_date t_right">1월 24일 결제예정</p>

                    <!-- card 리스트 -->
                    <div class="card_list">
                      <div class="scroll">
                        <div class="box">
                          <div>
                            <p class="due_date">1월 24일 결제예정</p>
                            <p class="money">300,000,000원</p>
                          </div>
                          <p class="amount_money fc_down">-990,000</p>
                        </div>
                        <div class="box">
                          <div>
                            <p class="due_date">1월 24일 결제예정</p>
                            <p class="money">300,000,000원</p>
                          </div>
                          <p class="amount_money fc_down">-990,000</p>
                        </div>
                        <div class="box">
                          <div>
                            <p class="due_date">1월 24일 결제예정</p>
                            <p class="money">300,000,000원</p>
                          </div>
                          <p class="amount_money fc_down">-990,000</p>
                        </div>
                      </div>
                    </div>
                    <!-- //card 리스트 -->
                  </li>
                </ul>
              </div>
            </kb-folding>
            <!-- //카드 -->
          </kb-foldings>
        </kb-tab>
        <kb-tab
          title="금융사별"
        >
          <kb-foldings type1 not-toggle class="ty3">
            <!-- 금융사별 항목1 -->
            <kb-folding>
              <template slot="title">
                <div class="accodion_header">
                  <p class="title"><i style="background:skyblue;"></i>KB국민은행<span>예금총액</span></p>
                  <p class="money">300,000,000,000 원</p>
                  <p class="amount_money fc_down">454,000원 올랐어요! <!--<span class="label">21.02%</span>--></p>
                </div>
              </template>
              <div class="accordion_box">
                <ul class="bank_list">
                  <li>
                    <p class="kind_text">입출금</p>
                    <div class="info">
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money fc_down">+990,000</p>
                  </li>
                  <li>
                    <p class="kind_text">예적금</p>
                    <div class="info">
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money fc_up">+990,000</p>
                  </li>
                  <li>
                    <p class="kind_text">CMA</p>
                    <div class="info">
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money fc_up">+990,000</p>
                  </li>
                </ul>
              </div>
            </kb-folding>
            <!-- //금융사별 항목1 -->

            <!-- 금융사별 항목2 -->
            <kb-folding>
              <template slot="title">
                <div class="accodion_header">
                  <p class="title"><i style="background:skyblue;"></i>KB국민은행<span>예금총액</span></p>
                  <p class="money">300,000,000,000 원</p>
                  <p class="amount_money fc_up">454,000원 올랐어요! <!--<span class="label">21.02%</span>--></p>
                </div>
              </template>
              <div class="accordion_box">
                <ul class="bank_list">
                  <li>
                    <p class="kind_text">입출금</p>
                    <div class="info">
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money fc_up">+990,000</p>
                  </li>
                  <li>
                    <p class="kind_text">예적금</p>
                    <div class="info">
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money fc_up">+990,000</p>
                  </li>
                  <li>
                    <p class="kind_text">CMA</p>
                    <div class="info">
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money fc_up">+990,000</p>
                  </li>
                </ul>
              </div>
            </kb-folding>
            <!-- //금융사별 항목2 -->

            <!-- 금융사별 항목3 -->
            <kb-folding>
              <template slot="title">
                <div class="accodion_header">
                  <p class="title"><i style="background:skyblue;"></i>KB국민은행<a href="#" class="link">직접입력</a></p>
                  <p class="money">300,000,000,000 원</p>
                  <p class="amount_money">454,000원 올랐어요! <!--<span class="label">21.02%</span>--></p>
                </div>
              </template>
              <div class="accordion_box">
                <ul class="bank_list">
                  <li>
                    <p class="kind_text">입출금</p>
                    <div class="info">
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money">+990,000</p>
                  </li>
                  <li>
                    <p class="kind_text">예적금</p>
                    <div class="info">
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money">+990,000</p>
                  </li>
                  <li>
                    <p class="kind_text">CMA</p>
                    <div class="info">
                      <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
                      <p class="money">300,000,000원</p>
                    </div>
                    <p class="amount_money">+990,000</p>
                  </li>
                </ul>
              </div>
            </kb-folding>
            <!-- //금융사별 항목3 -->

          </kb-foldings>
        </kb-tab>
      </kb-tabs>
      <kb-button class="all_open_close">
        전체펼치기<!-- 전체닫기 -->
      </kb-button>
    </div>
    <div class="btm_btn_util">
      <kb-button aTag not class="btn_refresh">새로고침</kb-button>
      <kb-button aTag not class="btn_linkage">추가연동</kb-button>
    </div>
  </div>
</template>

<script>
// import To02a006 from './TO02A006.vue';

export default {
  name: 'TO02A002',
  data() {
    return {
    };
  },
  methods: {
    openAssetListEditorPop(el) {
      this.$modal({
        component: () => import('./TO02A006.vue'),
        returnFocus: el,
      });
    },
    openAssetEditorPop(el) {
      this.$modal({
        component: () => import('./TO02A006_1.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>

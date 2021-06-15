<template>
  <div class="section">
    <!-- 투자자산 통계 -->
    <template v-if="noData">
      <!-- 자산연동 정보가 없는경우 -->
      <div class="assets_none_box">
        <div class="none_box">
          <i></i>
          투자자산 정보가 없습니다. <br />
          자산을 연동해주세요.
          <kb-button line blue class="more">추가연동</kb-button>
        </div>
        <kb-button aTag not class="banner_box type3">
          가상 투자를<br />
          체험해 보시겠어요?
        </kb-button>
        <kb-button aTag not class="banner_box type2">
          KB증권 계좌를 <br />
          개설하시겠어요?
        </kb-button>
      </div>
      <!-- //자산연동 정보가 없는경우 -->

      <!-- 자산연동한 당일 날인 경우 -->
      <div class="assets_none_box">
        <div class="none_box">
          <i></i>
          데이터 수집 중입니다.!

          <p class="fz_12 fc_666">(업권연동일 기준 00일 부터 확인이 가능합니다.)</p>
          <kb-button line blue class="more">추가연동</kb-button>
        </div>
        <kb-button aTag not class="banner_box type3">
          가상 투자를<br />
          체험해 보시겠어요?
        </kb-button>
        <kb-button aTag not class="banner_box type2">
          KB증권 계좌를 <br />
          개설하시겠어요?
        </kb-button>
      </div>
      <!-- //자산연동한 당일 날인 경우 -->
    </template>

    <template v-if="!noData">
      <kb-btn-toggle small inline class="mg_t24 mg_b40">
        <kb-btn-toggle-row>
          <kb-radio
            v-model="toggleVal1"
            button
            value="all"
          >
            전체
          </kb-radio>
          <kb-radio
            v-model="toggleVal1"
            button
            value="1"
          >
            KB증권
            <span class="point">2</span>
          </kb-radio>
          <kb-radio
            v-model="toggleVal1"
            button
            value="2"
          >
            키움증권
          </kb-radio>
          <kb-radio
            v-model="toggleVal1"
            button
            value="3"
          >
            신한증권
          </kb-radio>
          <kb-radio
            v-model="toggleVal1"
            button
            value="4"
          >
            한국투자
          </kb-radio>
        </kb-btn-toggle-row>
      </kb-btn-toggle>

      <div class="invest_statistics_box">
        <p class="fz_12 fc_666">20/10/19 기준</p>
        <h2 class="mg_t8 fz_20 fw_bold">김스타님의 투자 자산은 <br />523,456,000원입니다.</h2>
        <p class="mg_t12 fz_14 fc_666">투자금액 12,000,000,000원</p>

        <ul class="flex_wrap mg_t40">
          <li class="fz_18">
            <span class="block fz_12 mg_b4 fc_666">수익률</span>
            <span class="fc_red fw_bold">13.2%</span>
          </li>
          <li class="mg_l16 fz_18">
            <span class="block fz_12 mg_b4 fc_666">누적 수익금</span>
            <span class="fw_bold">1,230,000,000원</span>
          </li>
          <li class="mg_la align_slef_end">
            <kb-button button class="refresh ico"><span class="blind">새로고침</span></kb-button>
          </li>
        </ul>

        <kb-foldings
          type1
          class="ty4"
        >
          <kb-folding title="투자 내역 보기">
            <div class="section">
              <div class="label_text">
                <p><span>금융기관</span><strong>10개</strong></p>
                <p><span>계좌</span><strong>10개</strong></p>
              </div>

              <ul class="transfer_acc_list bg_none">
                <li class="type3">
                  <div class="button not pd_t24 pd_b25">
                    <!-- 즐겨찾기 mark 클래스 적용  -->
                    <i class="img_bank mark"><span style="background: skyblue;">은행위치</span></i>
                    <div class="text">
                      <span>우리급여 저축예금</span> <!-- 상품명 -->
                      <p class="acc_num">계좌 5개</p>
                    </div>
                    <span class="money mg_r0">123,000,000원</span>
                  </div>
                </li>
                <li class="type3">
                  <div class="button not pd_t24 pd_b25">
                    <!-- 즐겨찾기 mark 클래스 적용  -->
                    <i class="img_bank mark"><span style="background: skyblue;">은행위치</span></i>
                    <div class="text">
                      <span>우리급여 저축예금</span> <!-- 상품명 -->
                      <p class="acc_num">계좌 5개</p>
                    </div>
                    <span class="money mg_r0">123,000,000원</span>
                  </div>
                </li>
                <li class="type3">
                  <div class="button not pd_t24 pd_b25">
                    <!-- 즐겨찾기 mark 클래스 적용  -->
                    <i class="img_bank mark"><span style="background: skyblue;">은행위치</span></i>
                    <div class="text">
                      <span>우리급여 저축예금</span> <!-- 상품명 -->
                      <p class="acc_num">계좌 5개</p>
                    </div>
                    <span class="money mg_r0">123,000,000원</span>
                  </div>
                </li>
              </ul>
            </div>
          </kb-folding>
        </kb-foldings>

        <hr aria-hidden="true" class="hr_line">

        <!-- 유형별 투자비중, 금융사별 투자비중, 종목별 투자비중 -->
        <kb-swiper full-width auto-height>
          <swiper-slide>
            <div class="section  mg_b15">
              <kb-title-bar
                h3
                class="mg_t32 mg_b32"
              >
                <template slot="left">
                  <h2 class="tit">금융사별 투자 비중</h2>
                </template>

                <p class="fz_12 fc_666">20/10/19 기준</p>
              </kb-title-bar>

              <div class="chart_area">
                <img src="@/assets/images/temp/sample_in01a002.png" alt="" />
              </div>
              <ul class="chart_list">
                <li><span style="background:#3e61ba"></span>KB증권</li>
                <li><span style="background:#91a5e9"></span>NH투자증권</li>
                <li><span style="background:#81bdf2"></span>미래에셋대우</li>
                <li><span style="background:#b7ebcd"></span>대신증권</li>
                <li><span style="background:#7040b1"></span>삼성증권</li>
                <li><span style="background:#c79fe7"></span>신한금융투자</li>
                <li><span style="background:#74cacc"></span>하나금융투자</li>
                <li><span style="background:#3bae6c"></span>키움증권</li>
              </ul>

              <p class="mg_t40 fz_20 fw_bold t_center">KB증권, 교보증권에 <br />많은 비중을 가지고 있어요.</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="section mg_b15">
              <kb-title-bar
                h3
                class="mg_t32 mg_b32"
              >
                <template slot="left">
                  <h2 class="tit">유형별 투자 비중</h2>
                </template>

                <p class="fz_12 fc_666">20/10/19 기준</p>
              </kb-title-bar>

              <div class="chart_area">
                <img src="@/assets/images/temp/sample_in01a002.png" alt="" />
              </div>
              <ul class="chart_list">
                <li><span style="background:#3e61ba"></span>국내주식</li>
                <li><span style="background:#91a5e9"></span>해외주식</li>
                <li><span style="background:#81bdf2"></span>국내채권</li>
                <li><span style="background:#b7ebcd"></span>해외채권</li>
                <li><span style="background:#7040b1"></span>국내펀드</li>
                <li><span style="background:#c79fe7"></span>해외펀드</li>
                <li><span style="background:#74cacc"></span>선물/옵션</li>
                <li><span style="background:#3bae6c"></span>랩</li>
              </ul>

              <p class="mg_t40 fz_20 fw_bold t_center">국내주식에 <br />가장 많이 투자하고 있어요</p>
              <p class="mg_t8 fz_16 fc_666 t_center">국내펀드, 기타에 가장 적게 투자하고 있어요.</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="section mg_b15">
              <kb-title-bar
                h3
                class="mg_t32 mg_b32"
              >
                <template slot="left">
                  <h2 class="tit">종목별 투자 비중</h2>
                </template>

                <p class="fz_12 fc_666">20/10/19 기준</p>
              </kb-title-bar>

              <div class="chart_area">
                <img src="@/assets/images/temp/sample_in01a002.png" alt="" />
              </div>
              <ul class="chart_list">
                <li><span style="background:#3e61ba"></span>삼성전자삼성전자</li>
                <li><span style="background:#91a5e9"></span>해외주식</li>
                <li><span style="background:#81bdf2"></span>국내채권</li>
                <li><span style="background:#b7ebcd"></span>해외채권</li>
                <li><span style="background:#7040b1"></span>국내펀드</li>
                <li><span style="background:#c79fe7"></span>해외펀드</li>
                <li><span style="background:#74cacc"></span>선물/옵션</li>
                <li><span style="background:#3bae6c"></span>랩</li>
              </ul>

              <p class="mg_t40 fz_20 fw_bold t_center">삼성전자에 <br />많이 보유하고 있어요</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="section mg_b15">
              <kb-title-bar
                h3
                class="mg_t32 mg_b32"
              >
                <template slot="left">
                  <h2 class="tit">내용이 없는 경우</h2>
                </template>

                <p class="fz_12 fc_666">20/10/19 기준</p>
              </kb-title-bar>

              <div class="chart_area_none">
                <img src="@/assets/images/IN/01/img_chart_none.png" alt="" />
                <p class="text">아직 꽃 피우지 <br />못한 미래의 큰 손 <br />투자 대기중</p>
              </div>

              <p class="fz_20 fw_bold t_center fc_666">빠르게 투자의 세계에 <br />입문해볼까?</p>

              <div class="flex mg_t24">
                <kb-button
                  line
                  blue
                >
                  가상투자 해보기
                </kb-button>
              </div>
            </div>
          </swiper-slide>
        </kb-swiper>
        <!-- //유형별 투자비중, 금융사별 투자비중, 종목별 투자비중 -->

        <hr aria-hidden="true" class="hr_line mg_t24">

        <!-- 수익과 손실 -->
        <kb-title-bar
          h3
          class="mg_t32 mg_b8"
        >
          <template slot="left">
            <h2 class="tit">수익과 손실</h2>
          </template>

          <p class="fz_12 fc_666">20/10/19 기준</p>
        </kb-title-bar>

        <kb-tabs
          type2
          v-model="tabIdx"
          class="mg_b64"
        >
          <kb-tab
            title="일주일"
          />
          <kb-tab
            title="한달"
          />
        </kb-tabs>

        <div class="loss_profit">
          <div>
            <i class="ico1"></i>
            <p class="text">수익금 <br />+23,000원</p>
          </div>
          <div>
            <i class="ico2"></i>
            <p class="text">손실금 <br />-23,000원</p>
          </div>
        </div>

        <!-- 수익, 손익이 있는 경우 -->
        <p class="mg_t40 fz_20 fw_bold t_center">
          이번주는 5개 종목에서 이익을 내고, <br />
          3개 종목에서 손실을 봤어요.
        </p>

        <!-- 수익, 손익이 없는 경우 -->
        <p class="mg_t40 fz_20 fw_bold t_center">
          이번주는 5개 종목에서 손실을 보고, <br />
          이익 종목은 없어요.
        </p>
        <p class="mg_t40 fz_20 fw_bold t_center">
          이번주는 5개 종목에서 이익을 내고, <br />
          손실 종목은 없어요.
        </p>
        <p class="mg_t40 fz_20 fw_bold t_center">
          이번주는 이익과 손실이 같아요.
        </p>

        <!-- 계좌는 있지만 투자 이력이 없음 -->
        <p class="mg_t40 fz_20 fw_bold t_center">
          이번주는 투자 이력이 없어요.
        </p>

        <kb-foldings
          type1
          class="ty4"
        >
          <kb-folding title="종목 보기">
            <div class="section">
              <div class="loss_profit_list">
                <div class="profit">
                  <p class="tit fc_red">이익을 본 종목 10<i class="ico1"></i></p>
                  <div class="financial_bank_list small_ty">
                    <ul>
                      <li>
                        <div class="bank_info">
                          <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                          <div class="name">
                            <p class="fc_666">삼성전자 <sub class="sub">50주</sub></p>
                          </div>
                          <div class="money">
                            <div>123,000,000원</div>
                            <div class="sub_text"><span>+990,000(1.23%)</span></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="bank_info">
                          <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                          <div class="name">
                            <p class="fc_666">삼성전자 <sub class="sub">50주</sub></p>
                          </div>
                          <div class="money">
                            <div>123,000,000원</div>
                            <div class="sub_text"><span>+990,000(1.23%)</span></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="bank_info">
                          <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                          <div class="name">
                            <p class="fc_666">삼성전자 <sub class="sub">50주</sub></p>
                          </div>
                          <div class="money">
                            <div>123,000,000원</div>
                            <div class="sub_text"><span>+990,000(1.23%)</span></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="loss">
                  <p class="tit fc_blue">손해를 본 종목 10<i class="ico2"></i></p>
                  <div class="financial_bank_list small_ty">
                    <ul>
                      <li>
                        <div class="bank_info">
                          <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                          <div class="name">
                            <p class="fc_666">삼성전자 <sub class="sub">50주</sub></p>
                          </div>
                          <div class="money">
                            <div>123,000,000원</div>
                            <div class="sub_text"><span>+990,000(1.23%)</span></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="bank_info">
                          <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                          <div class="name">
                            <p class="fc_666">삼성전자 <sub class="sub">50주</sub></p>
                          </div>
                          <div class="money">
                            <div>123,000,000원</div>
                            <div class="sub_text"><span>+990,000(1.23%)</span></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="bank_info">
                          <i class="ico bookmark"><span style="background: skyblue;"></span></i><!-- bookmark클래스: 즐겨찾기 항목 -->
                          <div class="name">
                            <p class="fc_666">삼성전자 <sub class="sub">50주</sub></p>
                          </div>
                          <div class="money">
                            <div>123,000,000원</div>
                            <div class="sub_text"><span>+990,000(1.23%)</span></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </kb-folding>
        </kb-foldings>
        <!-- //수익과 손실 -->

        <hr aria-hidden="true" class="hr_line mg_t24">

        <!-- 월 누적 수익금 변화 -->
        <kb-title-bar
          h3
          class="mg_t32 mg_b8"
        >
          <template slot="left">
            <h2 class="tit">월 누적 수익금 변화</h2>
          </template>

          <p class="fz_12 fc_666">20/10/19 기준</p>
        </kb-title-bar>

        <div class="loss_profit">
          <div class="yellow">
            <p class="fz_16 fw_bold">430,000원</p>
            <p class="mg_t4 fz_14 fc_666">현재</p>
          </div>
          <div class="silver">
            <p class="fz_16 fw_bold">430,000원</p>
            <p class="mg_t4 fz_14 fc_666">지난달</p>
          </div>
        </div>

        <p class="mg_t40 fz_20 fw_bold t_center">지난주 대비 수익금이 <br />232,000원 늘었어요.</p>
        <p class="mg_t8 fz_16 fc_666 t_center">작년누적수익 대비 200,000원 늘었어요.</p>

        <!-- 계좌는 있지만 투자 이력이 없음, 데이터 없음 -->
        <p class="mg_t40 fz_20 fw_bold t_center">이번 달엔 투자이력이 없어요.</p>

        <!-- 수익금의 변화가 없음 -->
        <p class="mg_t40 fz_20 fw_bold t_center">이번 달은 변화가 없어요.</p>

        <p class="mg_t32 fz_14 fc_666 t_center">작년 누적 수익<strong class="mg_l8 fc_222 fw_bold">300,000,000원</strong></p>

        <kb-foldings
          type1
          class="ty4"
        >
          <kb-folding title="월별 추이보기">
            <div class="section">
              <kb-btn-toggle small inline class="mg_b24">
                <kb-btn-toggle-row>
                  <kb-radio
                    v-model="toggleVal2"
                    button
                    value="1"
                  >
                    3개월
                  </kb-radio>
                  <kb-radio
                    v-model="toggleVal2"
                    button
                    value="2"
                  >
                    6개월
                  </kb-radio>
                  <kb-radio
                    v-model="toggleVal2"
                    button
                    value="3"
                  >
                    1년
                  </kb-radio>
                </kb-btn-toggle-row>
              </kb-btn-toggle>

              <div class="chart_area">
                <img src="@/assets/images/temp/sample_in01a002_1.png" alt="" />
              </div>
            </div>
          </kb-folding>
        </kb-foldings>
        <!-- //월 누적 수익금 변화 -->

        <hr aria-hidden="true" class="hr_line mg_t24">

        <!-- 투자 자산 변화 -->
        <kb-title-bar
          h3
          class="mg_t32 mg_b8"
        >
          <template slot="left">
            <h2 class="tit">투자 자산 변화</h2>
          </template>

          <p class="fz_12 fc_666">20/10/19 기준</p>
        </kb-title-bar>

        <kb-tabs
          type2
          v-model="tabIdx2"
        >
          <kb-tab
            title="일주일"
          />
          <kb-tab
            title="한달"
          />
        </kb-tabs>

        <div class="loss_profit">
          <div class="yellow">
            <p class="fz_16 fw_bold">430,000원</p>
            <p class="mg_t4 fz_14 fc_666">현재</p>
          </div>
          <div class="silver">
            <p class="fz_16 fw_bold">430,000원</p>
            <!-- 일주일 -->
            <p class="mg_t4 fz_14 fc_666">저번주</p>
            <!-- 한달
            <p class="mg_t4 fz_14 fc_666">저번달</p>
            -->
          </div>
        </div>

        <p class="mg_t40 fz_20 fw_bold t_center">지난주 대비 투자자산이<br />232,000원 늘었어요.</p>
        <p class="mg_t8 fz_16 fc_666 t_center">작년누적수익 대비 200,000원 늘었어요.</p>

        <!-- 계좌는 있지만 투자이력이 없음, 데이터 없음 -->
        <p class="mg_t40 fz_20 fw_bold t_center">이번 주는 투자 이력이 없어요.</p>

        <!-- 자산 변화가 없음 -->
        <p class="mg_t40 fz_20 fw_bold t_center">이번 주는 변화가 없어요.</p>

        <ul class="list">
          <li>
            <strong>입금</strong>
            <span>+150,000원</span>
          </li>
          <li>
            <strong>출금</strong>
            <span>-150,000원</span>
          </li>
          <li>
            <strong>주식손익</strong>
            <!--
              상승 : fc_up
              하락 : fc_down
            -->
            <span class="fc_up">+150,000원</span>
          </li>
          <li>
            <strong>펀드손익</strong>
            <!--
              상승 : fc_up
              하락 : fc_down
            -->
            <span class="fc_down">-150,000원</span>
          </li>
          <li>
            <strong>Wrap손익</strong>
            <!--
              상승 : fc_up
              하락 : fc_down
            -->
            <span class="fc_up">+150,000원</span>
          </li>
        </ul>

        <div class="flex mg_t24">
          <kb-button
            line
            class="fc_666"
          >
            상세보기
          </kb-button>
        </div>
        <!-- //투자 자산 변화 -->
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'IN01A001',
  data() {
    return {
      noData: false,
      tabIdx: 0,
      tabIdx2: 0,
      toggleVal1: '1',
      toggleVal2: '1',
    };
  },
  methods: {
  },
};
</script>

<template>
  <div class="section financial_bank_wrap">

    <!-- 금융정보가 없는 경우 -->
    <template v-if="noDataAll">
      <div class="assets_none_box">
        <div class="none_box">
          <i></i>
          이런, 금융 정보가 없네요!<br />
          금융정보를 연동해 주세요 :)
          <kb-button line blue class="more fz_16">금융정보 연동</kb-button>
        </div>
      </div>
    </template>
    <!-- //금융정보가 없는 경우 -->

    <template v-if="!noDataAll">

      <div class="flex_wrap space_between align_center mg_b12">
        <div>
          <div v-if="true" class="error_txt icon mg_t0">연동 실패</div>
          <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연결 정보를 확인하세요.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          <kb-button not aTag v-if="false" class="error_txt icon mg_t0">금융사 약관 동의가 필요합니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연동 유효기간이 만료되었습니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
        </div>
        <div>
          <kb-button button class="refresh" @click="btnRefresh">09:00:03</kb-button>
        </div>
      </div>

      <div class="white_box">
        <kb-title-bar
          h3
        >
          <template slot="left">
            <h3 class="tit">관심 <span class="fc_blue">3</span></h3>
          </template>
          <kb-button
            to="#"
            link
            blue
          >
            관심관리<i class="bt_ic_arr" aria-hidden="true" />
          </kb-button>
        </kb-title-bar>

        <!-- 관심 없는 경우 -->
        <template v-if="noData">
          <div class="financial_list_none mg_b20">
            <p class="tit">자주 사용하는 계좌를 등록해볼까요?</p>
            <kb-button class="add" not aTag>관심등록</kb-button>
          </div>
        </template>
        <!-- //관심 없는 경우 -->

        <!-- 관심 있는 경우 -->
        <template v-if="!noData">
          <div class="financial_bank_list">
            <ul>
              <li>
                <kb-button class="bank_info">
                  <!-- 이슈 발생시 issue 클래스 적용  -->
                  <i class="ico issue"><span style="background: skyblue;"></span></i>
                  <div class="name">
                    <p>KB Star 정기예금</p>
                    <span>12345678901234</span>
                  </div>
                  <p class="money">123,000,000원
                    <span class="sub_text">3월 승인금액</span>
                  </p>
                </kb-button>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                <kb-button
                  star
                  :class="{checked:isStar1}"
                  role="checkbox"
                  :aria-checked="isStar1?'true':'false'"
                  @click="isStar1 = !isStar1"
                >관심등록</kb-button>
              </li>
              <li>
                <kb-button class="bank_info">
                  <!-- 이슈 발생시 issue 클래스 적용  -->
                  <i class="ico"><span style="background: skyblue;"></span></i>
                  <div class="name">
                    <p>KB Star 정기예금</p>
                    <span>12345678901234</span>
                  </div>
                  <p class="money">123,000,000원
                    <span class="sub_text">3월 승인금액</span>
                  </p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                </kb-button>
                <kb-button
                  star
                  :class="{checked:isStar2}"
                  role="checkbox"
                  :aria-checked="isStar2?'true':'false'"
                  @click="isStar2 = !isStar2"
                >관심등록</kb-button>
              </li>
              <li>
                <kb-button class="bank_info">
                  <!-- 이슈 발생시 issue 클래스 적용  -->
                  <i class="ico"><span style="background: skyblue;"></span></i>
                  <div class="name">
                    <p>KB Star 정기예금</p>
                    <span>12345678901234</span>
                  </div>
                  <p class="money">123,000,000원
                    <span class="sub_text">3월 승인금액</span>
                  </p>
                <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                </kb-button>
                <kb-button
                  star
                  :class="{checked:isStar3}"
                  role="checkbox"
                  :aria-checked="isStar3?'true':'false'"
                  @click="isStar3 = !isStar3"
                >관심등록</kb-button>
              </li>
            </ul>
            <kb-foldings not class="reverse_accodion">
              <kb-folding close-title="펼치기" open-title="접기">
                <ul class="border_top">
                  <li>
                    <kb-button class="bank_info">
                      <!-- 이슈 발생시 issue 클래스 적용  -->
                      <i class="ico issue"><span style="background: skyblue;"></span></i>
                      <div class="name">
                        <p>KB Star 정기예금</p>
                        <span>12345678901234</span>
                      </div>
                      <p class="money">123,000,000원
                        <span class="sub_text">3월 승인금액</span>
                      </p>
                    </kb-button>
                    <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                    <kb-button
                      star
                      :class="{checked:isStar1}"
                      role="checkbox"
                      :aria-checked="isStar1?'true':'false'"
                      @click="isStar1 = !isStar1"
                    >관심등록</kb-button>
                  </li>
                  <li>
                    <kb-button class="bank_info">
                      <!-- 이슈 발생시 issue 클래스 적용  -->
                      <i class="ico"><span style="background: skyblue;"></span></i>
                      <div class="name">
                        <p>KB Star 정기예금</p>
                        <span>12345678901234</span>
                      </div>
                      <p class="money">123,000,000원
                        <span class="sub_text">3월 승인금액</span>
                      </p>
                    <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                    </kb-button>
                    <kb-button
                      star
                      :class="{checked:isStar2}"
                      role="checkbox"
                      :aria-checked="isStar2?'true':'false'"
                      @click="isStar2 = !isStar2"
                    >관심등록</kb-button>
                  </li>
                  <li>
                    <kb-button class="bank_info">
                      <!-- 이슈 발생시 issue 클래스 적용  -->
                      <i class="ico"><span style="background: skyblue;"></span></i>
                      <div class="name">
                        <p>KB Star 정기예금</p>
                        <span>12345678901234</span>
                      </div>
                      <p class="money">123,000,000원
                        <span class="sub_text">3월 승인금액</span>
                      </p>
                    <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
                    </kb-button>
                    <kb-button
                      star
                      :class="{checked:isStar3}"
                      role="checkbox"
                      :aria-checked="isStar3?'true':'false'"
                      @click="isStar3 = !isStar3"
                    >관심등록</kb-button>
                  </li>
                </ul>
              </kb-folding>
            </kb-foldings>
          </div>
        </template>
      <!-- //관심 있는 경우 -->
      </div>

      <!-- 은행 -->
      <kb-foldings
        not-toggle
        first-open
        class="link_title"
      >
        <kb-folding>
          <template slot="title_prev">
            <kb-button aTag link class="left fz_18 fw_bold">은행<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          </template>
          <template slot="title">
            <span class="hidden">펼치기</span>
          </template>

          <!-- 내용이 없는 경우 -->
          <template v-if="noData">
            <div class="white_box">
              <div class="financial_list_none bg_none mg_b20">
                <p class="tit">거래 내역이 없습니다.<br />추가로 금융정보를 연동해 볼까요?</p>
                <kb-button class="add" not aTag>금융정보 연동</kb-button>
              </div>
            </div>
          </template>
          <!-- //내용이 없는 경우 -->

          <template v-if="!noData">
            <div class="white_box">
              <kb-title-bar
                h3
              >
                <template slot="left">
                  <h3 class="tit fz_16">최근 입출금 내역</h3>
                </template>
                <kb-button
                  to="#"
                  link
                  blue
                >
                  전체보기<i class="bt_ic_arr" aria-hidden="true" />
                </kb-button>
              </kb-title-bar>
              <div class="line_list_ty2 border_none">
                <ul>
                  <li>
                    <div class="item">
                      <kb-button aTag not class="inner">
                        <div class="flex_wrap space_between align_center">
                          <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                          <div class="fz_14"><strong class="fc_red">출금</strong></div>
                        </div>
                        <div class="flex_wrap space_between mg_t4 align_end">
                          <div class="breakall">
                            <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                            <div class="mg_t3"><strong>넷플릭스정기결제</strong></div>
                          </div>
                          <div class="nowrap pd_l10">
                            <strong class="fz_18">12,400원</strong>
                          </div>
                        </div>
                      </kb-button>
                      <!-- <div class="category_info">
                    <kb-button not class="btn_category">카테고리 선택</kb-button>
                  </div> -->
                      <div class="category_info">
                        <ul>
                          <li class="tag">#주거/공과금</li>
                          <li>여의도 맛집</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item">
                      <kb-button aTag not class="inner">
                        <div class="flex_wrap space_between align_center">
                          <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                          <div class="fz_14"><strong class="fc_red">출금</strong></div>
                        </div>
                        <div class="flex_wrap space_between mg_t4 align_end">
                          <div class="breakall">
                            <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                          </div>
                          <div class="nowrap pd_l10">
                            <strong class="fz_18">12,400원</strong>
                          </div>
                        </div>
                      </kb-button>
                      <div class="category_info">
                        <ul>
                          <li class="tag">#주거/공과금</li>
                          <li>여의도 맛집</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- 대출내역 -->
            <div class="white_box mg_t8 pd_t0">
              <kb-foldings
                not-toggle
                class="line_none"
              >
                <kb-folding>
                  <template slot="title">
                    <p class="fz_16">대출내역</p>
                  </template>
                  <div class="financial_bank_box mg_t0 mg_b0">
                    <div class="list_box mg_t0">
                      <div class="info">
                        <p class="bank">
                          <strong>국민은행</strong>
                          12345678900000
                        </p>
                        <p class="loan"><span>대출 금리</span>3.12%</p>
                      </div>
                      <div class="money_info">
                        <p class="progress">10% 상환</p>
                        <p class="money">
                          <span>남은 대출 원금</span>
                          123,456,000원
                        </p>
                      </div>
                      <div class="progress_bar">
                        <span style="width:10%"></span>
                      </div>
                    </div>
                  </div>
                </kb-folding>
              </kb-foldings>
            </div>
            <!-- //대출내역 -->
          </template>
        </kb-folding>
      </kb-foldings>
      <!-- //은행 -->

      <!--  카드 -->
      <kb-foldings
        not-toggle
        first-open
        class="link_title"
      >
        <kb-folding>
          <template slot="title_prev">
            <kb-button aTag link class="left fz_18 fw_bold">카드<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          </template>
          <template slot="title">
            <span class="hidden">펼치기</span>
          </template>

          <!-- 내용이 없는 경우 -->
          <template v-if="noData">
            <div class="white_box">
              <div class="financial_list_none bg_none mg_b20">
                <p class="tit">거래 내역이 없습니다.<br />추가로 금융정보를 연동해 볼까요?</p>
                <kb-button class="add" not aTag>금융정보 연동</kb-button>
              </div>
            </div>
          </template>
          <!-- //내용이 없는 경우 -->

          <template v-if="!noData">
            <div class="white_box pd_b20">
              <kb-button aTag not class="view_calendar">
                <strong>소비달력보기</strong>
              </kb-button>
            </div>
            <div class="white_box pd_b20 mg_t8">
              <kb-title-bar
                h3
              >
                <template slot="left">
                  <h3 class="tit fz_16">3월 총 청구금액</h3>
                </template>
                <p class="fz_18 fw_bold">300,000,000원</p>
              </kb-title-bar>
              <div class="chart_wrap">
                <img src="@/assets/images/temp/sample_fi08a003.png" alt="">
              </div>
            </div>

            <div class="white_box mg_t8">
              <kb-title-bar
                h3
              >
                <template slot="left">
                  <h3 class="tit fz_16">결제 예정 금액</h3>
                </template>
              </kb-title-bar>
              <ul class="list_style1">
                <li>
                  <p class="number">10일</p>
                  <p class="tit">삼성카드</p>
                  <p class="money">1,200,000원
                    <span class="info">오늘 결제할 결제정보</span>
                  </p>
                </li>
                <li>
                  <p class="number">10일</p>
                  <p class="tit">삼성카드</p>
                  <p class="money">1,200,000원
                  </p>
                </li>
              </ul>
            </div>

            <!-- 대출내역 -->
            <div class="white_box mg_t8 pd_t0">
              <kb-foldings
                not-toggle
                class="line_none"
              >
                <kb-folding>
                  <template slot="title">
                    <p class="fz_16">대출내역</p>
                  </template>
                  <div class="financial_bank_box mg_t0 mg_b0">
                    <div class="list_box mg_t0">
                      <div class="info">
                        <p class="bank">
                          <strong>국민은행</strong>
                          12345678900000
                        </p>
                        <p class="loan"><span>대출 금리</span>3.12%</p>
                      </div>
                      <div class="money_info">
                        <p class="progress">10% 상환</p>
                        <p class="money">
                          <span>남은 대출 원금</span>
                          123,456,000원
                        </p>
                      </div>
                      <div class="progress_bar">
                        <span style="width:10%"></span>
                      </div>
                    </div>
                  </div>
                </kb-folding>
              </kb-foldings>
            </div>
            <!-- //대출내역 -->
          </template>
        </kb-folding>
      </kb-foldings>
      <!-- //카드 -->

      <!--  보험 -->
      <kb-foldings
        not-toggle
        first-open
        class="link_title"
      >
        <kb-folding>
          <template slot="title_prev">
            <kb-button aTag link class="left fz_18 fw_bold">보험<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          </template>
          <template slot="title">
            <span class="hidden">펼치기</span>
          </template>

          <!-- 내용이 없는 경우 -->
          <template v-if="noData">
            <div class="white_box">
              <div class="financial_list_none bg_none mg_b20">
                <p class="tit">거래 내역이 없습니다.<br />추가로 금융정보를 연동해 볼까요?</p>
                <kb-button class="add" not aTag>금융정보 연동</kb-button>
              </div>
            </div>
          </template>
          <!-- //내용이 없는 경우 -->

          <template v-if="!noData">
            <div class="white_box pd_b20">
              <kb-title-bar
                h3
              >
                <template slot="left">
                  <h3 class="tit fz_16">월 납입액</h3>
                </template>
                <p class="fz_18 fw_bold">300,000,000원</p>
              </kb-title-bar>

              <div class="chart_wrap" ref="chartBox">
                <img src="~@/assets/images/FI/sample_chart.png" alt="" />
              </div>
            </div>

            <div class="white_box mg_t8">
              <div class="insurance_list">
                <kb-button aTag not>
                  <div class="cont">
                    <!-- 이슈 발생시 issue 클래스 적용  -->
                    <i class="ico issue"><span style="background: skyblue;"></span></i>
                    <div class="name">
                      <p>KB Star 정기예금</p>
                      <span>12345678901234</span>
                    </div>
                  </div>
                </kb-button>
                <kb-button aTag not>
                  <div class="cont">
                    <!-- 이슈 발생시 issue 클래스 적용  -->
                    <i class="ico"><span style="background: skyblue;"></span></i>
                    <div class="name">
                      <p>KB다이렉트 자동차 보험</p>
                      <span>12345678901234</span>
                    </div>
                    <p class="tag">자동차보험 보험</p>
                  </div>

                  <div class="flex_wrap mg_l40 mg_t15">
                    <p class="fz_14 fw_bold flex11">01가1234</p>
                    <p class="fz_14 fw_bold">D-360</p>
                  </div>
                </kb-button>
              </div>
            </div>

            <div class="white_box mg_t32">
              <div class="insurance_list">
                <kb-button aTag not>
                  <div class="cont">
                    <!-- 이슈 발생시 issue 클래스 적용  -->
                    <i class="ico"><span style="background: skyblue;"></span></i>
                    <div class="name">
                      <p>KB Star 정기예금</p>
                      <span>12345678901234</span>
                    </div>
                    <p class="tag">보증보험</p>
                  </div>

                  <div class="flex_wrap mg_l40 mg_t15 align_end">
                    <p class="fz_14 fw_bold flex11">01가1234</p>
                    <p class="fz_18 fw_bold"><span class="fc_666 fz_12">총 납입 보험료 </span>123,456,000원</p>
                  </div>
                </kb-button>
              </div>
            </div>
          </template>
        </kb-folding>
      </kb-foldings>
      <!-- //보험 -->

      <!--  PAY -->
      <kb-foldings
        not-toggle
        first-open
        class="link_title"
      >
        <kb-folding>
          <template slot="title_prev">
            <kb-button aTag link class="left fz_18 fw_bold">PAY<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          </template>
          <template slot="title">
            <span class="hidden">펼치기</span>
          </template>

          <!-- 내용이 없는 경우 -->
          <template v-if="noData">
            <div class="white_box">
              <div class="financial_list_none bg_none mg_b20">
                <p class="tit">거래 내역이 없습니다.<br />추가로 금융정보를 연동해 볼까요?</p>
                <kb-button class="add" not aTag>금융정보 연동</kb-button>
              </div>
            </div>
          </template>
          <!-- //내용이 없는 경우 -->

          <template v-if="!noData">
            <div class="white_box pd_b20">
              <kb-title-bar
                h3
              >
                <template slot="left">
                  <h3 class="tit fz_16">보유금액</h3>
                </template>
                <p class="fz_18 fw_bold">300,000,000원</p>
              </kb-title-bar>

              <div class="flex_wrap mg_t12">
                <p class="flex00 mg_ra flex fz_14 fc_666">2개월 이내 소멸예정</p>
                <p class="flex11 fz_14 fc_666 fw_bold t_right">1,234,000원</p>
              </div>
            </div>

            <div class="white_box mg_t8 pd_t0">
              <kb-foldings
                not-toggle
                first-open
                class="line_none"
              >
                <kb-folding>
                  <template slot="title">
                    <p class="fz_16">최근 결제내역</p>
                  </template>
                  <div class="line_list_ty2 border_none">
                    <ul>
                      <li>
                        <div class="item">
                          <kb-button aTag not class="inner">
                            <div class="flex_wrap space_between align_center">
                              <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                              <div class="fz_14"><strong>결제</strong></div>
                            </div>
                            <div class="flex_wrap space_between mg_t4 align_end">
                              <div class="breakall">
                                <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                                <div class="mg_t3"><strong>넷플릭스정기결제</strong></div>
                              </div>
                              <div class="nowrap pd_l10">
                                <strong class="fz_18">12,400원</strong>
                              </div>
                            </div>
                          </kb-button>
                          <!-- <div class="category_info">
                        <kb-button not class="btn_category">카테고리 선택</kb-button>
                      </div> -->
                          <div class="category_info">
                            <ul>
                              <li class="tag">#주거/공과금</li>
                              <li>여의도 맛집</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <kb-button aTag not class="inner">
                            <div class="flex_wrap space_between align_center">
                              <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                              <div class="fz_14"><strong>결제</strong></div>
                            </div>
                            <div class="flex_wrap space_between mg_t4 align_end">
                              <div class="breakall">
                                <div class="fz_12 fc_666"><strong>KB국민은행</strong></div>
                                <div class="mg_t3"><strong>넷플릭스정기결제</strong></div>
                              </div>
                              <div class="nowrap pd_l10">
                                <strong class="fz_18">12,400원</strong>
                              </div>
                            </div>
                          </kb-button>
                          <!-- <div class="category_info">
                        <kb-button not class="btn_category">카테고리 선택</kb-button>
                      </div> -->
                          <div class="category_info">
                            <ul>
                              <li class="tag">#주거/공과금</li>
                              <li>여의도 맛집</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </kb-folding>
              </kb-foldings>
            </div>

          </template>

        </kb-folding>
      </kb-foldings>
      <!-- //PAY -->

      <!-- 통신 -->
      <div class="white_box mg_t32 pd_t0">
        <kb-foldings
          not-toggle
          class="line_none"
        >
          <kb-folding active>
            <template slot="title">
              <p class="fz_16">통신요금 청구현황</p>
            </template>
            <div class="chart_wrap">
              <img src="@/assets/images/temp/sample_fi08a003.png" alt="">
            </div>

            <!-- 2021-06-21 전체보기 -->
            <p class="t_right mg_b20">
              <kb-button
                to="#"
                link
                blue
              >
                전체보기<i class="bt_ic_arr" aria-hidden="true" />
              </kb-button>
            </p>
            <!-- //2021-06-21 전체보기 -->
          </kb-folding>
        </kb-foldings>
      </div>
      <!-- //통신 -->

      <!-- 할부금융 -->
      <kb-foldings
        not-toggle
        first-open
        class="link_title"
      >
        <kb-folding>
          <template slot="title_prev">
            <kb-button aTag link class="left fz_18 fw_bold">할부금융<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          </template>
          <template slot="title">
            <span class="hidden">펼치기</span>
          </template>

          <div class="white_box mg_t8">
            <div class="insurance_list">
              <!-- 2021-06-21 타입 1 -->
              <kb-button aTag not>
                <div class="cont">
                  <!-- 이슈 발생시 issue 클래스 적용  -->
                  <i class="ico"><span style="background: skyblue;"></span></i>
                  <div class="name">
                    <p>KB Star 정기예금</p>
                    <span>12345678901234</span>
                  </div>
                </div>

                <div class="money_info mg_l40">
                  <p class="progress">10% 납입</p>
                  <p class="money">
                    <span>대출잔액</span>
                    123,456,000원
                  </p>
                </div>
                <div class="progress_bar mg_l40">
                  <span style="width:10%"></span>
                </div>
                <p class="mg_t12 fz_12 fc_666 t_right">대출원금 123,456,000원</p>
              </kb-button>
              <!-- //2021-06-21 타입 1 -->

              <!-- 2021-06-21 타입 2 -->
              <kb-button aTag not>
                <div class="cont">
                  <i class="ico"><span style="background: skyblue;"></span></i>
                  <div class="name breakall">
                    <p>메르세데스벤츠 파이낸셜</p>
                    <span>215099999111-1234567</span>
                  </div>
                </div>
                <div class="mg_l40 t_right mg_t24">
                  <div><strong>김스타 고객님,<br /><span class="fc_blue">2025년 4월 25일</span> 만기 입니다.</strong></div>
                  <div class="fz_12 fc_666 mg_t4">다음 납입 예정일 2021/04/25</div>
                </div>
              </kb-button>
              <!-- //2021-06-21 타입 2 -->
            </div>
          </div>

        </kb-folding>
      </kb-foldings>
      <!-- //할부금융 -->
    </template>
  </div>
</template>
<script>
export default {
  name: 'FI00A001',
  data() {
    return {
      noDataAll: false,
      noData: false,
      isStar1: true,
      isStar2: false,
      isStar3: false,
      panelOpen: false,
    };
  },
  methods: {
    btnRefresh() {
      this.$loading(true, '불러오는중', 'C');
      setTimeout(() => {
        this.$loading(false);
      }, 2000);
    },
  },
};
</script>

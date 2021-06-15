<template>
  <kb-page page-title="상세조회">
    <kb-page-body>
      <div class="section">
        <div class="flex_wrap space_between align_center mg_b12">
          <div>
            <div v-if="true" class="error_txt icon mg_t0">연동 실패</div>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연결 정보를 확인하세요.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">금융사 약관 동의가 필요합니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
            <kb-button not aTag v-if="false" class="error_txt icon mg_t0">연동 유효기간이 만료되었습니다.<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          </div>
          <div>
            <kb-button button class="refresh">09:00:03</kb-button>
          </div>
        </div>

        <!-- 입출금 -->
        <div class="info_txt_box2" v-scroll-fixed="{el:'.inner'}">
          <div class="inner">
            <div
              class="tit"
              :class="{star: isStar}"
            >
              <strong>KB마이핏통장</strong>
              <kb-button
                star
                :class="{checked:isStar}"
                role="checkbox"
                :aria-checked="isStar?'true':'false'"
                @click="isStar = !isStar"
              >관심등록</kb-button>
            </div>
            <div class="sub">
              <kb-button not>국민은행 13493859239430 <i class="bt_ic_copy" /></kb-button>
            </div>
            <div class="ico_wrap">
              <div>
                <ico-txt yellow>계좌유형</ico-txt>
                <ico-txt blue>저축방법</ico-txt>
                <ico-txt>비활동</ico-txt>
              </div>
            </div>
            <div class="point">
              <strong class="strong">254,000,500 원</strong>
            </div>
          </div>
        </div>
        <!-- //입출금 -->
        <!-- 예적금 -->
        <div class="info_txt_box2 add_folding" v-scroll-fixed="{el:'.inner'}">
          <div class="inner">
            <div
              class="tit"
              :class="{star: isStar}"
            >
              <strong>KB리브와 함계 매일매일 적금</strong>
              <kb-button
                star
                :class="{checked:isStar}"
                role="checkbox"
                :aria-checked="isStar?'true':'false'"
                @click="isStar = !isStar"
              >관심등록</kb-button>
            </div>
            <div class="sub">
              <kb-button not>국민은행 13493859239430 <i class="bt_ic_copy" /></kb-button>
            </div>
            <div class="ico_wrap">
              <div>
                <ico-txt yellow>적금</ico-txt>
                <ico-txt blue>거치식</ico-txt>
              </div>
              <div>
                <span class="fz_12 fc_down">적용이율 1.55%</span>
              </div>
            </div>
            <div class="point">
              <strong class="strong">254,000,500 원</strong>
            </div>
            <div class="sub t_right">만기 2021/01/01</div>
          </div>
          <kb-foldings
            not
            class="folding"
          >
            <kb-folding title="상세보기">
              <div class="info_txt_list">
                <ul class="list">
                  <li>
                    <div class="th">계좌개설일</div>
                    <div class="td fc_666"><strong>2021/01/03</strong></div>
                  </li>
                  <li>
                    <div class="th">약정액</div>
                    <div class="td fc_666"><strong>300,000,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">적용금리</div>
                    <div class="td fc_666"><strong>1.55%</strong></div>
                  </li>
                  <li>
                    <div class="th">월 납입액</div>
                    <div class="td"><strong>100,000원</strong></div>
                  </li>
                </ul>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //예적금 -->
        <!-- 외화 -->
        <div class="swiper_fixed_wrap" v-scroll-fixed="{el:'.inner'}">
          <div class="inner">
            <kb-swiper class="mg_t0">
              <swiper-slide>
                <div class="info_txt_box2">
                  <div class="inner">
                    <div
                      class="tit"
                      :class="{star: isStar}"
                    >
                      <strong>거주자 외화 보통예금</strong>
                      <kb-button
                        star
                        :class="{checked:isStar}"
                        role="checkbox"
                        :aria-checked="isStar?'true':'false'"
                        @click="isStar = !isStar"
                      >관심등록</kb-button>
                    </div>
                    <div class="sub">
                      <kb-button not>국민은행 13493859239430 <i class="bt_ic_copy" /></kb-button>
                    </div>
                    <div class="ico_wrap">
                      <div>
                        <ico-txt yellow>외화보통</ico-txt>
                      </div>
                    </div>
                    <div class="point">
                      <span class="unit mg_r4">USD</span><strong class="strong">254,000,500</strong>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="info_txt_box2">
                  <div class="inner">
                    <div
                      class="tit"
                      :class="{star: isStar}"
                    >
                      <strong>거주자 외화 보통예금</strong>
                      <kb-button
                        star
                        :class="{checked:isStar}"
                        role="checkbox"
                        :aria-checked="isStar?'true':'false'"
                        @click="isStar = !isStar"
                      >관심등록</kb-button>
                    </div>
                    <div class="sub">
                      <kb-button not>국민은행 13493859239430 <i class="bt_ic_copy" /></kb-button>
                    </div>
                    <div class="ico_wrap">
                      <div>
                        <ico-txt yellow>외화보통</ico-txt>
                      </div>
                    </div>
                    <div class="point">
                      <span class="unit mg_r4">JPY</span><strong class="strong">254,000,500</strong>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="info_txt_box2">
                  <div class="inner">
                    <div
                      class="tit"
                      :class="{star: isStar}"
                    >
                      <strong>거주자 외화 보통예금</strong>
                      <kb-button
                        star
                        :class="{checked:isStar}"
                        role="checkbox"
                        :aria-checked="isStar?'true':'false'"
                        @click="isStar = !isStar"
                      >관심등록</kb-button>
                    </div>
                    <div class="sub">
                      <kb-button not>국민은행 13493859239430 <i class="bt_ic_copy" /></kb-button>
                    </div>
                    <div class="ico_wrap">
                      <div>
                        <ico-txt yellow>외화보통</ico-txt>
                      </div>
                    </div>
                    <div class="point">
                      <span class="unit mg_r4">USD</span><strong class="strong">254,000,500</strong>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </kb-swiper>
          </div>
        </div>
        <!-- //외화 -->
        <!-- 개인 IRP -->
        <div class="info_txt_box2 add_folding" v-scroll-fixed="{el:'.inner'}">
          <div class="inner">
            <div
              class="tit"
              :class="{star: isStar}"
            >
              <strong>키움프론티어개잉용MMF제1호키움프론티어개잉용MMF제1호</strong>
              <kb-button
                star
                :class="{checked:isStar}"
                role="checkbox"
                :aria-checked="isStar?'true':'false'"
                @click="isStar = !isStar"
              >관심등록</kb-button>
            </div>
            <div class="sub">
              <kb-button not>국민은행 13493859239430 <i class="bt_ic_copy" /></kb-button>
            </div>
            <div class="ico_wrap">
              <div>
                <ico-txt blue>개인형 IRP</ico-txt>
              </div>
            </div>
            <div class="point">
              <span class="unit mg_r4">평가금액</span>
              <strong class="strong">254,000,500 원</strong>
            </div>
          </div>
          <kb-foldings
            not
            class="folding"
          >
            <kb-folding title="상세보기">
              <div class="info_txt_list">
                <ul class="list">
                  <li>
                    <div class="th">적립금액</div>
                    <div class="td fc_666"><strong>300,000,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">사용자부담금</div>
                    <div class="td fc_666"><strong>300,000,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">가입자부담금</div>
                    <div class="td fc_666"><strong>300,000,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">개설일</div>
                    <div class="td fc_666"><strong>2021/01/03</strong></div>
                  </li>
                  <li>
                    <div class="th">최초 입금일</div>
                    <div class="td fc_666"><strong>2021/01/03</strong></div>
                  </li>
                </ul>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //개인 IRP -->
        <!-- 투자 -->
        <div class="info_txt_box2 add_folding" v-scroll-fixed="{el:'.inner'}">
          <div class="inner">
            <div
              class="tit"
              :class="{star: isStar}"
            >
              <strong>키움프론티어개잉용MMF제1호키움프론티어개잉용MMF제1호</strong>
              <kb-button
                star
                :class="{checked:isStar}"
                role="checkbox"
                :aria-checked="isStar?'true':'false'"
                @click="isStar = !isStar"
              >관심등록</kb-button>
            </div>
            <div class="sub">
              <kb-button not>국민은행 13493859239430 <i class="bt_ic_copy" /></kb-button>
            </div>
            <div class="ico_wrap">
              <div>
                <ico-txt yellow>ISA</ico-txt>
                <ico-txt blue>적립식</ico-txt>
              </div>
            </div>
            <div class="point">
              <span class="unit mg_r4">평가금액</span>
              <strong class="strong">254,000,500 원</strong>
            </div>
          </div>
          <kb-foldings
            not
            class="folding"
          >
            <kb-folding title="상세보기">
              <div class="info_txt_list">
                <ul class="list">
                  <li>
                    <div class="th">잔액</div>
                    <div class="td fc_666"><strong>300,000,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">투자원금</div>
                    <div class="td fc_666"><strong>300,000,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">납입유형</div>
                    <div class="td fc_666"><strong>적립식</strong></div>
                  </li>
                  <li>
                    <div class="th">개설일</div>
                    <div class="td fc_666"><strong>2021/01/03</strong></div>
                  </li>
                  <li>
                    <div class="th">만기일</div>
                    <div class="td fc_666"><strong>2021/01/03</strong></div>
                  </li>
                </ul>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //투자 -->
        <!-- 대출 -->
        <div class="info_txt_box2 add_folding" v-scroll-fixed="{el:'.inner'}">
          <div class="inner">
            <div
              class="tit"
              :class="{star: isStar}"
            >
              <strong>일반분할상환대출</strong>
              <kb-button
                star
                :class="{checked:isStar}"
                role="checkbox"
                :aria-checked="isStar?'true':'false'"
                @click="isStar = !isStar"
              >관심등록</kb-button>
            </div>
            <div class="sub">
              <kb-button not>국민은행 13493859239430 <i class="bt_ic_copy" /></kb-button>
            </div>
            <div class="ico_wrap">
              <div>
                <ico-txt yellow>신용대출</ico-txt>
              </div>
              <div>
                <span class="fz_12 fc_down">적용이율 1.55%</span>
              </div>
            </div>
            <div class="point">
              <strong class="strong">254,000,500 원</strong>
            </div>
            <div class="info_txt_list mg_t12">
              <ul class="list">
                <li>
                  <div class="th">다음 상환일</div>
                  <div class="td fc_666"><strong>2021/01/01</strong></div>
                </li>
                <li>
                  <div class="th">만기</div>
                  <div class="td fc_666"><strong>2021/01/01</strong></div>
                </li>
              </ul>
            </div>
          </div>
          <kb-foldings
            not
            class="folding"
          >
            <kb-folding title="상세보기">
              <div class="info_txt_list">
                <ul class="list">
                  <li>
                    <div class="th">최종거래일자</div>
                    <div class="td fc_666"><strong>2021/01/03</strong></div>
                  </li>
                  <li>
                    <div class="th">대출원금</div>
                    <div class="td fc_666"><strong>300,000,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">대출잔액</div>
                    <div class="td fc_666"><strong>300,000,000원</strong></div>
                  </li>
                  <li>
                    <div class="th">대출금리</div>
                    <div class="td fc_666"><strong>1.55%</strong></div>
                  </li>
                  <li>
                    <div class="th">대출 신규일</div>
                    <div class="td fc_666"><strong>2021/01/03</strong></div>
                  </li>
                  <li>
                    <div class="th">월 상환일</div>
                    <div class="td fc_666"><strong>매월 2일</strong></div>
                  </li>
                  <li>
                    <div class="th">대출유형</div>
                    <div class="td fc_666"><strong>분할상환</strong></div>
                  </li>
                </ul>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //대출 -->

        <div class="t_right mg_t16 mg_b16">
          <kb-button link blue>다른계좌보기<i class="bt_ic_arr" aria-hidden="true" /></kb-button>
        </div>

        <!-- 개인 IRP -->
        <kb-foldings
          not
          not-toggle
          class="accordion_bar_list ty2"
        >
          <kb-folding>
            <template slot="title">
              원리금비보장(펀드)
            </template>
            <template slot="title_next">
              <div class="inner">
                <div class="info_txt_list">
                  <div class="breakall"><strong>미래에셋 퇴직플랜 아시아그레이트컨슈머 증권자 투자신탁1호[주식-재간접형]종류C-E</strong></div>
                  <ul class="list mg_t16">
                    <li>
                      <div class="th">평가금액</div>
                      <div class="td fc_666"><strong>1,200,000원</strong></div>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
            <div class="info_txt_list">
              <ul class="list">
                <li>
                  <div class="th">투자원금</div>
                  <div class="td fc_666"><strong>300,000,000원</strong></div>
                </li>
                <li>
                  <div class="th">신규일</div>
                  <div class="td fc_666"><strong>2021/01/03</strong></div>
                </li>
                <li>
                  <div class="th">만기일</div>
                  <div class="td fc_666"><strong>2021/01/03</strong></div>
                </li>
              </ul>
            </div>
          </kb-folding>
          <kb-folding>
            <template slot="title">
              원리금비보장(펀드)
            </template>
            <template slot="title_next">
              <div class="inner">
                <div class="info_txt_list">
                  <div class="breakall"><strong>미래에셋 퇴직플랜 아시아그레이트컨슈머 증권자 투자신탁1호[주식-재간접형]종류C-E</strong></div>
                  <ul class="list mg_t16">
                    <li>
                      <div class="th">평가금액</div>
                      <div class="td fc_666"><strong>1,200,000원</strong></div>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
            <div class="info_txt_list">
              <ul class="list">
                <li>
                  <div class="th">투자원금</div>
                  <div class="td fc_666"><strong>300,000,000원</strong></div>
                </li>
                <li>
                  <div class="th">신규일</div>
                  <div class="td fc_666"><strong>2021/01/03</strong></div>
                </li>
                <li>
                  <div class="th">만기일</div>
                  <div class="td fc_666"><strong>2021/01/03</strong></div>
                </li>
              </ul>
            </div>
          </kb-folding>
        </kb-foldings>
        <!-- //개인 IRP -->

        <hr aria-hidden="true" class="hr_line">
        <div class="list_filter_wrap">
          <div class="list_filter_bar">
            <div class="left"></div>
            <div class="right">
              <div class="item_warp">
                <span class="item">
                  {{this.searchTxt1}}
                </span>
                <span class="item">
                  {{this.searchTxt2}}
                </span>
                <span
                  v-if="searchTxt3 != ''"
                  class="item tag"
                >#{{this.searchTxt3}}</span>
              </div>
              <kb-button
                filter
                @click="openFilter($event.target)"
              >
                검색필터
              </kb-button>
            </div>
          </div>
        </div>

        <div class="month_info_wrap">
          <div>
            <div>2021년 03월</div>
            <div class="line_list_ty2 mg_t8">
              <ul>
                <!-- 입출금 -->
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_down">입금</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div class="breakall">
                          <strong>넷플릭스정기결제</strong>
                        </div>
                        <div class="nowrap pd_l10">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                      <div class="flex_wrap space_between align_center mg_t8">
                        <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                        <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
                      </div>
                    </kb-button>
                    <div class="category_info">
                      <kb-button not class="btn_category">카테고리 선택</kb-button>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">출금</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div class="breakall">
                        </div>
                        <div class="nowrap pd_l10">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                      <div class="flex_wrap space_between align_center mg_t8">
                        <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                        <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
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
                <!-- //입출금 -->
                <!-- 예적금 -->
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div><strong class="fz_18">12,400원</strong></div>
                      </div>
                      <div class="flex_wrap space_between align_center mg_t8">
                        <div><strong class="fz_16">12회차</strong></div>
                        <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <!-- //예적금 -->
                <!-- 외화 -->
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">출금</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div>
                          <strong>NH 홍길동</strong>
                        </div>
                        <div>
                          <strong class="fz_18">USD 12,400</strong>
                        </div>
                      </div>
                      <div class="flex_wrap space_between align_center mg_t8">
                        <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                        <div class="fz_12 fc_666">USD 1,432,000,000</div>
                      </div>
                    </kb-button>
                    <div class="category_info">
                      <ul>
                        <li class="tag">#이체</li>
                        <li>메모</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_down">입금</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div>
                        </div>
                        <div>
                          <strong class="fz_18">USD 12,400</strong>
                        </div>
                      </div>
                      <div class="flex_wrap space_between align_center mg_t8">
                        <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                        <div class="fz_12 fc_666">USD 1,432,000,000</div>
                      </div>
                    </kb-button>
                    <div class="category_info">
                      <ul>
                        <li class="tag">#이체</li>
                        <li>메모</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <!-- //입출금 -->
                <!-- 개인형 IRP -->
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">지급</strong></div>
                      </div>
                      <div class="t_right mg_t4">
                        <strong class="fz_18">12,400원</strong>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_down">입금</strong></div>
                      </div>
                      <div class="t_right mg_t4">
                        <strong class="fz_18">12,400원</strong>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <!-- //개인형 IRP -->
                <!-- 투자 -->
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">출금</strong></div>
                      </div>
                      <div class="t_right mg_t4">
                        <strong class="fz_18">12,400원</strong>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_down">입금</strong></div>
                      </div>
                      <div class="t_right mg_t4">
                        <strong class="fz_18">12,400원</strong>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <!-- //투자 -->
                <!-- 대출 -->
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">실행</strong></div>
                      </div>
                      <div class="t_right mg_t4">
                        <strong class="fz_18">12,400원</strong>
                      </div>
                      <div class="t_right mg_t8">
                        <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_down">상환</strong></div>
                      </div>
                      <div class="t_right mg_t4">
                        <strong class="fz_18">12,400원</strong>
                      </div>
                      <div class="t_right mg_t8">
                        <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_down">정정</strong></div>
                      </div>
                      <div class="t_right mg_t4">
                        <strong class="fz_18">12,400원</strong>
                      </div>
                      <div class="t_right mg_t8">
                        <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_down">기타</strong></div>
                      </div>
                      <div class="t_right mg_t4">
                        <strong class="fz_18">12,400원</strong>
                      </div>
                      <div class="t_right mg_t8">
                        <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
                      </div>
                    </kb-button>
                  </div>
                </li>
                <!-- //대출 -->
              </ul>
            </div>
          </div>
          <div>
            <div>2021년 04월</div>
            <div class="line_list_ty2 mg_t8">
              <ul>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">출금</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div class="breakall">
                          <div class="mg_t3"><strong>넷플릭스정기결제</strong></div>
                        </div>
                        <div class="nowrap pd_l10">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                      <div class="flex_wrap space_between align_center mg_t8">
                        <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                        <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
                      </div>
                    </kb-button>
                    <div class="category_info">
                      <kb-button not class="btn_category">카테고리 선택</kb-button>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">출금</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div>
                        </div>
                        <div class="nowrap pd_l10">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                      <div class="flex_wrap space_between align_center mg_t8">
                        <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                        <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
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
          <div>
            <div>2021년 04월</div>
            <div class="line_list_ty2 mg_t8">
              <ul>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">출금</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div class="breakall">
                          <div class="mg_t3"><strong>넷플릭스정기결제</strong></div>
                        </div>
                        <div class="nowrap pd_l10">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                      <div class="flex_wrap space_between align_center mg_t8">
                        <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                        <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
                      </div>
                    </kb-button>
                    <div class="category_info">
                      <kb-button not class="btn_category">카테고리 선택</kb-button>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <kb-button aTag not class="inner">
                      <div class="flex_wrap space_between align_center">
                        <div class="fz_12 fc_666">2021/01/01(13:50:23)</div>
                        <div class="fz_14"><strong class="fc_up">출금</strong></div>
                      </div>
                      <div class="flex_wrap space_between mg_t4 align_end">
                        <div>
                        </div>
                        <div class="nowrap pd_l10">
                          <strong class="fz_18">12,400원</strong>
                        </div>
                      </div>
                      <div class="flex_wrap space_between align_center mg_t8">
                        <div class="fz_12 fc_888">펌뱅킹 123456789123</div>
                        <div class="fz_12 fc_666">잔액 1,432,000,000원</div>
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
        </div>

        <kb-button-wrap bottom-fixed>
          <kb-button yellow>이체하기</kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'FI04A003',
  data() {
    return {
      toggleVal: '1',
      searchTxt1: '전체',
      searchTxt2: '1개월',
      searchTxt3: '',
      isStar: false,
    };
  },
  methods: {
    openFilter(el) {
      // if (this.$refs.filterPanel.$el.classList.contains('folding_ing')) return;
      this.$modal({
        component: () => import('@/views/FI/04/FI04A008.vue'),
        componentProps: {
        },
        returnFocus: el,
      }).then((result) => {
        if (result.payload !== undefined) {
          this.searchTxt1 = `${result.payload[0]}`;
          this.searchTxt2 = `${result.payload[1]}`;
          this.searchTxt3 = `${result.payload[2]}`;
        }
      });
    },
  },
};
</script>

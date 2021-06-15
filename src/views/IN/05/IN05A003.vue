<template>
  <div class="section pd_b60">
    <kb-title-bar h3 class="mg_t40" title="나의 투자 나이는 몇살일까?">
      <template slot="left">
        <kb-button
          not
          class="tooltip_btn mg_l4"
          v-tooltip="'views/IN/05/IN05A003_tip.vue'"
          aria-label="팝업으로 상세내용 확인"
        >팝업으로 상세내용 확인</kb-button>
      </template>
    </kb-title-bar>
    <div class="user_medal_box mg_t16">
      <div class="flex">
        <div class="ico">
          <!--
            0살 : lv0
            1~5살 : lv1
            6~10살 : lv2
            11~15살 : lv3
            16살 이상 : lv4
          -->
          <i class="medal lv1"></i>
        </div>
        <div class="info">
          <div class="sub">초심자의 행운</div>
          <div class="age"><strong>{{age}}살</strong></div>
        </div>
      </div>
      <kb-button not class="write" @click="openAgeChange($event.target)">수정하기</kb-button>
    </div>
    <hr aria-hidden="true" class="hr_line mg_t24">
    <!-- 데이터 없음: 주식투자거래횟수0-->
    <template v-if="false">
      <kb-title-bar
        h1
        class="mg_t40"
        title="투자를 시작하면<br>진실을 알 수 있어요"
      />
      <div class="mg_t8">씨를 뿌려야 수확의 기쁨을 맛볼 수 있어요!</div>
      <div class="fz_14 fc_666 mg_t8">
        호기롭게 주식 투자를 시작하려고 계좌를 개설하셨지만 무엇을 해야 할지 막막하셨나요?<br>
        <br>
        너무 어렵게 생각하지 말고 가볍게 시작하세요.<br>
        <br>
        커피 한잔 건너뛰고 평소에 관심있던 회사에 투자를 해보는 거예요~<br>
        <br>
        시작이 반이예요!<br>
        미래의 김스타 주주님!
      </div>
      <div class="img_box mg_t24"><img src="~@/assets/images/IN/05/img1.png" alt=""></div>
      <hr aria-hidden="true" class="hr_line mg_t32">
      <kb-title-bar
        h2
        class="mg_t32"
        title="무엇을 볼 수 있을까?"
      />
      <div class="fz_14 fc_666 mg_t8">KB증권의 과학적인 알고리즘이 명쾌하게 투자패턴을 분석하고 진단하여 올바른 투자습관을 갖도록 도움을 드려요.</div>
      <ul class="circle_color_list mg_t24">
        <li>
          <div class="item">
            <div class="ico blue">
              <strong>유사그룹<br>비교</strong>
            </div>
            <div class="txt">나와 유사한 그룹간의 비교 데이터를 통해 현 위치를 활인 할 수 있어요.</div>
          </div>
        </li>
        <li>
          <div class="item">
            <div class="ico yellow">
              <strong>패턴분석</strong>
            </div>
            <div class="txt">주로 투자하는 종목군, 규모별, 투자/손익 비중, 추세 매매 스타일, 보유 기간 스타일을 분석해 드려요.</div>
          </div>
        </li>
        <li>
          <div class="item">
            <div class="ico purple">
              <strong>투자카드</strong>
            </div>
            <div class="txt">앞서 분석한 투자 습관과 투자 패턴을 종합 점수와 함께 확인 할 수 있어요.</div>
          </div>
        </li>
      </ul>
      <div class="box_banner_list ty2 mg_t60">
        <kb-button not a-tag class="item invest">
          <strong class="tit">가상 투자를 <br>체험해 보시겠어요?</strong>
        </kb-button>
        <kb-button not a-tag class="item portfolio">
          <strong class="tit">투자가 어렵다면 <br>모델 포트폴리오를 살펴볼까요?</strong>
        </kb-button>
      </div>
    </template>
    <!-- //데이터 없음: 주식투자거래횟수0-->
    <!-- 데이터 있음 -->
    <template v-else>
      <kb-title-bar
        h3
        class="mg_t32 align_start"
        title="그동안 얼마나 벌었을까?"
      >
        <div class="fz_12 fc_666">20/10/19 기준</div>
      </kb-title-bar>
      <template v-if="true">
        <kb-tabs
          type2
          content-class="mg_t0"
          class="mg_t8"
        >
          <kb-tab title="나의 투자">
            <div class="data_compare_wrap">
              <div class="sub2">지난 1년 동안의 주식투자를 요약했어요.</div>
              <!--
              벌었을때 : good
              그대로 일때: -
              잃었을때 : bad
            -->
              <div class="ico_face_state"></div>
              <div class="point">29번 거래하여<br>987억 1200만원 벌었어요.</div>
              <div class="sub">6종목중 5종목 매도</div>
              <div class="info_box_wrap ty1">
                <div>
                  <div class="info_box up">
                    <div class="th">20번 거래하여 <br>10종목을 샀어요</div>
                    <div class="td">5억 1200만원</div>
                  </div>
                </div>
                <div>
                  <div class="info_box down">
                    <div class="th">9번 거래하여 <br>6종목을 팔았어요</div>
                    <div class="td">4억 30만원</div>
                  </div>
                </div>
              </div>
              <div v-if="true" class="error_box">
                <!-- 2021-06-08 -->
                찾지 못한 종목이 있을 수 있어요.
                <!-- //2021-06-08 -->
                <kb-button
                  not
                  class="tooltip_btn mg_l4"
                  v-tooltip="'views/IN/05/IN05A003_tip2.vue'"
                  aria-label="팝업으로 상세내용 확인"
                >팝업으로 상세내용 확인</kb-button>
              </div>
              <div class="chart_wrap outer mg_t32">
                <img src="@/assets/images/temp/chart_bar.png" alt="">
              </div>
            </div>
          </kb-tab>
          <kb-tab title="유사그룹 비교">
            <div class="data_compare_wrap">
              <!--
              벌었을때 : good
              그대로 일때: -
              잃었을때 : bad
            -->
              <div class="ico_face_state"></div>
              <div class="sub">투자나이 4살 그룹의 <br>평균 실현 손익금보다</div>
              <div class="point">28억 294만원 수익이 많아요.</div>
              <div class="info_box_wrap ty1">
                <div class="left">
                  <div class="info_box me win"><!-- 높은쪽이 win 클래스 -->
                    <div class="th">2억 230만원</div>
                    <div class="td">김스타님</div>
                  </div>
                </div>
                <div class="right">
                  <div class="info_box">
                    <div class="th">1억 3055만원</div>
                    <div class="td">초심자의 행운</div>
                  </div>
                </div>
              </div>
            </div>
          </kb-tab>
        </kb-tabs>
      </template>

      <template v-else>
        <div class="no_list_txt face">
          <div class="tit">내일 다시오면 알려드릴게요~</div>
        </div>
      </template>

      <hr aria-hidden="true" class="hr_line mg_t32">
      <kb-title-bar
        h3
        class="mg_t32 align_start"
        title="이제는 말 할 수 있다!<br>종목 TOP3"
      >
        <div class="fz_12 fc_666">20/10/19 기준</div>
      </kb-title-bar>
      <template v-if="true">
        <div class="character_tit_bar mg_t12">
          <strong class="fc_up">기쁨을 준 종목은?</strong>
          <i class="char1" />
        </div>
        <ul class="color_box_list up mg_t16">
          <li>
            <div class="item">
              <div class="th">
                <strong class="num">1</strong>
                <strong class="name">삼성전자</strong>
              </div>
              <div class="td">
                +8,342,000원
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="th">
                <strong class="num">2</strong>
                <strong class="name">셀트리온</strong>
              </div>
              <div class="td">
                +8,342,000원
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="th">
                <strong class="num">3</strong>
                <strong class="name">엔씨소프트</strong>
              </div>
              <div class="td">
                +8,342,000원
              </div>
            </div>
          </li>
          <!-- 링크 사용 시 -->
          <!-- <li>
            <kb-button not class="item" a-tag>
              <div class="th">
                <strong class="num">1</strong>
                <strong class="name">삼성전자</strong>
              </div>
              <div class="td">
                +8,342,000원
              </div>
            </kb-button>
          </li> -->
        </ul>

        <div class="character_tit_bar mg_t20">
          <strong class="fc_down">슬픔을 준 종목은?</strong>
          <i class="char2" />
        </div>
        <ul class="color_box_list down mg_t16">
          <li>
            <div class="item">
              <div class="th">
                <strong class="num">1</strong>
                <strong class="name">한국전력</strong>
              </div>
              <div class="td">
                -8,342,000원
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="th">
                <strong class="num">2</strong>
                <strong class="name">피비파마</strong>
              </div>
              <div class="td">
                -8,342,000원
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <div class="th">
                <strong class="num">3</strong>
                <strong class="name">카카오</strong>
              </div>
              <div class="td">
                -8,342,000원
              </div>
            </div>
          </li>
        </ul>
      </template>

      <template v-else>
        <div class="no_list_txt face">
          <div class="tit">내일 다시오면 알려드릴게요~</div>
        </div>
      </template>

      <hr aria-hidden="true" class="hr_line mg_t32">
      <kb-title-bar
        h3
        class="mg_t32 align_start"
        title="수익 VS 손실"
      >
        <div class="fz_12 fc_666">20/10/19 기준</div>
      </kb-title-bar>
      <template v-if="true">
        <kb-tabs
          type2
          class="mg_t8"
        >
          <kb-tab title="나의 투자">
            <div class="box_banner_list">
              <div class="item price_up">
                <div class="sub">제일 많이 번 금액은?</div>
                <strong class="tit">8,645,000원</strong>
              </div>
              <div class="item price_down">
                <div class="sub">제일 많이 잃은 금액은?</div>
                <strong class="tit">-6,454,500원</strong>
              </div>
              <div class="item rate_up">
                <div class="sub">평균 이익 수익률은?</div>
                <strong class="tit">15.0%</strong>
              </div>
              <div class="item rate_down">
                <div class="sub">평균 손실 수익률은?</div>
                <strong class="tit">-7%</strong>
              </div>
            </div>
          </kb-tab>
          <kb-tab title="유사그룹 비교">
            <div class="t_center"><strong>평균 이익률</strong></div>
            <div class="info_box_wrap vs_type mg_t10">
              <div>
                <div class="info_box me win"><!-- 높은쪽이 win 클래스 -->
                  <div class="th">15%</div>
                  <div class="td">김스타님</div>
                </div>
              </div>
              <div class="vs">VS</div>
              <div>
                <div class="info_box">
                  <div class="th">12.9%</div>
                  <div class="td">초심자의 행운</div>
                </div>
              </div>
            </div>
            <div class="t_center mg_t32"><strong>평균 손실률</strong></div>
            <div class="info_box_wrap vs_type mg_t10">
              <div>
                <div class="info_box me">
                  <div class="th">-10%</div>
                  <div class="td">김스타님</div>
                </div>
              </div>
              <div class="vs">VS</div>
              <div>
                <div class="info_box win"><!-- 높은쪽이 win 클래스 -->
                  <div class="th">-7.3%</div>
                  <div class="td">초심자의 행운</div>
                </div>
              </div>
            </div>
          </kb-tab>
        </kb-tabs>

        <kb-foldings
          type1
          class="ty4"
        >
          <kb-folding title="획득 카드 보기">
            <div class="pattern_card pd_t60 pd_b7">
              <div class="card_wrap">
                <kb-swiper>
                  <swiper-slide>
                    <div class="card_list">
                      <div class="in">
                        <p class="tit">이익 관리</p>
                        <!-- 이미지 타입별 정리
                          .ico1 : 이익관리 - 날렵한 사냥꾼
                          .ico2 : 이익관리 - 감 잡았어
                          .ico3 : 이익관리 - 새의심장
                          .ico4 : 손실관리 - 손절
                          .ico5 : 손실관리 - 청소부
                          .ico6 : 손실관리 - 망부석
                          .ico7 : 투자비중 - 탁월한 농사꾼
                          .ico8 : 투자비중 - 카멜레온
                          .ico9 : 투자비중 - 몰빵 장인
                          .ico10 : 추세 - 타이밍의 귀재
                          .ico11 : 추세 - 추세 추종자
                          .ico12 : 추세 - 지나가는 1인
                          .ico13 : 등락폭 - 스릴광
                          .ico14 : 등락폭 - 두루두루
                          .ico15 : 등락폭 - 안전지대
                          .ico16 : 추세매매(매수) - 올라타자
                          .ico17 : 추세매매(매수) - 줍줍
                          .ico18 : 추세매매(매수) - 느낌 좋은 매수
                          .ico19 : 물타기 - 철수
                          .ico20 : 물타기 - 물의요정
                          .ico21 : 물타기 - 아찔한 곡예사
                          .ico22 : 보유기간 - 변화무쌍 초단타
                          .ico23 : 보유기간 - 매일 씐나는 단타
                          .ico24 : 보유기간 - 기다릴 줄 아는 중기
                          .ico25 : 보유기간 - 가끔 생각나는 중장기
                          .ico26 : 보유기간 - 기억상실 장기
                          .ico27 : 승률 - 마이너스 손
                          .ico28 : 승률 - 전설의 나무꾼
                          .ico29 : 거래보유일 - 맴찢
                          .ico30 : 거래보유일 - 이익>손실
                          .ico31 : 분산투자성향 - SOS구조바람
                          .ico32 : 분산투자성향 - 유유자적 오리배
                          .ico33 : 종목과다보유 - 너도자라라 쑥쑥
                        -->
                        <p class="img ico1"></p>
                        <div class="text_box">
                          <p class="sub_tit">날렵한 사냥꾼</p>
                          <p class="text">수익을 낼 수 있는 먹이감은 <br />절대 놓치지 않지</p>
                          <p class="text2">아무리 손해를 보더라도 한 방울의 물 조차 타지 않는 당신은 자신만의 투자 철학으로 외길을 걷는 투자패턴을 가지고 있네요. 물타기로 평균단가를 낮추는 이점도 있지만 당신에겐 이미 매매철학이 있겠죠?</p>
                        </div>
                        <a href="#" class="btn_more" @click="cardText($event)">내용펼치기</a>
                        <kb-button aTag not class="btn_inout" @click="cardInOut($event)">카드 뒤집기</kb-button>
                      </div>
                      <div class="out">
                        <p class="tit">연간 획득 카드</p>

                        <div class="year_box">
                          <kb-button aTag not class="btn_left">이전</kb-button>
                          <p class="year">2021년</p>
                          <kb-button aTag not class="btn_right">다음</kb-button>
                        </div>

                        <div class="year_list">
                          <div class="list">
                            <dl>
                              <dt>날렵한 사냥꾼</dt>
                              <dd>10번</dd>
                            </dl>
                            <dl>
                              <dt>감잡았어</dt>
                              <dd>4번</dd>
                            </dl>
                            <dl>
                              <dt>감잡았어</dt>
                              <dd>4번</dd>
                            </dl>
                            <dl>
                              <dt>새의 심장</dt>
                              <dd>1번</dd>
                            </dl>
                          </div>

                          <div class="appraisal">
                            이익관리 스타일이 <br />
                            상당히 우수해요.
                          </div>
                        </div>

                        <kb-button aTag not class="btn_inout" @click="cardInOut($event)">카드 뒤집기</kb-button>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="card_list">
                      <div class="in">
                        <p class="tit">이익 관리</p>
                        <p class="img ico2"></p>
                        <div class="text_box">
                          <p class="sub_tit">날렵한 사냥꾼</p>
                          <p class="text">수익을 낼 수 있는 먹이감은 <br />절대 놓치지 않지</p>
                          <p class="text2">아무리 손해를 보더라도 한 방울의 물 조차 타지 않는 당신은 자신만의 투자 철학으로 외길을 걷는 투자패턴을 가지고 있네요. 물타기로 평균단가를 낮추는 이점도 있지만 당신에겐 이미 매매철학이 있겠죠?</p>
                        </div>
                        <a href="#" class="btn_more" @click="cardText($event)">내용펼치기</a>
                        <kb-button aTag not class="btn_inout" @click="cardInOut($event)">카드 뒤집기</kb-button>
                      </div>
                      <div class="out">
                        <p class="tit">연간 획득 카드</p>

                        <div class="year_box">
                          <kb-button aTag not class="btn_left">이전</kb-button>
                          <p class="year">2021년</p>
                          <kb-button aTag not class="btn_right">다음</kb-button>
                        </div>

                        <div class="year_list">
                          <div class="list">
                            <dl>
                              <dt>날렵한 사냥꾼</dt>
                              <dd>10번</dd>
                            </dl>
                            <dl>
                              <dt>감잡았어</dt>
                              <dd>4번</dd>
                            </dl>
                            <dl>
                              <dt>감잡았어</dt>
                              <dd>4번</dd>
                            </dl>
                            <dl>
                              <dt>새의 심장</dt>
                              <dd>1번</dd>
                            </dl>
                          </div>

                          <div class="appraisal">
                            이익관리 스타일이 <br />
                            상당히 우수해요.
                          </div>
                        </div>

                        <kb-button aTag not class="btn_inout" @click="cardInOut($event)">카드 뒤집기</kb-button>
                      </div>
                    </div>
                  </swiper-slide>
                </kb-swiper>
              </div>
            </div>
          </kb-folding>
        </kb-foldings>
      </template>
      <template v-else>
        <div class="no_list_txt face">
          <div class="tit">내일 다시오면 알려드릴게요~</div>
        </div>
      </template>

      <hr aria-hidden="true" class="hr_line">
      <kb-title-bar
        h3
        class="mg_t32 align_start"
        title="나의 승전보는 몇 번?"
      >
        <div class="fz_12 fc_666">20/10/19 기준</div>
      </kb-title-bar>
      <template v-if="true">
        <kb-tabs
          type2
          content-class="mg_t0"
          class="mg_t8"
        >
          <kb-tab title="나의 투자">
            <div class="chart_wrap ">
              <div class="chart">
                <img src="@/assets/images/temp/chart_donut2.png" alt="">
              </div>
              <div class="donut_chart_legend">
                <ul>
                  <li>
                    <div class="th">이익거래</div>
                    <div class="td"><strong class="fc_up">179</strong></div>
                  </li>
                  <li>
                    <div class="th">손실거래</div>
                    <div class="td"><strong class="fc_down">59</strong></div>
                  </li>
                </ul>
              </div>
            </div>
          </kb-tab>
          <kb-tab title="유사그룹 비교">
            <div class="info_box_wrap vs_type mg_t53">
              <div>
                <div class="info_box me">
                  <div class="th">58.1%</div>
                  <div class="td">김스타님</div>
                </div>
              </div>
              <div class="vs">VS</div>
              <div>
                <div class="info_box win"><!-- 높은쪽이 win 클래스 -->
                  <div class="th">58.7%</div>
                  <div class="td">초심자의 행운</div>
                </div>
              </div>
            </div>
          </kb-tab>
        </kb-tabs>
        <kb-foldings
          type1
          class="ty4"
        >
          <kb-folding title="획득 카드 보기">
            <div class="pattern_card pd_t60 pd_b7">
              <div class="card_wrap">
                <kb-swiper>
                  <swiper-slide>
                    <div class="card_list">
                      <div class="in">
                        <p class="tit">이익 관리</p>
                        <p class="img ico3"></p>
                        <div class="text_box">
                          <p class="sub_tit">날렵한 사냥꾼</p>
                          <p class="text">수익을 낼 수 있는 먹이감은 <br />절대 놓치지 않지</p>
                          <p class="text2">아무리 손해를 보더라도 한 방울의 물 조차 타지 않는 당신은 자신만의 투자 철학으로 외길을 걷는 투자패턴을 가지고 있네요. 물타기로 평균단가를 낮추는 이점도 있지만 당신에겐 이미 매매철학이 있겠죠?</p>
                        </div>
                        <a href="#" class="btn_more" @click="cardText($event)">내용펼치기</a>
                        <kb-button aTag not class="btn_inout" @click="cardInOut($event)">카드 뒤집기</kb-button>
                      </div>
                      <div class="out">
                        <p class="tit">연간 획득 카드</p>

                        <div class="year_box">
                          <kb-button aTag not class="btn_left">이전</kb-button>
                          <p class="year">2021년</p>
                          <kb-button aTag not class="btn_right">다음</kb-button>
                        </div>

                        <div class="year_list">
                          <div class="list">
                            <dl>
                              <dt>날렵한 사냥꾼</dt>
                              <dd>10번</dd>
                            </dl>
                            <dl>
                              <dt>감잡았어</dt>
                              <dd>4번</dd>
                            </dl>
                            <dl>
                              <dt>감잡았어</dt>
                              <dd>4번</dd>
                            </dl>
                            <dl>
                              <dt>새의 심장</dt>
                              <dd>1번</dd>
                            </dl>
                          </div>

                          <div class="appraisal">
                            이익관리 스타일이 <br />
                            상당히 우수해요.
                          </div>
                        </div>

                        <kb-button aTag not class="btn_inout" @click="cardInOut($event)">카드 뒤집기</kb-button>
                      </div>
                    </div>
                  </swiper-slide>
                </kb-swiper>
              </div>
            </div>
          </kb-folding>
        </kb-foldings>
      </template>
      <template v-else>
        <div class="no_list_txt face">
          <div class="tit">내일 다시오면 알려드릴게요~</div>
        </div>
      </template>

      <hr aria-hidden="true" class="hr_line">
      <kb-title-bar
        h3
        class="mg_t32 align_start"
        title="얼마나 오~래 지녔을까?"
      >
        <div class="fz_12 fc_666">20/10/19 기준</div>
      </kb-title-bar>
      <template v-if="true">
        <kb-tabs
          type2
          class="mg_t8"
        >
          <kb-tab title="나의 투자">
            <div class="info_box_wrap ty2">
              <div>
                <div class="info_box">
                  <div class="th">평균<br>보유일</div>
                  <div class="td"><strong>23일</strong></div>
                </div>
              </div>
              <div>
                <div class="info_box up">
                  <div class="th">이익 거래<br>보유일</div>
                  <div class="td"><strong>23일</strong></div>
                </div>
              </div>
              <div>
                <div class="info_box down">
                  <div class="th">손실 거래<br>보유일</div>
                  <div class="td"><strong>22일</strong></div>
                </div>
              </div>
            </div>
          </kb-tab>
          <kb-tab title="유사그룹 비교">
            <div class="info_box_wrap vs_type">
              <div>
                <div class="info_box me">
                  <div class="th">23일</div>
                  <div class="td">김스타님</div>
                </div>
              </div>
              <div class="vs">VS</div>
              <div>
                <div class="info_box">
                  <div class="th">40일</div>
                  <div class="td">초심자의 행운</div>
                </div>
              </div>
            </div>
          </kb-tab>
        </kb-tabs>
        <kb-foldings
          type1
          class="ty4"
        >
          <kb-folding  title="획득 카드 보기">
            <div class="pattern_card pd_t60 pd_b7">
              <div class="card_wrap">
                <kb-swiper>
                  <swiper-slide>
                    <div class="card_list">
                      <div class="in">
                        <p class="tit">이익 관리</p>
                        <p class="img ico4"></p>
                        <div class="text_box">
                          <p class="sub_tit">날렵한 사냥꾼</p>
                          <p class="text">수익을 낼 수 있는 먹이감은 <br />절대 놓치지 않지</p>
                          <p class="text2">아무리 손해를 보더라도 한 방울의 물 조차 타지 않는 당신은 자신만의 투자 철학으로 외길을 걷는 투자패턴을 가지고 있네요. 물타기로 평균단가를 낮추는 이점도 있지만 당신에겐 이미 매매철학이 있겠죠?</p>
                        </div>
                        <a href="#" class="btn_more" @click="cardText($event)">내용펼치기</a>
                        <kb-button aTag not class="btn_inout" @click="cardInOut($event)">카드 뒤집기</kb-button>
                      </div>
                      <div class="out">
                        <p class="tit">연간 획득 카드</p>

                        <div class="year_box">
                          <kb-button aTag not class="btn_left">이전</kb-button>
                          <p class="year">2021년</p>
                          <kb-button aTag not class="btn_right">다음</kb-button>
                        </div>

                        <div class="year_list">
                          <div class="list">
                            <dl>
                              <dt>날렵한 사냥꾼</dt>
                              <dd>10번</dd>
                            </dl>
                            <dl>
                              <dt>감잡았어</dt>
                              <dd>4번</dd>
                            </dl>
                            <dl>
                              <dt>감잡았어</dt>
                              <dd>4번</dd>
                            </dl>
                            <dl>
                              <dt>새의 심장</dt>
                              <dd>1번</dd>
                            </dl>
                          </div>

                          <div class="appraisal">
                            이익관리 스타일이 <br />
                            상당히 우수해요.
                          </div>
                        </div>

                        <kb-button aTag not class="btn_inout" @click="cardInOut($event)">카드 뒤집기</kb-button>
                      </div>
                    </div>
                  </swiper-slide>
                </kb-swiper>
              </div>
            </div>
          </kb-folding>
        </kb-foldings>
      </template>
      <template v-else>
        <div class="no_list_txt face">
          <div class="tit">내일 다시오면 알려드릴게요~</div>
        </div>
      </template>

      <hr aria-hidden="true" class="hr_line">
      <kb-title-bar
        h3
        class="mg_t32 align_start"
        title="종목 분산투자 성향은?"
      >
        <div class="fz_12 fc_666">20/10/19 기준</div>
      </kb-title-bar>
      <template v-if="true">
        <kb-tabs
          type2
          class="mg_t8"
        >
          <kb-tab title="나의 투자">
            <div class="duck_chart_wrap">
              <div class="chart_bg">
                <div class="line" v-scroll-in="duckUp">
                  <div class="up">집중투자</div>
                  <div class="down">분산투자</div>
                </div>
                <div ref="duck" class="duck_wrap" :class="{off:duckOff}">
                  <div v-if="duckOff" class="balloon">분산투자 필요</div>
                  <div v-else class="balloon">안정권</div>
                  <div class="duck">
                    <i v-if="duckOff" class="air"></i>
                    <i v-if="duckOff" class="air"></i>
                    <i v-if="duckOff" class="air"></i>
                  </div>
                </div>
                <div ref="water" class="water"></div>
              </div>
              <div class="inner">
                <div class="left">
                  <dl class="dl">
                    <dt>투자 종목 수</dt>
                    <dd><strong>5개</strong></dd>
                  </dl>
                </div>
                <div class="right">
                  <dl class="dl">
                    <dt>평균 투자 비중</dt>
                    <dd><strong>{{investRate}}%</strong></dd>
                  </dl>
                  <dl class="dl">
                    <dt>평균 매수 금액</dt>
                    <dd><strong>8,234,000원</strong></dd>
                  </dl>
                </div>
              </div>
            </div>
          </kb-tab>
          <kb-tab title="유사그룹 비교">
            <div class="t_center"><strong>투자 종목 개수</strong></div>
            <div class="info_box_wrap vs_type mg_t10">
              <div>
                <div class="info_box me">
                  <div class="th">5개</div>
                  <div class="td">김스타님</div>
                </div>
              </div>
              <div class="vs">VS</div>
              <div>
                <div class="info_box">
                  <div class="th">10개</div>
                  <div class="td">초심자의 행운</div>
                </div>
              </div>
            </div>
            <div class="t_center mg_t32"><strong>평균 투자 비중</strong></div>
            <div class="info_box_wrap vs_type mg_t10">
              <div>
                <div class="info_box me">
                  <div class="th">18.1%</div>
                  <div class="td">김스타님</div>
                </div>
              </div>
              <div class="vs">VS</div>
              <div>
                <div class="info_box">
                  <div class="th">57.9%</div>
                  <div class="td">초심자의 행운</div>
                </div>
              </div>
            </div>
          </kb-tab>
        </kb-tabs>
        <kb-foldings
          type1
          class="ty4"
        >
          <kb-folding title="획득 카드 보기">
            <div class="pattern_card pd_t60 pd_b7">
              <div class="card_wrap">
                <kb-swiper>
                  <swiper-slide>
                    <div class="card_list">
                      <div class="in">
                        <p class="tit">이익 관리</p>
                        <p class="img ico10"></p>
                        <div class="text_box">
                          <p class="sub_tit">날렵한 사냥꾼</p>
                          <p class="text">수익을 낼 수 있는 먹이감은 <br />절대 놓치지 않지</p>
                          <p class="text2">아무리 손해를 보더라도 한 방울의 물 조차 타지 않는 당신은 자신만의 투자 철학으로 외길을 걷는 투자패턴을 가지고 있네요. 물타기로 평균단가를 낮추는 이점도 있지만 당신에겐 이미 매매철학이 있겠죠?</p>
                        </div>
                        <a href="#" class="btn_more" @click="cardText($event)">내용펼치기</a>
                        <kb-button aTag not class="btn_inout" @click="cardInOut($event)">카드 뒤집기</kb-button>
                      </div>
                      <div class="out">
                        <p class="tit">연간 획득 카드</p>

                        <div class="year_box">
                          <kb-button aTag not class="btn_left">이전</kb-button>
                          <p class="year">2021년</p>
                          <kb-button aTag not class="btn_right">다음</kb-button>
                        </div>

                        <div class="year_list">
                          <div class="list">
                            <dl>
                              <dt>날렵한 사냥꾼</dt>
                              <dd>10번</dd>
                            </dl>
                            <dl>
                              <dt>감잡았어</dt>
                              <dd>4번</dd>
                            </dl>
                            <dl>
                              <dt>감잡았어</dt>
                              <dd>4번</dd>
                            </dl>
                            <dl>
                              <dt>새의 심장</dt>
                              <dd>1번</dd>
                            </dl>
                          </div>

                          <div class="appraisal">
                            이익관리 스타일이 <br />
                            상당히 우수해요.
                          </div>
                        </div>

                        <kb-button aTag not class="btn_inout" @click="cardInOut($event)">카드 뒤집기</kb-button>
                      </div>
                    </div>
                  </swiper-slide>
                </kb-swiper>
              </div>
            </div>
          </kb-folding>
        </kb-foldings>
      </template>
      <template v-else>
        <div class="no_list_txt face">
          <div class="tit">내일 다시오면 알려드릴게요~</div>
        </div>
      </template>
    </template>
    <!-- 데이터 있음-->
  </div>
</template>
<script>
export default {
  name: 'IN05A003',
  data() {
    return {
      age: 4,
      investRate: 55.6,
      duckOff: false,
    };
  },
  methods: {
    duckUp() {
      const $water = this.$refs.water;
      const $duck = this.$refs.duck;
      this.$anime({
        targets: $water,
        height: this.investRate + '%',
        delay: 500,
        duration: 1000,
        easing: 'linear',
      });
      this.$anime({
        targets: $duck,
        bottom: this.investRate + '%',
        delay: 500,
        duration: 1000,
        easing: 'linear',
        complete: (() => {
          if (this.investRate > 33.3) {
            this.duckOff = true;
            this.$anime({
              targets: $duck,
              bottom: '0%',
              easing: 'linear',
              duration: 5000,
            });
          }
        }),
      });
    },
    cardText(e) {
      if (e.target.closest('.in').classList.contains('more')) {
        e.target.closest('.in').classList.remove('more');
      } else {
        e.target.closest('.in').classList.add('more');
      }
    },
    cardInOut(e) {
      if (e.target.closest('.card_list').classList.contains('view')) {
        e.target.closest('.card_list').classList.remove('view');
      } else {
        e.target.closest('.card_list').classList.add('view');
      }
    },
    openAgeChange(el) {
      this.$modal({
        component: () => import('@/views/IN/05/IN05A004.vue'),
        componentProps: {
          value: this.age,
        },
        returnFocus: el,
      });
    },
  },
};
</script>

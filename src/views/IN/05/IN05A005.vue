<template>
  <div class="section pd_b60">
    <kb-title-bar
      h3
      class="mg_t32 align_start"
      title="어디서 주로 벌었을까?"
    >
      <div class="fz_12 fc_666">20/10/19 기준</div>
    </kb-title-bar>
    <div class="in_chart_item mg_t32">
      <div class="chart_wrap">
        <p class="fz_16 fw_bold">업종별 투자 비중</p>
        <div class="chart">
          <img src="@/assets/images/temp/chart_donut1.png" alt="">
        </div>
      </div>
      <div class="chart_legend">
        <ul>
          <li>
            <div class="th">
              <i class="dot" style="background-color:#3e61ba;"></i>
              <strong>국내주식</strong>
            </div>
            <div class="td">67%</div>
          </li>
          <li>
            <div class="th">
              <i class="dot" style="background-color:#3bae6c;"></i>
              <strong>해외주식</strong>
            </div>
            <div class="td">67%</div>
          </li>
          <li>
            <div class="th">
              <i class="dot" style="background-color:#91a5e9;"></i>
              <strong>국내채권</strong>
            </div>
            <div class="td">67%</div>
          </li>
          <li>
            <div class="th">
              <i class="dot" style="background-color:#b7ebcd;"></i>
              <strong>해외채권</strong>
            </div>
            <div class="td">67%</div>
          </li>
          <li>
            <div class="th">
              <i class="dot" style="background-color:#7040b1;"></i>
              <strong>부동산</strong>
            </div>
            <div class="td">67%</div>
          </li>
          <li>
            <div class="th">
              <i class="dot" style="background-color:#c79fe7;"></i>
              <strong>ELS/DLS</strong>
            </div>
            <div class="td">67%</div>
          </li>
          <li>
            <div class="th">
              <i class="dot" style="background-color:#c76ee6;"></i>
              <strong>상품</strong>
            </div>
            <div class="td">67%</div>
          </li>
        </ul>
      </div>
    </div>

    <p class="t_center fz_16 fw_bold mg_t40">업종별 손익 비중</p>
    <p class="chart_area mg_t16 t_center">
      <img src="~@/assets/images/temp/sample_IN05_1.png" alt="" />
    </p>

    <div class="appraisal_info">
      <!--
        벌었을때 : good
        그대로 일때: -
        잃었을때 : bad
      -->
      <div class="ico_face_state"></div>
      <div class="text">
        <strong class="line">의약품</strong> 업종에 많이 투자하고,<br />
        <strong class="line">전기전자</strong> 업종에서 주로 벌었어요.
      </div>

      <div class="gray_box">
        지난달엔 운수장비 업종에 많이 투자하고 <br />의약품 업종에서 주로 벌었어요.
      </div>
    </div>

    <hr aria-hidden="true" class="hr_line">

    <kb-title-bar
      h3
      class="mg_t32 align_start"
      title="어떤 규모에 주로 투자했을까?"
    >
    </kb-title-bar>

    <div class="chart_bar_box">
      <p class="tit">규모별 투자 비중</p>
      <div class="chart">
        <ul>
          <li>
            <div class="bar"><span class="number">41.7%</span><i style="height:41.7%"></i></div>
            <p class="text">대형주</p>
          </li>
          <li>
            <div class="bar"><span class="number">40.0%</span><i style="height:40.0%"></i></div>
            <p class="text">중형주</p>
          </li>
          <li>
            <div class="bar"><span class="number">18.3%</span><i style="height:18.3%"></i></div>
            <p class="text">소형주</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="chart_bar_box type2">
      <p class="tit">규모별 손익 비중</p>
      <div class="chart">
        <ul>
          <!--
            상승 : -
            하락 : minus
          -->
          <li>
            <div class="bar"><span class="number">41.7%</span><i style="height:41.7%"></i></div>
            <p class="text">대형주</p>
          </li>
          <li class="minus">
            <div class="bar"><span class="number">-40.0%</span><i style="height:40.0%"></i></div>
            <p class="text">중형주</p>
          </li>
          <li class="minus">
            <div class="bar"><span class="number">-18.3%</span><i style="height:18.3%"></i></div>
            <p class="text">소형주</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="appraisal_info">
      <!--
        벌었을때 : good
        그대로 일때: -
        잃었을때 : bad
      -->
      <div class="ico_face_state"></div>
      <div class="text">
        <strong class="line">대형주</strong>에 많이 투자하고,<br />
        <strong class="line">대형주</strong>에서 주로 벌었어요.
      </div>

      <div class="gray_box">
        지난달엔 소형주에 많이 투자하고 <br />중형주, 대형주에서 주로 벌었어요.
      </div>
    </div>

    <hr aria-hidden="true" class="hr_line">

    <kb-title-bar
      h3
      class="mg_t32 align_start"
      title="어떤 가격 등락폭을 선호했을까?"
    >
    </kb-title-bar>

    <div class="chart_bar_box">
      <p class="tit">가격 등락 별 투자 비중</p>
      <div class="chart">
        <ul>
          <li>
            <div class="bar"><span class="number">41.7%</span><i style="height:41.7%"></i></div>
            <p class="text">등락 큼</p>
          </li>
          <li>
            <div class="bar"><span class="number">40.0%</span><i style="height:40.0%"></i></div>
            <p class="text">등락 보통</p>
          </li>
          <li>
            <div class="bar"><span class="number">18.3%</span><i style="height:18.3%"></i></div>
            <p class="text">등락 작음</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="chart_bar_box type2">
      <p class="tit">가격 등락 별 손익 비중</p>
      <div class="chart">
        <ul>
          <!--
            상승 : -
            하락 : minus
          -->
          <li>
            <div class="bar"><span class="number">41.7%</span><i style="height:41.7%"></i></div>
            <p class="text">등락큼</p>
          </li>
          <li class="minus">
            <div class="bar"><span class="number">-40.0%</span><i style="height:40.0%"></i></div>
            <p class="text">등락 보통</p>
          </li>
          <li class="minus">
            <div class="bar"><span class="number">-18.3%</span><i style="height:18.3%"></i></div>
            <p class="text">등락 작음</p>
          </li>
        </ul>
      </div>
    </div>

    <kb-foldings
      type1
      class="ty4 mg_t32"
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
            </kb-swiper>
          </div>
        </div>
      </kb-folding>
    </kb-foldings>

    <hr aria-hidden="true" class="hr_line">

    <kb-title-bar
      h3
      class="mg_t32 align_start"
      title="어떤 추세매매를 선호했을까?"
    >
    </kb-title-bar>

    <div class="chart_bar_box">
      <p class="tit">추세매매별 투자 비중</p>
      <div class="chart">
        <ul>
          <li>
            <div class="bar"><span class="number">41.7%</span><i style="height:41.7%"></i></div>
            <p class="text">추세</p>
          </li>
          <li>
            <div class="bar"><span class="number">40.0%</span><i style="height:40.0%"></i></div>
            <p class="text">비추세</p>
          </li>
          <li>
            <div class="bar"><span class="number">18.3%</span><i style="height:18.3%"></i></div>
            <p class="text">역추세</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="chart_bar_box type2">
      <p class="tit">추세매매별 손익 비중</p>
      <div class="chart">
        <ul>
          <!--
            상승 : -
            하락 : minus
          -->
          <li>
            <div class="bar"><span class="number">41.7%</span><i style="height:41.7%"></i></div>
            <p class="text">추세</p>
          </li>
          <li class="minus">
            <div class="bar"><span class="number">-40.0%</span><i style="height:40.0%"></i></div>
            <p class="text">비추세</p>
          </li>
          <li class="minus">
            <div class="bar"><span class="number">-18.3%</span><i style="height:18.3%"></i></div>
            <p class="text">역추세</p>
          </li>
        </ul>
      </div>
    </div>

    <kb-foldings
      type1
      class="ty4 mg_t32"
    >
      <kb-folding title="획득 카드 보기">
        <div class="pattern_card pd_t60 pd_b7">
          <div class="card_wrap">
            <kb-swiper>
              <swiper-slide>
                <div class="card_list">
                  <div class="in">
                    <p class="tit">이익 관리</p>
                    <p class="img ico20"></p>
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

    <hr aria-hidden="true" class="hr_line">

    <kb-title-bar
      h3
      class="mg_t32 align_start"
      title="어떤 보유기간을 선호했을까?"
    >
    </kb-title-bar>

    <div class="chart_bar_box">
      <p class="tit">보유기간별 투자 비중</p>
      <div class="chart">
        <ul>
          <li>
            <div class="bar"><span class="number">41.7%</span><i style="height:41.7%"></i></div>
            <p class="text">초단기</p>
          </li>
          <li>
            <div class="bar"><span class="number">40.0%</span><i style="height:40.0%"></i></div>
            <p class="text">단기</p>
          </li>
          <li>
            <div class="bar"><span class="number">18.3%</span><i style="height:18.3%"></i></div>
            <p class="text">중기</p>
          </li>
          <li>
            <div class="bar"><span class="number">40.0%</span><i style="height:40.0%"></i></div>
            <p class="text">중장기</p>
          </li>
          <li>
            <div class="bar"><span class="number">18.3%</span><i style="height:18.3%"></i></div>
            <p class="text">장기</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="chart_bar_box type2">
      <p class="tit">보유기간별 손익 비중</p>
      <div class="chart">
        <ul>
          <!--
            상승 : -
            하락 : minus
          -->
          <li>
            <div class="bar"><span class="number">41.7%</span><i style="height:41.7%"></i></div>
            <p class="text">초단기</p>
          </li>
          <li class="minus">
            <div class="bar"><span class="number">-40.0%</span><i style="height:40.0%"></i></div>
            <p class="text">단기</p>
          </li>
          <li class="minus">
            <div class="bar"><span class="number">-18.3%</span><i style="height:18.3%"></i></div>
            <p class="text">중기</p>
          </li>
          <li>
            <div class="bar"><span class="number">41.7%</span><i style="height:41.7%"></i></div>
            <p class="text">중장기</p>
          </li>
          <li class="minus">
            <div class="bar"><span class="number">-40.0%</span><i style="height:40.0%"></i></div>
            <p class="text">장기</p>
          </li>
        </ul>
      </div>
    </div>

    <kb-foldings
      type1
      class="ty4 mg_t32"
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

  </div>
</template>
<script>
export default {
  name: 'IN05A005',
  data() {
    return {
    };
  },
  methods: {
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
  },
};
</script>

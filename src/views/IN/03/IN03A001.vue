<template>
  <kb-page page-title="포트폴리오 진단">
    <kb-page-body>
      <div class="section portfolio_wrap">
        <!-- 상단 -->
        <div class="user_info">
          <div class="fc_666 fz_12">{{userInvestDate}} 기준</div>
          <!-- 데이터 있음 -->
          <div v-if="true">
            <kb-title-bar h2 class="mg_t8">
              <template slot="left">
                <h1 class="tit">
                  {{userName}}님 진단대상 자산은
                  <kb-button
                    not
                    class="tooltip_btn"
                    v-tooltip="'views/IN/03/IN03A001_tip1.vue'"
                    aria-label="팝업으로 상세내용 확인"
                  >팝업으로 상세내용 확인</kb-button><br>
                  <strong v-scroll-number="{to:userMoney, comma:true}">{{userMoney}}</strong>원입니다.
                </h1>
              </template>
            </kb-title-bar>
            <div class="invest_info">투자금액 {{userInvestMoney}}원</div>
          </div>
          <!-- //데이터 있음 -->

          <!-- 데이터 없음 -->
          <div v-else>
            <kb-title-bar h2 class="mg_t8">
              <template slot="left">
                <h1 class="tit">
                  {{userName}}님 진단대상 자산을
                  <kb-button
                    not
                    class="tooltip_btn"
                    v-tooltip="'views/IN/03/IN03A001_tip1.vue'"
                    aria-label="팝업으로 상세내용 확인"
                  >팝업으로 상세내용 확인</kb-button><br>
                  투자해서 잠금해제 하세요.
                </h1>
              </template>
            </kb-title-bar>
          </div>
          <!-- //데이터 없음 -->

          <div class="invest_dl">
            <dl>
              <dt>수익률</dt>
              <dd>
                <strong
                  :class="{fc_up:userInvestPercenter > 0 , fc_down:userInvestPercenter < 0, op_30:userInvestPercenter == 0}"
                >
                  {{userInvestPercenter}}%</strong>
              </dd>
            </dl>
            <dl>
              <dt>누적 수익금</dt>
              <dd>
                <strong
                  :class="{op_30:userInvestTotal == 0}"
                >
                  <span v-scroll-number="{to:userInvestTotal, comma:true}">{{userInvestTotal}}</span> 원
                </strong>
              </dd>
            </dl>
            <kb-button class="refresh ico" aria-label="새로고침">새로고침</kb-button>
          </div>
        </div>
        <!-- //상단 -->
        <hr aria-hidden="true" class="hr_line">
        <!-- 포트폴리오 구성 -->
        <div class="portfolio_chart">
          <kb-title-bar h3 title="포트폴리오 구성">
            <!-- 2021-04-06 위치변경 -->
            <div class="fc_666 fz_12 mg_t4">{{userInvestDate}} 기준</div>
            <!-- //2021-04-06 위치변경 -->
          </kb-title-bar>
          <!-- 데이터 있음 -->
          <div v-if="true">
            <div class="chart">
              <img src="@/assets/images/temp/chart_donut1.png" alt="">
            </div>

            <div class="flex_wrap">
              <p class="fz_12 fc_blue_gray mg_ra pd_r10">* 보유비율은 소수점 이하 2자리까지 절사되어 표기되었습니다.</p>
              <kb-button v-if="openAll" not class="fz_12 fc_666 flex00" @click="OpenAllEvt">전체접기</kb-button>
              <kb-button v-else not class="fz_12 fc_666 flex00" @click="OpenAllEvt">전체펼치기</kb-button>
            </div>
            <kb-foldings type1 not-toggle class="chart_list">
              <kb-folding :active.sync="openAll">
                <template slot="title">
                  <div class="chart_head">
                    <div>
                      <i class="ico" style="background-color:#3e61ba"></i>
                    </div>
                    <div>
                      <strong class="type">국내주식</strong>
                      <strong class="cut">10</strong>
                    </div>
                    <div class="pre">67%</div>
                  </div>
                </template>

                <div class="accordion_box">
                  <ul class="bank_list">
                    <li>
                      <div class="info">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">삼성전자</p>
                        <p class="money">15%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">한미반도체</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">SK하이닉스</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>

              <kb-folding :active.sync="openAll">
                <template slot="title">
                  <div class="chart_head">
                    <div>
                      <i class="ico" style="background-color:#91a5e9"></i>
                    </div>
                    <div>
                      <strong class="type">국내펀드</strong>
                      <strong class="cut">10</strong>
                    </div>
                    <div class="pre">67%</div>
                  </div>
                </template>

                <div class="accordion_box">
                  <ul class="bank_list">
                    <li>
                      <div class="info">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">삼성전자</p>
                        <p class="money">15%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">한미반도체</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">SK하이닉스</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>

              <kb-folding :active.sync="openAll">
                <template slot="title">
                  <div class="chart_head">
                    <div>
                      <i class="ico" style="background-color:#81bdf2"></i>
                    </div>
                    <div>
                      <strong class="type">국내채권</strong>
                      <strong class="cut">10</strong>
                    </div>
                    <div class="pre">67%</div>
                  </div>
                </template>

                <div class="accordion_box">
                  <ul class="bank_list">
                    <li>
                      <div class="info">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">삼성전자</p>
                        <p class="money">15%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">한미반도체</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">SK하이닉스</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>

              <kb-folding :active.sync="openAll">
                <template slot="title">
                  <div class="chart_head">
                    <div>
                      <i class="ico" style="background-color:#3bae6c"></i>
                    </div>
                    <div>
                      <strong class="type">해외주식</strong>
                      <strong class="cut">10</strong>
                    </div>
                    <div class="pre">67%</div>
                  </div>
                </template>

                <div class="accordion_box">
                  <ul class="bank_list">
                    <li>
                      <div class="info">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">삼성전자</p>
                        <p class="money">15%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">한미반도체</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">SK하이닉스</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>

              <kb-folding :active.sync="openAll">
                <template slot="title">
                  <div class="chart_head">
                    <div>
                      <i class="ico" style="background-color:#b7ebcd"></i>
                    </div>
                    <div>
                      <strong class="type">해외펀드</strong>
                      <strong class="cut">10</strong>
                    </div>
                    <div class="pre">67%</div>
                  </div>
                </template>

                <div class="accordion_box">
                  <ul class="bank_list">
                    <li>
                      <div class="info">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">삼성전자</p>
                        <p class="money">15%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">한미반도체</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">SK하이닉스</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>

              <kb-folding :active.sync="openAll">
                <template slot="title">
                  <div class="chart_head">
                    <div>
                      <i class="ico" style="background-color:#74cacc"></i>
                    </div>
                    <div>
                      <strong class="type">해외채권</strong>
                      <strong class="cut">10</strong>
                    </div>
                    <div class="pre">67%</div>
                  </div>
                </template>

                <div class="accordion_box">
                  <ul class="bank_list">
                    <li>
                      <div class="info">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">삼성전자</p>
                        <p class="money">15%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">한미반도체</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">SK하이닉스</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>

              <kb-folding :active.sync="openAll">
                <template slot="title">
                  <div class="chart_head">
                    <div>
                      <i class="ico" style="background-color:#7040b1"></i>
                    </div>
                    <div>
                      <strong class="type">선물/옵션</strong>
                      <strong class="cut">10</strong>
                    </div>
                    <div class="pre">67%</div>
                  </div>
                </template>

                <div class="accordion_box">
                  <ul class="bank_list">
                    <li>
                      <div class="info">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">삼성전자</p>
                        <p class="money">15%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">한미반도체</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">SK하이닉스</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>

              <kb-folding :active.sync="openAll">
                <template slot="title">
                  <div class="chart_head">
                    <div>
                      <i class="ico" style="background-color:#c79fe7"></i>
                    </div>
                    <div>
                      <strong class="type">ELS/DLS</strong>
                      <strong class="cut">10</strong>
                    </div>
                    <div class="pre">67%</div>
                  </div>
                </template>

                <div class="accordion_box">
                  <ul class="bank_list">
                    <li>
                      <div class="info">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">삼성전자</p>
                        <p class="money">15%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">한미반도체</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">SK하이닉스</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>

              <kb-folding :active.sync="openAll">
                <template slot="title">
                  <div class="chart_head">
                    <div>
                      <i class="ico" style="background-color:#c76ee6"></i>
                    </div>
                    <div>
                      <strong class="type">기타</strong>
                      <strong class="cut">10</strong>
                    </div>
                    <div class="pre">67%</div>
                  </div>
                </template>

                <div class="accordion_box">
                  <ul class="bank_list">
                    <li>
                      <div class="info">
                        <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">삼성전자</p>
                        <p class="money">15%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">한미반도체</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                    <li>
                      <div class="info">
                        <i class="ico" style="background:skyblue"></i>
                        <p class="list_tit">SK하이닉스</p>
                        <p class="money">9%</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </kb-folding>
            </kb-foldings>
          </div>
          <!-- 데이터 있음 -->

          <!-- 데이터 없음 -->
          <div v-else>
            <div class="no_chart">아직 꽃 피우지<br>
              못한 미래의 큰 손<br>
              투자 대기중</div>
            <div class="no_data_result">
              <div class="tit">
                <strong>빠르게 투자의 세계에 <br>
                  입문해볼까?</strong>
              </div>
            </div>
            <kb-button-wrap class="mg_t24 mg_b24">
              <kb-button line blue>가상투자 해보기</kb-button>
            </kb-button-wrap>
          </div>
          <!-- //데이터 없음 -->
        </div>
        <!-- //포트폴리오 구성 -->
        <hr aria-hidden="true" class="hr_line">

        <!-- 포트폴리오 전망 -->
        <div class="portfolio_box">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                포트폴리오 전망
                <kb-button
                  not
                  class="tooltip_btn"
                  v-tooltip="'views/IN/03/IN03A001_tip2.vue'"
                  aria-label="팝업으로 상세내용 확인"
                >팝업으로 상세내용 확인</kb-button>
              </h2>
            </template>
            <!-- 2021-04-06 위치변경 -->
            <p class="date mg_t4">20/10/19 기준</p>
            <!-- //2021-04-06 위치변경 -->
          </kb-title-bar>

          <ul class="prospect_list">
            <li>
              <!-- 2021-03-17 이미지를 클래스로 변경 (아직 미확정)
                none: 데이터없음
                type1 : 매우높음
                type2 : 높음
                type3 : 보통
                type4 : 낮음
                type5 : 매우낮음
               -->
              <i class="img_1 type5"></i>
              <p class="info_text">기대 수익률</p>
              <p class="tit">매우낮음</p>
            </li>
            <li>
              <!-- 2021-03-17 이미지를 클래스로 변경 (아직 미확정)
                none: 데이터없음
                type1 : 매우낮음
                type2 : 낮음
                type3 : 보통
                type4 : 높음
                type5 : 매우높음
               -->
              <i class="img_2 type4"></i>
              <p class="info_text">변동성</p>
              <p class="tit">높음</p>
            </li>
            <li>
              <!-- 2021-03-17 이미지를 클래스로 변경 (아직 미확정)
                none: 데이터없음
                type1 : 분산
                type2 : 보통
                type3 : 편중
               -->
              <i class="img_3 type3"></i>
              <p class="info_text">분산정도</p>
              <p class="tit">편중</p>
            </li>
          </ul>

          <!-- 데이터가 있을때 -->
          <div v-if="true">
            <div class="prospect_talk">
              <h3>조언한마디</h3>
              <p class="text">김스타님은 현금성 비율이 높아 기대수익률이 낮습니다.  기대수익률을 높이기 위한 투자를 늘리세요</p>
            </div>
            <kb-foldings type1 not-toggle>
              <kb-folding
                title="월별 추이 보기"
              >
                <div class="section">
                  <kb-btn-toggle small inline>
                    <kb-btn-toggle-row>
                      <kb-radio
                        v-model="toggleVal1"
                        button
                        value="1"
                      >
                        이번달 vs 지난달
                      </kb-radio>
                      <kb-radio
                        v-model="toggleVal1"
                        button
                        value="2"
                      >
                        3개월
                      </kb-radio>
                      <kb-radio
                        v-model="toggleVal1"
                        button
                        value="3"
                      >
                        6개월
                      </kb-radio>
                      <kb-radio
                        v-model="toggleVal1"
                        button
                        value="4"
                      >
                        1년
                      </kb-radio>
                    </kb-btn-toggle-row>
                  </kb-btn-toggle>

                  <div class="chart_stick_wrap">
                    <p class="category">
                      <span class="type1">기대수익률</span>
                      <span class="type2">변동성</span>
                    </p>
                    <div class="chart_stick_box">
                      <div class="left">
                        <span>매우<br />높음</span>
                        <span>높음</span>
                        <span>보통</span>
                        <span>낮음</span>
                        <span>매우<br />낮음</span>
                      </div>
                      <div class="stick_box">
                        <span class="bg">
                          <i class="type1"></i>
                          <i class="type2"></i>
                          <i class="type3"></i>
                        </span>

                        <div class="scroll">
                          <!-- 적용 월 -->
                          <div class="data_stick">
                            <p class="date">1월</p>
                            <div class="stick">
                              <span class="bar1" style="height:50%;">기대수익율 수치</span>
                              <span class="bar2" style="height:60%;">변동성 수치</span>
                            </div>
                            <!--
                              현재 적용이미지는 임시 추후 변경
                              분산 : type1
                              보통 : type2
                              편중 : type3
                            -->
                            <p class="status type1">분산</p>
                          </div>
                          <!-- //적용 월 -->
                          <!-- 적용 월 -->
                          <div class="data_stick">
                            <p class="date">2월</p>
                            <div class="stick">
                              <span class="bar1" style="height:50%;">기대수익율 수치</span>
                              <span class="bar2" style="height:60%;">변동성 수치</span>
                            </div>
                            <!--
                              현재 적용이미지는 임시 추후 변경
                              분산 : type1
                              보통 : type2
                              편중 : type3
                            -->
                            <p class="status type2">보통</p>
                          </div>
                          <!-- //적용 월 -->
                          <!-- 적용 월 -->
                          <div class="data_stick">
                            <p class="date">3월</p>
                            <div class="stick">
                              <span class="bar1" style="height:50%;">기대수익율 수치</span>
                              <span class="bar2" style="height:60%;">변동성 수치</span>
                            </div>
                            <!--
                              현재 적용이미지는 임시 추후 변경
                              분산 : type1
                              보통 : type2
                              편중 : type3
                            -->
                            <p class="status type3">편중</p>
                          </div>
                          <!-- //적용 월 -->
                        </div>
                      </div>
                      <div class="right">
                        <span>분산</span>
                        <span>보통</span>
                        <span>편중</span>
                      </div>
                    </div>
                  </div>
                </div>
              </kb-folding>
            </kb-foldings>
          </div>
          <!-- //데이터가 있을때 -->

          <!-- 데이터가 없을때 -->
          <div v-else class="no_data_result pd_t32 pd_b40">
            <div class="tit">
              <strong>데이터는 없지만 <br>
                전망은 맑을거예요.</strong>
            </div>
          </div>
          <!-- //데이터가 없을때 -->
        </div>
        <!-- //포트폴리오 전망 -->
        <hr aria-hidden="true" class="hr_line">
        <!-- 모델 포트폴리오 -->
        <div class="portfolio_box">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                모델 포트폴리오
                <kb-button
                  not
                  class="tooltip_btn"
                  v-tooltip="'views/IN/03/IN03A001_tip3.vue'"
                  aria-label="팝업으로 상세내용 확인"
                >팝업으로 상세내용 확인</kb-button>
              </h2>
            </template>
            <!-- 2021-04-06 위치변경 -->
            <p class="date mg_t4">20/10/19 기준</p>
            <!-- //2021-04-06 위치변경 -->
          </kb-title-bar>

          <!-- 데이터가 있을때 -->
          <div v-if="true">
            <!--
              현재 적용이미지는 임시 추후 변경
              포스아거(공격투자형) : type1
              루나키키(적극투자형) : type2
              멜랑콜리(위험중립형) : type3
              심쿵비비(안정추구형) : type4
              롤로라무(안정형) : type5
            -->
            <div class="model_box">
              <h3>
                <span>네가 오르면 나도 행복해.</span>
                안정추구형
              </h3>

              <div class="img type4"></div><!-- 타입별 클래스 적용위치 -->
              <div class="chart_box">
                <img class="wp_100" src="~@/assets/images/IN/03/sample_model_2.png" alt="" />
              </div>
              <div class="chart_info">
                <dl>
                  <dt>기대 수익율</dt>
                  <dd>높음</dd>
                </dl>
                <dl>
                  <dt>변동성</dt>
                  <dd>낮음</dd>
                </dl>
              </div>
            </div>

            <div class="prospect_talk">
              <h3>조언한마디</h3>
              <p class="text">
                김스타님은 안전투자형입니다.<br />
                김스타임과 동일한 모델 포트폴리오를 비교해 본 결과
                <!-- <strong class="fc_up">현재 3.8%의 이익</strong> -->
                <strong class="fc_down">현재 3.8%의 손실</strong>이 발생하고 있습니다.<br />
                안정적인 자산 구성을 위해서 공격적인 투자가 필요합니다.
              </p>
            </div>

            <kb-foldings type1 not-toggle>
              <kb-folding
                title="다른 투자성향 보기"
              >
                <div class="section">
                  <!--
                    현재 적용이미지는 임시 추후 변경
                    포스아거(공격투자형) : type1
                    루나키키(적극투자형) : type2
                    멜랑콜리(위험중립형) : type3
                    심쿵비비(안정추구형) : type4
                    롤로라무(안정형) : type5
                  -->
                  <kb-swiper>
                    <swiper-slide class="type1">
                      <div class="model_box bg">
                        <h3>
                          <span>원래 투자는 돈을 벌려고 하는거야</span>
                          공격투자형
                        </h3>
                        <div class="img type1"></div>
                        <div class="chart_box">
                          <img class="wp_100" src="~@/assets/images/IN/03/sample_model_2.png" alt="" />
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide class="type2">
                      <div class="model_box bg">
                        <h3>
                          <span>지금 살까? 말까? 그래 사자!</span>
                          적극투자형
                        </h3>
                        <div class="img type2"></div>
                        <div class="chart_box">
                          <img class="wp_100" src="~@/assets/images/IN/03/sample_model_2.png" alt="" />
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide class="type3">
                      <div class="model_box bg">
                        <h3>
                          <span>위험 더하기 안전은 투자의 정석!</span>
                          위험중립형
                        </h3>
                        <div class="img type3"></div>
                        <div class="chart_box">
                          <img class="wp_100" src="~@/assets/images/IN/03/sample_model_2.png" alt="" />
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide class="type4">
                      <div class="model_box bg">
                        <h3>
                          <span>네가 오르면 나도 행복해.</span>
                          안정추구형
                        </h3>
                        <div class="img type4"></div>
                        <div class="chart_box">
                          <img class="wp_100" src="~@/assets/images/IN/03/sample_model_2.png" alt="" />
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide class="type5">
                      <div class="model_box bg">
                        <h3>
                          <span>그래서 안전해? 안전해?</span>
                          안정형
                        </h3>
                        <div class="img type5"></div>
                        <div class="chart_box">
                          <img class="wp_100" src="~@/assets/images/IN/03/sample_model_2.png" alt="" />
                        </div>
                      </div>
                    </swiper-slide>
                  </kb-swiper>
                </div>
              </kb-folding>
            </kb-foldings>
          </div>
          <!-- //데이터가 있을때 -->

          <!-- 데이터가 없을때 -->
          <div v-else>
            <!--
              현재 적용이미지는 임시 추후 변경
              포스아거(공격투자형) : type1
              루나키키(적극투자형) : type2
              멜랑콜리(위험중립형) : type3
              심쿵비비(안정추구형) : type4
              롤로라무(안정형) : type5
            -->
            <kb-swiper class="mg_t48">
              <swiper-slide class="type1">
                <div class="model_box bg">
                  <h3>
                    <span>원래 투자는 돈을 벌려고 하는거야</span>
                    공격투자형
                  </h3>
                  <div class="img type1"></div>
                  <div class="chart_box">
                    <img class="wp_100" src="~@/assets/images/IN/03/sample_model_2.png" alt="" />
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="type2">
                <div class="model_box bg">
                  <h3>
                    <span>지금 살까? 말까? 그래 사자!</span>
                    적극투자형
                  </h3>
                  <div class="img type2"></div>
                  <div class="chart_box">
                    <img class="wp_100" src="~@/assets/images/IN/03/sample_model_2.png" alt="" />
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="type3">
                <div class="model_box bg">
                  <h3>
                    <span>위험 더하기 안전은 투자의 정석!</span>
                    위험중립형
                  </h3>
                  <div class="img type3"></div>
                  <div class="chart_box">
                    <img class="wp_100" src="~@/assets/images/IN/03/sample_model_2.png" alt="" />
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="type4">
                <div class="model_box bg">
                  <h3>
                    <span>네가 오르면 나도 행복해.</span>
                    안정추구형
                  </h3>
                  <div class="img type4"></div>
                  <div class="chart_box">
                    <img class="wp_100" src="~@/assets/images/IN/03/sample_model_2.png" alt="" />
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="type5">
                <div class="model_box bg">
                  <h3>
                    <span>그래서 안전해? 안전해?</span>
                    안정형
                  </h3>
                  <div class="img type5"></div>
                  <div class="chart_box">
                    <img class="wp_100" src="~@/assets/images/IN/03/sample_model_2.png" alt="" />
                  </div>
                </div>
              </swiper-slide>
            </kb-swiper>
            <div class="no_data_result mg_t24">
              <div class="tit">
                <strong>어차피 내 데이터도 못보는데 <br>
                  구경이나 해볼까?</strong>
              </div>
            </div>
            <kb-button-wrap class="mg_t24 mg_b24">
              <kb-button line blue>모델포트폴리오 구경가기</kb-button>
            </kb-button-wrap>
          </div>
          <!-- //데이터가 없을때 -->
        </div>
        <!-- //모델 포트폴리오 -->

        <hr aria-hidden="true" class="hr_line">
        <!-- 진단 결과 -->
        <div class="diagnosis_result">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                진단 결과
                <kb-button
                  not
                  class="tooltip_btn"
                  v-tooltip="'views/IN/03/IN03A001_tip4.vue'"
                  aria-label="팝업으로 상세내용 확인"
                >팝업으로 상세내용 확인</kb-button>
              </h2>
            </template>
            <!-- 2021-04-06 위치변경 -->
            <span class="date mg_t4">20/10/19 기준</span>
            <!-- //2021-04-06 위치변경 -->
          </kb-title-bar>

          <!-- 데이터 있을때 -->
          <div v-if="true">
            <div class="diagnosis_result_info">
              <div class="result_info" v-scroll-in="'on'">
                <p class="score"><strong v-scroll-number="{to:userInvestPoint}">{{userInvestPoint}}</strong>점</p>
                <!--
                  현재 적용이미지는 임시 추후 변경
                  100점 : type1
                  80~100점 : type2
                  60~90점 : type3
                  50~60점 : type4
                  50점 미만 : type5
                -->
                <i class="icon type3"></i>
                <p class="tit">김스타님 자산은<br>오늘도 맑음!</p>
                <div class="txt">좋은 자산 구성을 가지고 계시네요.<br>지금처럼 꾸준히 자산을 관리 하시면 남부럽지 않은 자산가가 되실거에요</div>
              </div>
            </div>
            <kb-foldings type1 not-toggle class="btm_noline">
              <kb-folding
                title="월별 추이 보기"
              >
                <div class="accordion_con">
                  <kb-btn-toggle small inline>
                    <kb-btn-toggle-row>
                      <kb-radio
                        v-model="toggleVal1"
                        button
                        value="1"
                      >
                        이번달 vs 지난달
                      </kb-radio>
                      <kb-radio
                        v-model="toggleVal1"
                        button
                        value="2"
                      >
                        3개월
                      </kb-radio>
                      <kb-radio
                        v-model="toggleVal1"
                        button
                        value="3"
                      >
                        6개월
                      </kb-radio>
                      <kb-radio
                        v-model="toggleVal1"
                        button
                        value="4"
                      >
                        1년
                      </kb-radio>
                    </kb-btn-toggle-row>
                  </kb-btn-toggle>
                  <div class="chart_area"><img src="@/assets/images/IN/chart_month.png" style="width:100%;" alt="월별 추이 보기 차트 이미지"></div>
                </div>
              </kb-folding>
            </kb-foldings>
          </div>
          <!-- //데이터 있을때 -->

          <!-- 데이터 없을때 -->
          <div v-else class="no_data_result pd_t32 pd_b40">
            <div class="icon type1"></div>
            <div class="tit">
              <strong>데이터는 없지만 <br>
                전망은 맑을거예요.</strong>
            </div>
          </div>
          <!-- //데이터 없을때 -->
        </div>
        <!-- //진단 결과 -->
        <hr aria-hidden="true" class="hr_line">
        <!-- 상품 추천 -->
        <ul class="product_list">
          <li>
            <div class="top">
              <kb-button not a-tag>
                <span class="stit">손해를 만회할 수 있는 극약처방!</span>
                <p class="tit">한국판 뉴딜 관련 수혜주를 중심으로 한 그린뉴딜 테마형</p>
              </kb-button>
              <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
              <kb-button
                like
                :class="{checked:isLike1}"
                role="checkbox"
                :aria-checked="isLike1?'true':'false'"
                @click="isLike1 = !isLike1"
              >즐겨찾기</kb-button>
            </div>
            <div class="return">
              <span>3개월 수익률</span>
              <strong class="fc_up">21.02%</strong>
            </div>
          </li>
          <li>
            <div class="top">
              <kb-button not a-tag>
                <span class="stit">손해를 만회할 수 있는 극약처방!</span>
                <p class="tit">한국판 뉴딜 관련 수혜주를 중심으로 한 그린뉴딜 테마형</p>
              </kb-button>
              <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
              <kb-button
                like
                :class="{checked:isLike2}"
                role="checkbox"
                :aria-checked="isLike2?'true':'false'"
                @click="isLike2 = !isLike2"
              >즐겨찾기</kb-button>
            </div>
            <div class="return">
              <span>3개월 수익률</span>
              <strong class="fc_up">21.02%</strong>
            </div>
          </li>
        </ul>
        <!-- //상품 추천 -->
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN03A001',
  data() {
    return {
      toggleVal1: '1',
      userName: '김스타',
      userMoney: '523,456,000',
      userInvestMoney: '12,000,000,000',
      userInvestPercenter: '13.2',
      userInvestTotal: '1,230,000,000',
      userInvestDate: '20/10/19',
      openAll: false,
      userInvestPoint: '70',
      isLike1: false,
      isLike2: false,
    };
  },
  methods: {
    OpenAllEvt() {
      if (this.openAll === null) {
        this.openAll = true;
      } else {
        this.openAll = !this.openAll;
      }
    },
  },
};
</script>

<template>
  <kb-page page-title="주식 종목 진단">
    <kb-page-body>
      <div class="section stock_diagnose_wrap mg_bm60">
        <div class="invest_info_box">
          <div class="top">
            <p class="kind">
              <span>005930</span>
              <span>KOSPI</span>
              <span>전기, 전자</span>
            </p>

            <!-- 상황에 따라 전일기준 텍스트는 비노출 -->
            <p class="right_text">전일기준</p>
          </div>
          <!--
            기본 : ''
            상승 : plus
            하락 : minus
          -->
          <div class="cont plus">
            <div class="text_box">
              <p class="tit">SK바이오팜</p>
              <p class="number">100,000원</p>
              <p class="status">▲ 23,900원(-21.02%)</p>
            </div>
            <div class="chart_samll_area">
              <img src="~@/assets/images/IN/sample_quiz_chart_img.png" alt="" />
            </div>
          </div>
          <dl class="market_price">
            <dt>시가총액</dt>
            <dd>300,000,000원</dd>
          </dl>

          <div class="market_price_bar">
            <p class="min"><span>1년(52주) 최저가</span>42,500</p>
            <p class="max"><span>1년(52주) 최고가</span>78,700</p>

            <div class="bar">
              <!-- 그래프는 %로 조절 -->
              <span style="left:50%">현재가 00원</span>
            </div>
          </div>

          <kb-foldings type1 not-toggle>
            <kb-folding>
              <template slot="title">
                <p class="fw_bold">상세보기</p>
              </template>
              <div class="section info_view_box">
                <dl>
                  <dt>자본금</dt>
                  <dd>300,000,000원</dd>
                </dl>
                <dl>
                  <dt>주요주주</dt>
                  <dd>이건희 외14인</dd>
                </dl>
                <dl>
                  <dt>배당수익률</dt>
                  <dd>2.54%</dd>
                </dl>
                <dl>
                  <dt>외인전일보유율</dt>
                  <dd>55.59%</dd>
                </dl>
                <dl>
                  <dt>설립일</dt>
                  <dd>1969/01/13</dd>
                </dl>
                <dl>
                  <dt>상장일</dt>
                  <dd>1975/06/11</dd>
                </dl>
                <p class="tit">우리 회사는요</p>
                <p class="text">바야흐로 대한민국의 전자 산업을 제패하고자 청운의 꿈을 품고 핸드폰을 만들었음. 아시아 최대 핸드폰 제조단지를 가지고 있으며 향후 글로벌을 벗어나 은하계까지 야심차게 진출할 계획중임</p>

                <p class="tit">우리 회사상품</p>
                <div class="product_list">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <hr aria-hidden="true" class="hr_line">

        <!-- 회사정보 -->
        <div class="company_info">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                이 회사 어때?
              </h2>
            </template>
            <span class="fz_12 fc_666 mg_t4">20/10/19 기준</span>
          </kb-title-bar>

          <ul class="company_info_list">
            <li>
              <p class="tit">가격적정성</p>
              <!-- 상황별 클래스
                높음 : type1
                낮음 : type2
                평균 : type5
              -->
              <p class="status type2">낮음</p>
            </li>
            <li>
              <p class="tit">기업성장</p>
              <!-- 상황별 클래스
                높음 : type3
                낮음 : type4
                평균 : 기본상태
              -->
              <p class="status type3">높음</p>
            </li>
            <li>
              <p class="tit">사업성</p>
              <!-- 상황별 클래스
                높음 : type1
                낮음 : type2
                평균 : 기본상태
              -->
              <p class="status">평균</p>
            </li>
            <li>
              <p class="tit">재무안정</p>
              <!-- 상황별 클래스
                높음 : type1
                낮음 : type2
                평균 : 기본상태
                없는경우 : none, 텍스트가 - 로 변경
              -->
              <p class="status none">-</p>
            </li>
            <li>
              <p class="tit">주가변화</p>
              <!-- 상황별 클래스
                상승, 하락 후 상승 : type3
                하락, 상승 후 하락 : type4
                평균 : 기본상태
              -->
              <p class="status type4">상승 후 하락</p>
            </li>
            <li>
              <p class="tit">시장관심</p>
              <p class="status type6">외인,기관 개인</p>
            </li>
          </ul>

          <h3>종목 키워드</h3>
          <div class="keyword">
            <!-- 키워드는 5개 까지 노출 이후 더보기 버튼 노출 -->
            <span v-for="(index, key) in keyword()" :key="key">{{index}}</span>
            <kb-button not v-if="this.keywords.length > 5" @click="keywordShow">
              <span v-if="!this.keywordShowCheck">더보기</span>
              <span v-if="this.keywordShowCheck">접기</span>
            </kb-button>
          </div>
        </div>
        <!-- //회사정보 -->

        <!-- 보유주식 -->
        <!-- 클래스 정의
          오름 : up
          내림 : down
        -->
        <div class="stockholding up">
          <p class="text">
            <em>김스타</em>님은 총 <em>23</em>주 보유중이며, <br />구매가격 <em>54,300</em>원보다
            <strong>52,000원 올랐어요.</strong>
          </p>
        </div>
        <!-- //보유주식 -->
        <hr aria-hidden="true" class="hr_line">

        <!-- 적절한 가격일까? -->
        <div class="stock_diagnose_box">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                적절한 가격일까?
              </h2>
            </template>
            <span class="fz_12 fc_666 mg_t4">20/10/19 기준</span>
          </kb-title-bar>
          <div class="stock_diagnose_cont">
            <p class="tit">
              <span>PER</span>
              현재 가격이 적정가 대비<br />
              <strong class="line">높습니다.</strong>
            </p>
            <ul class="img_box type1">
              <!-- 클래스 정의
                디폴트 : 기본
                큰이미지 : big
                없음 : none
              -->
              <li class="big">
                <i></i>
                <span class="top fc_blue">58.9배</span>
                <p class="text">종목명</p>
              </li>
              <li>
                <i></i>
                <span class="top">3.7배</span>
                <p class="text">동일업종명</p>
              </li>
            </ul>
          </div>

          <kb-foldings type1 not-toggle>
            <kb-folding>
              <template slot="title">
                <div class="tbl">
                  <div class="th fw_bold">추가정보</div>
                  <div class="td t_right fz_14 fc_666">PBR / ROE</div>
                </div>
              </template>
              <div class="section">
                <div class="stock_diagnose_cont">
                  <p class="tit">
                    <span>PBR</span>
                    매수하기에 가격이<br />
                    <strong class="line">낮습니다.</strong>
                  </p>
                  <ul class="img_box type1">
                    <!-- 클래스 정의
                      디폴트 : 기본
                      큰이미지 : big
                      없음 : none
                    -->
                    <li class="big">
                      <i></i>
                      <span class="top fc_blue">58.9배</span>
                      <p class="text">종목명</p>
                    </li>
                    <li>
                      <i></i>
                      <span class="top">3.7배</span>
                      <p class="text">동일업종명</p>
                    </li>
                  </ul>
                </div>
                <div class="stock_diagnose_cont">
                  <p class="tit">
                    <span>POE</span>
                    투자대비 수익률은<br />
                    <strong class="line">낮습니다.</strong>
                  </p>
                  <ul class="img_box type1">
                    <!-- 클래스 정의
                      디폴트 : 기본
                      큰이미지 : big
                      없음 : none
                    -->
                    <li>
                      <i></i>
                      <span class="top fc_blue">58.9배</span>
                      <p class="text">종목명</p>
                    </li>
                    <li class="big">
                      <i></i>
                      <span class="top">3.7배</span>
                      <p class="text">동일업종명</p>
                    </li>
                  </ul>
                </div>

                <div class="description_box">
                  <h3>투자의 발견</h3>
                  <div class="hashtag">
                    <span>#이 가격에 사는게 좋아?</span>
                    <span>#저평가 우량주</span>
                    <span>#보물 발견</span>
                    <span>#나만의 가격 경쟁력</span>
                  </div>
                  <p class="tit">회사의 과거를 분석하면 나만의 투자 공식을 설계해 볼 수 있어요.</p>
                  <p class="text">PER는 우리 말로 주가수익배수라고 불려요. 현재 주가가 적정가 대비 가격이 높은지, 낮은지 알려주는 수치 중 하나이지요. PER가 업종대비 수치가 높다면(고평가) 의사의 현재와 미래 전망은 좋으나 주가가 지금 사기엔 비싼 수준이라고 볼 수 있어요. PER가 업종대비 수치가 낮다면(저평가) 회사의 현재와 미래 전망은 나쁘지만 주가가 지금 사기엔 싼 수준이라 볼 수 있답니다.</p>
                  <p class="text">종목을 평가할 땐 1개의 수치만으로 일반화 할 순 없어요. 장기적으로 해당 수치의 추이를 같이 살펴보면서 종합적인 판든을 해야하지요.<br />
                    <strong>일반적으로 PER가 낮은 기업을 저평가 되었다고 보고 매수의 기회로 보기도 하지만 PER가 높아도 가격은 더 오를 수 있어요. 그렇기 때문에 업종 내 다른 종목 대비 호재가 있는지, 악재가 있는지 같이 이슈를 체크하는 게 좋아요.</strong>
                  </p>
                  <p class="text">더불어 같이 보면 좋은 수치 항목들이 있어요.</p>
                  <p class="text"><strong>일반적으로 PBR이 낮고 ROE가 높은 경우 저평가 우량주라 할 수 있어요.</strong><br />기업이 효율적인 영업활동을 하고 있음에도 기업의 가치가 낮다는 의미임으로 매수의 기회일 수 있거든요.<br />그렇다고 현 수치만 맹신하여 판단하는 건 위험해요.</p>
                  <p class="text">주요한 판단을 위해선<br />
                    <strong>1) 적어도 3~5년 간의 추이를 볼 것(수치의 고점과 저점 같이 확인)</strong><br />
                    <strong>2) 동일 업종, 종목이 소속된 시장 지수를 같이 고려할 것</strong><br />
                    <strong>3) 종목의 호재나 악재등 이슈를 확인할 것</strong><br />
                    <strong>4) 같이 보면 좋은 수치와 함께 종합적으로 판단할 것</strong><br />
                    4가지 원칙을 잊지 마세요!
                  </p>
                  <p class="text"></p>
                </div>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //적절한 가격일까? -->
        <hr aria-hidden="true" class="hr_line">

        <!-- 계속 성장했을까? -->
        <div class="stock_diagnose_box">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                계속 성장했을까?
              </h2>
            </template>
            <span class="fz_12 fc_666 mg_t4">20/10/19 기준</span>
          </kb-title-bar>
          <div class="stock_diagnose_cont">
            <p class="tit">
              <span>매출증가율</span>
              매출은 3년 평균 대비<br />
              <strong class="line">상승했습니다.</strong>
            </p>
            <ul class="img_box type2">
              <!-- 클래스 정의
                [크기]
                디폴트 : 기본
                큰이미지 : big
                없음 : none

                [화살표]
                오름 : up
                내림 : down
              -->
              <li class="up">
                <i></i>
                <span class="top">10%</span>
                <p class="text">3년 평균<span>2017~2019</span></p>
              </li>
              <li class="big">
                <i></i>
                <span class="top fc_blue">13%</span>
                <p class="text">2020년</p>
              </li>
            </ul>
          </div>

          <kb-foldings type1 not-toggle>
            <kb-folding>
              <template slot="title">
                <div class="tbl">
                  <div class="th fw_bold">추가정보</div>
                  <div class="td t_right fz_14 fc_666">총자산증가율/이익증가율</div>
                </div>
              </template>
              <div class="section">
                <div class="stock_diagnose_cont">
                  <p class="tit">
                    <span>총자산증가율</span>
                    총자산은 3년 평균 대비<br />
                    <strong class="line">상승했습니다.</strong>
                  </p>
                  <ul class="img_box type2">
                    <!-- 클래스 정의
                      [크기]
                      디폴트 : 기본
                      큰이미지 : big
                      없음 : none

                      [화살표]
                      오름 : up
                      내림 : down
                    -->
                    <li class="up">
                      <i></i>
                      <span class="top">10%</span>
                      <p class="text">3년 평균<span>2017~2019</span></p>
                    </li>
                    <li class="big">
                      <i></i>
                      <span class="top fc_blue">13%</span>
                      <p class="text">2020년</p>
                    </li>
                  </ul>
                </div>
                <div class="stock_diagnose_cont">
                  <p class="tit">
                    <span>이익증가율</span>
                    이익은 3년 평균 대비<br />
                    <strong class="line">하락했습니다.</strong>
                  </p>
                  <ul class="img_box type2">
                    <!-- 클래스 정의
                      [크기]
                      디폴트 : 기본
                      큰이미지 : big
                      없음 : none

                      [화살표]
                      오름 : up
                      내림 : down
                      평균 : same
                    -->
                    <li class="big down">
                      <i></i>
                      <span class="top">10%</span>
                      <p class="text">3년 평균<span>2017~2019</span></p>
                    </li>
                    <li>
                      <i></i>
                      <span class="top fc_blue">16%</span>
                      <p class="text">2020년</p>
                    </li>
                  </ul>
                </div>

                <div class="description_box">
                  <h3>투자의 발견</h3>
                  <div class="hashtag">
                    <span>#아이엠 그루트</span>
                    <span>#싸장님은 본투비 사업가</span>
                    <span>#기업의 성장가치</span>
                    <span>#미래 날씨는 맑음? 흐림?</span>
                  </div>
                  <p class="tit">매출과 이익 증가율의 증가, 감소를 함께 보면 기업의 성장성을 판단해 볼 수 있어요.</p>
                  <p class="text">이 회사가 얼만큼 성장해왔는지, 또 성장할지 궁금하나요?<br />그럼 회사의 성장성을 체크할 수 있는 총자산증가율, 매출증가율, 이익증가율을 확인해보세요.</p>
                  <p class="text">총자산증가율은 기존 자산 대비 현재 얼마나 늘었는지 확인할 수 있는 지표에요. <br />매출증가율은 기존 매출액 대비 현재 매출이 얼마나 늘었는지, 이익증가율은 기존 이익 대비 현재 이익이 얼마나 늘었는지 나타냅니다.</p>
                  <p class="text"><strong>어떤 기업의 매출증가율이 늘고, 이익증가율도 늘고 있다면 그 기업은 현재 성장중인 상태라 볼 수 있어요.</strong><br />반대로 매출증가율도 떨어지고, 이익증가율도 떨어진다면? 회사 차원에서 심각하게 관리를 해야할 만큼 걱정되는 기업이겠죠?</p>
                  <p class="text">
                    그밖에 매출은 늘었는데 이익은 떨어졌다면 매출이 늘어난 만큼 비용 소모가 크다는 소리에요. 이익을 줄게 한 요인을 찾아서 개선을 할 필요가 있어 보이네요.(ex 관리비, 광고비 과다책정)<br />
                    매출은 줄었는데 이익은 올랐다면 회사 내부에서 궁여지책으로 허리띠를 졸라 맨 것일 수 있어요.<br />매출이 떨어진 만큼 비용 지출을 억제했으니 재료비를 절감하거나 구조조정을 하는 등의 조치 한 것이지요.
                  </p>
                  <p class="text">이렇듯 매출과 이익 증가의 관계를 보면 회사가 튼튼하게 성장하고 있는지, 아니면 난항을 겪고 있는지 알 수 있어요.</p>
                  <p class="text"><strong>장기적인 투자를 하고 싶다면 기업의 매출과 이익증가의 관계를 살펴보세요.</strong></p>
                </div>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //계속 성장했을까? -->
        <hr aria-hidden="true" class="hr_line">

        <!-- 이익은 얼마나 냈을까? -->
        <div class="stock_diagnose_box">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                이익은 얼마나 냈을까?
              </h2>
            </template>
            <span class="fz_12 fc_666 mg_t4">20/10/19 기준</span>
          </kb-title-bar>
          <div class="stock_diagnose_cont">
            <p class="tit">
              <span>영업이익률</span>
              영업 차익은 3년 평균 대비<br />
              <strong class="line">상승했습니다.</strong>
            </p>
            <ul class="img_box type3">
              <!-- 클래스 정의
                [크기]
                디폴트 : 기본
                큰이미지 : big
                없음 : none

                [화살표]
                오름 : up
                내림 : down
              -->
              <li class="up">
                <i></i>
                <span class="top">10%</span>
                <p class="text">3년 평균<span>2017~2019</span></p>
              </li>
              <li class="big">
                <i></i>
                <span class="top fc_blue">13%</span>
                <p class="text">2020년</p>
              </li>
            </ul>
          </div>

          <kb-foldings type1 not-toggle>
            <kb-folding>
              <template slot="title">
                <div class="tbl">
                  <div class="th fw_bold">추가정보</div>
                  <div class="td t_right fz_14 fc_666">순이익률/ROE</div>
                </div>
              </template>
              <div class="section">
                <div class="stock_diagnose_cont">
                  <p class="tit">
                    <span>순이익률</span>
                    영업 외 수익을 포함한 이익은<br />
                    <strong class="line">상승했습니다.</strong>
                  </p>
                  <ul class="img_box type3">
                    <!-- 클래스 정의
                      [크기]
                      디폴트 : 기본
                      큰이미지 : big
                      없음 : none

                      [화살표]
                      오름 : up
                      내림 : down
                    -->
                    <li class="up">
                      <i></i>
                      <span class="top">10%</span>
                      <p class="text">3년 평균<span>2017~2019</span></p>
                    </li>
                    <li class="big">
                      <i></i>
                      <span class="top fc_blue">13%</span>
                      <p class="text">2020년</p>
                    </li>
                  </ul>
                </div>
                <div class="stock_diagnose_cont">
                  <p class="tit">
                    <span>ROE</span>
                    투자대비 수익률은<br />
                    <strong class="line">낮습니다.</strong>
                  </p>
                  <ul class="img_box type1">
                    <!-- 클래스 정의
                      디폴트 : 기본
                      큰이미지 : big
                      없음 : none
                    -->
                    <li class="big">
                      <i></i>
                      <span class="top fc_blue">10%</span>
                      <p class="text">종목명</p>
                    </li>
                    <li>
                      <i></i>
                      <span class="top">16%</span>
                      <p class="text">동일업종명</p>
                    </li>
                  </ul>
                </div>

                <div class="description_box">
                  <h3>투자의 발견</h3>
                  <div class="hashtag">
                    <span>#효율적 비용관리</span>
                    <span>#짬짬이 이득 발견</span>
                    <span>#우리 기업은 자린고비</span>
                    <span>#콩 심은덴 콩나자</span>
                  </div>
                  <p class="tit">경쟁사와 영업이익을 비교하면 향후 기업의 사업성을 판단해 볼 수 있어요.</p>
                  <p class="text">
                    영업이익은 매출에서 매출 원가(재료비 등)와 부가 비용(인건비, 광고비, 임대료, 공과금 등)을 차막하고 남은 영업 차익을 말해요.<br />
                    <strong>영업이익률이 높다는 건 제품 또는 서비스를 만드는데 들어가는 원가가 적어 높은 이익을 보았다는 뜻으로 해석할 수 있어요.<br />
                      결과적으로 비용 관리를 잘해야 기업의 이익이 증가하고 있다는 이야기지요.</strong><br />
                    영업이익률이 낮다는 건 반대로 회사가 영업관리를 잘 못하고 있다고 볼 수 있겠죠?
                  </p>
                  <p class="text">순이익은 영업이익에 영업 외 수익(예금이자, 부동산, 투자 수익 등)을 더하고, 영업외 손실(대출이자, 투자 손실금 등)과 법인세를 빼고 남은 금액을 말해요.</p>
                  <p class="text"><strong>어떤 기업의 영업이익률과 순이익률의 차이가 벌어졌다면 그 이유를 찾아보세요. 기업이 자사 제품만으로 순수하게 이익을 낸 것이 아닐 수 있고, 이떤 이슈가 있었는지를 찾으면서 기업의 사업 가치를 판단할 수 있거든요.</strong></p>
                  <p class="text">
                    구체적인 차이를 분석하려면 동종 산업과의 비교 분석도 필요해요. <br />
                    단, 동종 산업이라도 동일한 제품(서비스)을 판매하는 업체를 분석하는 것이 더 정확할 수 있어요. <br />
                    사과를 판매하는 업체와 전자 기기를 판매하는 업체의 정보는 분명 다를 테니까요.
                  </p>
                </div>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //이익은 얼마나 냈을까? -->
        <hr aria-hidden="true" class="hr_line">

        <!-- 재무상태는 안정적일까? -->
        <div class="stock_diagnose_box">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                재무상태는 안정적일까?
              </h2>
            </template>
            <span class="fz_12 fc_666 mg_t4">20/10/19 기준</span>
          </kb-title-bar>
          <div class="stock_diagnose_cont">
            <p class="tit">
              <span>부채비율</span>
              빚은<br />
              <strong class="line">높습니다.</strong>
            </p>
            <ul class="img_box type4">
              <!-- 클래스 정의
                디폴트 : 기본
                큰이미지 : big
                없음 : none
              -->
              <li>
                <i></i>
                <span class="top fc_blue">10%</span>
                <p class="text">종목명</p>
              </li>
              <li class="big">
                <i></i>
                <span class="top">13%</span>
                <p class="text">동일업종명</p>
              </li>
            </ul>
          </div>

          <kb-foldings type1 not-toggle>
            <kb-folding>
              <template slot="title">
                <div class="tbl">
                  <div class="th fw_bold">추가정보</div>
                  <div class="td t_right fz_14 fc_666">유동비율/이자보상비율</div>
                </div>
              </template>
              <div class="section">
                <div class="stock_diagnose_cont">
                  <p class="tit">
                    <span>유동비율</span>
                    단기적 재무상태 안정도는<br />
                    <strong class="line">보통입니다.</strong>
                  </p>
                  <ul class="img_box type4">
                    <!-- 클래스 정의
                      디폴트 : 기본
                      큰이미지 : big
                      없음 : none
                    -->
                    <li>
                      <i></i>
                      <span class="top fc_blue">10%</span>
                      <p class="text">종목명</p>
                    </li>
                    <li class="big">
                      <i></i>
                      <span class="top">13%</span>
                      <p class="text">동일업종명</p>
                    </li>
                  </ul>
                </div>
                <div class="stock_diagnose_cont">
                  <p class="tit">
                    <span>이자보상비율</span>
                    부채 이자를 낼 능력은<br />
                    <strong class="line">낮습니다.</strong>
                  </p>
                  <ul class="img_box type4">
                    <!-- 클래스 정의
                      디폴트 : 기본
                      큰이미지 : big
                      없음 : none
                    -->
                    <li>
                      <i></i>
                      <span class="top fc_blue">10%</span>
                      <p class="text">종목명</p>
                    </li>
                    <li class="big">
                      <i></i>
                      <span class="top">13%</span>
                      <p class="text">동일업종명</p>
                    </li>
                  </ul>
                </div>

                <div class="description_box">
                  <h3>투자의 발견</h3>
                  <div class="hashtag">
                    <span>#물들어 올 때 노 젓기?</span>
                    <span>#그들의 빚잔치</span>
                    <span>#우리 기업은 성장 중</span>
                    <span>#투자해도 안전할까?</span>
                  </div>
                  <p class="tit">한 기업의 부채 비율을 보면 기업의 흥망성쇠를 예측해 볼 수 있어요.</p>
                  <p class="text">
                    부채비율은 단순히 기업의 밎 정도를 보는 것에 그치지 않아요. <br />
                    부채비율이 높다면 현재 기업의 덩치를 키우기 위해 공격적으로 투자를 진행 하는 것일 수도 있고, 회사가 더는 성장 가치가 없을 만치 어려운 기업일 수도 있어요.<br />
                    부채비율이 낮다면 기업의 운영 성적이 별로라서 어디에서도 대출을 안 해줄 것일수도 있고 의도를 가지고 대출을 받지 않은 것일 수도 있어요.
                  </p>
                  <p class="text">만약, 시장의 금리가 낮을 때 부채비율이 높다면 기업이 꽤 괜찮은 사업을 발견하여 하루 바삐 성장하려고 투자를 하는 것일 수 있어요.</p>
                  <p class="text">기업의 매출과 영업 이익도 늘었고, 부채 비율도 같이 늘었다면 기업의 규모를 키우기 위해 가속화 하는 중일 수도 있답니다.</p>
                  <p class="text"><strong>내가 발견한 기업이 부채비율이 높은데 그 이유가 성장 잠재력을 폭발시키는 거라면? 노다지를 발견한 것일 수 있겠죠?</strong></p>
                </div>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //재무상태는 안정적일까? -->
        <hr aria-hidden="true" class="hr_line">

        <!-- 가격은 어떻게 변했을까? -->
        <div class="stock_diagnose_box">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                가격은 어떻게 변했을까?
              </h2>
            </template>
            <span class="fz_12 fc_666 mg_t4">20/10/19 기준</span>
          </kb-title-bar>
          <div class="stock_diagnose_cont">
            <p class="tit">
              <span>가격상승률</span>
              <strong class="line">상승했습니다.</strong>
            </p>

            <p class="sub_tit">삼성전자</p>
            <ul class="img_box type5">
              <!-- 클래스 정의
                [크기]
                큰이미지 : big
                중간이미지 : 기본
                작은이미지 : small

                [화살표]
                상승 : up
                하락 : down
              -->
              <li class="small up">
                <i></i>
                <p class="text">60일전</p>
              </li>
              <li class="up">
                <i></i>
                <p class="text">20일전</p>
              </li>
              <li class="big">
                <i></i>
                <p class="text">현재</p>
              </li>
            </ul>
          </div>

          <kb-foldings type1 not-toggle>
            <kb-folding>
              <template slot="title">
                <div class="tbl">
                  <div class="th fw_bold">추가정보</div>
                  <div class="td t_right fz_14 fc_666">업종별/코스피</div>
                </div>
              </template>
              <div class="section">
                <div class="stock_diagnose_cont">
                  <p class="tit">
                    <span>가격상승률</span>
                    <strong class="line">하락했습니다.</strong>
                  </p>

                  <p class="sub_tit">전기전자</p>
                  <ul class="img_box type5">
                    <!-- 클래스 정의
                      [크기]
                      큰이미지 : big
                      중간이미지 : 기본
                      작은이미지 : small

                      [화살표]
                      상승 : up
                      하락 : down
                    -->
                    <li class="big down">
                      <i></i>
                      <p class="text">60일전</p>
                    </li>
                    <li class="down">
                      <i></i>
                      <p class="text">20일전</p>
                    </li>
                    <li class="small">
                      <i></i>
                      <p class="text">현재</p>
                    </li>
                  </ul>
                </div>
                <div class="stock_diagnose_cont">
                  <p class="tit">
                    <span>이자보상비율</span>
                    부채 이자를 낼 능력은<br />
                    <strong class="line">낮습니다.</strong>
                  </p>

                  <p class="sub_tit">코스피</p>
                  <ul class="img_box type5">
                    <!-- 클래스 정의
                      [크기]
                      큰이미지 : big
                      중간이미지 : 기본
                      작은이미지 : small

                      [화살표]
                      상승 : up
                      하락 : down
                    -->
                    <li class="big down">
                      <i></i>
                      <p class="text">60일전</p>
                    </li>
                    <li class="small up">
                      <i></i>
                      <p class="text">20일전</p>
                    </li>
                    <li>
                      <i></i>
                      <p class="text">현재</p>
                    </li>
                  </ul>
                </div>

                <div class="description_box">
                  <h3>투자의 발견</h3>
                  <div class="hashtag">
                    <span>#그래서 오를까? 지금 살까? 말까?</span>
                    <span>#최근 추세 확인</span>
                    <span>#미래 가격 예측</span>
                    <span>#동일업종 변화 흐름 VS 내 종목 흐름 예상</span>
                  </div>
                  <p class="tit">최근 가격이 어떻게 변화 했는지를 보면 미래를 예측해 볼 수 있어요.</p>
                  <p class="text">과거의 평균 가격 수치를 통해 앞으로의 추세는 '이렇게 변화하겠구나'하는 판단 자료가 생기는 거죠.<br />
                    <strong>내가 산 종목은 현재 팔아야 할지, 가지고 있어야 할지, 시장의 거대한 흐름을 통해 예상해보는 거예요.</strong>
                  </p>
                </div>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //가격은 어떻게 변했을까? -->
        <hr aria-hidden="true" class="hr_line">

        <!-- 시장의 관심은 어땠을까? -->
        <div class="stock_diagnose_box">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                시장의 관심은 어땠을까?
              </h2>
            </template>
            <span class="fz_12 fc_666 mg_t4">20/10/19 기준</span>
          </kb-title-bar>
          <div class="stock_diagnose_cont">
            <p class="tit">
              <span>외인/기관 수급 강도</span>
            </p>

            <div class="img_box2">
              <p class="sub_tit">7일동안 관심</p>
              <p class="unit">단위 : 억원</p>

              <div class="list">
                <div class="bg"></div>
                <ul>
                  <!-- 금액에 따른 수치변환
                    상승 : up
                    하락 : down
                  -->
                  <li class="down">
                    <span class="money">-23,340</span>
                    <p class="text">
                      외국인
                      <span>10.84% 보유</span>
                    </p>
                  </li>
                  <li class="up">
                    <span class="money">+123,340</span>
                    <p class="text">개인</p>
                  </li>
                  <li class="up">
                    <span class="money">+123,340</span>
                    <p class="text">기관</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <kb-foldings type1 not-toggle>
            <kb-folding>
              <template slot="title">
                <div class="tbl">
                  <div class="th fw_bold">추가정보</div>
                  <div class="td t_right fz_14 fc_666">30일동안/거래량 증가율</div>
                </div>
              </template>
              <div class="section">

                <div class="stock_diagnose_cont">
                  <p class="tit">
                    <span>외인/기관 수급 강도</span>
                  </p>

                  <div class="img_box2">
                    <p class="sub_tit">30일동안 관심</p>
                    <p class="unit">단위 : 억원</p>

                    <div class="list">
                      <div class="bg"></div>
                      <ul>
                        <!-- 금액에 따른 수치변환
                          상승 : up
                          하락 : down
                        -->
                        <li class="down">
                          <span class="money">-23,340</span>
                          <p class="text">
                            외국인
                            <span>10.84% 보유</span>
                          </p>
                        </li>
                        <li class="up">
                          <span class="money">+123,340</span>
                          <p class="text">개인</p>
                        </li>
                        <li class="up">
                          <span class="money">+123,340</span>
                          <p class="text">기관</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="stock_diagnose_cont">
                  <p class="tit">
                    <span>거래량 증가율</span>
                    <strong class="line">감소했습니다.</strong>
                  </p>
                  <ul class="img_box type2">
                    <!-- 클래스 정의
                      [크기]
                      디폴트 : 기본
                      큰이미지 : big
                      없음 : none

                      [화살표]
                      오름 : up
                      내림 : down
                    -->
                    <li class="up">
                      <i></i>
                      <span class="top">10%</span>
                      <p class="text">30일</p>
                    </li>
                    <li class="big">
                      <i></i>
                      <span class="top fc_blue">13%</span>
                      <p class="text">7일</p>
                    </li>
                  </ul>
                </div>

                <div class="description_box">
                  <h3>투자의 발견</h3>
                  <div class="hashtag">
                    <span>#그래서 여기 힙한가요?</span>
                    <span>#관심이 식었나?</span>
                    <span>#친구 따라 강남</span>
                    <span>#외인/기관 사고파는 이유 찾기</span>
                  </div>
                  <p class="tit">외국인과 기관이 사고 파는 이유를 보면 시장의 관심도를 알 수 있어요</p>
                  <p class="text">투자는 사람들의 관심과 무관심에 대한 거대한 흐름 변화라고 볼 수 있어요. 왜 외국인이 많이 사는지, 왜 기관이 많이 파는지 그 날의 이슈들을 체크해 보세요.<br />
                    <strong>그럼 내가 산 종목을 보유해야 할지, 나도 같이 내다 팔아야 할지를 알 수 있을 거예요</strong>
                  </p>
                </div>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //시장의 관심은 어땠을까? -->
        <hr aria-hidden="true" class="hr_line">

        <!-- 한눈에 보는 업종 비교 -->
        <div class="type_compare">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                한 눈에 보는 업종 비교
              </h2>
            </template>
            <span class="fz_12 fc_666 mg_t4">최근 결산일 기준</span>
          </kb-title-bar>
          <div class="chart_area">
            <img src="~@/assets/images/IN/sample_04_img.png" alt="" />
          </div>
        </div>
        <!-- //한눈에 보는 업종 비교 -->
        <hr aria-hidden="true" class="hr_line">

        <!-- KB리서치는 어떻게 볼까? -->
        <div class="stock_diagnose_box">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                KB리서치는 어떻게 볼까?
              </h2>
            </template>
            <span class="fz_12 fc_666 mg_t4">20/10/19 기준</span>
          </kb-title-bar>

          <div class="status_box">
            <p class="sub_tit">KB리서치 투자의견</p>
            <ul class="status">
              <!-- 활성화 : on -->
              <li>강력매도</li>
              <li>매도</li>
              <li>종합</li>
              <li class="on">매수</li>
              <li>강력매수</li>
            </ul>

            <p class="target_price"><span>목표주가</span> 40,000원</p>
            <kb-button link not class="button_link">
              KB리서치에서 자세히 보기<i class="bt_ic_arr" aria-hidden="true" />
            </kb-button>
            <ul class="txt_list2 mg_t4">
              <li class="dot">KB리서치에 가입해서 자세한 정보를 볼 수 있어요.</li>
            </ul>
          </div>
        </div>
        <!-- //KB리서치는 어떻게 볼까? -->
        <hr aria-hidden="true" class="hr_line">

        <!-- 고수의 매매동향 -->
        <div class="stock_diagnose_box">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                고수의 매매동향
              </h2>
            </template>
          </kb-title-bar>

          <div class="status_box">
            <p class="sub_tit">현재 기준</p>
            <ul class="status">
              <!-- 활성화 : on -->
              <li>강력매도</li>
              <li>매도</li>
              <li class="on">종합</li>
              <li>매수</li>
              <li>강력매수</li>
            </ul>
          </div>

          <kb-foldings type1 not-toggle>
            <kb-folding>
              <template slot="title">
                <div class="tbl">
                  <div class="th fw_bold">추가정보</div>
                  <div class="td t_right fz_14 fc_666">어제/주간/월간 기준</div>
                </div>
              </template>
              <div class="section">
                <div class="status_box mg_t242">
                  <p class="sub_tit">어제 기준</p>
                  <ul class="status">
                    <!-- 활성화 : on -->
                    <li>강력매도</li>
                    <li>매도</li>
                    <li>종합</li>
                    <li>매수</li>
                    <li class="on">강력매수</li>
                  </ul>
                </div>
                <div class="status_box">
                  <p class="sub_tit">주간(7일 누적)기준</p>
                  <ul class="status">
                    <!-- 활성화 : on -->
                    <li>강력매도</li>
                    <li class="on">매도</li>
                    <li>종합</li>
                    <li>매수</li>
                    <li>강력매수</li>
                  </ul>
                </div>
                <div class="status_box">
                  <p class="sub_tit">월간(30일 누적)기준</p>
                  <ul class="status">
                    <!-- 활성화 : on -->
                    <li class="on">강력매도</li>
                    <li>매도</li>
                    <li>종합</li>
                    <li>매수</li>
                    <li>강력매수</li>
                  </ul>
                </div>
              </div>
            </kb-folding>
          </kb-foldings>
        </div>
        <!-- //고수의 매매동향 -->
        <hr aria-hidden="true" class="hr_line">

        <!-- KBlog -->
        <div class="kblog_box">
          <kb-title-bar h3>
            <template slot="left">
              <h2 class="tit">
                KBlog
              </h2>
            </template>
            <kb-button link not class="fz_12 fc_666">
              더보기 <i class="bt_ic_arr mg_l2" aria-hidden="true" />
            </kb-button>
          </kb-title-bar>
          <div class="section_scroll">
            <kb-button not aTag class="list">
              <p class="tit">삼성전자 관련 컨텐츠 스크랩 리스트 두줄까지만 나오기</p>
              <p class="date">20/11/12</p>
              <p class="category">삼성증권관련</p>
            </kb-button>
            <kb-button not aTag class="list">
              <p class="tit">삼성전자 관련 컨텐츠 스크랩 리스트 두줄까지만 나오기</p>
              <p class="date">20/11/12</p>
              <p class="category">삼성증권관련</p>
            </kb-button>
            <kb-button not aTag class="list">
              <p class="tit">삼성전자 관련 컨텐츠 스크랩 리스트 두줄까지만 나오기</p>
              <p class="date">20/11/12</p>
              <p class="category">삼성증권관련</p>
            </kb-button>
            <kb-button not aTag class="list">
              <p class="tit">삼성전자 관련 컨텐츠 스크랩 리스트 두줄까지만 나오기</p>
              <p class="date">20/11/12</p>
              <p class="category">삼성증권관련</p>
            </kb-button>
            <kb-button not aTag class="list">
              <p class="tit">삼성전자 관련 컨텐츠 스크랩 리스트 두줄까지만 나오기</p>
              <p class="date">20/11/12</p>
              <p class="category">삼성증권관련</p>
            </kb-button>
            <kb-button not aTag class="list">
              <p class="tit">삼성전자 관련 컨텐츠 스크랩 리스트 두줄까지만 나오기</p>
              <p class="date">20/11/12</p>
              <p class="category">삼성증권관련</p>
            </kb-button>
          </div>
        </div>
        <!-- //KBlog -->

        <div class="other_info_box">
          <h3>알려드려요</h3>
          <ul class="txt_list">
            <li class="dot">주식종목진단은 종목에 대한 인사이트를 발견하고 투자를 돕기 위하여 제공하는 참고자료입니다.<br />
              투자 의견은 특정 종목을 추천하기 위한 용도가 아니며, KB증권의 공식 의견이 아닙니다.<br />
              투자진행 시 참고해 주시기 바랍니다.</li>
          </ul>
        </div>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'IN04A001',
  data() {
    return {
      keywords: ['분산투자고수 관심주', '리서치 추천', '매도상위 2위', 'Day-Trader 매수(매도)2위 텍스트 길어', '운 좋은 사람 선택 종목', '5개 이상일때 나오는 키워드'],
      keywordShowCheck: false,
    };
  },
  methods: {
    keywordShow() {
      this.keywordShowCheck = !this.keywordShowCheck;
      this.keyword();
    },
    keyword() {
      let keySlice;
      if (!this.keywordShowCheck) {
        keySlice = this.keywords.slice(0, 5);
      } else {
        keySlice = this.keywords;
      }
      return keySlice;
    },
  },
};
</script>

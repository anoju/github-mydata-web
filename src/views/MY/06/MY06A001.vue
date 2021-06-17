<template>
  <div  class="mg_t16">
    <kb-btn-toggle small inline class="mg_b24">
      <kb-btn-toggle-row>
        <kb-radio
          v-model="toggleVal"
          button
          value="1"
        >
          주식
        </kb-radio>
        <kb-radio
          v-model="toggleVal"
          button
          value="2"
        >
          펀드
        </kb-radio>
        <kb-radio
          v-model="toggleVal"
          button
          value="3"
        >
          ELS/DLS
        </kb-radio>
        <kb-radio
          v-model="toggleVal"
          button
          value="4"
        >
          채권
        </kb-radio>
        <kb-radio
          v-model="toggleVal"
          button
          value="5"
        >
          퇴직연금
        </kb-radio>
      </kb-btn-toggle-row>
    </kb-btn-toggle>

    <!-- 찜상품이 없는 경우 -->
    <template v-if="noDate">
      <div class="assets_none_box">
        <div class="none_box">
          <i></i>
          등록 된 찜 상품이 없습니다.<br />
          찜 상품을 등록해보세요 :)
          <kb-button line blue class="fz_16">종목검색</kb-button>
        </div>
      </div>
    </template>
    <!-- //찜상품이 없는 경우 -->

    <!-- 주식 -->
    <template v-if="!noDate && toggleVal === '1'">
      <div class="mypage_list2">
        <div class="top">
          <kb-checkbox
            small
            v-model="checkVal1"
            value="1"
            class="no_style"
          >
            전체선택
          </kb-checkbox>

          <div class="right">
            <kb-button aTag not>선택삭제</kb-button>
            <i class="line"></i>
            <kb-button aTag not @click="showFullPopup($event.target)">순서편집</kb-button>
          </div>
        </div>
        <ul>
          <li>
            <kb-checkbox
              v-model="checkVal1"
              value="1"
              small
            />
            <kb-button not a-tag class="text_box_wrap">
              <div class="text_box">
                <p class="tit">삼성전자</p>
              </div>
              <div class="money_box">
                <p class="money">59,300원</p>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <p class="small fc_up">59,300원</p>
              </div>
            </kb-button>

            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
          <li>
            <kb-checkbox
              v-model="checkVal1"
              value="1"
              small
            />
            <kb-button not a-tag class="text_box_wrap">
              <div class="text_box">
                <p class="tit">삼성전자</p>
              </div>
              <div class="money_box">
                <p class="money">59,300원</p>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <p class="small fc_up">59,300원</p>
              </div>
            </kb-button>

            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
          <li>
            <kb-checkbox
              v-model="checkVal1"
              value="1"
              small
            />
            <kb-button not a-tag class="text_box_wrap">
              <div class="text_box">
                <p class="tit">삼성전자</p>
              </div>
              <div class="money_box">
                <p class="money">59,300원</p>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <p class="small fc_up">59,300원</p>
              </div>
            </kb-button>

            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
          <li>
            <kb-checkbox
              v-model="checkVal1"
              value="1"
              small
            />
            <kb-button not a-tag class="text_box_wrap">
              <div class="text_box">
                <p class="tit">삼성전자</p>
              </div>
              <div class="money_box">
                <p class="money">59,300원</p>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <p class="small fc_up">59,300원</p>
              </div>
            </kb-button>

            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
          <li>
            <kb-checkbox
              v-model="checkVal1"
              value="1"
              small
            />
            <kb-button not a-tag class="text_box_wrap">
              <div class="text_box">
                <p class="tit">삼성전자</p>
              </div>
              <div class="money_box">
                <p class="money">59,300원</p>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <p class="small fc_up">59,300원</p>
              </div>
            </kb-button>

            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
          <li>
            <kb-checkbox
              v-model="checkVal1"
              value="1"
              small
            />
            <kb-button not a-tag class="text_box_wrap">
              <div class="text_box">
                <p class="tit">삼성전자</p>
              </div>
              <div class="money_box">
                <p class="money">59,300원</p>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <p class="small fc_up">59,300원</p>
              </div>
            </kb-button>

            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
        </ul>
      </div>

      <template v-if="checkVal1">
        <kb-button-wrap bottom-fixed>
          <kb-button
            line
            disabled
          >
            실시간 거래
          </kb-button>
          <kb-button
            yellow
          >
            적립식 거래
          </kb-button>
        </kb-button-wrap>
      </template>
    </template>
    <!-- //주식 -->

    <!-- 펀드 -->
    <template v-if="!noDate && toggleVal === '2'">
      <div class="line_list_ty2 border_ty2">
        <ul>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="tbl_flex align_end">
                  <div class="th">
                    <div class="ico_wrap">
                      <ico-txt blue>초고위험</ico-txt>
                      <ico-txt green>해외주식형</ico-txt>
                      <ico-txt yellow>계열사</ico-txt>
                    </div>
                    <div class="breakall text_line_2 mg_t4">
                      <strong>한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)</strong>
                    </div>
                    <div class="sub_info mg_t12">
                      <ul>
                        <li>수수료 미징구</li>
                        <li>온라인</li>
                      </ul>
                    </div>
                  </div>
                  <div class="td">
                    <div class="fz_12 fc_666">3개월</div>
                    <div class="fz_18">
                      <strong class="fc_up">+34.77%</strong>
                      <!-- <strong class="fc_down">-34.77%</strong> -->
                    </div>
                  </div>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="tbl_flex align_end">
                  <div class="th">
                    <div class="ico_wrap">
                      <ico-txt blue>초고위험</ico-txt>
                      <ico-txt green>해외주식형</ico-txt>
                      <ico-txt yellow>계열사</ico-txt>
                    </div>
                    <div class="breakall text_line_2 mg_t4">
                      <strong>한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)</strong>
                    </div>
                    <div class="sub_info mg_t12">
                      <ul>
                        <li>수수료 미징구</li>
                        <li>온라인</li>
                      </ul>
                    </div>
                  </div>
                  <div class="td">
                    <div class="fz_12 fc_666">3개월</div>
                    <div class="fz_18">
                      <strong class="fc_up">+34.77%</strong>
                      <!-- <strong class="fc_down">-34.77%</strong> -->
                    </div>
                  </div>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="tbl_flex align_end">
                  <div class="th">
                    <div class="ico_wrap">
                      <ico-txt blue>초고위험</ico-txt>
                      <ico-txt green>해외주식형</ico-txt>
                      <ico-txt yellow>계열사</ico-txt>
                    </div>
                    <div class="breakall text_line_2 mg_t4">
                      <strong>한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)</strong>
                    </div>
                    <div class="sub_info mg_t12">
                      <ul>
                        <li>수수료 미징구</li>
                        <li>온라인</li>
                      </ul>
                    </div>
                  </div>
                  <div class="td">
                    <div class="fz_12 fc_666">3개월</div>
                    <div class="fz_18">
                      <strong class="fc_up">+34.77%</strong>
                      <!-- <strong class="fc_down">-34.77%</strong> -->
                    </div>
                  </div>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
        </ul>
      </div>
    </template>
    <!--//펀드 -->

    <!-- ELS/DLS -->
    <template v-if="!noDate && toggleVal === '3'">
      <div class="box_list_ty1">
        <ul>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="inner_in pd_b12">
                  <div class="ico_wrap pd_r25">
                    <ico-txt red>고위험</ico-txt>
                    <ico-txt blue>원급부분지급형</ico-txt>
                    <ico-txt yellow>온라인전용</ico-txt>
                  </div>
                  <div class="flex_wrap space_between align_center mg_t4">
                    <div class="pd_r10">
                      <div class="text_line_1"><strong>KB able ELS 제 1576호 KB able ELS 제 1576호 KB able ELS 제 1576호 KB able ELS 제 1576호</strong></div>
                      <div class="text_line_1 fz_12 fc_666 mg_t4">디펜싱부스터</div>
                    </div>
                    <div class="t_right">
                      <div class="d_day">D-26</div>
                    </div>
                  </div>
                  <ul class="sub_info_ul ty2 mg_t12">
                    <li>
                      <div class="th">연 <strong class="fz_20 fc_up">14.57%</strong></div>
                      <div class="td">특정조건 충족시 수익률 (세전 최대)</div>
                    </li>
                    <li>
                      <div class="th"><strong class="fz_20 fc_down">-10%</strong></div>
                      <div class="td">조건 미충족시 손실률 (최대)</div>
                    </li>
                  </ul>
                </div>
                <div class="inner_in">
                  <ul class="tbl_list">
                    <li>
                      <div class="th">기초자산</div>
                      <div class="td text_line_1">삼성전자, NAVER 삼성전자, NAVER 삼성전자, NAVER</div>
                    </li>
                    <li>
                      <div class="th">상환조건</div>
                      <div class="td text_line_1">100-100-100 / NO KI (90%원금 00-100-100 / NO KI (90%원금</div>
                    </li>
                    <li>
                      <div class="th">청약기간</div>
                      <div class="td">2021/04/16 ~ 2021/04/23</div>
                    </li>
                  </ul>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="inner_in pd_b12">
                  <div class="ico_wrap pd_r25">
                    <ico-txt red>중위험</ico-txt>
                    <ico-txt blue>원급부분지급형</ico-txt>
                    <ico-txt yellow>온라인전용</ico-txt>
                  </div>
                  <div class="flex_wrap space_between align_center mg_t4">
                    <div class="pd_r10">
                      <div class="text_line_1"><strong>KB able ELS 제 1576호 KB able ELS 제 1576호 KB able ELS 제 1576호 KB able ELS 제 1576호</strong></div>
                      <div class="text_line_1 fz_12 fc_666 mg_t4">디펜싱부스터</div>
                    </div>
                    <div class="t_right">
                      <div class="d_day">D-6</div>
                    </div>
                  </div>
                  <ul class="sub_info_ul ty2 mg_t12">
                    <li>
                      <div class="th">연 <strong class="fz_20 fc_up">14.57%</strong></div>
                      <div class="td">특정조건 충족시 수익률 (세전 최대)</div>
                    </li>
                    <li>
                      <div class="th"><strong class="fz_20 fc_down">-10%</strong></div>
                      <div class="td">조건 미충족시 손실률 (최대)</div>
                    </li>
                  </ul>
                </div>
                <div class="inner_in">
                  <ul class="tbl_list">
                    <li>
                      <div class="th">기초자산</div>
                      <div class="td text_line_1">삼성전자, NAVER 삼성전자, NAVER 삼성전자, NAVER</div>
                    </li>
                    <li>
                      <div class="th">상환조건</div>
                      <div class="td text_line_1">100-100-100 / NO KI (90%원금 00-100-100 / NO KI (90%원금</div>
                    </li>
                    <li>
                      <div class="th">청약기간</div>
                      <div class="td">2021/04/16 ~ 2021/04/23</div>
                    </li>
                  </ul>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
        </ul>
      </div>
    </template>
    <!--//ELS/DLS -->

    <!-- 채권 -->
    <template v-if="!noDate && toggleVal === '4'">
      <div class="box_list_ty1">
        <ul>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="inner_in pd_b12">
                  <div class="fz_14 pd_r25">
                    <strong class="fc_blue">AAA</strong>
                    <span class="mg_l8">한국건설85EB</span>
                  </div>
                  <div class="flex_wrap space_between align_end">
                    <div class="fz_20"><strong>11,130.0</strong></div>
                    <div class="fz_14">
                      <strong class="fc_up">▲384.5 (3.60%)</strong>
                      <!-- <strong class="fc_down">▼384.5 (-3.60%)</strong> -->
                    </div>
                  </div>
                </div>
                <div class="inner_in pd_y12">
                  <ul class="sub_info_ul">
                    <li>
                      <div class="th">매도 호가</div>
                      <div class="td"><strong>10,633.0</strong></div>
                    </li>
                    <li>
                      <div class="th">매수 호가</div>
                      <div class="td"><strong>10,633.0</strong></div>
                    </li>
                  </ul>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="inner_in pd_b12">
                  <div class="fz_14 pd_r25">
                    <strong class="fc_blue">AAA</strong>
                    <span class="mg_l8">한국건설85EB</span>
                  </div>
                  <div class="flex_wrap space_between align_end">
                    <div class="fz_20"><strong>11,130.0</strong></div>
                    <div class="fz_14">
                      <strong class="fc_up">▲384.5 (3.60%)</strong>
                      <!-- <strong class="fc_down">▼384.5 (-3.60%)</strong> -->
                    </div>
                  </div>
                </div>
                <div class="inner_in pd_y12">
                  <ul class="sub_info_ul">
                    <li>
                      <div class="th">매도 호가</div>
                      <div class="td"><strong>10,633.0</strong></div>
                    </li>
                    <li>
                      <div class="th">매수 호가</div>
                      <div class="td"><strong>10,633.0</strong></div>
                    </li>
                  </ul>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="inner_in pd_b12">
                  <div class="fz_14 pd_r25">
                    <strong class="fc_blue">AAA</strong>
                    <span class="mg_l8">한국건설85EB</span>
                  </div>
                  <div class="flex_wrap space_between align_end">
                    <div class="fz_20"><strong>11,130.0</strong></div>
                    <div class="fz_14">
                      <strong class="fc_up">▲384.5 (3.60%)</strong>
                      <!-- <strong class="fc_down">▼384.5 (-3.60%)</strong> -->
                    </div>
                  </div>
                </div>
                <div class="inner_in pd_y12">
                  <ul class="sub_info_ul">
                    <li>
                      <div class="th">매도 호가</div>
                      <div class="td"><strong>10,633.0</strong></div>
                    </li>
                    <li>
                      <div class="th">매수 호가</div>
                      <div class="td"><strong>10,633.0</strong></div>
                    </li>
                  </ul>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
        </ul>
      </div>
    </template>
    <!--//채권 -->

    <!-- 퇴직연금 -->
    <template v-if="!noDate && toggleVal === '5'">
      <div class="line_list_ty2 border_ty2">
        <ul>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="tbl_flex align_end">
                  <div class="th">
                    <div class="ico_wrap">
                      <ico-txt blue>초고위험</ico-txt>
                      <ico-txt green>해외주식형</ico-txt>
                      <ico-txt yellow>계열사</ico-txt>
                    </div>
                    <div class="breakall text_line_2 mg_t4">
                      <strong>한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)</strong>
                    </div>
                    <div class="sub_info mg_t12">
                      <ul>
                        <li>수수료 미징구</li>
                        <li>온라인</li>
                        <li>퇴직연금</li>
                      </ul>
                    </div>
                  </div>
                  <div class="td">
                    <div class="fz_12 fc_666">3개월</div>
                    <div class="fz_18">
                      <strong class="fc_up">+34.77%</strong>
                      <!-- <strong class="fc_down">-34.77%</strong> -->
                    </div>
                  </div>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="tbl_flex align_end">
                  <div class="th">
                    <div class="ico_wrap">
                      <ico-txt blue>초고위험</ico-txt>
                      <ico-txt green>해외주식형</ico-txt>
                      <ico-txt yellow>계열사</ico-txt>
                    </div>
                    <div class="breakall text_line_2 mg_t4">
                      <strong>한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)</strong>
                    </div>
                    <div class="sub_info mg_t12">
                      <ul>
                        <li>수수료 미징구</li>
                        <li>온라인</li>
                        <li>퇴직연금</li>
                      </ul>
                    </div>
                  </div>
                  <div class="td">
                    <div class="fz_12 fc_666">3개월</div>
                    <div class="fz_18">
                      <strong class="fc_up">+34.77%</strong>
                      <!-- <strong class="fc_down">-34.77%</strong> -->
                    </div>
                  </div>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
          <li>
            <div class="item">
              <kb-button aTag not class="inner">
                <div class="tbl_flex align_end">
                  <div class="th">
                    <div class="ico_wrap">
                      <ico-txt blue>초고위험</ico-txt>
                      <ico-txt green>해외주식형</ico-txt>
                      <ico-txt yellow>계열사</ico-txt>
                    </div>
                    <div class="breakall text_line_2 mg_t4">
                      <strong>한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)한국투자글로벌전기차&배터리증권투자신탁(주식)(C-Re)</strong>
                    </div>
                    <div class="sub_info mg_t12">
                      <ul>
                        <li>수수료 미징구</li>
                        <li>온라인</li>
                        <li>퇴직연금</li>
                      </ul>
                    </div>
                  </div>
                  <div class="td">
                    <div class="fz_12 fc_666">3개월</div>
                    <div class="fz_18">
                      <strong class="fc_up">+34.77%</strong>
                      <!-- <strong class="fc_down">-34.77%</strong> -->
                    </div>
                  </div>
                </div>
              </kb-button>
              <kb-button
                like
                :class="{checked:isLike}"
                role="checkbox"
                :aria-checked="isLike?'true':'false'"
                @click="isLike = !isLike"
              >즐겨찾기</kb-button>
            </div>
          </li>
        </ul>
      </div>
    </template>
    <!--//퇴직연금 -->
  </div>
</template>
<script>
export default {
  name: 'MY06A001',
  data() {
    return {
      toggleVal: '1',
      noDate: false,
      isLike: true,
      islike1: true,
      checkVal1: false,
    };
  },
  mounted() {
  },
  methods: {
    showFullPopup(el) {
      this.$modal({
        component: () => import('@/views/MY/06/MY06A007.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>

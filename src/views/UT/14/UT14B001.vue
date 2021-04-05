<template>
  <kb-page page-title="한번에 연동">
    <kb-page-body>
      <div class="section">
        <kb-input
          v-model="searchVal"
          class="search"
          type="search"
          placeholder="연동할 정보가 어디에 있나요?"
          title="검색어 입력"
          @keyup.enter="searchBtn"
          :delete="inputDelEvt"
        >
          <kb-button
            not
            class="btn_search"
            aria-label="검색하기"
            @click="searchBtn"
          >검색하기</kb-button>
        </kb-input>
        <div v-if="!isSearch">
          <kb-title-bar h3 class="mg_t32" title="주요기관/업체">
            <template slot="left">
              <kb-button
                not
                class="tooltip_btn mg_l4"
                v-tooltip="'views/UT/14/UT14B001_tip.vue'"
                aria-label="팝업으로 상세내용 확인"
              >팝업으로 상세내용 확인</kb-button>
            </template>
          </kb-title-bar>
          <kb-btn-toggle class="mg_t12 fz_14">
            <kb-btn-toggle-row>
              <kb-radio
                v-model="toggleVal"
                button
                value="1"
                :class="{checking:selectVal1.length > 0}"
              >
                은행
              </kb-radio>
              <kb-radio
                v-model="toggleVal"
                button
                value="2"
                :class="{checking:selectVal2.length > 0}"
              >
                카드
              </kb-radio>
              <kb-radio
                v-model="toggleVal"
                button
                value="3"
                :class="{checking:selectVal3.length > 0}"
              >
                투자
              </kb-radio>
              <kb-radio
                v-model="toggleVal"
                button
                value="4"
                :class="{checking:selectVal4.length > 0}"
              >
                보험
              </kb-radio>
            </kb-btn-toggle-row>
            <kb-btn-toggle-row>
              <kb-radio
                v-model="toggleVal"
                button
                value="5"
                :class="{checking:selectVal5.length > 0}"
              >
                신용정보
              </kb-radio>
              <kb-radio
                v-model="toggleVal"
                button
                value="6"
                :class="{checking:selectVal6.length > 0}"
              >
                캐피탈/여신
              </kb-radio>
              <kb-radio
                v-model="toggleVal"
                button
                value="7"
                :class="{checking:selectVal7.length > 0}"
              >
                전자금융
              </kb-radio>
              <kb-radio
                v-model="toggleVal"
                button
                value="8"
                :class="{checking:selectVal8.length > 0}"
              >
                통신/기타
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>

          <!-- 은행 -->
          <div v-if="toggleVal == 1" class="company_list_wrap">
            <div class="selete_list_box">
              <template
                v-for="(item, i) of bankList"
              >
                <div
                  :key="i"
                  v-if="item.icon"
                  class="item"
                >
                  <kb-checkbox
                    v-model="selectVal1"
                    button
                    :value="item.code"
                  >
                    <i :class="`ic_company_${item.code}`" aria-hidden="true"></i>
                    <span class="txt">{{item.text}}</span>
                  </kb-checkbox>
                </div>
              </template>
            </div>
            <kb-button-wrap v-if="!etcShow1" class="mg_t4">
              <kb-button
                class="more"
                @click="etcShow1 = !etcShow1"
              >
                더보기
              </kb-button>
            </kb-button-wrap>
            <div v-if="etcShow1" class="mg_t28">
              <div class="selete_list_tit">외은지점</div>
              <div class="selete_list">
                <template
                  v-for="(item, i) of bankList2"
                >
                  <div
                    :key="i"
                    v-if="!item.icon"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal1"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </template>
              </div>
              <div class="selete_list_tit">저축은행</div>
              <div class="selete_list">
                <template
                  v-for="(item, i) of bankList3"
                >
                  <div
                    :key="i"
                    v-if="!item.icon"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal1"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <!-- 카드 -->
          <div v-if="toggleVal == 2" class="company_list_wrap">
            <div class="selete_list_box">
              <template
                v-for="(item, i) of cardList"
              >
                <div
                  :key="i"
                  v-if="item.icon"
                  class="item"
                >
                  <kb-checkbox
                    v-model="selectVal2"
                    button
                    :value="item.code"
                  >
                    <i :class="`ic_company_${item.code}`" aria-hidden="true"></i>
                    <span class="txt">{{item.text}}</span>
                  </kb-checkbox>
                </div>
              </template>
            </div>
            <ul class="txt_list mg_t10">
              <li class="dot">기업/SC제일/대구/부산/경남은행 카드는 비씨카드로 연결</li>
            </ul>
          </div>

          <!-- 투자 -->
          <div v-if="toggleVal == 3" class="company_list_wrap">
            <div class="selete_list_box">
              <template
                v-for="(item, i) of investList"
              >
                <div
                  :key="i"
                  v-if="item.icon"
                  class="item"
                >
                  <kb-checkbox
                    v-model="selectVal3"
                    button
                    :value="item.code"
                  >
                    <i :class="`ic_company_${item.code}`" aria-hidden="true"></i>
                    <span class="txt">{{item.text}}</span>
                  </kb-checkbox>
                </div>
              </template>
            </div>
            <kb-button-wrap v-if="!etcShow3" class="mg_t4">
              <kb-button
                class="more"
                @click="etcShow3 = !etcShow3"
              >
                더보기
              </kb-button>
            </kb-button-wrap>
            <div v-if="etcShow3" class="mg_t28">
              <div class="selete_list_tit">증권</div>
              <div class="selete_list">
                <template
                  v-for="(item, i) of investList1"
                >
                  <div
                    :key="i"
                    v-if="!item.icon"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal3"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </template>
              </div>
              <div class="selete_list_tit">자산운용</div>
              <div class="selete_list">
                <template
                  v-for="(item, i) of investList2"
                >
                  <div
                    :key="i"
                    v-if="!item.icon"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal3"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <!-- 보험 -->
          <div v-if="toggleVal == 4" class="company_list_wrap">
            <div class="selete_list_tit">손해보험</div>
            <div class="selete_list_box">
              <template
                v-for="(item, i) of insuranceList1"
              >
                <div
                  :key="i"
                  v-if="item.icon"
                  class="item"
                >
                  <kb-checkbox
                    v-model="selectVal4"
                    button
                    :value="item.code"
                  >
                    <i :class="`ic_company_${item.code}`" aria-hidden="true"></i>
                    <span class="txt">{{item.text}}</span>
                  </kb-checkbox>
                </div>
              </template>
            </div>
            <div class="selete_list_tit">생명보험</div>
            <div class="selete_list_box">
              <template
                v-for="(item, i) of insuranceList2"
              >
                <div
                  :key="i"
                  v-if="item.icon"
                  class="item"
                >
                  <kb-checkbox
                    v-model="selectVal4"
                    button
                    :value="item.code"
                  >
                    <i :class="`ic_company_${item.code}`" aria-hidden="true"></i>
                    <span class="txt">{{item.text}}</span>
                  </kb-checkbox>
                </div>
              </template>
            </div>
            <kb-button-wrap v-if="!etcShow4" class="mg_t4">
              <kb-button
                class="more"
                @click="etcShow4 = !etcShow4"
              >
                더보기
              </kb-button>
            </kb-button-wrap>
            <div v-if="etcShow4" class="mg_t28">
              <div class="selete_list_tit">손해보험</div>
              <div class="selete_list">
                <template
                  v-for="(item, i) of insuranceList1"
                >
                  <div
                    :key="i"
                    v-if="!item.icon"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal4"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </template>
              </div>
              <div class="selete_list_tit">생명보험</div>
              <div class="selete_list">
                <template
                  v-for="(item, i) of insuranceList2"
                >
                  <div
                    :key="i"
                    v-if="!item.icon"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal4"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <!-- 신용정보 -->
          <div v-if="toggleVal == 5" class="company_list_wrap">
            <div class="selete_list_box no_icon">
              <template
                v-for="(item, i) of creditList"
              >
                <div
                  :key="i"
                  v-if="item.icon"
                  class="item"
                >
                  <kb-checkbox
                    v-model="selectVal5"
                    button
                    :value="item.code"
                  >
                    <span class="txt">{{item.text}}</span>
                  </kb-checkbox>
                </div>
              </template>
            </div>
          </div>

          <!-- 캐피탈/여신 -->
          <div v-if="toggleVal == 6" class="company_list_wrap">
            <div class="selete_list_box no_icon">
              <template
                v-for="(item, i) of capitalList"
              >
                <div
                  :key="i"
                  v-if="item.icon"
                  class="item"
                >
                  <kb-checkbox
                    v-model="selectVal6"
                    button
                    :value="item.code"
                  >
                    <span class="txt">{{item.text}}</span>
                  </kb-checkbox>
                </div>
              </template>
            </div>
            <kb-button-wrap v-if="!etcShow6" class="mg_t4">
              <kb-button
                class="more"
                @click="etcShow6 = !etcShow6"
              >
                더보기
              </kb-button>
            </kb-button-wrap>
            <div v-if="etcShow6" class="mg_t28">
              <div class="selete_list">
                <template
                  v-for="(item, i) of capitalList"
                >
                  <div
                    :key="i"
                    v-if="!item.icon"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal6"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <!-- 전자금융 -->
          <div v-if="toggleVal == 7" class="company_list_wrap">
            수급필요 <br>
            수급필요 <br>
            수급필요 <br>
            수급필요 <br>
          </div>

          <!-- 통신/기타 -->
          <div v-if="toggleVal == 8" class="company_list_wrap">
            <div class="selete_list_tit">통신</div>
            <div class="selete_list_box">
              <template
                v-for="(item, i) of etcList1"
              >
                <div
                  :key="i"
                  v-if="item.icon"
                  class="item"
                >
                  <kb-checkbox
                    v-model="selectVal8"
                    button
                    :value="item.code"
                  >
                    <i :class="`ic_company_${item.code}`" aria-hidden="true"></i>
                    <span class="txt">{{item.text}}</span>
                  </kb-checkbox>
                </div>
              </template>
            </div>
            <div class="selete_list_tit">기타</div>
            <div class="selete_list_box no_icon">
              <template
                v-for="(item, i) of etcList2"
              >
                <div
                  :key="i"
                  v-if="item.icon"
                  class="item"
                >
                  <kb-checkbox
                    v-model="selectVal8"
                    button
                    :value="item.code"
                  >
                    <span class="txt">{{item.text}}</span>
                  </kb-checkbox>
                </div>
              </template>
            </div>
            <div class="selete_list_tit">공제조합</div>
            <div class="selete_list_box no_icon">
              <template
                v-for="(item, i) of etcList3"
              >
                <div
                  :key="i"
                  v-if="item.icon"
                  class="item"
                >
                  <kb-checkbox
                    v-model="selectVal8"
                    button
                    :value="item.code"
                  >
                    <span class="txt">{{item.text}}</span>
                  </kb-checkbox>
                </div>
              </template>
            </div>
            <div class="selete_list_tit">보증재단</div>
            <div class="selete_list_box no_icon">
              <template
                v-for="(item, i) of etcList4"
              >
                <div
                  :key="i"
                  v-if="item.icon"
                  class="item"
                >
                  <kb-checkbox
                    v-model="selectVal8"
                    button
                    :value="item.code"
                  >
                    <span class="txt">{{item.text}}</span>
                  </kb-checkbox>
                </div>
              </template>
            </div>
            <kb-button-wrap v-if="!etcShow8" class="mg_t4">
              <kb-button
                class="more"
                @click="etcShow8 = !etcShow8"
              >
                더보기
              </kb-button>
            </kb-button-wrap>
            <div v-if="etcShow8" class="mg_t28">
              <div class="selete_list">
                <template
                  v-for="(item, i) of etcList"
                >
                  <div
                    :key="i"
                    v-if="!item.icon"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal8"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <!-- 검색결과 -->
        <div v-else class="pd_b30">
          <div
            v-if="bankList.length == 0 && cardList.length == 0 && investList.length == 0 && insuranceList.length == 0 && creditList.length == 0 && capitalList.length == 0 && electronicFinanceList.length == 0 && etcList.length == 0"
            class="util_wrap not_flex pd_t120"
          >
            <div class="text_box">
              <i class="ico_big_warning" aria-hidden="true" />
              <p class="pop_tit">마이데이터 연동 기관을 <br />찾을 수 없습니다.</p>
              <p class="pop_stit">다른 기관/업체의 자산을 연동해 보세요.</p>
            </div>
          </div>
          <div v-else>
            <kb-title-bar h3 class="mg_t32" title="기관/업체선택" />
            <kb-foldings type1 not-toggle class="ty2">
              <!-- 은행 -->
              <kb-folding v-if="bankList.length > 0">
                <template slot="title">
                  <strong>은행</strong>
                  <strong class="cut">{{bankList.length}}</strong>
                </template>
                <div class="selete_list_tit" v-if="bankList1.length > 0">국내은행</div>
                <div class="selete_list" v-if="bankList1.length > 0">
                  <div
                    v-for="(item, i) of bankList1"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal1"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
                <div class="selete_list_tit" v-if="bankList2.length > 0">외은지점</div>
                <div class="selete_list" v-if="bankList2.length > 0">
                  <div
                    v-for="(item, i) of bankList2"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal1"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
                <div class="selete_list_tit" v-if="bankList3.length > 0">저축은행</div>
                <div class="selete_list" v-if="bankList3.length > 0">
                  <div
                    v-for="(item, i) of bankList3"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal1"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
              </kb-folding>

              <!-- 카드 -->
              <kb-folding v-if="cardList.length > 0">
                <template slot="title">
                  <strong>카드</strong>
                  <strong class="cut">{{cardList.length}}</strong>
                </template>
                <div class="selete_list">
                  <div
                    v-for="(item, i) of cardList"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal2"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
              </kb-folding>

              <!-- 투자 -->
              <kb-folding v-if="investList.length > 0">
                <template slot="title">
                  <strong>투자</strong>
                  <strong class="cut">{{investList.length}}</strong>
                </template>
                <div class="selete_list_tit" v-if="investList1.length > 0">증권</div>
                <div class="selete_list" v-if="investList1.length > 0">
                  <div
                    v-for="(item, i) of investList1"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal3"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
                <div class="selete_list_tit" v-if="investList2.length > 0">자산운용</div>
                <div class="selete_list" v-if="investList2.length > 0">
                  <div
                    v-for="(item, i) of investList2"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal3"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
              </kb-folding>

              <!-- 보험 -->
              <kb-folding v-if="insuranceList.length > 0">
                <template slot="title">
                  <strong>보험</strong>
                  <strong class="cut">{{insuranceList.length}}</strong>
                </template>
                <div class="selete_list_tit" v-if="insuranceList1.length > 0">손해보험</div>
                <div class="selete_list" v-if="insuranceList1.length > 0">
                  <div
                    v-for="(item, i) of insuranceList1"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal4"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
                <div class="selete_list_tit" v-if="insuranceList2.length > 0">생명보험</div>
                <div class="selete_list" v-if="insuranceList2.length > 0">
                  <div
                    v-for="(item, i) of insuranceList2"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal3"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
              </kb-folding>

              <!-- 신용정보 -->
              <kb-folding v-if="creditList.length > 0">
                <template slot="title">
                  <strong>신용정보</strong>
                  <strong class="cut">{{creditList.length}}</strong>
                </template>
                <div class="selete_list" v-if="creditList.length > 0">
                  <div
                    v-for="(item, i) of creditList"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal5"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
              </kb-folding>

              <!-- 캐피탈/여신 -->
              <kb-folding v-if="capitalList.length > 0">
                <template slot="title">
                  <strong>캐피탈/여신</strong>
                  <strong class="cut">{{capitalList.length}}</strong>
                </template>
                <div class="selete_list" v-if="capitalList.length > 0">
                  <div
                    v-for="(item, i) of capitalList"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal6"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
              </kb-folding>

              <!-- 전자금융 -->
              <kb-folding v-if="electronicFinanceList.length > 0">
                <template slot="title">
                  <strong>전자금융</strong>
                  <strong class="cut">{{electronicFinanceList.length}}</strong>
                </template>
                <div class="selete_list" v-if="electronicFinanceList.length > 0">
                  <div
                    v-for="(item, i) of electronicFinanceList"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal7"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
              </kb-folding>

              <!-- 통신/기타 -->
              <kb-folding v-if="etcList.length > 0">
                <template slot="title">
                  <strong>통신/기타</strong>
                  <strong class="cut">{{etcList.length}}</strong>
                </template>
                <div class="selete_list_tit" v-if="etcList1.length > 0">통신</div>
                <div class="selete_list" v-if="etcList1.length > 0">
                  <div
                    v-for="(item, i) of etcList1"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal8"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
                <div class="selete_list_tit" v-if="etcList2.length > 0">기타</div>
                <div class="selete_list" v-if="etcList2.length > 0">
                  <div
                    v-for="(item, i) of etcList2"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal8"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
                <div class="selete_list_tit" v-if="etcList3.length > 0">공제조합</div>
                <div class="selete_list" v-if="etcList3.length > 0">
                  <div
                    v-for="(item, i) of etcList3"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal8"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
                <div class="selete_list_tit" v-if="etcList4.length > 0">보증재단</div>
                <div class="selete_list" v-if="etcList4.length > 0">
                  <div
                    v-for="(item, i) of etcList4"
                    :key="i"
                    class="item"
                  >
                    <kb-checkbox
                      v-model="selectVal8"
                      button
                      :value="item.code"
                    >
                      <span class="txt">{{item.text}}</span>
                    </kb-checkbox>
                  </div>
                </div>
              </kb-folding>
            </kb-foldings>
          </div>
        </div>

        <kb-button-wrap bottom-fixed>
          <kb-button
            yellow
            :disabled="totalSelectVal.length == 0"
          >
            <i v-if="totalSelectVal.length > 0" class="bt_num">{{totalSelectVal.length}}</i>
            연동하기
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT14B001',
  data() {
    return {
      searchVal: '',
      isSearch: false,
      toggleVal: '1',
      selectVal1: [],
      selectVal2: [],
      selectVal3: [],
      selectVal4: [],
      selectVal5: [],
      selectVal6: [],
      selectVal7: [],
      selectVal8: [],
      totalSelectVal: [],
      etcShow1: false,
      etcShow2: false,
      etcShow3: false,
      etcShow4: false,
      etcShow5: false,
      etcShow6: false,
      etcShow7: false,
      etcShow8: false,
      companyList: [
        // 은행
        { icon: true, code: '0101001', text: '국민은행' },
        { icon: true, code: '0101002', text: '경남은행' },
        { icon: true, code: '0101003', text: '광주은행' },
        { icon: true, code: '0101004', text: '기업은행' },
        { icon: true, code: '0101005', text: '농협' },
        { icon: true, code: '0101006', text: '대구은행' },
        { icon: true, code: '0101007', text: '부산은행' },
        { icon: true, code: '0101008', text: '산림조합중앙회' },
        { icon: true, code: '0101009', text: '산업은행' },
        { icon: true, code: '0101010', text: '새마을금고' },
        { icon: true, code: '0101011', text: '수협은행' },
        { icon: true, code: '0101012', text: '신한은행' },
        { icon: true, code: '0101013', text: '신협' },
        { icon: true, code: '0101014', text: '우리은행' },
        { icon: true, code: '0101015', text: '우체국' },
        { icon: true, code: '0101016', text: '전북은행' },
        { icon: true, code: '0101017', text: '제주은행' },
        { icon: true, code: '0101018', text: '지역 농·축협' },
        { icon: true, code: '0101019', text: '카카오뱅크' },
        { icon: true, code: '0101020', text: '케이뱅크' },
        { icon: true, code: '0101021', text: '하나은행' },
        { icon: true, code: '0101022', text: '한국씨티' },
        { icon: true, code: '0101023', text: 'SC은행' },
        { icon: true, code: '0101024', text: '농협중앙회' },
        { icon: true, code: '0101025', text: '수협중앙회' },
        { icon: true, code: '01010026', text: '한국수출입은행' },
        { icon: false, code: '0102001', text: '노바스코셔은행' },
        { icon: false, code: '0102002', text: '대화은행' },
        { icon: false, code: '0102003', text: '노바스코셔은행' },
        { icon: false, code: '0103001', text: '강원상호저축은행' },
        { icon: false, code: '0103002', text: '융창상호저축은행' },
        { icon: false, code: '0103003', text: '페퍼저축은행' },

        // 카드
        { icon: true, code: '0201001', text: '국민카드' },
        { icon: true, code: '0201002', text: '롯데카드' },
        { icon: true, code: '0201003', text: '비씨카드' },
        { icon: true, code: '0201005', text: '삼성카드' },
        { icon: true, code: '0201006', text: '신한카드' },
        { icon: true, code: '0201007', text: '우리카드' },
        { icon: true, code: '0201008', text: '하나카드' },
        { icon: true, code: '0201009', text: '현대카드' },

        // 투자
        { icon: true, code: '0301001', text: 'KB증권' },
        { icon: true, code: '0301002', text: '교보증권' },
        { icon: true, code: '0301003', text: '대신증권' },
        { icon: true, code: '0301004', text: '메리츠증권' },
        { icon: true, code: '0301005', text: '미래에셋대우' },
        { icon: true, code: '0301006', text: '삼성증권' },
        { icon: true, code: '0301007', text: '신한금융투자' },
        { icon: true, code: '0301008', text: '유진투자증권' },
        { icon: true, code: '0301009', text: '이베스트증권' },
        { icon: true, code: '0301010', text: '키움증권' },
        { icon: true, code: '0301011', text: '하나금융투자' },
        { icon: true, code: '0301012', text: '하이투자증권' },
        { icon: true, code: '0301013', text: '한국투자증권' },
        { icon: true, code: '0301014', text: '한화주자증권' },
        { icon: true, code: '0301015', text: '현대차증권' },
        { icon: true, code: '0301016', text: 'DB금융증권' },
        { icon: true, code: '0301017', text: 'NH투자증권' },
        { icon: true, code: '0301018', text: 'SK증권' },
        { icon: false, code: '0301019', text: '리딩투자증권' },
        { icon: false, code: '0301020', text: '맥퀴리증권' },
        { icon: false, code: '0301021', text: '바로투자증권' },
        { icon: false, code: '0302001', text: '골드브릿지' },
        { icon: false, code: '0302002', text: '교보악사자산운용' },
        { icon: false, code: '0302003', text: '국제자산운용' },
        { icon: false, code: '0302004', text: '그로쓰힐자산운용' },
        { icon: false, code: '0302005', text: '다비하나자산운용' },

        // 보험
        { icon: true, code: '0401001', text: 'KB손해보험' },
        { icon: true, code: '0401002', text: '농협손해보험' },
        { icon: true, code: '0401003', text: '롯데손해보험' },
        { icon: true, code: '0401004', text: '삼성화재' },
        { icon: true, code: '0401005', text: '한화손해보험' },
        { icon: true, code: '0401006', text: '현대해상' },
        { icon: true, code: '0401007', text: '흥국화재' },
        { icon: true, code: '0401008', text: '메리츠화재' },
        { icon: false, code: '0401009', text: '더케이손해보험' },
        { icon: false, code: '0401010', text: '에이스아메리카화재해상' },
        { icon: false, code: '0401011', text: '캐롯손해보험' },
        { icon: true, code: '0402001', text: 'KB생명보험' },
        { icon: true, code: '0402002', text: '교보라이나플래닛' },
        { icon: true, code: '0402003', text: '교보생명' },
        { icon: true, code: '0402004', text: '농협생명' },
        { icon: true, code: '0402005', text: '동양생명' },
        { icon: true, code: '0402006', text: 'DGB생명' },
        { icon: true, code: '0402007', text: '라이나생명' },
        { icon: true, code: '0402008', text: '메트라이프생명' },
        { icon: true, code: '0402009', text: '미래에셋생명' },
        { icon: true, code: '0402010', text: '삼성생명' },
        { icon: true, code: '0402011', text: '신한생명' },
        { icon: true, code: '0402012', text: '오렌지라이프생명' },
        { icon: true, code: '0402013', text: '푸르덴셜생명' },
        { icon: true, code: '0402014', text: '푸븐현대생명' },
        { icon: true, code: '0402015', text: '하나생명' },
        { icon: true, code: '0402016', text: '한화생명' },
        { icon: true, code: '0402017', text: '흥국생명' },
        { icon: true, code: '0402018', text: 'ABL생명' },
        { icon: false, code: '0402019', text: '비앤피파리바카디프생명보험' },
        { icon: false, code: '0402020', text: '처브라이프생명보험' },
        { icon: false, code: '0402021', text: 'AIA생명보험' },
        { icon: false, code: '0402022', text: 'DB생명' },
        { icon: false, code: '0402023', text: 'KDB생명보험' },
        { icon: false, code: '0402024', text: 'IBK연금보험' },

        // 신용정보
        { icon: true, code: '0501001', text: '나이스디앤비' },
        { icon: true, code: '0501002', text: '이크레더블' },
        { icon: true, code: '0501003', text: '한국기업데이터' },
        { icon: true, code: '0501004', text: 'KCB' },
        { icon: true, code: '0501005', text: 'NICE신용평가정보' },
        { icon: true, code: '0501006', text: 'SCI평가정보' },

        // 캐피탈/여신
        { icon: true, code: '0601001', text: 'KB캐피탈' },
        { icon: true, code: '0601002', text: '도이치파이낸셜' },
        { icon: true, code: '0601003', text: '롯데오토리스' },
        { icon: true, code: '0601004', text: '롯데캐피탈' },
        { icon: true, code: '0601005', text: '메르세데스벤츠 파이낸셜' },
        { icon: true, code: '0601006', text: '미래에셋캐피탈' },
        { icon: true, code: '0601007', text: '산은캐피탈' },
        { icon: true, code: '0601008', text: '신한캐피탈' },
        { icon: true, code: '0601009', text: '키움캐피탈' },
        { icon: true, code: '0601010', text: '토요파이낸셜' },
        { icon: true, code: '0601011', text: '폴스바겐 파이낸셜' },
        { icon: true, code: '0601012', text: '하나캐피탈' },
        { icon: true, code: '0601013', text: '한국투자캐피탈' },
        { icon: true, code: '0601014', text: '현대캐피탈' },
        { icon: true, code: '0601015', text: '효성캐피탈' },
        { icon: false, code: '0601016', text: '나우아이비캐피탈' },
        { icon: false, code: '0601017', text: '데라게라덴' },
        { icon: false, code: '0601018', text: '메가인베스트먼트' },
        { icon: false, code: '0601019', text: '메리츠캐피탈' },
        { icon: false, code: '0601020', text: '메이슨캐피탈' },
        { icon: false, code: '0601021', text: 'CHN리스' },
        { icon: false, code: '0601022', text: 'DB캐피탈' },
        { icon: false, code: '0601023', text: 'NH농협캐피탈' },
        { icon: false, code: '0601024', text: 'IBK캐피탈' },
        { icon: false, code: '0601025', text: 'JB우림피탈' },

        // 통신/기타
        { icon: true, code: '0801001', text: 'SKT' },
        { icon: true, code: '0801002', text: 'KT' },
        { icon: true, code: '0801003', text: 'LG U+' },
        { icon: true, code: '0801004', text: '헬로 CJ' },
        { icon: true, code: '0802001', text: '국민건강보험공단' },
        { icon: true, code: '0802002', text: '근로복지공단' },
        { icon: true, code: '0802003', text: '기술보증기금' },
        { icon: true, code: '0802004', text: '서민금융진흥원' },
        { icon: true, code: '0802005', text: '소상공인시장진흥공단' },
        { icon: true, code: '0802006', text: '신용보증기금' },
        { icon: true, code: '0802007', text: '신용회복위원회' },
        { icon: true, code: '0802008', text: '우리종합금융' },
        { icon: true, code: '0802009', text: '중소기업중앙회' },
        { icon: true, code: '0802010', text: '중소벤처기업진흥공단' },
        { icon: true, code: '0802011', text: '한국거래소' },
        { icon: true, code: '0802012', text: '한국무역보험공사' },
        { icon: true, code: '0802013', text: '한국자산관리공사' },
        { icon: true, code: '0802014', text: '한국장학재단' },
        { icon: true, code: '0802015', text: '한국증권금융' },
        { icon: false, code: '0802016', text: '(구)한국해양보증보험' },
        { icon: false, code: '0802017', text: '넥스트자산관리' },
        { icon: false, code: '0802018', text: '농업현동조합자산관리' },
        { icon: false, code: '0802019', text: '대신에이엠씨' },
        { icon: false, code: '0802020', text: '메이트플러스' },
        { icon: false, code: '0802021', text: '엠지신용정보' },
        { icon: false, code: '0802022', text: '연합자산관리' },
        { icon: false, code: '0802023', text: '주택도시보증공사' },
        { icon: false, code: '0802024', text: '한국자산관리공사' },
        { icon: false, code: '0802025', text: '한국증권금융' },
        { icon: false, code: '0802026', text: '화인파트너스' },
        { icon: true, code: '0803001', text: '건설공제조합' },
        { icon: true, code: '0803002', text: '기계설비건설공제조합' },
        { icon: true, code: '0803003', text: '소프트웨어공제조합' },
        { icon: true, code: '0803004', text: '엔지니어링공제조합' },
        { icon: true, code: '0803005', text: '자본재공제조합' },
        { icon: true, code: '0803006', text: '전기공사공제조합' },
        { icon: true, code: '0803007', text: '전문건설공제조합' },
        { icon: true, code: '0804001', text: '신용보증재단중앙회' },
        { icon: true, code: '0804002', text: '강원신용보증재단' },
        { icon: true, code: '0804003', text: '경기신용보증재단' },
        { icon: true, code: '0804004', text: '경남신용보증재단' },
        { icon: true, code: '0804005', text: '경북신용보증재단' },
        { icon: true, code: '0804006', text: '광주신용보증재단' },
        { icon: true, code: '0804007', text: '대구신용보증재단' },
        { icon: true, code: '0804008', text: '대전신용보증재단' },
        { icon: true, code: '0804009', text: '부산신용보증재단' },
        { icon: true, code: '0804010', text: '서울신용보증재단' },
        { icon: true, code: '0804011', text: '울산신용보증재단' },
        { icon: true, code: '0804012', text: '인천신용보증재단' },
        { icon: true, code: '0804013', text: '전남신용보증재단' },
        { icon: true, code: '0804014', text: '전북신용보증재단' },
        { icon: true, code: '0804015', text: '제주신용보증재단' },
        { icon: true, code: '0804016', text: '충남신용보증재단' },
        { icon: true, code: '0804017', text: '충북신용보증재단' },
      ],
      bankList: [],
      bankList1: [],
      bankList2: [],
      bankList3: [],
      cardList: [],
      investList: [],
      investList1: [],
      investList2: [],
      insuranceList: [],
      insuranceList1: [],
      insuranceList2: [],
      creditList: [],
      capitalList: [],
      electronicFinanceList: [],
      etcList: [],
      etcList1: [],
      etcList2: [],
      etcList3: [],
      etcList4: [],
    };
  },
  watch: {
    selectVal1() {
      this.totalSelectValChk();
    },
    selectVal2() {
      this.totalSelectValChk();
    },
    selectVal3() {
      this.totalSelectValChk();
    },
    selectVal4() {
      this.totalSelectValChk();
    },
    selectVal5() {
      this.totalSelectValChk();
    },
    selectVal6() {
      this.totalSelectValChk();
    },
    selectVal7() {
      this.totalSelectValChk();
    },
    selectVal8() {
      this.totalSelectValChk();
    },
  },
  beforeMount() {
    this.firstSetting();
  },
  methods: {
    totalSelectValChk() {
      this.totalSelectVal = [
        ...this.selectVal1,
        ...this.selectVal2,
        ...this.selectVal3,
        ...this.selectVal4,
        ...this.selectVal5,
        ...this.selectVal6,
        ...this.selectVal7,
        ...this.selectVal8,
      ];
    },
    firstSetting() {
      this.bankList = this.arraySetting('01');
      this.bankList1 = this.arraySetting('01', '01');
      this.bankList2 = this.arraySetting('01', '02');
      this.bankList3 = this.arraySetting('01', '03');
      this.cardList = this.arraySetting('02');
      this.investList = this.arraySetting('03');
      this.investList1 = this.arraySetting('03', '01');
      this.investList2 = this.arraySetting('03', '02');
      this.insuranceList = this.arraySetting('04');
      this.insuranceList1 = this.arraySetting('04', '01');
      this.insuranceList2 = this.arraySetting('04', '02');
      this.creditList = this.arraySetting('05');
      this.capitalList = this.arraySetting('06');
      this.electronicFinanceList = this.arraySetting('07');
      this.etcList = this.arraySetting('08');
      this.etcList1 = this.arraySetting('08', '01');
      this.etcList2 = this.arraySetting('08', '02');
      this.etcList3 = this.arraySetting('08', '03');
      this.etcList4 = this.arraySetting('08', '04');
    },
    arraySetting(val1, val2 = null) {
      let newArray = [];
      newArray = this.companyList.filter((item) => {
        if (item.code.substr(0, 2) === val1) {
          if (val2 !== null) {
            if (item.code.substr(2, 2) === val2) {
              return item;
            }
            return null;
          }
          return item;
        }
        return null;
      });
      return newArray;
    },
    inputDelEvt() {
      this.firstSetting();
      this.isSearch = false;
    },
    searchBtn() {
      if (this.searchVal === '') {
        this.firstSetting();
        this.isSearch = false;
      } else {
        this.firstSetting();
        this.searchSetting(this.searchVal.toLowerCase());
        this.isSearch = true;
      }
    },
    searchSetting(keyword) {
      this.bankList = this.searchArraySetting(this.bankList, keyword);
      this.bankList1 = this.searchArraySetting(this.bankList1, keyword);
      this.bankList2 = this.searchArraySetting(this.bankList2, keyword);
      this.bankList3 = this.searchArraySetting(this.bankList3, keyword);
      this.cardList = this.searchArraySetting(this.cardList, keyword);
      this.investList = this.searchArraySetting(this.investList, keyword);
      this.investList1 = this.searchArraySetting(this.investList1, keyword);
      this.investList2 = this.searchArraySetting(this.investList2, keyword);
      this.insuranceList = this.searchArraySetting(this.insuranceList, keyword);
      this.insuranceList1 = this.searchArraySetting(this.insuranceList1, keyword);
      this.insuranceList2 = this.searchArraySetting(this.insuranceList2, keyword);
      this.creditList = this.searchArraySetting(this.creditList, keyword);
      this.capitalList = this.searchArraySetting(this.capitalList, keyword);
      this.electronicFinanceList = this.searchArraySetting(this.electronicFinanceList, keyword);
      this.etcList = this.searchArraySetting(this.etcList, keyword);
      this.etcList1 = this.searchArraySetting(this.etcList1, keyword);
      this.etcList2 = this.searchArraySetting(this.etcList2, keyword);
      this.etcList3 = this.searchArraySetting(this.etcList3, keyword);
      this.etcList4 = this.searchArraySetting(this.etcList4, keyword);
    },
    searchArraySetting(array, keyword) {
      let newArray = [];
      newArray = array.filter((item) => {
        if (item.text.toLowerCase().indexOf(keyword) >= 0) {
          return item;
        }
        return null;
      });
      return newArray;
    },
  },
};
</script>

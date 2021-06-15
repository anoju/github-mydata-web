<template>
  <div class="section portfolio_wrap">
    <!-- 투자 프렌즈 없는경우 -->
    <template v-if="noData">
      <kb-swiper class="mg_t0 portfolio_box pd_t0">
        <swiper-slide>
          <kb-button not aTag class="none_box block">
            <i class="ico"></i>
            <p class="tit">삐빅~ <br />당신의 성향이 궁금하다</p>
            <p class="text">어떤 투자 성향이세요?<br />나의 투자 프렌즈를 만나보세요</p>
          </kb-button>
        </swiper-slide>
      </kb-swiper>
    </template>
    <!-- //투자 프렌즈 없는경우 -->

    <template v-if="!noData">
      <kb-swiper class="mg_t0 portfolio_box pd_t0">
        <swiper-slide>
          <!--
          현재 적용이미지는 임시 추후 변경
          포스아거(공격투자형) : type1
          루나키키(적극투자형) : type2
          멜랑콜리(위험중립형) : type3
          심쿵비비(안정추구형) : type4
          롤로라무(안정형) : type5
        -->
          <div class="model_box main_swiper type1"><!-- 타입별 클래스 적용위치 -->
            <h3>
              <span>투자는 돈을 벌려고 하는거야</span>
              공격투자형
            </h3>
            <div class="img type1"></div><!-- 타입별 클래스 적용위치 -->
            <kb-button aTag not class="btn_friends">프렌즈 다시 찾기</kb-button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="model_box main_swiper type2"><!-- 타입별 클래스 적용위치 -->
            <h3>
              <span>지금 살까? 말까? 그래 사자!</span>
              적극투자형
            </h3>
            <div class="img type2"></div><!-- 타입별 클래스 적용위치 -->
            <kb-button aTag not class="btn_friends">프렌즈 다시 찾기</kb-button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="model_box main_swiper type3"><!-- 타입별 클래스 적용위치 -->
            <h3>
              <span>위험 더하기 안전은 투자의 정석!</span>
              위험중립형
            </h3>
            <div class="img type3"></div><!-- 타입별 클래스 적용위치 -->
            <kb-button aTag not class="btn_friends">프렌즈 다시 찾기</kb-button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="model_box main_swiper type4"><!-- 타입별 클래스 적용위치 -->
            <h3>
              <span>네가 오르면 나도 행복해.</span>
              안정추구형
            </h3>
            <div class="img type4"></div><!-- 타입별 클래스 적용위치 -->
            <kb-button aTag not class="btn_friends">프렌즈 다시 찾기</kb-button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="model_box main_swiper type5"><!-- 타입별 클래스 적용위치 -->
            <h3>
              <span>그래서 안전해? 안전해?</span>
              안정형
            </h3>
            <div class="img type5"></div><!-- 타입별 클래스 적용위치 -->
            <kb-button aTag not class="btn_friends">프렌즈 다시 찾기</kb-button>
          </div>
        </swiper-slide>
      </kb-swiper>
    </template>

    <div class="white_box mg_t24">
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

    <!-- 모르면 손해보는 요즘 테마 -->
    <kb-title-bar h3 class="mg_t36">
      <template slot="left">
        <kb-button aTag link class="left fz_18 fw_bold">모르면 손해보는 요즘 테마<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
      </template>
    </kb-title-bar>

    <kb-swiper auto-width class="theme_list">
      <swiper-slide>
        <kb-button aTag class="tit" style="background:#3bae6c">코로나로 주목 받은 바이오</kb-button>
      </swiper-slide>
      <swiper-slide>
        <kb-button aTag class="tit" style="background:#3e61ba">코로나로 주목 받은 바이오</kb-button>
      </swiper-slide>
      <swiper-slide>
        <kb-button aTag class="tit" style="background:#74cacc">코로나로 주목 받은 바이오</kb-button>
      </swiper-slide>
      <swiper-slide>
        <kb-button aTag class="tit" style="background:#7040b1">코로나로 주목 받은 바이오</kb-button>
      </swiper-slide>
      <swiper-slide>
        <kb-button aTag class="tit" style="background:#3bae6c">코로나로 주목 받은 바이오</kb-button>
      </swiper-slide>
    </kb-swiper>
    <!-- //모르면 손해보는 요즘 테마 -->

    <!-- 손쉬운 투자공식 모델포트폴리오 -->
    <kb-title-bar h3 class="mg_t36">
      <template slot="left">
        <kb-button aTag link class="left fz_18 fw_bold">손쉬운 투자공식 모델포트폴리오<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
      </template>
    </kb-title-bar>

    <kb-swiper class="model_portfolio">
      <swiper-slide>
        <div class="type_box">
          <p class="tit">투자처 발견!<br />앞으로 맹렬히 돌진</p>
          <kb-button aTag link blue>공격투자형 상품 보러가기 <i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          <!--
            공격투자 : type1
            적극투자 : type2
            위험중립 : type3
            안정추구 : type4
            안정형 : type5
          -->
          <p class="img type1"></p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="type_box">
          <p class="tit">차곡차곡 모은 자산 <br />두배로 불리는 복리 마법</p>
          <kb-button aTag link blue>적극투자형 상품 보러가기 <i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          <p class="img type2"></p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="type_box">
          <p class="tit">차커피값 아껴서 <br />안전하게 불리는 내 자산 </p>
          <kb-button aTag link blue>위험중립형 상품 보러가기 <i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          <p class="img type3"></p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="type_box">
          <p class="tit">신도 부러워 할 미래 투자 <br />갓 라이프!</p>
          <kb-button aTag link blue>안정추구형 상품 보러가기 <i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          <p class="img type4"></p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="type_box">
          <p class="tit">덕투일치! <br />덕질과 투자를 동시에</p>
          <kb-button aTag link blue>안정형 상품 보러가기 <i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
          <p class="img type5"></p>
        </div>
      </swiper-slide>
    </kb-swiper>
    <!-- //손쉬운 투자공식 모델포트폴리오 -->

    <!-- 거인의 어깨에서 투자를 보다 -->
    <kb-title-bar h3>
      <template slot="left">
        <p class="left fz_18 fw_bold">거인의 어깨에서 투자를 보다</p>
      </template>
    </kb-title-bar>

    <kb-swiper class="pick_list">
      <swiper-slide>
        <kb-button not aTag class="btn_stock">
          <strong>장기보유 고수가<br>1주일 동안 매수한 종목은?</strong>
          <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
          <i class="ico_pick ico1">투자품격</i>
          <!--
            투자품격 ico1
            보유멘탈 ico2
            자본포스 ico3
            운빨충만 ico4
            한개가 더 있다고 함?? ico5
          -->
        </kb-button>
      </swiper-slide>
      <swiper-slide>
        <kb-button not aTag class="btn_stock">
          <strong>장기보유 고수가<br>1주일 동안 매수한 종목은?</strong>
          <p class="tip_txt">사고팔기가 웬 말이냐?<br>그저 있는 듯 없는 듯 지니고 있어라!</p>
          <i class="ico_pick ico1">투자품격</i>
          <!--
            투자품격 ico1
            보유멘탈 ico2
            자본포스 ico3
            운빨충만 ico4
            한개가 더 있다고 함?? ico5
          -->
        </kb-button>
      </swiper-slide>
    </kb-swiper>
    <!-- //거인의 어깨에서 투자를 보다 -->

    <!-- 두근 두근 이번 달 성적 -->
    <kb-title-bar h3>
      <template slot="left">
        <p class="left fz_18 fw_bold">두근 두근 이번 달 성적</p>
      </template>
    </kb-title-bar>

    <template v-if="noData">
      <kb-button not aTag class="white_box block none_box2">
        <p class="text">어디서 투자 좀 해봤다는 <br />소리를 들어봤다면</p>
        <p class="tit">투자 성적표를 펼쳐 볼 차례!</p>
        <i class="ico ico1"></i>
      </kb-button>

      <kb-button not aTag class="white_box block none_box2">
        <p class="text">나의 포트폴리오 전망은 <br />맑음? 흐림?</p>
        <p class="tit">내 투자 날씨를 진단해보세요.</p>
        <i class="ico ico2"></i>
      </kb-button>
    </template>

    <template v-if="!noData">
      <div class="pattern_card">
        <kb-button aTag not class="btn_link fz_16 fw_bold">이번 달 획득 카드<i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
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
                  </div>
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
                  </div>
                </div>
              </div>
            </swiper-slide>
          </kb-swiper>
        </div>
      </div>

      <div class="white_box portfolio_box">
        <kb-button aTag not class="flex_wrap fz_16 fw_bold">이번달 전망<i aria-hidden="true" class="bt_ic_arr mg_la"></i></kb-button>
        <ul class="prospect_list mg_t24 mg_b32">
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
      </div>
    </template>
    <!-- //두근 두근 이번 달 성적 -->

    <!-- 달콤한 미래 투자 -->
    <kb-title-bar h3 class="mg_t32">
      <template slot="left">
        <p class="left fz_18 fw_bold">달콤한 미래 투자</p>
      </template>
    </kb-title-bar>

    <div class="white_box mg_t16">
      <IN10A000 />
    </div>

    <template v-if="noData">
      <kb-button not aTag class="white_box block none_box2">
        <p class="text">파이어족이 되려면 <br />뭐부터 준비해야하지?</p>
        <p class="tit">노후 준비를 진단 해보세요.</p>
        <i class="ico ico3"></i>
      </kb-button>
    </template>

    <template v-if="!noData">
      <div class="white_box mg_t8 pd_b20">
        <kb-button aTag not class="flex_wrap fz_16 fw_bold">김스타님의 미래 준비<i aria-hidden="true" class="bt_ic_arr mg_la"></i></kb-button>

        <div class="my_assets">
          <p class="tit">은퇴 시점 예상 보유 자산</p>
          <p class="money">1,233,000,000원</p>

          <div class="process_box">
            <p class="fz_12 fc_blue2 fw_bold mg_b10">은퇴준비 70% 진행</p>
            <div class="bar">
              <span style="width:70%;">진행률</span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- //달콤한 미래 투자 -->

    <!-- 운명을 건 투자 발굴 -->
    <kb-title-bar h3 class="mg_t32">
      <template slot="left">
        <p class="left fz_18 fw_bold">운명을 건 투자 발굴</p>
      </template>
    </kb-title-bar>

    <kb-button not aTag class="white_box invest_box block">
      <p class="text">혼자 뭐해야 할지 막막해?</p>
      <p class="tit">
        자네, 나와 함께<br />
        <span class="fc_blue">투자를 시작해보겠나?</span>
      </p>
      <i class="ico ico1"></i>
    </kb-button>

    <kb-button not aTag class="white_box invest_box block">
      <p class="text">오늘의 발견이 내일의 수익으로</p>
      <p class="tit">
        <span class="fc_purple">금융상품 검색</span>으로 <br />
        내 투자처를 찾다!
      </p>
      <i class="ico ico2"></i>
    </kb-button>
    <!-- //운명을 건 투자 발굴 -->

    <div class="mg_t34 t_center">
      <kb-button aTag not class="btn_setting" @click="showModalPopup($event)">투자생활 홈 편집하기</kb-button>
    </div>
  </div>
</template>
<script>
import IN10A000 from '@/views/IN/10/IN10A000.vue';

export default {
  name: 'IN00A001',
  inject: ['isSwiperTouch'],
  components: {
    IN10A000,
  },
  data() {
    return {
      noData: true,
      isStar1: false,
      isStar2: false,
      isStar3: false,
    };
  },
  methods: {
    showModalPopup(el) {
      this.$modal({
        component: () => import('@/views/IN/00/IN00A002.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>

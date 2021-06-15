<template>
  <div class="pattern_card pd_b60">
    <div class="section">
      <p class="date">
        <kb-select
          v-model="selectVal1"
          :options="selectOpt1"
          inline
        />
      </p>

      <p class="page_tit">나의 투자습관</p>
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

      <p class="page_tit">투자 성적표</p>
      <div class="card_wrap">
        <kb-swiper>
          <swiper-slide>
            <div class="card_list">
              <div class="in">
                <p class="tit">이익 관리</p>
                <p class="img ico14"></p>
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
                <p class="img ico22"></p>
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
  </div>
</template>
<script>

export default {
  name: 'IN05A006',
  data() {
    return {
      selectVal1: '5',
      selectOpt1: [
        { text: '2021년 1월', value: '1' },
        { text: '2021년 2월', value: '2' },
        { text: '2021년 3월', value: '3' },
        { text: '2021년 4월', value: '4' },
        { text: '2021년 5월', value: '5' },
        { text: '2021년 6월', value: '6' },
        { text: '2021년 7월', value: '7' },
        { text: '2021년 8월', value: '8' },
        { text: '2021년 9월', value: '9' },
        { text: '2021년 10월', value: '10' },
        { text: '2021년 11월', value: '11' },
        { text: '2021년 12월', value: '12' },
      ],
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

<template>
  <div class="main_to_wrap">
    <kb-swiper class="main_to_swiper" autoplay :delay="5000" pagingType="fraction">
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_1.png" alt=""></div><!-- 관리자등록이미지 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>메인문구~ 메인문구~ 메인문구~ 메인문구~ </strong>
              </div>
              <div class="info">
                <div class="th">서브문구1~ 서브문구1~ </div><!-- 출력 내용이 없으면 .th 영역이 아예 안나오게 -->
                <div class="td"><strong>서브문구2~ 서브문구2~ </strong></div><!-- 출력 내용이 없으면 .td 영역이 아예 안나오게 -->
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_1.png" alt=""></div><!-- D-day 달력 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>내보증보험의 반환일이 7일후 예정되어있어요.</strong>
              </div>
              <div class="info">
                <div class="th">반환금액</div>
                <div class="td"><strong>999,999,999원</strong></div>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_2.png" alt=""></div><!-- 카드소비 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>이번달 나의 카드 청구액은 얼마일까요?</strong>
              </div>
              <div class="info">
                <div class="th">총 청구액</div>
                <div class="td"><strong>999,999,999원</strong></div>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_3.png" alt=""></div><!-- 추가입금필요 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>지출이 7일 후 예정되어 있어요. 추가입금이 필요해요.</strong>
              </div>
              <div class="info">
                <div class="th">필요금액</div>
                <div class="td"><strong>999,999,999원</strong></div>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_4.png" alt=""></div><!-- 미납금 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>미납금이 발생했어요. 확인이 필요해요.</strong>
              </div>
              <div class="info">
                <div class="th">총 미납금</div>
                <div class="td"><strong>999,999,999원</strong></div>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_5.png" alt=""></div><!-- 자산체크 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>2개월 연속 출금된 내역이 2건 있어요. 지출관리 대상에 등록해보세요.</strong>
              </div>
              <div class="info">
                <div class="th">매월 출금여부를 체크할 수 있어요.</div>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_6.png" alt=""></div><!-- 자산증가 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>지난달 대비 총자산이 늘었어요.</strong>
              </div>
              <div class="info">
                <div class="th">증감액</div>
                <div class="td"><strong>999,999,999원</strong></div>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_7.png" alt=""></div><!-- 자산감소 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>지난달 대비 총자산이 쥴었어요.</strong>
              </div>
              <div class="info">
                <div class="th">증감액</div>
                <div class="td"><strong>-999,999,999원</strong></div>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_8.png" alt=""></div><!-- Play:스타벅스 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>내자산 비타민 퀘스트를 진행해보세요.</strong>
              </div>
              <div class="info">
                <div class="th">모두 완료하면</div>
                <div class="td"><strong>스타벅스 커피를 드려요.</strong></div>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_9.png" alt=""></div><!-- Play:카드소비줄이기 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>내 자산 불리기의 시작. 카드 소비 줄이기 목표를 세워보세요.</strong>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_10.png" alt=""></div><!-- 가상투자 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>투자를 쉽고 재미있게 룰렛을 돌려 가상투자를 시작해보세요!</strong>
              </div>
              <div class="info">
                <div class="th">가상투자금을</div>
                <div class="td"><strong>최대 1천만원까지 드려요.</strong></div>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_11.png" alt=""></div><!-- Play:스크랩 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>관심있는 주식에 대한 뉴스자료를 수집해보세요.</strong>
              </div>
              <div class="info">
                <div class="th">내메모의 메모기능을 체험해보세요</div>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_12.png" alt=""></div><!-- 투자진단 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>주식투자습관진단에서 투자나이를 입력하고 행운의 카드를 획득해보세요.</strong>
              </div>
              <div class="info">
                <div class="th">나는 날렵한 사냥꾼일까? 새의 심장일까?</div>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_13.png" alt=""></div><!-- 투자지식 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>가장 많이 보유한 종목의 고수의 매매동향은 어떨까? </strong>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_14.png" alt=""></div><!-- 투자상상튀즈 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>10년전 삼성전자에 투자했다면 현재수익률은 얼마나 될까?</strong>
              </div>
              <div class="info">
                <div class="th">재미있는 투자 퀴즈를 풀어보세요.</div>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <div class="inner">
            <div class="img"><img src="@/assets/images/main/to_insight_15.png" alt=""></div><!-- 사후관리 -->
            <kb-button a-tag not class="cont">
              <div class="tit">
                <strong>고객님의 ELS8호가 Knock-in 발생 위험구간에 진입했어요.</strong>
              </div>
            </kb-button>
            <kb-button not class="edge">Insight</kb-button>
          </div>
        </div>
      </swiper-slide>
    </kb-swiper>
    <div class="main_to_quick">
      <!-- 아이콘 구분: 자주가는 메뉴 편집목록 1뎁스 기준
        ico_1: 오늘
        ico_2: 투자생활
        ico_3: 금융생활
        ico_4: 마이페이지
        ico_5: 환경설정
        ico_6: 내메모
        ico_7: 내 자산 비타민
        ico_8: 내 자산 QnA
        ico_9: 고객센터
      -->
      <kb-swiper class="main_quick_swiper">
        <swiper-slide>
          <kb-button not a-tag class="quick_item">
            <div class="quick_ico ico_1"></div>
            <div class="txt">오늘</div>
          </kb-button>
        </swiper-slide>
        <swiper-slide>
          <kb-button not a-tag class="quick_item">
            <div class="quick_ico ico_2"></div>
            <div class="txt">투자생활</div>
          </kb-button>
        </swiper-slide>
        <swiper-slide>
          <kb-button not a-tag class="quick_item">
            <div class="quick_ico ico_3"></div>
            <div class="txt">금융생활</div>
          </kb-button>
        </swiper-slide>
        <swiper-slide>
          <kb-button not a-tag class="quick_item">
            <div class="quick_ico ico_4"></div>
            <div class="txt">마이페이지</div>
          </kb-button>
        </swiper-slide>
        <swiper-slide>
          <kb-button not a-tag class="quick_item">
            <div class="quick_ico ico_5"></div>
            <div class="txt">환경설정</div>
          </kb-button>
        </swiper-slide>
        <swiper-slide>
          <kb-button not a-tag class="quick_item">
            <div class="quick_ico ico_6"></div>
            <div class="txt">내메모</div>
          </kb-button>
        </swiper-slide>
        <swiper-slide>
          <kb-button not a-tag class="quick_item">
            <div class="quick_ico ico_7"></div>
            <div class="txt">내 자산 비타민</div>
          </kb-button>
        </swiper-slide>
        <swiper-slide>
          <kb-button not a-tag class="quick_item">
            <div class="quick_ico ico_8"></div>
            <div class="txt">내 자산 QnA</div>
          </kb-button>
        </swiper-slide>
        <swiper-slide>
          <kb-button not a-tag class="quick_item">
            <div class="quick_ico ico_8"></div>
            <div class="txt">고객센터</div>
          </kb-button>
        </swiper-slide>
        <swiper-slide>
          <kb-button not a-tag class="quick_item" @click="showPop($event.target)">
            <div class="quick_ico ico_0"></div>
            <div class="txt">메뉴편집</div>
          </kb-button>
        </swiper-slide>
      </kb-swiper>
    </div>
    <div class="main_to_qna">
      <kb-button a-tag not>
        <div class="inner">
          <div class="info">
            <div class="th">내 자산 QnA</div>
            <div class="td"><strong>나는 어느 요일에 지출이 많지?</strong></div>
          </div>
        </div>
      </kb-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TO00A001',
  inject: ['isSwiperTouch'],
  methods: {
    showPop(el) {
      this.$modal({
        component: () => import('@/views/TO/01/TO01C001.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>

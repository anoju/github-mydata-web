<template>
  <kb-pop
    full
  >
    <kb-pop-body>
      <kb-swiper full-width auto-height>
        <swiper-slide>
          <div class="section friends_wrap">

            <div class="friends_img type1">
              <i class="friends_ico"></i>
              <p class="name">포스 아거</p>
              <p class="name_info">공격투자형 프렌즈</p>
            </div>

            <p class="tit">도전 정신이 넘치는 4차원 스파크형</p>
            <p class="text">새로운 투자를 위해 자료를 분석하고 조사해서 전략 세우는 과정이 너무 즐거워요!! <br />내가 세운 전략으로 수익이 발생하면 엄청 짜릿하답니다.</p>

            <div class="hashtag">
              <span>#고위험고수익.</span>
              <span>#본투비투자자.</span>
              <span>#ENTP</span>
            </div>

            <div class="flex mg_t42">
              <kb-button yellow>프렌즈 선택하기</kb-button>
            </div>

          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="section friends_wrap">

            <div class="friends_img type2">
              <i class="friends_ico"></i>
              <p class="name">루나 키키</p>
              <p class="name_info">적극투자형 프렌즈</p>
            </div>

            <p class="tit">일도, 노는것도 놓치지 않는 스마트 핵인싸</p>
            <p class="text">친구들과 함께 맛있는 음식을 먹으면서 이야기 하는 시간이 가장 즐거워요!! <br />
              SNS 업로드 하는것을 좋아하고, 친구들과 쓰는 돈은 안 아까워요.</p>

            <div class="hashtag">
              <span>#넘치는 투자의욕.</span>
              <span>#발명가형.</span>
              <span>#ENFP</span>
            </div>

            <div class="flex mg_t42">
              <kb-button yellow>프렌즈 선택하기</kb-button>
            </div>

          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="section friends_wrap">

            <div class="friends_img type3">
              <i class="friends_ico"></i>
              <p class="name">멜랑 콜리</p>
              <p class="name_info">위험중립형 프렌즈</p>
            </div>

            <p class="tit">알뜰살뜰 성실한 일꾼 세상의 소금형</p>
            <p class="text">불필요한 비용은 최대한 절약해요. 절약과 저축은 나의 행복한 미래를 위한 투자라고 생각해요.<br />오늘의 소비를 내일로 미루는 것!<br />재테크의 핵심은 절약과 저축이죠!</p>

            <div class="hashtag">
              <span>#안정적균형투자.</span>
              <span>#낭비는나의적.</span>
              <span>#ISTJ</span>
            </div>

            <div class="flex mg_t42">
              <kb-button yellow>프렌즈 선택하기</kb-button>
            </div>

          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="section friends_wrap">

            <div class="friends_img type4">
              <i class="friends_ico"></i>
              <p class="name">심쿵 비비</p>
              <p class="name_info">안정추구형 프렌즈</p>
            </div>

            <p class="tit">가족과 친구를 사항하는 다정다감한 친선도모형</p>
            <p class="text">가치 있게 돈 버는 방법을 알고, 돈과 함께 가족의 행복을 소중하게 생각해요!<br />돈을 버는 이유는 가족의 행복을 위해서죠!<br />가족과 행복한 시간을 보내기 위해 많은 노력을 하고 있어요.</p>

            <div class="hashtag">
              <span>#우리가족미래준비.</span>
              <span>#안전제일.</span>
              <span>#ESFJ</span>
            </div>

            <div class="flex mg_t42">
              <kb-button yellow>프렌즈 선택하기</kb-button>
            </div>

          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="section friends_wrap">

            <div class="friends_img type5">
              <i class="friends_ico"></i>
              <p class="name">롤로 라무</p>
              <p class="name_info">안정형 프렌즈</p>
            </div>

            <p class="tit">워라벨을 추구하는 자유로운 혼놀힙스터</p>
            <p class="text">단 한번 뿐인 소중한 내인생!  <br />워라밸이 가장중요해요! 나를 위한 소비에는 아낌없이 FLEX~ 돈은 쓰기 위해 버는 거 아닌가요? <br />후회없이 즐길래요!</p>

            <div class="hashtag">
              <span>#욜로라이프.</span>
              <span>#성인군자형.</span>
              <span>#ISFP</span>
            </div>

            <div class="flex mg_t42">
              <kb-button yellow>프렌즈 선택하기</kb-button>
            </div>

          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="section friends_wrap">
            <p class="mg_t60 fz_26 fw_bold t_center">어떤 유형인지 <br />모르겠다면..</p>

            <i class="ico_no"></i>

            <p class="fz_18 mg_t24 t_center">간단한 설문을 통해 <br />나는 어떤 유형인지 알아볼까요?</p>

            <div class="flex mg_t80">
              <kb-button yellow>유형 설문 테스트하기</kb-button>
            </div>

          </div>
        </swiper-slide>
      </kb-swiper>
      <div class="flex_wrap align_center justify_center mg_t32">
        <kb-button
          not
          class="tooltip_btn mg_r5"
          v-tooltip="'views/PE/01/PE01A001_tip.vue'"
          aria-label="팝업으로 상세내용 확인"
        >팝업으로 상세내용 확인</kb-button>
        <kb-button link blue>투자성향 만들기 <i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'TO01E008',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

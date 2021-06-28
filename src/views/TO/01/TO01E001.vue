<template>
  <kb-page page-title="내 자산 비타민" grayBg>
    <kb-page-body>
      <div class="section">
        <div class="assets_vitamion_wrap">
          <div class="info_box">
            <div class="inner">
              <p class="sub_text">가족과 친구를 사랑하는 다정다감한</p>
              <p class="tit">사랑가득오늘님</p>
              <div class="progressbar">
                <!-- 레벨별로 클래스 추가 level1 ~ level10 -->
                <i class="level1"></i>
                <div class="bar">
                  <span :style="{width:`${userInfo.point/userInfo.total*100}%`}"></span>
                </div>
                <p class="text"><strong>{{userInfo.point}}</strong>/{{userInfo.total}}</p>
              </div>

              <div class="mg_t16 t_right">
                <kb-button link class="fz_12 fc_666">나의 레벨 지도 보기 <i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
              </div>

              <kb-button not aTag class="img">
                <!--
                  케릭터 이미지 별 클래스 정의
                  루나키키 : ico1
                  포스악어 : ico2
                  심쿵비비 : ico3
                  롤로나무 : ico4
                  멜랑콜리 : ico5
                  의문의 낯선자 : ico6
                -->
                <i class="character_ico ico1"></i>
              </kb-button>
            </div>
          </div>

          <kb-tabs type2 class="mg_t40" v-model="tabIdx">
            <kb-tab
              title="오늘의 퀘스트"
            >
              <!-- 오늘의 퀘스트 -->
              <p class="quest_count">1/200</p>
              <div class="quest_list">
                <div>
                  <p class="tit">나만의 닉네임을 만들어보세요.</p>
                  <!-- 보상받기 -->
                  <kb-button not aTag class="btn_point" @click="pointUp">10P</kb-button>
                </div>
                <div>
                  <p class="tit">캐릭터를 변경해보세요.</p>
                  <!-- 보상받기 -->
                  <kb-button not aTag class="btn_point" @click="level10">10P</kb-button>
                </div>
                <div>
                  <p class="tit">나만의 프렌즈를 선택해보세요.</p>
                  <!-- 바로가기 -->
                  <kb-button not aTag class="btn_line">바로가기</kb-button>
                </div>
                <!-- 완료시에 success -->
                <div class="success">
                  <p class="tit">오늘은 어떤 소식이 있을까?<br /> Insight 카드를 확인해보세요.</p>
                  <!-- 바로가기 -->
                  <kb-button not aTag>완료</kb-button>
                </div>
              </div>
              <!-- //오늘의 퀘스트 -->

              <!-- 레벨 10 일때 -->
              <div class="mg_t80 mg_b80 t_center">
                <p class="fz_20 fw_bold">축하합니다!</p>
                <p class="fz_16 mg_t16 fc_666">
                  레벨 10을 달성하셔서 <br />
                  오늘의 퀘스트는 자동 종료되었어요. <br />
                  내일이 되면 레벨1로 새롭게 리셋됩니다. <br />
                  내일 또 만나요!
                </p>
                <kb-button line blue class="mg_t24 pd_l30 pd_r30">커피쿠폰 신청하기</kb-button>
                <kb-button line blue disabled class="mg_t24 pd_l30 pd_r30">커피쿠폰 신청완료</kb-button>
              </div>
              <!-- //레벨 10 일때 -->
            </kb-tab>
            <kb-tab
              title="소비줄이기"
            >
              <template v-if="noData">
                <div class="no_list_txt icon">
                  <strong class="tit">
                    진행중인 목표가 없어요.<br />
                    목표 세우기를 통해 소비를 줄여보세요.</strong>

                  <div class="btn_group">
                    <kb-button aTag line blue>+ 목표 세우기</kb-button>
                  </div>
                </div>

              </template>

              <template v-if="!noData">
                <div class="flex mg_b12 mg_t24">
                  <kb-button aTag line blue>카드 소비 줄이기 진행 중</kb-button>
                </div>
                <kb-swiper class="mg_t0" full-width index="1" ref="swiperMonth" @swiperChange="slideTo">
                  <swiper-slide>
                    <div class="section">
                      <div class="quest_month">
                        <!-- 매달 달력시 성공, 실패 클래스
                          성공 : success
                          실패 : fail
                        -->
                        <div class="box success">
                          <div>
                            <p class="text">1월</p>
                          </div>
                        </div>
                        <div class="box fail">
                          <div>
                            <p class="text">2월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">3월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">4월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">5월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">6월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">7월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">8월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">9월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">10월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">11월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">12월</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="section">
                      <div class="quest_month">
                        <!-- 매달 달력시 성공, 실패 클래스
                          성공 : success
                          실패 : fail
                        -->
                        <div class="box success">
                          <div>
                            <p class="text">1월</p>
                          </div>
                        </div>
                        <div class="box fail">
                          <div>
                            <p class="text">2월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">3월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">4월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">5월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">6월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">7월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">8월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">9월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">10월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">11월</p>
                          </div>
                        </div>
                        <div class="box">
                          <div>
                            <p class="text">12월</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                </kb-swiper>

                <div class="mg_t10 flex_wrap">
                  <kb-button link class="mg_ra fz_12 fc_666" @click="slideTo(0,true)" v-if="this.swipeBtn === 1">&lt; 전년도 히스토리</kb-button>
                  <kb-button link class="mg_la fz_12 fc_666" @click="slideTo(1,true)" v-if="this.swipeBtn === 0">올해 히스토리 &gt;</kb-button>
                </div>
              </template>
            </kb-tab>
          </kb-tabs>
        </div>

      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'TO01E001',
  data() {
    return {
      tabIdx: 0,
      noData: false,
      userInfo: { level: 'level1', point: 30, total: 50 },
      levelText: '무엇이든 살 수 있는 <br />재력가 버프',
      point: '10',
      swipeBtn: 1,
    };
  },
  watch: {
    '$route.query.tab': {
      handler(tab) {
        if (this.$route.query.tab === undefined) {
          this.tabIdx = 0;
        } else {
          this.tabIdx = Number(tab);
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    if (this.$route.query.tab !== undefined) this.tabIdx = Number(this.$route.query.tab);
  },
  methods: {
    pointUp() {
      this.$alert(`
          <div class="t_center">
            <span class="block fz_16 fc_blue fw_bold">축하합니다!</span>
            <p class="mg_t8 fz_18 fw_bold">${this.point}포인트 획득</p>
          </div>
        `, null, null, {
        addClass: 'levelCharacter2',
      }).then(() => {
        console.log('확인');
      });
    },
    level10() {
      this.$alert(`
          <div class="t_center">
            <span class="block fc_blue fw_bold">LevelUp</span>
            <p class="mg_t8 fz_18 fw_bold">${this.levelText}</p>
          </div>
        `, null, null, {
        addClass: 'levelCharacter1',
      }).then(() => {
        console.log('확인');
      });
    },
    slideTo(idx, btn) {
      if (btn === true) {
        this.$refs.swiperMonth.mySwiper.slideTo(idx);
      }

      this.swipeBtn = idx;
    },

  },
};
</script>

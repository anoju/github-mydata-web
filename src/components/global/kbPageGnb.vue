<template>
  <nav
    id="gnb"
    ref="gnb"
    :class="{show:isShow}"
    :aria-hidden="!isShow"
  >

    <div
      class="bg"
      aria-hidden="true"
    />
    <!-- <div
      class="inner"
      v-touch:start="touchStart"
      v-touch:end="touchEnd"
    > -->
    <div class="inner">
      <div
        class="gnb_header"
        :class="{reduce:isReduce}"
      >
        <div
          ref="headTop"
          class="gnb_head_top"
        >
          <div class="left">
            <div
              v-if="isLogin"
              ref="userInfo"
              class="gnb_user_info"
            >
              <kb-button
                ref="first"
                not
                a-tag
                class="inner"
                to="#"
                @click.native="gnbClose"
              >
                <div class="img">
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
                </div>
                <h2 class="tit">
                  <strong>김증권</strong>님
                </h2>
              </kb-button>
            </div>
            <div
              v-else
              ref="userInfo"
              class="gnb_user_info"
            >
              <kb-button
                ref="first"
                not
                a-tag
                class="inner"
                to="#"
                @click.native="gnbClose"
              >
                <div class="img"></div>
                <h2 class="tit">
                  <strong>로그인을 해주세요</strong>
                </h2>
              </kb-button>
            </div>
          </div>
          <div class="right">
            <kb-button
              v-if="isLogin"
              not
              a-tag
              class="btn_gnb_logout"
              @click.native="gnbClose"
            >
              로그아웃
            </kb-button>
            <kb-button
              not
              ref="home"
              to="/TO/00"
              class="btn_gnb_home"
              aria-label="메인화면으로 이동"
              @click.native="gnbClose"
            >메인으로</kb-button>

          </div>
        </div>
        <kb-button
          not
          a-tag
          class="btn_gnb_close"
          aria-label="전체메뉴 닫기"
          @click="btnGnbClose"
        >전체메뉴 닫기</kb-button>

        <div
          ref="headLink"
          class="gnb_head_link"
        >
          <ul>
            <li><kb-button not><i class="gnb_link_ico_1" />즉시이체</kb-button></li>
            <li><kb-button not><i class="gnb_link_ico_2" />계좌개설</kb-button></li>
            <li><kb-button not><i class="gnb_link_ico_3" />거래내역</kb-button></li>
          </ul>
        </div>
      </div>
      <div class="gnb_content">
        <div class="gnb_dep1">
          <ul>
            <li class="gnb_dep1_li">
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>오늘</span></a>
            </li>
            <li class="gnb_dep1_li">
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>투자생활</span></a>
            </li>
            <li class="gnb_dep1_li">
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>금융생활</span></a>
            </li>
            <li class="gnb_dep1_li">
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>내서랍</span></a>
            </li>
            <li class="gnb_dep1_li">
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>고객센터</span></a>
            </li>
            <li
              v-if="isDev"
              class="gnb_dep1_li"
            >
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>가이드</span></a>
            </li>
          </ul>
          <div class="gnb_dep1_etc">
            <div class="call">
              <kb-button not a-tag class="dl" href="tel:1588-6611">
                <div class="dt">고객센터</div>
                <div class="dd">1588-6611</div>
              </kb-button>
            </div>
            <kb-button line h40>
              <i class="bt_ic_setting" />
              환경설정
            </kb-button>
          </div>
        </div>
        <ul
          ref="wrap"
          class="gnb_dep2_wrap"
          @scroll="wrapScroll($event.target)"
        >
          <!-- 오늘 -->
          <li class="gnb_dep2">
            <div class="gnb_dep2_tit"><strong>오늘</strong></div>
            <ul>
              <li>
                <router-link
                  to="/TO/02/TO02A002"
                  @click.native="gnbClose"
                >
                  총자산
                </router-link>
                <div class="gnb_dep3">
                  <ul>
                    <li>
                      <router-link
                        to="/TO/02/TO02A003"
                        @click.native="gnbClose"
                      >
                        자산변동추이
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link
                  to="/TO/02/TO02D001"
                  @click.native="gnbClose"
                >
                  타임라인
                </router-link>
              </li>
              <li>
                <router-link
                  to="/TO/02/TO02C001"
                  @click.native="gnbClose"
                >
                  월 지출
                </router-link>
                <div class="gnb_dep3">
                  <ul>
                    <li>
                      <router-link
                        to="/TO/02/TO02C002"
                        @click.native="gnbClose"
                      >
                        월 예상 잔고 체크
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/TO/02/TO02C003"
                        @click.native="gnbClose"
                      >
                        현금 잔고 지난 달 비교
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/TO/02/TO02C004"
                        @click.native="gnbClose"
                      >
                        투자 입출금 지난 달 비교
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/TO/02/TO02C005"
                        @click.native="gnbClose"
                      >
                        보험&amp;연금 납입 지난 달 비교
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/TO/02/TO02C006"
                        @click.native="gnbClose"
                      >
                        부채&amp;기타 납입 지난 달 비교
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/TO/02/TO02C007"
                        @click.native="gnbClose"
                      >
                        월 지출 추천 목록
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link
                  to="/TO/02/TO02E001"
                  @click.native="gnbClose"
                >
                  투자손익
                </router-link>
              </li>
              <li>
                <router-link
                  to="/TO/01/TO01B001"
                  @click.native="gnbClose"
                >
                  Insight 알람
                </router-link>
              </li>
            </ul>
          </li>
          <!-- //오늘 -->

          <!-- 투자생활 -->
          <li class="gnb_dep2">
            <div class="gnb_dep2_tit"><strong>투자생활</strong></div>
            <ul>
              <li>
                <router-link
                  to="/IN/02/IN02A001"
                  @click.native="gnbClose"
                >
                  금융상품 검색
                </router-link>
              </li>
              <li>
                <router-link
                  to="/IN/05/IN05A001"
                  @click.native="gnbClose"
                >
                  투자 종합자산
                </router-link>
                <div class="gnb_dep3">
                  <ul>
                    <li>
                      <router-link
                        to="/IN/01/IN01A001"
                        @click.native="gnbClose"
                      >
                        투자자산통계
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/IN/01/IN01A003"
                        @click.native="gnbClose"
                      >
                        보유상품
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/IN/01/IN01A005"
                        @click.native="gnbClose"
                      >
                        투자자산변동
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link
                  to="/IN/03/IN03A001"
                  @click.native="gnbClose"
                >
                  포트폴리오 진단
                </router-link>
              </li>
              <li>
                <router-link
                  to="/IN/04/IN04A001"
                  @click.native="gnbClose"
                >
                  주식종목 진단
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  고수의 Pick
                </router-link>
              </li>
              <li>
                <router-link
                  to="/IN/07/IN07A001"
                  @click.native="gnbClose"
                >
                  가상투자
                </router-link>
              </li>
              <li>
                <router-link
                  to="/IN/05/IN05A001"
                  @click.native="gnbClose"
                >
                  투자 습관 진단
                </router-link>
              </li>
              <li>
                <router-link
                  to="/IN/10/IN10A001"
                  @click.native="gnbClose"
                >
                  투자상상퀴즈
                </router-link>
              </li>
              <li>
                <router-link
                  to="/IN/11/IN11A001"
                  @click.native="gnbClose"
                >
                  추천테마
                </router-link>
              </li>
              <li>
                <router-link
                  to="/IN/09/IN09A001"
                  @click.native="gnbClose"
                >
                  은퇴준비진단
                </router-link>
              </li>
              <li>
                <router-link
                  to="/IN/12/IN12A001"
                  @click.native="gnbClose"
                >
                  모델 포트폴리오
                </router-link>
                <div class="gnb_dep3">
                  <ul>
                    <li>
                      <router-link
                        to="/IN/12/IN12A001"
                        @click.native="gnbClose"
                      >
                        공격투자형
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/IN/12/IN12A002"
                        @click.native="gnbClose"
                      >
                        적극투자형
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/IN/12/IN12A003"
                        @click.native="gnbClose"
                      >
                        위험중립형
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/IN/12/IN12A004"
                        @click.native="gnbClose"
                      >
                        안전추구형
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/IN/12/IN12A005"
                        @click.native="gnbClose"
                      >
                        안정형
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <!-- //투자생활 -->

          <!-- 금융생활 -->
          <li class="gnb_dep2">
            <div class="gnb_dep2_tit"><strong>금융생활</strong></div>
            <ul>
              <li>
                <router-link
                  to="/FI/04/FI04A001"
                  @click.native="gnbClose"
                >
                  은행
                </router-link>
              </li>
              <li>
                <router-link
                  to="/FI/02/FI02A001"
                  @click.native="gnbClose"
                >
                  카드
                </router-link>
                <div class="gnb_dep3">
                  <ul>
                    <li>
                      <router-link
                        to="/FI/02/FI02A001"
                        @click.native="gnbClose"
                      >
                        보유현황
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/FI/02/FI02A005.vue"
                        @click.native="gnbClose"
                      >
                        승인내역
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/FI/02/FI02A006.vue"
                        @click.native="gnbClose"
                      >
                        소비달력
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/FI/02/FI02A007.vue"
                        @click.native="gnbClose"
                      >
                        포인트 목록
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/FI/02/FI02A008.vue"
                        @click.native="gnbClose"
                      >
                        할부관리
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="#"
                        @click.native="gnbClose"
                      >
                        대출내역??
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link
                  to="/FI/03/FI03A001.vue"
                  @click.native="gnbClose"
                >
                  보험
                </router-link>
              </li>
              <li>
                <router-link
                  to="/FI/10/FI10A001.vue"
                  @click.native="gnbClose"
                >
                  할부금융
                </router-link>
              </li>
              <li>
                <router-link
                  to="/FI/09/FI09A001.vue"
                  @click.native="gnbClose"
                >
                  PAY(전자금융)
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  통신/보증보험??
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  자동차/부동산??
                </router-link>
              </li>
            </ul>
          </li>
          <!-- //금융생활 -->

          <!-- 내서랍 -->
          <li class="gnb_dep2">
            <div class="gnb_dep2_tit"><strong>내 서랍</strong></div>
            <ul>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  내 서랍
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  메모 등록
                </router-link>
              </li>
            </ul>
          </li>
          <!-- //내서랍 -->

          <!-- 고객센터 -->
          <li class="gnb_dep2">
            <div class="gnb_dep2_tit"><strong>고객센터</strong></div>
            <ul>
              <li>
                <router-link
                  to="/SC/01/SC01A001"
                  @click.native="gnbClose"
                >
                  상담신청/조회
                </router-link>
              </li>
              <li>
                <router-link
                  to="/SC/02/SC02A001"
                  @click.native="gnbClose"
                >
                  공지사항
                </router-link>
              </li>
              <li>
                <router-link
                  to="/SC/03/SC03A001"
                  @click.native="gnbClose"
                >
                  FAQ
                </router-link>
              </li>
              <li>
                <router-link
                  to="/SC/04/SC04A001"
                  @click.native="gnbClose"
                >
                  이벤트
                </router-link>
              </li>
            </ul>
          </li>
          <!-- //고객센터 -->

          <!-- 가이드 -->
          <li
            v-if="isDev"
            class="gnb_dep2"
          >
            <div class="gnb_dep2_tit"><strong>가이드</strong></div>
            <ul>
              <li>
                <router-link
                  to="/guide/txt"
                  @click.native="gnbClose"
                >
                  퍼블가이드
                </router-link>
                <div class="gnb_dep3">
                  <ul>
                    <li>
                      <router-link
                        to="/guide/txt"
                        @click.native="gnbClose"
                      >
                        텍스트
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/guide/button"
                        @click.native="gnbClose"
                      >
                        버튼
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/guide/form"
                        @click.native="gnbClose"
                      >
                        form 요소
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/guide/list"
                        @click.native="gnbClose"
                      >
                        리스트
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/guide/table"
                        @click.native="gnbClose"
                      >
                        테이블
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/guide/popup"
                        @click.native="gnbClose"
                      >
                        팝업
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/guide/swiper"
                        @click.native="gnbClose"
                      >
                        swiper
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/guide/animate"
                        @click.native="gnbClose"
                      >
                        animate
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/guide/etc"
                        @click.native="gnbClose"
                      >
                        etc
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <!-- //가이드 -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import uiEventBus from '../uiEventBus.vue';

export default {
  name: 'kbPageGnb',
  data() {
    return {
      isLogin: true,
      isShow: false,
      isReduce: false,
      closeReturnFocus: null,
      gnb2Top: [],
      wrapSclTop: 0,
      touchStartY: 0,
      touchDistance: 0,
      observer: null,
      currentSection: 'null',
      isDev: false,
    };
  },
  beforeMount() {
    this.isDev = (process.env.NODE_ENV === 'development');
  },
  mounted() {
    uiEventBus.$on('close-gnb', this.gnbClose);
    uiEventBus.$on('open-gnb', this.gnbOpen);

    // this.initObserver();
    // this.observeSections();
  },
  destroyed() {
    uiEventBus.$off('close-gnb', this.gnbClose);
    uiEventBus.$off('open-gnb', this.gnbOpen);
  },
  methods: {
    gnbOpen(target) {
      this.closeReturnFocus = target;
      uiEventBus.$emit('lock-wrap');
      this.isShow = true;
      this.gnbNaviSet();
      const $wrap = this.$el.querySelector('.gnb_dep2_wrap');
      this.gnbActive();
      const $active = $wrap.querySelector('.active');
      if ($active === null) {
        this.$scrollTo($wrap, { top: 0 }, 100);
      } else {
        const $closest = $active.closest('.gnb_dep2');
        const $top = $closest.offsetTop;
        this.$scrollTo($wrap, { top: $top }, 500);
      }

      window.setTimeout(() => {
        // this.$el.querySelector('.btn_gnb_home').focus();
        this.$refs.first.$el.focus();
      }, 600);
    },
    gnbClose() {
      this.isShow = false;
      this.wrapDownEvt();
      window.setTimeout(() => {
        uiEventBus.$emit('unlock-wrap');
        this.closeReturnFocus.focus();
      }, 600);
    },
    btnGnbClose(e) {
      e.preventDefault();
      this.gnbClose();
    },
    gnbNaviSet() {
      this.gnb2Top = [];
      const $dep1 = this.$el.querySelector('.gnb_dep1');
      const $dep2 = this.$el.querySelectorAll('.gnb_dep2');
      const $dep1Ul = $dep1.firstChild;
      $dep1Ul.setAttribute('role', 'tablist');
      const $dep1Li = $dep1Ul.childNodes;

      // 뎁스1
      $dep1Li.forEach((li) => {
        if (li.childNodes[0] === undefined) return;
        li.setAttribute('role', 'presentation');
        li.childNodes[0].setAttribute('role', 'tab');
        li.childNodes[0].setAttribute('aria-selected', 'false');
      });

      // 뎁스2 위치값 저장
      $dep2.forEach((ul) => {
        const top = ul.offsetTop;
        this.gnb2Top.push(top);
      });
      const { wrap } = this.$refs;
      this.wrapScroll(wrap);
    },
    gnbActive() {
      // 메뉴 active
      const $path = this.$route.path;
      const $pathSplit = $path.split('/');
      const $pathLast = $pathSplit.length > 4 ? $pathSplit[3] : $pathSplit.pop();
      const $title = document.querySelector('.page_head h1').innerText;
      const $wrap = this.$el.querySelector('.gnb_dep2_wrap');
      const $li = $wrap.querySelectorAll('li');
      const $link = $wrap.querySelectorAll('a');
      const addClass = ((element) => {
        const $parents = this.$getParents(element, 'li');
        $parents.forEach((li) => {
          li.classList.add('active');
        });
      });
      $li.forEach((el) => {
        el.classList.remove('active');
      });
      $link.forEach((el) => {
        const $href = el.getAttribute('href');
        const $text = el.innerText;
        const $hrefSplit = $href.split('/');
        const $hrefLast = $hrefSplit.length > 4 ? $hrefSplit[3] : $hrefSplit.pop();
        if ($hrefLast === $pathLast) {
          addClass(el);
        } else if ($title === $text) {
          addClass(el);
        }
      });
    },
    gnbDep1Open(e) {
      e.preventDefault();
      const btn = e.target.tagName === 'SPAN' ? e.target.parentNode : e.target;
      const wrap = this.$el.querySelector('.gnb_dep2_wrap');
      const $dep1Li = btn.closest('.gnb_dep1_li');
      const index = this.$getIndex($dep1Li);
      const $top = this.gnb2Top[index];
      this.$scrollTo(wrap, { top: $top }, 300);
    },
    wrapScroll(el) {
      // this.wrapSclTop = Math.round(el.scrollTop);
      this.wrapSclTop = Math.round(el.scrollTop) + Math.round(el.offsetHeight * 0.1);
      let index = -1;
      this.gnb2Top.forEach((val) => {
        if (this.wrapSclTop >= val) {
          index += 1;
        }
      });
      const $gnbDep1 = this.$el.querySelectorAll('.gnb_dep1_li');
      $gnbDep1.forEach((li, i) => {
        if (i === index) {
          li.classList.add('open');
          li.childNodes[0].setAttribute('aria-selected', 'true');
        } else {
          li.classList.remove('open');
          li.childNodes[0].setAttribute('aria-selected', 'false');
        }
      });
    },

    // 크로스 브라우징??
    observeSections() {
      const $dep2 = this.$el.querySelectorAll('.gnb_dep2');
      $dep2.forEach((section) => {
        this.observe(section);
      });
    },
    observe(entry) {
      this.observer.observe(entry);
    },
    initObserver() {
      this.observer = new IntersectionObserver((entries) => {
        const active = entries.filter((e) => e.isIntersecting);
        if (active.length) {
          const $gnbDep1 = this.$el.querySelectorAll('.gnb_dep1_li');
          const $active = active[0].target;
          const index = this.$getIndex($active);
          $gnbDep1.forEach((el, i) => {
            if (i === index) {
              el.classList.add('open');
              el.childNodes[0].setAttribute('aria-selected', 'true');
            } else {
              el.classList.remove('open');
              el.childNodes[0].setAttribute('aria-selected', 'false');
            }
          });
        }
        console.log(entries[0].target);
      }, {
        root: this.$el.querySelector('.gnb_dep2_wrap'),
        threshold: 1,
      });
    },
    wrapUpEvt() {
      this.isReduce = true;
      this.$slideUp(this.$refs.headTop, 300);
      this.$slideUp(this.$refs.userInfo, 300);
    },
    wrapDownEvt() {
      this.isReduce = false;
      this.$slideDown(this.$refs.headTop, 300);
      this.$slideDown(this.$refs.userInfo, 300);
    },
    touchStart(e) {
      this.touchStartY = (e.type === 'touchstart') ? e.touches[0].clientY : e.clientY;
    },
    touchEnd(e) {
      const move = (e.type === 'touchend') ? e.changedTouches[0].clientY : e.clientY;
      this.touchDistance = move - this.touchStartY;

      // down
      if (this.touchDistance > 10) this.wrapDownEvt();

      // up
      if (this.touchDistance < -10) this.wrapUpEvt();
    },
  },
};
</script>

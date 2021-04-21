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

    <div class="inner">
      <div class="gnb_header">
        <div class="gnb_head_top">
          <div class="f_right">
            <kb-button
              ref="home"
              to="/TO/00"
              class="btn_gnb_home"
              aria-label="메인화면으로 이동"
              @click.native="gnbClose"
            />
          </div>
          <a
            href="#btnGnb"
            class="btn_gnb_close"
            role="button"
            aria-label="전체메뉴 닫기"
            @click="btnGnbClose"
          />
        </div>

        <div
          v-if="isLogin"
          class="gnb_user_info"
        >
          <router-link
            class="inner"
            to="#"
            @click.native="gnbClose"
          >
            <div class="img"></div>
            <h2 class="tit">
              <strong>김증권</strong>님, 반갑습니다!
            </h2>
          </router-link>
          <kb-button not>
            로그아웃
          </kb-button>
        </div>

        <div
          v-else
          class="gnb_user_info"
        >
          <router-link
            class="inner"
            to="#"
            @click.native="gnbClose"
          >
            <div class="img"></div>
            <h2 class="tit">
              <strong>로그인</strong>을 해주세요
            </h2>
          </router-link>
        </div>

        <div class="gnb_head_link">
          <kb-button link>즉시이체</kb-button>
          <kb-button link>계좌개설</kb-button>
          <kb-button link>거래내역</kb-button>
          <kb-button link>가상체험</kb-button>
        </div>
      </div>
      <div class="gnb_content">
        <div class="gnb_dep1">
          <ul>
            <li class="gnb_dep1_li">
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>오늘</span></a>
            </li>
            <li class="gnb_dep1_li">
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>금융생활</span></a>
            </li>
            <li class="gnb_dep1_li">
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>투자생활</span></a>
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
            <kb-button line h40>환경설정</kb-button>
          </div>
        </div>
        <div
          ref="wrap"
          class="gnb_dep2_wrap"
          @scroll="wrapScroll($event.target)"
        >
          <!-- 오늘 -->
          <div class="gnb_dep2">
            <h3 class="gnb_dep2_tit">오늘</h3>
            <ul>
              <li>
                <router-link
                  to="/TO/02/TO02A002"
                  @click.native="gnbClose"
                >
                  오늘 나의 자산
                </router-link>
                <div class="gnb_dep3">
                  <ul>
                    <li>
                      <router-link
                        to="/TO/02/TO02A002"
                        @click.native="gnbClose"
                      >
                        총 자산
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/TO/02/TO02C001"
                        @click.native="gnbClose"
                      >
                        월 관리
                      </router-link>
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
                        to="/TO/02/TO02E001"
                        @click.native="gnbClose"
                      >
                        오늘투자
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link
                  to="/TO/01/TO01B001"
                  @click.native="gnbClose"
                >
                  Insight 알람
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  내자산 QUIZ
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  게이미피케이션
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //오늘 -->

          <!-- 금융생활 -->
          <div class="gnb_dep2">
            <h3 class="gnb_dep2_tit">금융생활</h3>
            <ul>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  은행
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  카드
                </router-link>
                <div class="gnb_dep3">
                  <ul>
                    <li>
                      <router-link
                        to="#"
                        @click.native="gnbClose"
                      >
                        보유현황
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="#"
                        @click.native="gnbClose"
                      >
                        승인내역
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="#"
                        @click.native="gnbClose"
                      >
                        소비달력
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="#"
                        @click.native="gnbClose"
                      >
                        포인트 목록
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="#"
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
                        대출내역
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  보험
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  할부금융
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
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
                  통신/보증보험
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  자동차/부동산
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //금융생활 -->

          <!-- 투자생활 -->
          <div class="gnb_dep2">
            <h3 class="gnb_dep2_tit">투자생활</h3>
            <ul>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  투자 진단
                </router-link>
                <div class="gnb_dep3">
                  <ul>
                    <li>
                      <router-link
                        to="#"
                        @click.native="gnbClose"
                      >
                        투자습관 진단
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="#"
                        @click.native="gnbClose"
                      >
                        주식종목 진단
                      </router-link>
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
                        to="#"
                        @click.native="gnbClose"
                      >
                        모델 포트폴리오
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  투자정보
                </router-link>
                <div class="gnb_dep3">
                  <ul>
                    <li>
                      <router-link
                        to="#"
                        @click.native="gnbClose"
                      >
                        고수의 투자정보
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="#"
                        @click.native="gnbClose"
                      >
                        금융상품 검색
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  투자자산
                </router-link>
                <div class="gnb_dep3">
                  <ul>
                    <li>
                      <router-link
                        to="#"
                        @click.native="gnbClose"
                      >
                        보유상품
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="#"
                        @click.native="gnbClose"
                      >
                        투자자산 통계
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="#"
                        @click.native="gnbClose"
                      >
                        투자자산 변동
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  가상투자
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  은퇴설계
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  로보 오드바이저
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //투자생활 -->

          <!-- 내서랍 -->
          <div class="gnb_dep2">
            <h3 class="gnb_dep2_tit">내 서랍</h3>
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
          </div>
          <!-- //내서랍 -->

          <!-- 고객센터 -->
          <div class="gnb_dep2">
            <h3 class="gnb_dep2_tit">고객센터</h3>
            <ul>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  FAQ
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  로그인 수단
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  간편인증 로그인
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  인증서
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  @click.native="gnbClose"
                >
                  보안
                </router-link>
              </li>
            </ul>
          </div>
          <!-- //고객센터 -->

          <!-- 가이드 -->
          <div
            v-if="isDev"
            class="gnb_dep2"
          >
            <h3 class="gnb_dep2_tit">가이드</h3>
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
          </div>
          <!-- //가이드 -->
        </div>
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
      closeReturnFocus: null,
      gnb2Top: [],
      wrapSclTop: 0,
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
    this.gnbNaviSet();

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
      const $navi = this.$el.querySelector('.gnb_dep1');

      // active
      const $path = this.$route.path;
      const $link = $navi.querySelectorAll('a');
      $link.forEach((el) => {
        const $href = el.getAttribute('href');
        if ($href === $path) {
          const $parents = this.$getParents(el, 'li');
          $parents.forEach((li) => {
            li.classList.add('active');
          });
        }
      });

      window.setTimeout(() => {
        // this.$el.querySelector('.btn_gnb_home').focus();
        this.$refs.home.$el.focus();
      }, 600);
    },
    gnbClose() {
      this.isShow = false;
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
      this.wrapSclTop = el.scrollTop;
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
  },
};
</script>

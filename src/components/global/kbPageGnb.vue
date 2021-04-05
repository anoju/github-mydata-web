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
          <div class="f_left">
            <kb-button
              v-if="isLogin"
            >
              로그아웃
            </kb-button>
            <kb-button
              v-else
            >
              회원가입
            </kb-button>
          </div>
          <div class="f_right">
            <kb-button
              to="/TO/00"
              class="btn_gnb_home"
              aria-label="메인화면으로 이동"
              @click.native="gnbClose"
            />
            <kb-button
              to="#"
              class="btn_gnb_search"
              role="button"
              aria-label="통합검색 열기"
            />
            <kb-button
              to="#"
              class="btn_gnb_alarm new"
              aria-label="알림함. 새알림도착"
            />
            <!-- <a href="#" class="btn_gnb_alarm" aria-label="알림함."></a> --><!-- 알림 X,앱에서만 쓰임 -->
            <kb-button
              to="#"
              class="btn_gnb_setting"
              aria-label="설정"
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
          class="user_setting_info"
        >
          <div>
            <div class="info">
              <span class="my_summary">Since. 1998</span>
              <span class="my_summary color_5">KB증권</span>
            </div>
            <h2 class="tit">
              <strong>김증권</strong>님, 반갑습니다!
            </h2>
            <div class="cont">
              <div class="last_date">
                최근접속 : <span>2019.10.24 14:23</span>
              </div>
            </div>
          </div>
        </div>

        <div
          v-else
          class="user_setting_info"
        >
          <div>
            <h2 class="tit ty2">
              <a href="#"><strong class="line">로그인</strong> 해주세요</a>
            </h2>
          </div>
        </div>
      </div>
      <div class="gnb_content">
        <div class="gnb_dep1">
          <ul>
            <li class="gnb_dep1_li">
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>가이드</span></a>
              <div class="gnb_dep2">
                <ul>
                  <li>
                    <a href="#" @click="gnbSubMenu">코딩 가이드</a>
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
            </li>
            <li class="gnb_dep1_li">
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>오늘</span></a>
              <div class="gnb_dep2">
                <ul>
                  <li>
                    <router-link
                      to="/TO/01/TO01B001"
                      @click.native="gnbClose"
                    >
                      인사이트
                    </router-link>
                  </li>
                  <li>
                    <a href="#" @click="gnbSubMenu">자산</a>
                    <div class="gnb_dep3">
                      <ul>
                        <li>
                          <router-link
                            to="/TO/02/TO02A002"
                            @click.native="gnbClose"
                          >
                            월자산
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to="/TO/02/TO02C001"
                            @click.native="gnbClose"
                          >
                            월관리
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
                      to="#"
                      @click.native="gnbClose"
                    >
                      2뎁스메뉴 (3뎁스 X)
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="gnb_dep1_li">
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>투자생활</span></a>
              <div class="gnb_dep2">
                <ul>
                  <li>
                    <router-link
                      to="/IN/03/IN03A001"
                      @click.native="gnbClose"
                    >
                      포트폴리오 진단
                    </router-link>
                  </li>
                  <li>
                    <a href="#" @click="gnbSubMenu">2뎁스메뉴 (3뎁스 O)</a>
                    <div class="gnb_dep3">
                      <ul>
                        <li>
                          <router-link
                            to="#"
                            @click.native="gnbClose"
                          >
                            3뎁스메뉴
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to="#"
                            @click.native="gnbClose"
                          >
                            3뎁스메뉴
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
                      2뎁스메뉴 (3뎁스 X)
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="#"
                      @click.native="gnbClose"
                    >
                      2뎁스메뉴 (3뎁스 X)
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="#"
                      @click.native="gnbClose"
                    >
                      2뎁스메뉴 (3뎁스 X)
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="gnb_dep1_li">
              <a href="#" class="gnb_dep1_link" @click="gnbDep1Open"><span>1뎁스메뉴</span></a>
              <div class="gnb_dep2">
                <ul>
                  <li>
                    <a href="#" @click="gnbSubMenu">2뎁스메뉴 (3뎁스 O)</a>
                    <div class="gnb_dep3">
                      <ul>
                        <li>
                          <router-link
                            to="#"
                            @click.native="gnbClose"
                          >
                            3뎁스메뉴
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to="#"
                            @click.native="gnbClose"
                          >
                            3뎁스메뉴
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" @click="gnbSubMenu">2뎁스메뉴 (3뎁스 O)</a>
                    <div class="gnb_dep3">
                      <ul>
                        <li>
                          <router-link
                            to="#"
                            @click.native="gnbClose"
                          >
                            3뎁스메뉴
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to="#"
                            @click.native="gnbClose"
                          >
                            3뎁스메뉴
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
                      2뎁스메뉴 (3뎁스 X)
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="#"
                      @click.native="gnbClose"
                    >
                      2뎁스메뉴 (3뎁스 X)
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <kb-swiper autoplay full-width>
            <swiper-slide>
              <a href="#"><img src="@/assets/images/temp/menu_banner.png" alt="올원페이로 10만원 결제 시 스타벅스 증정. 2020년 4월1부터 4월 30일까지" /></a>
            </swiper-slide>
            <swiper-slide>
              <a href="#"><img src="@/assets/images/temp/menu_banner.png" alt="올원페이로 10만원 결제 시 스타벅스 증정. 2020년 4월1부터 4월 30일까지" /></a>
            </swiper-slide>
            <swiper-slide>
              <a href="#"><img src="@/assets/images/temp/menu_banner.png" alt="올원페이로 10만원 결제 시 스타벅스 증정. 2020년 4월1부터 4월 30일까지" /></a>
            </swiper-slide>
          </kb-swiper>

          <div class="etc_link">
            <ul>
              <li><a href="#">KB증권</a></li>
              <li><a href="#">M-able</a></li>
            </ul>
          </div>
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
    };
  },
  mounted() {
    uiEventBus.$on('close-gnb', this.gnbClose);
    uiEventBus.$on('open-gnb', this.gnbOpen);
    this.gnbNaviSet();
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

      // 뎁스1
      const $depth1 = $navi.querySelectorAll('.gnb_dep1_li');
      const $depth1Active = $navi.querySelector('.gnb_dep1_li.active');
      if ($depth1Active === null) {
        $depth1[0].classList.add('open');
        this.$getSiblings($depth1[0]).forEach((el) => {
          el.classList.remove('open');
        });
      } else {
        $depth1Active.classList.add('open');
        this.$getSiblings($depth1Active).forEach((el) => {
          el.classList.remove('open');
        });
      }

      // 뎁스2,3
      const $subMenuBtn = $navi.querySelectorAll('a.in_sub');
      $subMenuBtn.forEach((el) => {
        el.parentNode.classList.add('open');
        el.setAttribute('aria-expanded', 'true');
      });

      window.setTimeout(() => {
        this.$el.querySelector('button:first-child').focus();
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
      const $dep1 = this.$el.querySelector('.gnb_dep1');
      const $dep1Ul = $dep1.firstChild;
      $dep1Ul.setAttribute('role', 'tablist');
      const $dep1Li = $dep1Ul.childNodes;

      // 뎁스1
      $dep1Li.forEach((li) => {
        li.setAttribute('role', 'presentation');
        li.childNodes[0].setAttribute('role', 'tab');
        li.childNodes[0].setAttribute('aria-selected', 'false');

        // 뎁스2,3
        const $gnbLi = li.querySelectorAll('li');
        $gnbLi.forEach((li2) => {
          if (li2.childNodes.length > 1) {
            li2.childNodes[0].classList.add('in_sub');
            li2.childNodes[0].setAttribute('role', 'button');
            li2.childNodes[0].setAttribute('aria-expanded', 'false');
          }
        });
      });
    },
    gnbDep1Open(e) {
      e.preventDefault();
      const btn = e.target.tagName === 'SPAN' ? e.target.parentNode : e.target;
      btn.setAttribute('aria-selected', 'true');
      const $dep1Li = btn.closest('.gnb_dep1_li');
      $dep1Li.classList.add('open');
      this.$getSiblings($dep1Li).forEach((el) => {
        el.classList.remove('open');
      });
    },
    gnbSubMenu(e) {
      e.preventDefault();
      const btn = e.target.tagName === 'a' ? e.target : e.target.closest('a');
      btn.setAttribute('aria-expanded', 'true');
      const $btnLi = btn.closest('li');
      if ($btnLi.classList.contains('open')) {
        $btnLi.classList.remove('open');
      } else {
        $btnLi.classList.add('open');
      }
    },
  },
};
</script>

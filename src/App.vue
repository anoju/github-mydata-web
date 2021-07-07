<template>
  <div id="app">
    <router-view />
    <kb-page-gnb v-if="!isAPI" />
    <toast-box />
    <modal-container />
    <alert-box />
    <loading />
  </div>
</template>
<script>
import ModalContainer from './components/modalContainer/modalContainer.vue';
import AlertBox from './components/AlertBox/AlertBox.vue';
import Loading from './components/loading/Loading.vue';
import ToastBox from './components/toastBox/toastBox.vue';

export default {
  components: {
    ModalContainer,
    AlertBox,
    Loading,
    ToastBox,
  },
  data() {
    return {
      isAPI: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        const $path = to.path;
        const $html = document.querySelector('html');
        if ($path.indexOf('/VAPI/') >= 0) {
          this.isAPI = true;
          if (!$html.classList.contains('is_api')) $html.classList.add('is_api');
        } else {
          this.isAPI = false;
          if ($html.classList.contains('is_api')) $html.classList.remove('is_api');
        }
        this.themechk(to);
      },
    },
  },
  created() {
    window.addEventListener('resize', this.vhChk);
  },
  mounted() {
    this.deviceChk();
    this.$nextTick(() => {
      let checkedTimerNum = 0;
      const checkedTimer = setInterval(() => {
        this.vhChk();
        checkedTimerNum += 1;
        if (checkedTimerNum > 10)clearInterval(checkedTimer);
      }, 200);
    });
  },
  destroyed() {
    window.removeEventListener('resize', this.vhChk);
  },
  methods: {
    themechk(route) {
      const $theme = (route.query.theme);
      if ($theme !== undefined) {
        const $themeAry = $theme.split(',');
        const regex = /^#(?:[0-9a-f]{3}){1,2}$/i;
        if ($themeAry[0] !== undefined && regex.test('#' + $themeAry[0])) {
          // document.documentElement.style.setProperty('--kb-theme-color', `#${$themeAry[0]}`);
          const hexColor0 = this.hexToRGB($themeAry[0]);
          document.documentElement.style.setProperty('--kb-theme-color', hexColor0);
        }
        if ($themeAry[1] !== undefined && regex.test('#' + $themeAry[1])) {
          // document.documentElement.style.setProperty('--kb-theme-text', `#${$themeAry[1]}`);
          const hexColor1 = this.hexToRGB($themeAry[1]);
          document.documentElement.style.setProperty('--kb-theme-text', hexColor1);
        }
      }
    },
    hexToRGB(h) {
      let r = 0;
      let g = 0;
      let b = 0;
      // 3 digits
      if (h.length === 3) {
        r = parseInt(h[0] + h[0], 16);
        g = parseInt(h[1] + h[1], 16);
        b = parseInt(h[2] + h[2], 16);
      // 6 digits
      } else if (h.length === 6) {
        r = parseInt(h[0] + h[1], 16);
        g = parseInt(h[2] + h[3], 16);
        b = parseInt(h[4] + h[5], 16);
      }
      return r + ',' + g + ',' + b;
    },
    deviceChk() {
      this.pcClassChk();
      this.mobileClassChk();
      if (this.isMobileClass !== undefined)document.querySelector('html').classList.add(...this.isMobileClass);
      // try {
      //     const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: Dark)').matches
      //     if (prefersDark)document.querySelector('html').classList.add('darkmode')
      // } catch (e) { console.log(e) }
    },
    pcClassChk() {
      const $agent = navigator.userAgent;
      const isWindow = ($agent.match(/windows/i) != null);
      const isMac = ($agent.match(/macintosh/i) != null);
      const isChrome = ($agent.match(/chrome/i) != null);
      const isFirefox = ($agent.match(/firefox/i) != null);
      const isOpera = ($agent.match(/opera|OPR/i) != null);
      const isSafari = ($agent.match(/safari/i) != null);
      const isEdge = ($agent.match(/edge/i) != null);
      const isMsie = ($agent.match(/rv:11.0|msie/i) != null);
      const isIe11 = ($agent.match(/rv:11.0/i) != null);
      const isIe10 = ($agent.match(/msie 10.0/i) != null);
      const isIe9 = ($agent.match(/msie 9.0/i) != null);
      const isIe8 = ($agent.match(/msie 8.0/i) != null);
      const isAny = (isWindow || isMac);

      const rtnClass = [];
      if (isAny) {
        if (isWindow) rtnClass.push('window');
        if (isMac) rtnClass.push('mac');
        if (isMsie) rtnClass.push('msie');
        if (isIe11) rtnClass.push('ie11');
        if (isIe10) rtnClass.push('ie10');
        if (isIe9) rtnClass.push('ie9');
        if (isIe8) rtnClass.push('ie8');
        if (isEdge) {
          rtnClass.push('edge');
        } else if (isOpera) {
          rtnClass.push('opera');
        } else if (isChrome) {
          rtnClass.push('chrome');
        } else if (isSafari) {
          rtnClass.push('safari');
        } else if (isFirefox) {
          rtnClass.push('firefox');
        }
      }

      if (rtnClass.length) {
        document.querySelector('html').classList.add(...rtnClass);
      }
    },
    mobileClassChk() {
      const $agent = navigator.userAgent;
      const isAndroid = ($agent.match(/Android/i) != null);
      const isBlackBerry = ($agent.match(/BlackBerry/i) != null);
      const isIOS = ($agent.match(/iPhone|iPad|iPod|iOS/i) != null);
      const isIPhone = ($agent.match(/iPhone/i) != null);
      const isIPad = ($agent.match(/iPad/i) != null);
      const isOpera = ($agent.match(/Opera Mini/i) != null);
      const isWindows = ($agent.match(/IEMobile/i) != null);
      const isNaverApp = ($agent.indexOf('NAVER(inapp') !== -1);
      const isDaumApp = ($agent.match(/DaumApps/i) != null);
      const isKakaoTalk = ($agent.match(/KAKAOTALK/i) != null);
      const isApp = ($agent.match(/KBSecMyDataApp/i) != null);
      const isAny = (isAndroid || isIOS || isBlackBerry || isOpera || isWindows);
      function tabletchk() {
        const standard = 760;
        if (window.screen.width < window.screen.height) {
          if (window.screen.width > standard) return true;
          return false;
        }
        if (window.screen.height > standard) return true;
        return false;
      }
      const isTablet = tabletchk();
      const versionChk = (txt, num) => {
        const $sliceStart = navigator.userAgent.indexOf(txt) + (txt.length + 1);
        const $sliceEnd = $sliceStart + num;
        const $version = parseFloat(navigator.userAgent.slice($sliceStart, $sliceEnd));
        return parseInt($version, 10);
      };
      const rtnClass = [];
      if (isAny) {
        rtnClass.push('mobile');
        if (isTablet)rtnClass.push('tablet');

        if (isIOS) {
          rtnClass.push('ios');
          const isIPhoneVersion = versionChk('iPhone OS', 2);
          const isIPadVersion = versionChk('iPad; CPU OS', 2);
          if (isIPhone && isIPhoneVersion >= 10)rtnClass.push(`iphone_${isIPhoneVersion}`);
          if (isIPad && isIPadVersion >= 10)rtnClass.push(`ipad_${isIPadVersion}`);
        }
        if (isAndroid) rtnClass.push('android');

        if (isNaverApp) rtnClass.push('naver_app'); // 네이버앱
        if (isDaumApp) rtnClass.push('daum_app'); // 다음앱
        if (isKakaoTalk) rtnClass.push('kakao_talk'); // 카카오톡
        if (isApp) rtnClass.push('is_app'); // 오늘앱
      }

      if (rtnClass.length) {
        document.querySelector('html').classList.add(...rtnClass);
      }
    },
    vhChk() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    },
  },
};
</script>

import Vue from 'vue';

import httpUtil from '@/utils/httpUtil';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import produce from 'immer';

import processUtil from '@/utils/processUtil';

// import router from '@/router';
import Vue2TouchEvents from 'vue2-touch-events';
import anime from 'animejs/lib/anime.es';
import customRouter from './plugins/router';
import App from './App.vue';
import store from './store';

import './plugins/lodash';
import './plugins/vuelidate';
import './plugins/treeView';

/* components */
import directives from './utils/directives';
import commonUI from './utils/commonUI';
import components from './components/components';
import modalContainer from './components/modalContainer';
import AlertBox from './components/AlertBox';
import loading from './components/loading';
import toastBox from './components/toastBox';

/* style */
import 'swiper/css/swiper.css';
import './assets/scss/front.scss';

/* vKeypad */
import './js/vKeypad.min';
import './js/kjscrypto.min';
import './js/kjscrypto.contrib.min';

Vue.config.productionTip = false;
Vue.prototype.$http = httpUtil;
Vue.prototype.$produce = produce;

Vue.use(components);
Vue.use(modalContainer);
Vue.use(AlertBox);
Vue.use(loading);
Vue.use(toastBox);
Vue.use(Vue2TouchEvents);
Vue.use(VueAwesomeSwiper);
Vue.use(directives);
Vue.use(commonUI);

Vue.prototype.$anime = anime;

(async () => {
  const router = await customRouter.createRouter(); // 라우터생성
  console.error('main.js : router created');

  const app = new Vue({
    router,
    store,
    data: {
      mounted: false,
    },
    beforeCreate() {
      console.error('main.js : lifecycle : beforeCreate');
    },
    created() {
      /**
       * 데이터로딩 등 필요한 정보 세팅후
       * 문제가 없으면 app mount한다
       */
      // (async () => {
      //   await processUtil.await(null, 1); // 테스트 await
      //   console.error('main.js : lifecycle : created');
      //   this.$mount('#app');
      // })();
      this.$mount('#app');
    },
    beforeMount() {
      console.error('main.js : lifecycle : before mount');
    },
    mounted() {
      console.error('main.js : lifecycle : mounted');
      this.mounted = true;
    },
    render: (h) => h(App),
  });

  // 디버깅을 위한 설정
  if (process.env.NODE_ENV === 'development') {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    window.store = store;
    window.app = app;
  }
})();

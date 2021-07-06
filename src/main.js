import Vue from 'vue';

// import Stock from 'highcharts/modules/stock';
import httpUtil from '@/utils/httpUtil';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import produce from 'immer';

// import processUtil from '@/utils/processUtil';

// import router from '@/router';
import Vue2TouchEvents from 'vue2-touch-events';
import anime from 'animejs/lib/anime.es';
import stringUtil from '@/utils/stringUtil';
import router from '@/router';
import App from './App.vue';
import store from './store';

/* plugins */
import './plugins/lodash';
import './plugins/vuelidate';
import './plugins/treeView';
import './plugins/highcharts';
import './plugins/dayjs';
import './plugins/groupArray';

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
// import '../public/js/vKeypad.min';
// import '../public/js/kjscrypto.min';
// import '../public/js/kjscrypto.contrib.min';
// import uiEventBus from './components/uiEventBus.vue';

Vue.config.productionTip = false;
Vue.prototype.$http = httpUtil;
Vue.prototype.$produce = produce;
Vue.prototype.$stringUtil = stringUtil;

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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// (async () => {
//   const router = await customRouter.createRouter(); // 라우터생성
//   console.log('main.js : router created');

//   const app = new Vue({
//     router,
//     store,
//     data: {
//       mounted: false,
//     },
//     beforeCreate() {
//       console.log('main.js : lifecycle : beforeCreate');
//     },
//     created() {
//       /**
//        * 데이터로딩 등 필요한 정보 세팅후
//        * 문제가 없으면 app mount한다
//        */
//       (async () => {
//         await processUtil.await(null, 1); // 테스트 await
//         console.log('main.js : lifecycle : created');
//         this.$mount('#app');
//       })();
//     },
//     beforeMount() {
//       console.log('main.js : lifecycle : before mount');
//     },
//     mounted() {
//       console.log('main.js : lifecycle : mounted');
//       this.mounted = true;
//     },
//     render: (h) => h(App),
//   });

//   // 디버깅을 위한 설정
//   if (process.env.NODE_ENV === 'development') {
//     console.log('process.env.NODE_ENV', process.env.NODE_ENV);
//     window.store = store;
//     window.app = app;
//   }
// })();

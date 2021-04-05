import Vue from 'vue';
import Router from 'vue-router';
import processUtil from '@/utils/processUtil';

Vue.use(Router);

// const viewBase = '@/views/'; // view 파일의 루트경로

let router = null;

export default {
  /**
   * 라우터 생성하기
   */
  async createRouter() {
    const isDev = (process.env.NODE_ENV !== 'production');

    // router 데이터 생성
    const routerData = {
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [],
    };

    // API를 통한 메뉴응답 대기후 리턴
    await import('@/assets/router.json'/* 임시적용 */)
      .then((res) => {
        if ((res.default instanceof Array) && res.default.length > 0) {
          routerData.routes = this.parseRoutesFromMenudata(res.default);
        }
      })
      .catch((error) => {
        console.dir(error);
      });

    // 개발환경 모드인 경우 추가적으로 메뉴 로딩
    let modules = null;
    if (isDev === true) {
      console.log('this is development');
      modules = require.context('@/router', false, /\w+\.js$/);
    } else {
      console.log('this is production');
      modules = require.context('@/router', false, /TO.js/);
    }
    if (modules !== null) {
      modules.keys().forEach((key) => {
        const additionals = modules(key).default;
        additionals.forEach((add) => {
          routerData.routes.push(add);
        });
      });
    }

    // beforeEnter 지정
    this.setBeforeEnter(routerData.routes);

    // 라우터 생성
    router = new Router(routerData);
    return router;
  },

  /**
   * 외부에서 불러온 라우터정보를 view router 형태로 변환하기위한 메뉴파싱
   */
  parseRoutesFromMenudata(menus) {
    let routes = null;
    if (menus instanceof Array && menus.length > 0) {
      routes = [];
      menus.forEach((menu) => {
        const item = {};

        if (menu.name !== undefined) item.name = menu.name; // 메뉴명
        if (menu.path !== undefined) item.path = menu.path; // 경로
        if (menu.redirect !== undefined) item.redirect = menu.redirect; // 리다이렉트
        if (menu.view !== undefined) {
          item.component = () => import('@/views/' + menu.view); // template 표기법 사용시 expression 처리 오류발생
        }

        item.meta = {};
        item.meta.requireAuth = menu.requireAuth;
        item.children = this.parseRoutesFromMenudata(menu.children);

        routes.push(item);
      });
    }
    return routes;
  },

  /**
   * 페이지 접근시 인증관련 처리를 위해
   * 라우터의 point 마다 beforeEnter 세팅
   * @param {*} routes routerData.routes
   */
  setBeforeEnter(routes) {
    routes.forEach((item) => {
      item.beforeEnter = this.beforeEnter;
      if (item.children instanceof Array) {
        this.setBeforeEnter(item.children);
      }
    });
  },

  /**
   * beforeEnter 수행부
   * @param {*} from
   * @param {*} to
   * @param {*} next
   */
  beforeEnter(to, from, next) {
    // 로그인인증이 필요한 경우에는, app 이 mounted 완료되어야 하므로, 체크한다
    let requireAuth = null;
    to.matched.forEach((item) => {
      if (item.meta && item.meta.requireAuth) { requireAuth = item.meta.requireAuth; }
    });
    if (requireAuth !== undefined) {
      const { app } = router;
      console.error('router.js : beforeEnter');
      (async () => {
        await processUtil.await(() => app.mounted, 5000)
          .then(() => {
            let user = null;
            app.$store.dispatch('auth/CHECK')
              .then((res) => {
                user = res;
              })
              .catch(() => {})
              .finally(() => {
                if (requireAuth === true && user == null) { // 로그인이 필요한데 로그인이 안된경우
                  next({
                    name: 'login',
                  }); // 로그인페이지로
                } else if (requireAuth === false && user != null) { // 로그인되어있으면 안되는데, 로그인이 되어있는 경우
                  next({
                    name: 'today',
                  }); // 메인페이지로
                } else { // 그렇지 않으면 패스
                  next();
                }
              });
          })
          .catch((error) => {
            console.error('router.js : app.mounted 체크 실패', error);
            next(false);
          });
      })();
    } else {
      next();
    }
  },
};

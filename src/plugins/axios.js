import axios from 'axios';
import messageAlert from '@/components/AlertBox/index';
import loadingComp from '@/components/loading/index';
import store from '@/store/index';
import processUtil from '@/utils/processUtil';
import customRouter from '@/plugins/router';

// axios 인스턴스를 생성합니다.
const instance = axios.create({
  baseURL: '',
  //   timeout: 1000,
});

/*
    1. 요청 인터셉터
    2개의 콜백 함수를 받습니다.

    // 요청 성공 직전 호출됩니다.
    // axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
    // console.log(`interceptors:${JSON.stringify(config)}`)
*/
instance.interceptors.request.use(
  (config) => {
    // TODO : 인증 short token 로직 변경후 정리필요
    if (processUtil.isLocal()) { // 로컬실행환경인경우
      if (store.get('auth/isLogin') === true) {
        config.headers.AuthorizationType = store.get('auth/authorizationType');
        config.headers.Authorization = `Bearer ${store.get('auth/accessToken')}`;
      }
    }
    return config;
  },
  (error) => {
    // 요청 에러 직전 호출됩니다.
    console.log(`error:${error}`);
    return Promise.reject(error);
  },
);

/*
    2. 응답 인터셉터
    2개의 콜백 함수를 받습니다.
*/
instance.interceptors.response.use(
  (response) => {
    /*
        http status가 200인 경우
        응답 성공 직전 호출됩니다.
        .then() 으로 이어집니다.
    */
    console.log(`response:${response}`);
    return response;
  },

  async (error) => {
    /*
        http status가 200이 아닌 경우
        응답 에러 직전 호출됩니다.
        .catch() 으로 이어집니다.
    */
    // console.log(`response error:${error}`, error.response, !!error.response.data.message);
    // console.log(error.response.data.code, error.response.data.message);
    loadingComp.loading(false);
    if (error.config.skipErrAlert !== true) {
      if (error.response.data.code !== '5001' && error.response.data.code !== '3006' && error.response.data.code !== '3007' && error.response.data.code !== '3009') {
        await messageAlert.alert(error.response.data.message || error.response.data)
          .then(() => {
            if (error.response.status === 403) { // 토큰만료 또는 비인가접근 오류시 home 화면으로 // TODO : 정상적인 router 접근법으로 변경필요
              store.dispatch('auth/setLoginInfo', { isSet: false }) // 로그아웃처리
                .finally(() => {
                  customRouter.getInstance().replace({
                    name: 'home',
                  });
                });
            }
          });
      }
    }
    return Promise.reject(error);
  },
);

export default instance;

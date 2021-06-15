// TODO 인증 API 구현 후 firebase 인증은 제거하고  axios를 사용하
import httpUtil from '@/utils/httpUtil';

export default {
  /// ///// auth : 로그인/인증 관련
  /* 로그인 시도 */
  login(loginParam) {
    return httpUtil
      .request('GET', '/api/signIn', { params: loginParam });
  },

  /* 로그아웃 */
  logout() {
    //
  },

  /* 로그인여부 체크 */
  loginCheck() {
  },

  /* 회원가입 시도 */
  join() {
    //
  },

  /* 중목아이디 체크 */
  checkUsernameDup() {
    //
  },
};

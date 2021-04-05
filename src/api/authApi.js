// TODO 인증 API 구현 후 firebase 인증은 제거하고  axios를 사용하
import httpUtil from '@/utils/httpUtil';
import firebase from '@/plugins/firebase';

export default {
  /// ///// auth : 로그인/인증 관련
  /* 로그인 시도 */
  login(loginParam) {
    return httpUtil
      .request('GET', '/api/signIn', { params: loginParam });
  },

  /* 로그아웃 */
  logout() {
    return firebase.auth().signOut();
  },

  /* 로그인여부 체크 */
  loginCheck() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  },

  /* 회원가입 시도 */
  join(username, password) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(`${username}@kbstock.com`, password);
  },

  /* 중목아이디 체크 */
  checkUsernameDup(username) {
    return firebase
      .auth()
      .fetchSignInMethodsForEmail(`${username}@kbstock.com`);
  },
};

/**
 * @module processUtils
 * @description 런타임 환경 설정 정보를 조회하는 유틸
 */
export default {
  /**
   * @function
   * @description 로컬 환경 여부를 응답 하는 함수
   *
   * @return {boolean}
   *
   * @author HSH <seokan@ubivelox.com>
   *
   * @example
   * // returns true
   * processUtil.isLocal()
   */
  isLocal() {
    return process.env.NODE_ENV === 'local';
  },

  /**
   * @function
   * @description  상용 환경 여부를 응답 하는 함수
   *
   * @return {boolean}
   *
   * @author HSH <seokan@ubivelox.com>
   *
   * @example
   * // returns true
   * processUtil.isProd()
   */
  isProd() {
    return process.env.NODE_ENV === 'production';
  },

  /**
   * @function
   * @description await 함수: 조건충족시까지 대기
   *
   * @param {function} fnCondition 조건 (`return true/false` 로 충족여부 판단)
   * @param {int} timeout 최대 대기시간 (단위=ms / 기본=10000)
   * @param {int} tick 조건(fnCondition) 참조 tick (단위=ms / 기본=100)
   *
   * @return {Promise} fnCondition의 조건이 만족한 수행 시간
   *
   * @version 0.0.1
   * @author JiHoJoo <seokan@ubivelox.com>
   *
   * @example
   * let i = 0;
   * this.$http.await(() => {
   *     i += 1;
   *     return (i>20);
   * }, 1000, 100)
   *   .then((res) => {
   *      console.log('조건 만족까지 걸린시간 = ', res);
   *    })
   *   .catch((err) => {
   *      console.error('제한시간내 조건만족 못함 / 총수행시간=', err);
   *   })
   *
   */
  await(fnCondition, timeout = 10000, tick = 100) {
    const start = Date.now(); // 시작시간

    const isFunction = (fn) => (!!((fn && fn instanceof Function)));
    // 수행시간
    const getElapsedTime = () => Date.now() - start;
    // 루프수행 함수
    const fnLoop = (res, rej) => {
      if (isFunction(fnCondition) && fnCondition() === true) {
        res(getElapsedTime());
      } else if (Date.now() - start >= timeout) {
        if (isFunction(fnCondition)) {
          rej(getElapsedTime());
        } else {
          res(getElapsedTime());
        }
      } else {
        window.setTimeout(() => {
          fnLoop(res, rej);
        }, tick);
      }
    };

    return new Promise((res, rej) => {
      if (isFunction(fnCondition) === true && fnCondition() === true) {
        res(getElapsedTime());
      } else {
        fnLoop(res, rej);
      }
    });
  },

};

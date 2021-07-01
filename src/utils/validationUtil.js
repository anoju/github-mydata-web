/**
 * @module validationUtil
 * @description 값 검증유틸
 */
export default {
  /**
   * @function
   *
   * @description  올바른 휴대폰번호인지 확인
   *
   * @param {String} val     : 휴대폰번호
   *
   * @return Boolean
   */
  isCelNo(val) {
    let reg = /^01[016789][0-9]{3,4}[0-9]{4}$/;
    if (val.indexOf('-') > -1) { // -가 포함된 전화번호이면, 모조리 포함되는 로직으로 간다
      reg = /^01[016789]-[0-9]{3,4}-[0-9]{4}$/;
    }
    return reg.test(val);
  },

  /**
   * @function
   *
   * @description  올바른 이메일주소인지
   *
   * @param {String} val : 이메일주소

   * @return Boolean
   */
  isEmail(val) {
    return (/^([\w-]+(?:\.[\w-]+)*)@((?:[w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i).test(val);
  },
};

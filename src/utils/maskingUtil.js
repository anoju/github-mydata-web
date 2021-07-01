/**
 * @module maskingUtil
 * @description KB 증권 마스킹처리 공통룰 유틸
 */
export default {
  /**
     * 이메일 마스킹처리
     * @param {*} val 이메일주소
     */
  maskEmail(val) {
    const tmp = val.split('@');
    return tmp[0].substr(0, 3) + '*'.repeat(tmp[0].substr(3).length) + '@' + tmp[1];
  },

  /**
   * 휴대폰번호 마스킹처리
   * @param {*} val 구분자 붙어서 넘어온 휴대폰번호
   * @param {*} spl 구분자(기본값 = -)
   */
  maskCelNo(val, spl = '-') {
    let tmp = val.split(spl);
    tmp = tmp.map((num, idx) => {
      if (idx > 0) { // 1, 2번째자리만 적용
        const mskStr = num.substr(-2); // 뒤에 두개일단 마스킹대상
        num = num.substring(0, num.length - mskStr.length) + '*'.repeat(mskStr.length);
      }
      return num;
    });

    return tmp.join(spl);
  },
};

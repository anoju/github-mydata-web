import dayjs from 'dayjs';
import store from '@/store/index';
/**
 * @module stringUtil
 * @description 문자열 변환에 관련한 유틸
 */
export default {
  /**
   * @function
   * @description  numberSeperateByThree 유틸
   * @param {String} value     : 숫자
   * @param {String} isUseForceSign : 부호 강제표시여부(+ 표시)
   * @param {String} sep : 부호 강제표시시 사이에 추가적으로 표시할 항목(공백)
   * @return {String} :  3자리씩 ','로 구분된 숫자
   * @author junseong <junseong.kim@ubivelox.com>
   * @example
   *   stringUtil.numberSeperateByThree('100000') // 100,000
   *   stringUtil.numberSeperateByThree('100000', true) // +100,000
   *   stringUtil.numberSeperateByThree('100000', true, ' ') // + 100,000
   */
  numberSeperateByThree(value = '', isUseForceSign = false, sep = '') {
    // eslint-disable-next-line radix
    const { isShowMoney } = store.state.common;
    const oriValue = typeof value === 'string' ? value.trim() : value;
    const number = parseInt(oriValue, 10);
    return (isShowMoney && (!!value || value === 0)) ? ((isUseForceSign && number > 0 ? `+${sep}` : '') + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')) : '-';
  },

  /**
   * @function
   * @description  minus 유틸: 출금은 음수로 표현
   * @param {String} value     : 숫자
   * @author junseong <junseong.kim@ubivelox.com>
   * @example
   *   stringUtil.numberSeperateByThree('100000') // -100,000
   */
  withrowMoney(value = '') {
    // eslint-disable-next-line radix
    const money = String(Math.abs(parseInt(value, 10)) * (-1));
    return this.numberSeperateByThree(money);
  },
  /**
   * @function
   * @description  dateTostring 유틸
   * @param {String} value     : 날짜 YYYYMMDD
   * @return {String} :  MM월 DD일
   * @author junseong <junseong.kim@ubivelox.com>
   * @example
   *   stringUtil.dateTostring('20210409') // 4월 9일
   */
  dateTostring(value = '') {
    return dayjs(value).format('M월 D일');
  },
  /**
   * @function
   * @description  dayOfWeek 유틸
   * @param {String} value     : 날짜 YYYYMMDD
   * @return {String} :  요일
   * @author junseong <junseong.kim@ubivelox.com>
   * @example
   *   stringUtil.dayOfWeek('20210409') // 금
   */
  dayOfWeek(value = '', isFullStm = false) {
    const dayOfWeek = dayjs(value).day();
    let rst = '';
    switch (dayOfWeek) {
      case 0:
        rst = '일';
        break;
      case 1:
        rst = '월';
        break;
      case 2:
        rst = '화';
        break;
      case 3:
        rst = '수';
        break;
      case 4:
        rst = '목';
        break;
      case 5:
        rst = '금';
        break;
      default:
        rst = '토';
    }
    return rst.concat(isFullStm ? '요일' : '');
  },
  /**
   * @function
   * @description  dateFormat1 유틸
   * @param {String} value     : 날짜 YYYYMMDD
   * @return {String} :  YYYY/MM/DD(요일)
   * @author junseong <junseong.kim@ubivelox.com>
   * @example
   *   stringUtil.dateFormat1('20210409') // 2021/04/09(금)
   */
  dateFormat1(value = '') {
    return dayjs(value).format('YYYY/MM/DD').concat('(', this.dayOfWeek(value), ')');
  },
  /**
   * @function
   * @description  dateFormat2 유틸
   * @param {String} value     : 날짜 YYYYMMDD
   * @return {String} :  YYYY년 MM월
   * @author junseong <junseong.kim@ubivelox.com>
   * @example
   *   stringUtil.dateFormat2('20210409') // 2021년 4월
   */
  dateFormat2(value = '') {
    return dayjs(value).format('YYYY년 M월');
  },
  /**
   * @function
   * @description  dateFormat3 유틸
   * @param {String} value     : 날짜 YYYYMMDD
   * @return {String} :  YYYY/MM/DD
   * @author hk.kim <hk.kim@ubivelox.com>
   * @example
   *   stringUtil.dateFormat1('20210409') // 2021/04/09
   */
  dateFormat3(value = '') {
    return dayjs(value).format('YYYY/MM/DD');
  },
  /**
   * @function
   * @description  numberSeperateByThree 유틸
   * @param {String} value     : 숫자
   * @param {String} isUseForceSign : 부호 강제표시여부(+ 표시)
   * @param {String} sep : 부호 강제표시시 사이에 추가적으로 표시할 항목(공백)
   * @example
   *   stringUtil.parseFloat('005.06', true, ' ') // + 5.06
   */
  parseFloat(value = '', isUseForceSign = false, sep = '') {
    // eslint-disable-next-line radix
    const number = parseFloat(value);
    return (isUseForceSign && number > 0 ? `+${sep}` : '') + number;
  },

  /**
   * @function
   * @description 입력값이 비어있는지 확인
   * @param {*} val 문자열
   * @param {*} isUseTrim trim 사용할지 여부
   * @returns
   *  true : undefined / null /  trim()후 비어있는 경우
   * false : 그외모든경우
   */
  isEmpty(val, isUseTrim = false) {
    if (val === undefined || val === null) return true;
    if (val === '') return true;
    if (isUseTrim && String(val).trim() === '') return true; // trim 처리체크
    return false;
  },

  /**
   * -구분 없는 휴대폰번호에 - 붙이기
   * @param {*} val 휴대폰번호 (10자리 이상)
   * @param {*} sep 구분자
   * @returns
   */
  toCelNo(val, sep = '-') {
    if (this.isEmpty(val, true) || String(val).length < 10) return val; // 비정상 휴대폰번호
    val = String(val).trim();
    const head = val.substr(0, 3);
    const mid = val.substr(3, val.length - 7);
    const last = val.substr(-4);
    return `${head}${sep}${mid}${sep}${last}`;
  },
  /**
   * @function
   * @description  removeComma 유틸
   * @param {String} value     : 숫자, 문자
   * @param {Boolean} isInt     : 불린
   * @author junseong <junseong.kim@ubivelox.com>
   * @example
   *   stringUtil.removeComma('100,000') // '100000'
   *   stringUtil.removeComma('100,000', true) // 100000
   */
  removeComma(value = '', isInt = false) {
    const rst = parseInt(value.toString().replace(/[,]/g, ''), 10);
    return isInt ? rst : String(rst);
  },

  /**
   * @function
   * @description  개행문자 치환
   *   - windows형(\r\n), linux(\n)형 개행문자를 치환문자로 치환한다
   * @param {*} val 입력문자
   * @param {*} replace 치환문자 (기본값 <br> / doctype html5 기준)
   * @returns
   */
  nl2br(val, replace = '<br>') {
    return (!this.isEmpty(val) ? String(val).replace(/\r\n/g, replace).replace(/\n/g, replace) : val);
  },
  /**
   * @function
   * @description  URL파라미터 추출
   *   - url에서 paramter를 추출한다.
   * @param {*} val 입력문자
   * @param {*} replace 치환문자 (기본값 <br> / doctype html5 기준)
   * @returns
   */
  getParam(val) {
    // eslint-disable-next-line no-useless-escape
    val = val.replace(/[\[]/, '\\[').replace(/[\[]/, '\\]');
    const regex = new RegExp('[\\?&]' + val + '=([^&#]*)');
    // eslint-disable-next-line no-restricted-globals
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  },
};

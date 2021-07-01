import axios from '@/plugins/axios';
import store from '@/store/index';
import processUtil from '@/utils/processUtil';
import stringUtil from '@/utils/stringUtil';
import lodash from 'lodash';

const trxReqRoot = '/api/v1/trxRequest';

/**
 * @module httpUtil
 * @description axios 편하게 사용하기 위한 유틸 함수 모음
 */
export default {
  /**
   * @function
   *
   * @description  http request 유틸
   *
   * @param {String} method    : 요청메서드
   * @param {String} reqUrl    : 요청url
   * @param {Object} args {
   *      .params       : querystring / formData(non-multipart)
   *      .payload      : request payload 항목
   *      .multipart    : multipart/form-data
   *      .headers      : 커스텀 headers
   *      .resolveUrl   : reqUrl 에 screenId 만 입력해서 자동으로 TRX url 변환시킬지 여부
   *      .skipErrAlert : 공통 axios.catch 에서 표출되는 alert 무시
   *      .timeout      : 응답 제한시간
   * }
   * @param {int} timeout : 응답제한 타임아웃
   *
   * @return {Promise} :  axios 객체
   */
  request(method, reqUrl, args) {
    const config = {
      method,
      url: reqUrl,
    };

    // TODO : 인증 short token 로직 정리후 삭제필요
    if (!processUtil.isLocal()) { // 로컬실행환경이 아닌경우에는 기존로직 그대로 수정
      const accessToken = store.get('auth/accessToken');
      const authorizationType = store.get('auth/authorizationType');
      if (!lodash.isEmpty(accessToken) && !lodash.isEmpty(authorizationType)) {
        config.headers = {
          Authorization: `Bearer ${accessToken}`,
          AuthorizationType: authorizationType,
        };
      }
    }

    if (args) {
      if (args.timeout) { // 타임아웃 제한
        config.timeout = args.timeout;
      }

      if (args.headers) { // 커스텀헤더
        config.headers = args.headers;
      }
      if (args.resolveUrl === true) { // reqUrl 변환
        config.url = this.resolveTrxRequestUrl(reqUrl);
      }
      if (args.skipErrAlert === true) { // reqUrl 변환
        config.skipErrAlert = true;
      }

      if (args.params) {
        // querystring 또는 formdata(non multipart)
        switch (method.toUpperCase()) {
          case 'GET':
          case 'DELETE':
            config.params = args.params;
            break;
          default:
            config.data = Object.keys(args.params).reduce((next, key) => {
              next.push(`${key}=${encodeURIComponent(args.params[key])}`);
              return next;
            }, []).join('&');
            break;
        }
      } else if (args.payload) {
        // body가 존재하면 바로 body로 처리
        config.data = args.payload;
      } else if (args.multipart) {
        // multipart/form-data 전송
        config.data = Object.keys(args.multipart).reduce((multiFormData, key) => {
          const part = args.multipart[key];
          if (part !== undefined) {
            if (part instanceof File) {
              // input.files[n] 형태로 직접 넘긴경우(1개만 넘긴 케이스)
              multiFormData.append(key, part);
            } else if (
              part instanceof HTMLInputElement
              && part.getAttribute('type') === 'file'
            ) {
              // input[type=file] 그대로 넘긴경우
              if (part.files) {
                part.files.forEach((file) => {
                  multiFormData.append(key, file);
                });
              }
            } else if (part instanceof FileList) {
              // input[type=file].filelist 로 넘어온경우
              part.forEach((file) => {
                multiFormData.append(key, file);
              });
            } else {
              // file이 아닌경우 (단순 스트링으로 전달)
              multiFormData.append(key, part);
            }
          }
          return multiFormData;
        }, (new FormData()));
      }
    }
    return axios(config);
  },

  /**
   * @function
   *
   * @description  페이징처리 요청을위한 http request (request 와 최대한 비슷하게 구성)
   *               - 다중TR호출은 미지원함
   *               -!! TR요청시 필요한 nxtKey 값은 자동으로 생성해주므로, input 에 넣어줄 필요 없음.
   *
   * @param {String} method     : 요청메서드
   * @param {String} reqUrl     : 요청url
   * @param {Object} args       : httpUtil 과 동일 (!!! args.payload[0] 데이터만 참조하여 내부처리함)
   * @param {Object} vm         : vue 제어대상화면 컨텍스트 객체 (무조건 this로 전달해야함)
   * @param {Object} dataName   : 응답데이터 참조를위한 TR data의 key명. 1depth 데이터만 가능함 (ex> this.MAQM0000 참조해야할경우 -> 'MAQM0000')
   * @param {Boolean} optinos   : 옵션
   * - isFml       : fml방식 TR인지 여부 (기본=false)
   * - rcrdColNm   : 반복부레코드명 (기본=Record1)
   * - isReset     : 데이터를 처음부터 다시 불러오고자 할때 (기본=false)
   * - map         : 응답받은 데이터의 반복부에 대해 가공이 필요할때 (array.map 에 적용처리됨)
   * - reqNxtKeyNm : Input 파라미터에 사용되는 nxtKey 칼럼명 (기본 nxtKey)
   * - resNxtKeyNm : Output 파라미터의 nxtKey 칼럼명 (기본 nxtKey)
   *                 ~ FML방식   = Output.Record.~ 개별로우의 nxtKey 칼럼명
   *                 ~ 비FML방식 = Output.~ 의(1depth) nxtKey 칼럼명
   * @returns
   *   then
   *     - TR응답 원본 / status,code===200 은 처리해서 리턴함
   *   catch
   *     - 비정상 TR응답
   */
  requestPaging(method, reqUrl, args, vm, dataName, options) {
    return new Promise((res, rej) => {
      let nxtKey;
      const payload = args.payload[0];
      if (typeof (options) !== 'object') { // 옵션
        options = {};
      }

      // 옵션값 보정
      if (options.isFml !== true) options.isFml = false; // FML방식
      if (stringUtil.isEmpty(options.rcrdColNm)) options.rcrdColNm = 'Record1'; // 반복부레코드칼럼
      if (options.isReset !== true) options.isReset = false; // 데이터 최초로 로딩하고자할때
      if (stringUtil.isEmpty(options.reqNxtKeyNm)) options.reqNxtKeyNm = 'nxtKey'; // 요청 nxtKey 파라미터명
      if (stringUtil.isEmpty(options.resNxtKeyNm)) options.resNxtKeyNm = 'nxtKey'; // 요청 nxtKey 파라미터명

      // const vmTargetData = dataName.split('.').reduct((nxt, curDataKey) => nxt[curDataKey], {}); // .참조dataName 처리하기(원본과의 참조성이 사라져서 향후 재검토)
      if (typeof (vm[dataName]) === 'object') { // 데이터가 object형태인경우
        if (vm[dataName].hasMore === false && options.isReset !== true) { // 이런경우, 더 조회할 데이터가 없다고 판단한다
          console.log('조회할 데이터 없음');
          res(vm[dataName].hasMore);
          return;
        }
        if (stringUtil.isEmpty(vm[dataName][options.reqNxtKeyNm], true) || parseInt(vm[dataName][options.reqNxtKeyNm], 10) === 0 || options.isReset === true) { // nxtKey가 없거나, 0이면 최초요청 or 데이터 초기부터 다시조회요청일때
          vm[dataName][options.rcrdColNm] = []; // 반복부레코드 초기화
          nxtKey = '';
        } else { // 그이외의 경우에는 nxtKey 유지
          nxtKey = vm[dataName][options.reqNxtKeyNm];
        }
      } else {
        vm[dataName][options.rcrdColNm] = []; // 반복부레코드 초기화
        nxtKey = '';
      }

      if (typeof (payload.input) !== 'object') { // input 없으면 object로 생성
        payload.input = {};
      }
      if (options.isFml === true && (stringUtil.isEmpty(payload.input.inqCnt) || !parseInt(payload.input.inqCnt, 10))) { // FML요청인데 inqCnt 가 없거나 잘못된 수치이면
        payload.input.inqCnt = '20'; // 기본 20개로 세팅
      }
      if (vm[dataName][options.rcrdColNm] === undefined) { // 반복부 데이터가 없으면
        vm[dataName][options.rcrdColNm] = [];
      }
      payload.input[options.reqNxtKeyNm] = nxtKey; // nxtkey세팅

      this.request(method, reqUrl, args)
        .then((rst) => {
          if (this.trxResponseIsOk(rst)) {
            const extracted = this.extractDataFromTrxResponse(rst); // 응답값 데이터추출
            const trCode = Object.keys(extracted)[0]; // TR코드 추출

            if (stringUtil.isEmpty(nxtKey, true)) { // nxtKey 가 없으면 최초조회로 판단
              vm[dataName] = extracted[trCode];
            } else {
              vm[dataName][options.rcrdColNm] = vm[dataName][options.rcrdColNm].concat(extracted[trCode][options.rcrdColNm]);
            }

            // -- 조회된 데이터가 있을때
            if (extracted[trCode][options.rcrdColNm].length > 0) {
              const parsed = this.parseTrxResponseHasMoreData(extracted[trCode], options.isFml, options.rcrdColNm, options.reqNxtKeyNm, options.resNxtKeyNm); // 더보기가능여부, nxtKey 추출
              vm.$set(vm[dataName], 'hasMore', parsed.hasMore);
              vm.$set(vm[dataName], options.reqNxtKeyNm, parsed[options.reqNxtKeyNm]);
              // vm[dataName].hasMore = parsed.hasMore;
              // vm[dataName].nxtKey = parsed.nxtKey;

              // option.map 가 있으면, 필터적용
              if (options.map instanceof Function) {
                extracted[trCode][options.rcrdColNm].map((item) => options.map(item));
              }
            // -- 조회된 데이터가 없을때
            } else {
              // vm[dataName].nxtKey = '';
              // vm[dataName].hasMore = false;
              vm.$set(vm[dataName], 'hasMore', false);
              vm.$set(vm[dataName], options.reqNxtKeyNm, '');
            }

            res(rst);
          } else { // TR응답 비정상
            rej(new Error(rst.data.message));
          }
        })
        .catch((err) => {
          console.error(err);
          rej(err);
        });
    });
  },

  /**
   * @function
   *
   * @description TRX 응답값에 더조회할 내용이 있는지 여부 판단하여 값 리턴
   *  - this.requestPaging 내부에서 더보기 데이터 계산을 위해 사용하고 있으나,
   *    해당 메서드를 거치지않고 더보기여부 값 세팅이 필요할때 사용
   *
   * @param {*} data trx응답의 response 하부의 실제데이터
   * @param {*} isFml fml인지여부 (기본 false)
   * @param {*} rcrdNm 더보기에 사용할 반복부 레코드명 (기본 Record1)
   * @param {*} reqNxtKeyNm Input 파라미터에 사용되는 nxtKey 칼럼명 (기본 nxtKey)
   * @param {*} resNxtKeyNm Output 파라미터의 nxtKey 칼럼명 (기본 nxtKey)
   *                        ~ FML방식   = Output.Record.~ 개별로우의 nxtKey 칼럼명
   *                        ~ 비FML방식 = Output.~ 의(1depth) nxtKey 칼럼명
   *
   * @returns
   */
  parseTrxResponseHasMoreData(data, isFml = false, rcrdNm = 'Record1', reqNxtKeyNm = 'nxtKey', resNxtKeyNm = 'nxtKey') {
    let hasMore; // 더보기가능 여부
    let nxtKey = ''; // nxtKey값
    if (data[rcrdNm] && data[rcrdNm].length > 0) {
      if (isFml === true) { // --- FML방식의 데이터인경우
        nxtKey = data[rcrdNm][data[rcrdNm].length - 1][resNxtKeyNm]; // 마지막row의 nxtKey
        if (!stringUtil.isEmpty(nxtKey, true) && !stringUtil.isEmpty(data.tlRcrdCnt, true)) { // nxtkey, tlRcrdCnt 가 존재하면 처리
          if (parseInt(nxtKey, 10) < parseInt(data.tlRcrdCnt, 10)) { // nxtKey 값과 tlRcrdcnt 값 비교하여 더조회할 데이터가 있는지 판단
            hasMore = true;
          } else {
            hasMore = false;
          }
        } else {
          hasMore = false;
        }
      } else if (!stringUtil.isEmpty(data[resNxtKeyNm]) && parseInt(data[resNxtKeyNm], 10) > 0) { // --- 비 FML방식의 조회인경우
        nxtKey = String(data[resNxtKeyNm]);
        hasMore = true;
      } else {
        hasMore = false;
      }
    } else {
      hasMore = false;
    }
    const rtnData = {};
    rtnData.hasMore = hasMore;
    rtnData[reqNxtKeyNm] = nxtKey;
    return rtnData;
  },

  /**
   * @function
   *
   * @description trx응답값이 정상인지 확인
   *
   * @param {*} res trx 원본 응답값
   * @return true / false
   */
  trxResponseIsOk(res) {
    return (res && res.status === 200 && res.data.code === '200');
  },

  /**
   * @function
   *
   * @description 화면ID로 trx 요청 url 생성하기
   *
   * @param {*} screenId
   * @return
   *    trxRequestUrl attached with path variables
   */
  resolveTrxRequestUrl(screenId) {
    if (stringUtil.isEmpty(screenId)) { throw new Error('invalid screenId'); }
    return trxReqRoot.concat('/', screenId.substr(0, 2), '/', screenId.substr(2, 2), '/', screenId);
  },

  /**
   * @function
   *
   * @description TRX 요청후 응답에서 data response 추출해오기
   *
   * @param {*} res trx response
   *
   * @returns
   *  {TRXID1, TRXID2....}
   */
  extractDataFromTrxResponse(res) {
    return Object.keys(res.data.data).reduce((next, key) => {
      const rtn = {};
      rtn[key] = res.data.data[key].response;
      next = Object.assign(next, rtn);
      return next;
    }, {});
  },
};

import axios from '@/plugins/axios';

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
   *      .params     : querystring / formData(non-multipart)
   *      .payload   : request payload 항목
   *      .multipart : multipart/form-data
   * }
   * @param {int} timeout : 응답제한 타임아웃
   *
   * @return {Promise} :  axios 객체
   */
  request(method, reqUrl, args, timeout) {
    const config = {
      method,
      url: reqUrl,
    };
    if (timeout) {
      // 타임아웃 제한
      config.timeout = timeout;
    }
    if (args) {
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
};

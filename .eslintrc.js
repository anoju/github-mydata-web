module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0, // 개행문자 스타일(windows=crlf / unix=lf)
    'comma-dangle': 'error', // 후행 쉼표
    'comma-spacing': 'error', // 콤마뒤에 한칸띄어주기 설정
    'max-len': ['error', { code: 250 }], // 한줄의 최대 길이
    'vue/html-indent': ['error', 2],
    'no-param-reassign': 'off',
    indent: ['error', 2, { // 들여쓰기 칸수(spacing/tab 구분은 어디서 하는가??)
      SwitchCase: 1, // switch 하부의 case 에 indent 배수 설정
    }],
    quotes: ['error', 'single'], // 문자열따옴표 설정(single / double)
    'eol-last': ['error'], // 파일끝에 한줄공백 설정
    'no-alert': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // 소스라인 간의 줄공백 최대값 설정
    'no-trailing-spaces': ['error'], // trim에 의해서 제거대상이 되는 공백(소스라인 양끝)에 대한 처리
    'prefer-template': ['off'], // `template${~~}` 사용 강제여부 설정
  },
};

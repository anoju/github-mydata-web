# frontend

## ESLint settings.json

npm i 실행 후 settings.json 에 아래 설정 값 추가

"eslint.validate": [
"vue",
"javascript",
"typescript",
],
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true,
},
"editor.formatOnSave": true,
"editor.formatOnPaste": true,
"editor.defaultFormatter": "dbaeumer.vscode-eslint",

## 배포 환경 설정

#참고 가이드 URL
https://abc2080.tistory.com/entry/AWS-CLI%EB%A5%BC-%ED%86%B5%ED%95%9C-Vuejs-Web-App-%EB%B0%B0%ED%8F%AC

1. aws service cli 설치
   아래 URL에서 사용자에 맞는 설치 파일 다운로드하여 실행
   https://docs.aws.amazon.com/cli/latest/userguide/install-windows.html

2. cmd 실행하여 AWS CLI 설정
   쉘에 aws configure를 입력 후 아래의 정보로 설정 진행

=입력에 필요한 정보=
cloud:
aws:
credentials:
accessKey: AKIAIIURVSYDHFINUUQA
secretKey: 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

s3:
bucket: kb-stock

region:
static: ap-northeast-2

3. 내 프로젝트 경로로 이동해주세요. >> cd 프로젝트경로
   명령어 예시) cd C:\gitRepo\myProject

4. vue cli를 통해 S3에 배포할 것이기 때문에 노드 패키지 매니저로 관련 플러그인 설치
   아래 명령어를 순차적으로 입력.
   npm i -g @vue/cli
   npm i @vue/cli-service
   npm i vue-cli-plugin-s3-deploy

5. 설치한 플러그인을 호출하여 배포를 위한 설정을 진행
   명령어 입력 : vue invoke s3-deploy

=입력에 필요한 정보=
awsProfile : 기본값 - enter 입력 ,
endpoint : enter 입력 ,
region : 기본값 - enter 입력 ,
bucket : kb-stock (상단 s3 bucket의 이름 입력) ,
createBucket : 기본값 - enter 입력 ,  
staticHosting : Y 입력,
staticIndexPage : 기본값 - enter 입력 ,  
staticErrorPage : 기본값 - enter 입력 ,  
assetPath : 기본값 - dist 입력 ,
assetMatch : 기본값 - enter 입력 ,
deployPath : 기본값 - enter 입력 ,
acl : 기본값 - public-read 선택 ,
pwa : N 입력,
enableCloudfront : N 입력,

6. 캐시 제거  
   npm cache clean --force

7. 빌드
   npm run build

8. 배포
   npm run deploy

## chart.js
json-server 실행: 
```javascript
   npx json-server ./chartData.json --port 8080
```

|체크|상세|
|---|---|
|좌우스크롤|https://jsfiddle.net/EmmaLouise/eb1aqpx8/3/|
|차트내 클릭 이벤트|https://www.chartjs.org/docs/latest/general/interactions/events.html|
|차트 외부 이벤트|http://localhost:8082/dev/chart|




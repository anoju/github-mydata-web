<template>
  <div>
    <h2 class="gd__h1">httpUtil.js -> request 활용</h2>
    <div class="gd__wrap">
      <dl class="section">
        <dt>
          <h3 class="gd__h2">GET</h3>
        </dt>
        <dd>
          <div>/api/axios/get</div>
          <kb-button
            color="blue"
            size="h32"
            @click="get"
          >
            request
          </kb-button>
        </dd>

        <dt>
          <h3 class="gd__h2">POST</h3>
        </dt>
        <dd>
          <div>/api/axios/post</div>
          <kb-button
            color="blue"
            size="h32"
            @click="post"
          >
            request
          </kb-button>
        </dd>

        <dt>
          <h3 class="gd__h2">payload</h3>
        </dt>
        <dd>
          <div>/api/axios/payload</div>
          <kb-button
            color="blue"
            size="h32"
            @click="payload"
          >
            request
          </kb-button>
        </dd>

        <dt>
          <h3 class="gd__h2">multipart/form-data</h3>
        </dt>
        <dd>
          <div>/api/axios/multipart</div>
          <div>
            <input type="file" ref="uploadFile">
          </div>
          <kb-button
            color="blue"
            size="h32"
            @click="multipart"
          >
            request
          </kb-button>
        </dd>
      </dl>
    </div>

  </div>
</template>
<script>
export default {
  name: 'axios',
  methods: {
    /**
     * GET 요청
     */
    get() {
      const args = {
        params: {
          a: '겟1',
          b: '겟2',
          c: '겟3',
        },
      };

      this.$http.request('GET', '/api/axios/get', args)
        .then((res) => {
          console.log(res);
        });
    },

    /**
     * POST 요청
     */
    post() {
      const args = {
        params: {
          a: '포스트1',
          b: '포스트2',
          c: '포스트3',
        },
      };
      this.$http.request('POST', '/api/axios/post', args)
        .then((res) => {
          console.log(res);
        });
    },

    /**
     * payload 요청
     *  - PUT/UPDATE 등등 메서드 변경하여 사용가능
     */
    payload() {
      const args = {
        payload: {
          a: 'payloadData1',
          b: 'payloadData2',
          c: 'payloadData3',
        },
      };
      this.$http.request('POST', '/api/axios/payload', args)
        .then((res) => {
          console.log(res);
        });
    },

    /**
     * multipart 요청
     *  - args.multipart 에 키쌍을 넣으면 multipart로 전송처리된다
     */
    multipart() {
      const file = this.$refs.uploadFile;
      const args = {
        multipart: {
          a: '포스트-멀티파트-1',
          b: '포스트-멀티파트-2',
          c: '포스트-멀티파트-3',
          file1: file.files, // files 그대로 넘기기방식
          file2: file.files[0], // files[0] 항목1 직접전달 방식
          file3: file, // input element 직접전달 방식
        },
      };

      this.$http.request('POST', '/api/axios/multipart', args)
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

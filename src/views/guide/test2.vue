<template>
  <div class="section">
    <h2 class="tit_h1">첨부파일 테스트</h2>
    <kb-input ref="files" file multiple @change="imageUpload" />
    <ul v-if="files.length" class="file_preview_img mg_t30">
      <li v-for="(file, index) in files" :key="index">
        <div class="img_box">
          <img :src="file.preview" alt="" />
          <button
            class="del"
            aria-label="삭제"
            @click="fileDeleteButton"
            :name="file.number"
          ></button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'test',
  data() {
    return {
      files: [], // 업로드용 파일
      filesPreview: [],
      uploadImageIndex: 0, // 이미지 업로드를 위한 변수
    };
  },
  mounted() {},
  methods: {
    imageUpload(event) {
      const $files = event.target.files;
      console.log('imageUpload', event.target.files);

      // this.files = [...this.files, $files];
      // 하나의 배열로 넣기
      let num = -1;
      for (let i = 0; i < $files.length; i += 1) {
        this.files = [
          ...this.files,
          // 이미지 업로드
          {
            // 실제 파일
            file: $files[i],
            // 이미지 프리뷰
            preview: URL.createObjectURL($files[i]),
            // 삭제및 관리를 위한 number
            number: i,
          },
        ];
        num = i;
        // 이미지 업로드용 프리뷰
        // this.filesPreview = [
        //   ...this.filesPreview,
        //   { file: URL.createObjectURL($files[i]), number: i }
        // ];
      }
      this.uploadImageIndex = this.uploadImageIndex + num + 1; // 이미지 index의 마지막 값 + 1 저장
      console.log(this.files);
      console.log(this.filesPreview);
    },
    fileDeleteButton(e) {
      const name = e.target.getAttribute('name');
      this.files = this.files.filter((data) => data.number !== Number(name));
      // console.log(this.files);
    },
  },
};
</script>

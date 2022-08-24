<template>
  <div class="section">
    <h2 class="tit_h1">첨부파일 테스트</h2>
    <br />
    <kb-input ref="files" file multiple @change="imageUpload" />

    <div v-if="files.length" class="mg_t30">
      <h3 class="tit_h2">swipe 형태</h3>
      <kb-swiper autoWidth navi class="file_preview_img">
        <swiper-slide v-for="(file, index) in files" :key="index">
          <div class="img_box">
            <img :src="file.preview" alt="" />
            <button
              class="del"
              aria-label="삭제"
              @click="fileDeleteButton(index)"
            ></button>
          </div>
        </swiper-slide>
      </kb-swiper>

      <h3 class="tit_h2">grid 형태</h3>
      <ul v-if="files.length" class="file_preview_img">
        <li v-for="(file, index) in files" :key="index">
          <div class="img_box">
            <img :src="file.preview" alt="" />
            <button
              class="del"
              aria-label="삭제"
              @click="fileDeleteButton(index)"
            ></button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'test',
  data() {
    return {
      files: [], // 업로드용 파일
      filesPreview: [],
      // uploadImageIndex: 0, // 이미지 업로드를 위한 변수
    };
  },
  mounted() {},
  methods: {
    imageUpload(event) {
      const $files = event.target.files;
      for (let i = 0; i < $files.length; i += 1) {
        this.files = [
          ...this.files,
          {
            file: $files[i],
            preview: URL.createObjectURL($files[i]),
          },
        ];
      }
    },
    fileDeleteButton(index) {
      this.files.splice(index, 1);
    },
  },
};
</script>

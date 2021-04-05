<template>
  <kb-page page-title="안면인증 등록">
    <kb-page-body>
      <div class="section">
        <kb-title-bar
          h1
          center
          class="pd_t40"
          title="얼굴을 보여주세요."
        />

        <div class="face_wrap">
          <div class="circle">
            <!-- 이미지 등 삽입 -->
          </div>
        </div>
        <kb-button-wrap bottom-fixed>
          <kb-button
            yellow
          >
            확인
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT02D006',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

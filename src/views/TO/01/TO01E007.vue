<template>
  <kb-pop
    full
    title="나의 레벨 지도"
  >
    <kb-pop-body>
      <div class="level_map">
        <p class="tit">레벨업을 완료하면 <br />스타벅스 커피를 드려요.</p>
        <p class="sub_text">퀘스트하며 자산도 관리하고 커피도 받고!</p>

        <div class="level_box">
          <!-- 성공시 success 클래스 적용 -->
          <div class="box success">
            <div class="level1">
              <p class="text">Level 1</p>
              <p class="point">시작</p>
            </div>
          </div>
          <!-- 가장 최근에 레벨업 된 아이는 active 클래스 적용 -->
          <div class="box active">
            <div class="level2">
              <p class="text">Level 2</p>
              <p class="point">50P</p>
            </div>
          </div>
          <div class="box">
            <div class="level3">
              <p class="text">Level 3</p>
              <p class="point">100P</p>
            </div>
          </div>
          <div class="box">
            <div class="level4">
              <p class="text">Level 4</p>
              <p class="point">300P</p>
            </div>
          </div>
          <div class="box">
            <div class="level5">
              <p class="text">Level 5</p>
              <p class="point">600P</p>
            </div>
          </div>
          <div class="box">
            <div class="level6">
              <p class="text">Level 6</p>
              <p class="point">900P</p>
            </div>
          </div>
          <div class="box">
            <div class="level7">
              <p class="text">Level 7</p>
              <p class="point">1200P</p>
            </div>
          </div>
          <div class="box">
            <div class="level8">
              <p class="text">Level 8</p>
              <p class="point">1500P</p>
            </div>
          </div>
          <div class="box">
            <div class="level9">
              <p class="text">Level 9</p>
              <p class="point">1800P</p>
            </div>
          </div>
          <div class="box">
            <kb-button not aTag class="level10" @click="levelcoupon">
              <div>
                <p class="text">Level 10</p>
                <p class="point">2000P</p>
              </div>
              <p class="sub_text">스타벅스 커피를 드려요~</p>
              <p class="success_text">자산관리 <br />만렙이시네요!</p>
              <i class="ico_coffee"></i>
            </kb-button>
          </div>
        </div>

      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TO01E007',
  data() {
    return {
      chkVal: [],
    };
  },
  methods: {
  },
};
</script>

<template>
  <div>
    <!-- 내서랍이 없는 경우 -->
    <template v-if="noDate">
      <div class="assets_none_box">
        <div class="none_box">
          <i></i>
          등록 된 관심 메모가 없습니다.<br />
          내 서랍에서 관심 메모를 등록해보세요 :)
          <kb-button line blue class="more fz_16">내 서랍</kb-button>
        </div>
      </div>
    </template>
    <!-- //내서랍이 없는 경우 -->

    <template v-if="!noDate">
      <div class="mypage_list2">
        <ul class="mg_t0 bd_t0">
          <li>
            <div class="text_box flex11">
              <p class="tit ellipsis">제목 한 줄까지만 출력 이미지는 삭제됨..</p>
              <p class="mb_t4 fz_14 fc_666">메모 내용 한 줄까지 출력영역입니다...</p>
            </div>
            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              star
              :class="{checked:isstar1}"
              role="checkbox"
              :aria-checked="isstar1?'true':'false'"
              @click="isstar1 = !isstar1"
              class="align_self_top"
            >관심등록</kb-button>
          </li>
          <li>
            <div class="text_box flex11">
              <p class="tit ellipsis">제목 한 줄까지만 출력 이미지는 삭제됨..</p>
              <p class="mb_t4 fz_14 fc_666">메모 내용 한 줄까지 출력영역입니다...</p>
            </div>
            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              star
              :class="{checked:isstar1}"
              role="checkbox"
              :aria-checked="isstar1?'true':'false'"
              @click="isstar1 = !isstar1"
              class="align_self_top"
            >관심등록</kb-button>
          </li>
          <li>
            <div class="text_box flex11">
              <p class="tit ellipsis">제목 한 줄까지만 출력 이미지는 삭제됨..</p>
              <p class="mb_t4 fz_14 fc_666">메모 내용 한 줄까지 출력영역입니다...</p>
            </div>
            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              star
              :class="{checked:isstar1}"
              role="checkbox"
              :aria-checked="isstar1?'true':'false'"
              @click="isstar1 = !isstar1"
              class="align_self_top"
            >관심등록</kb-button>
          </li>
          <li>
            <div class="text_box flex11">
              <p class="tit ellipsis">제목 한 줄까지만 출력 이미지는 삭제됨..</p>
              <p class="mb_t4 fz_14 fc_666">메모 내용 한 줄까지 출력영역입니다...</p>
            </div>
            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              star
              :class="{checked:isstar1}"
              role="checkbox"
              :aria-checked="isstar1?'true':'false'"
              @click="isstar1 = !isstar1"
              class="align_self_top"
            >관심등록</kb-button>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'MY06A004',
  data() {
    return {
      noDate: false,
      isstar1: true,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

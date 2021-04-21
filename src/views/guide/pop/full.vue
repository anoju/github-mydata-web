<template>
  <kb-pop
    full
    title="전체팝업"
  >
    <kb-pop-body>
      <div class="section">
        <div v-if="txt">
          props.txt : {{ txt }}
        </div>
        <div v-if="txt2">
          props.txt2 : {{ txt2 }}
        </div>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        <kb-tabs fixed :idx="tabIdx" @idx="changIdx">
          <kb-tab
            title="탭메뉴1"
          >
            <h1>탭메뉴1</h1>
            내용1 <br>
            내용1 <br>
            내용1
          </kb-tab>
          <kb-tab
            title="탭메뉴2"
          >
            <h1>탭메뉴2</h1>
            내용2 <br>
            내용2 <br>
            내용2
          </kb-tab>
          <kb-tab
            title="탭메뉴3"
          >
            <h1>탭메뉴3</h1>
            내용3 <br>
            내용3 <br>
            내용3
          </kb-tab>
        </kb-tabs>
        tabIdx: {{tabIdx}}
        <br>
        <br>
        <kb-button-wrap>
          <kb-button line @click="showModalPopup($event.target)">
            팝업위에 팝업
          </kb-button>
          <kb-button line @click="changePopup">
            팝업닫고 팝업
          </kb-button>
        </kb-button-wrap>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        팝업 컨텐츠<br>
        <!-- //CMS 영역 -->
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button
        v-if="tabIdx === 0"
        yellow
        @click="toStep(1)"
      >
        조회
      </kb-button>
      <kb-button
        v-if="tabIdx === 1"
        line
        @click="toStep(0)"
      >
        이전
      </kb-button>
      <kb-button
        v-if="tabIdx === 1"
        yellow
        @click="toStep(2)"
      >
        등록
      </kb-button>
      <kb-button
        v-if="tabIdx === 2"
        line
        @click="toStep(1)"
      >
        이전
      </kb-button>
      <kb-button
        v-if="tabIdx === 2"
        yellow
        @click="popClose"
      >
        확인
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'full',
  props: {
    txt: { type: String, default: null },
    txt2: { type: String, default: null },
  },
  data() {
    return {
      tabIdx: 0,
    };
  },
  mounted() {
    // console.log(this.txt)
    // console.log(this.propsData)
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
    changIdx(i) {
      this.tabIdx = i;
    },
    toStep(i) {
      this.tabIdx = i;
    },
    showModalPopup(el) {
      this.$modal({
        component: () => import('@/views/guide/pop/modal.vue'),
        returnFocus: el,
        componentProps: {
          allClose: true,
        },
      }).then((result) => {
        if (result.payload === 'close') this.$emit('close');
      });
    },
    changePopup() {
      this.$emit('close', { payload: 'change' });
    },
  },
};
</script>

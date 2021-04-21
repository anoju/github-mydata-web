<template>
  <div class="section pd_bottom">
    <h2 class="gd__h1">팝업</h2>
    <div>
      <kb-button-wrap>
        <kb-button
          yellow
          @click="showFullPopup($event.target)"
        >
          전체팝업
        </kb-button>
        <kb-button
          line
          @click="showFullPopup2($event.target)"
        >
          전체팝업(props 포함)
        </kb-button>
      </kb-button-wrap>
      <kb-button-wrap>
        <kb-button
          yellow
          @click="showModalPopup($event.target)"
        >
          모달팝업
        </kb-button>
        <kb-button
          line
          @click="showBottomPopup($event.target)"
        >
          하단팝업
        </kb-button>
      </kb-button-wrap>
    </div>
    <h2 class="gd__h1">툴팁</h2>
    <div>
      <kb-button
        not
        class="tooltip_btn"
        v-tooltip="'views/guide/pop/tooltip.vue'"
        aria-label="팝업으로 상세내용 확인"
      >팝업으로 상세내용 확인</kb-button>
      <kb-button
        not
        class="tooltip_btn"
        aria-label="팝업으로 상세내용 확인"
        v-tooltip="'views/guide/pop/tooltip2.vue'"
      >팝업으로 상세내용 확인</kb-button>
    </div>
    <h2 class="gd__h1">alert,confirm</h2>
    <div>
      <kb-button-wrap>
        <kb-button
          yellow
          @click="showAlert($event.target)"
        >
          alert
        </kb-button>
        <kb-button
          line
          @click="showConfirm($event.target)"
        >
          confirm
        </kb-button>
        <kb-button
          line
          blue
          @click="customAlert($event.target)"
        >
          버튼 custom
        </kb-button>
      </kb-button-wrap>
    </div>
    <h2 class="gd__h1">toast</h2>
    <div>
      <kb-button-wrap>
        <kb-button
          line
          @click="showToast('토스트팝업 메세지')"
        >
          토스트 팝업열기
        </kb-button>
        <kb-button
          line
          @click="showToast('토스트팝업 메세지', '/guide/table')"
        >
          토스트, 링크이동
        </kb-button>
      </kb-button-wrap>
      <kb-button-wrap>
        <kb-button
          line
          @click="showAlarm('토스트팝업(알람) 메세지')"
        >
          토스트(알람) 팝업열기
        </kb-button>
        <kb-button
          line
          @click="showAlarm('토스트팝업(알람) 메세지', '/guide/table')"
        >
          토스트(알람), 링크이동
        </kb-button>
      </kb-button-wrap>
    </div>
    <h2 class="gd__h1">로딩</h2>
    <div>
      <h3 class="gd__h2">로딩A:기본로딩</h3>
      <kb-button-wrap>
        <kb-button
          line
          @click="showLoading()"
        >
          로딩열기
        </kb-button>
        <kb-button
          line
          @click="showLoading('로딩텍스트 넣어서')"
        >
          텍스트 들어간 로딩
        </kb-button>
        <kb-button
          line
          style="z-index:1000"
          @click="hideLoading"
        >
          로딩닫기
        </kb-button>
      </kb-button-wrap>
      <h3 class="gd__h2">로딩B: 연동로딩</h3>
      <kb-button-wrap>
        <kb-button
          line
          @click="showLoading2()"
        >
          로딩열기
        </kb-button>
        <kb-button
          line
          @click="showLoading2('로딩텍스트 넣어서')"
        >
          텍스트 들어간 로딩
        </kb-button>
        <kb-button
          line
          style="z-index:1000"
          @click="hideLoading"
        >
          로딩닫기
        </kb-button>
      </kb-button-wrap>
      <h3 class="gd__h2">로딩C: 이벤트로딩 (아직 정의 안됨)</h3>
      <kb-button-wrap>
        <kb-button
          line
          @click="showLoading3()"
        >
          로딩열기
        </kb-button>
        <kb-button
          line
          @click="showLoading3('로딩텍스트 넣어서')"
        >
          텍스트 들어간 로딩
        </kb-button>
        <kb-button
          line
          style="z-index:1000"
          @click="hideLoading"
        >
          로딩닫기
        </kb-button>
      </kb-button-wrap>
    </div>
  </div>
</template>
<script>
export default {
  name: 'popup',
  data() {
    return {
      idx: 0,
      isAlertTitle: false,
    };
  },
  methods: {
    showLoading(txt) {
      this.$loading(true, txt);
    },
    showLoading2(txt) {
      this.$loading(true, txt, 'B');
    },
    showLoading3(txt) {
      this.$loading(true, txt, 'C');
    },
    hideLoading() {
      this.$loading(false);
    },
    showFullPopup(el) {
      this.$modal({
        component: () => import('@/views/guide/pop/full.vue'),
        returnFocus: el,
      }).then((result) => {
        if (result.payload === 'change') this.showModalPopup(el);
      });
    },
    showFullPopup2(el) {
      this.$modal({
        component: () => import('@/views/guide/pop/full.vue'),
        componentProps: {
          txt: '가나다라마바사',
          txt2: 'ABCDEFGHIJ',
        },
        returnFocus: el,
      });
    },
    showModalPopup(el) {
      this.$modal({
        component: () => import('@/views/guide/pop/modal.vue'),
        returnFocus: el,
      });
    },
    showBottomPopup(el) {
      this.$modal({
        component: () => import('@/views/guide/pop/bottom.vue'),
        returnFocus: el,
      });
    },
    showAlert(el) {
      if (this.isAlertTitle) {
        this.$alert('제목있는 <br>얼럿창입니다.', el, '얼럿창제목').then(() => {
          console.log('확인');
        });
      } else {
        this.$alert('제목없는 <br>얼럿창입니다.', el).then(() => {
          console.log('확인');
        });
      }
      this.isAlertTitle = !this.isAlertTitle;
    },
    showConfirm(el) {
      if (this.isAlertTitle) {
        this.$confirm('제목있는 <br>컨펌창입니다.', el, '컨펌창 <strong class="fc_red">제목<strong>').then((result) => {
          console.log(result);
        });
      } else {
        this.$confirm('제목없는 <br>컨펌창입니다.', el).then((result) => {
          console.log(result);
        });
      }
      this.isAlertTitle = !this.isAlertTitle;
    },
    customAlert(e) {
      const msg2 = `<div><strong class="fc_red">비밀번호 5회 오류입니다.</strong></div>
          <br>
          <div class="fz_12">비밀번호 차단 해지 후 다시 시도해주세요.</div>`;
      this.$confirm(msg2, e, '', {
        cancelTxt: '시렁',
        confirmTxt: '차단해지',
      }).then((result) => {
        if (result) {
          console.log('차단해지');
        }
      });
    },
    showToast(msg, link = null) {
      // console.log(msg);
      this.$toast(msg + this.idx, link);
      this.idx += 1;
    },
    showAlarm(msg, link = null) {
      // console.log(msg);
      this.$alarm(msg + this.idx, link);
      this.idx += 1;
    },
  },
};
</script>

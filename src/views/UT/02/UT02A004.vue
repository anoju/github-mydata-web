<template>
  <kb-page no-header no-footer page-title="시작하기">
    <kb-page-body>
      <div class="intro">
        <div class="intro_top">
          <h1 class="intro_tit">
            <small>KB증권 오늘에서</small> <strong>투자를 발견하다.</strong>
          </h1>
        </div>
        <div class="intro_visual">
          <div class="motion_intro_box" ref="introBox">
            <div style="margin-left:-100px">
              <span>Insight Alarm</span>
              <span class="bg">고수의 Pick</span>
              <span>타임라인</span>
              <span>투자손익</span>
              <span>모델포트폴리오</span>
            </div>
            <div>
              <span>포트폴리오 진단</span>
              <span class="bg">내 자산 Q &amp; A</span>
              <span>오늘의 투자생활</span>
              <span class="bg">주식테마 큐레이션</span>
            </div>
            <div style="margin-left:0px">
              <span>포트폴리오 진단</span>
              <span class="bg">투자상상퀴즈</span>
              <span>은퇴진단 및 제안</span>
              <span>즉시이체</span>
            </div>
            <div>
              <span class="bg">주식종목진단</span>
              <span>주식 사자팔자</span>
              <span class="bg">주식투자습관진단</span>
              <span>금융상품검색</span>
            </div>
          </div>
        </div>
        <kb-button-wrap bottom-fixed vertical>
          <kb-button
            large
            blue
          >
            본인확인 후 시작
          </kb-button>
          <kb-button
            large
            dark
            to="/UT/15/UT15H001"
          >
            서비스 체험 후 시작
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT02A004',
  data() {
    return {
    };
  },
  mounted() {
    this.visualEvt();
  },
  methods: {
    visualEvt() {
      this.$refs.introBox.childNodes.forEach((el, i) => {
        this.cloneItems(el, 3); // 자식들 append

        let idx = parseFloat(el.style.marginLeft) < 0 ? Math.abs(parseFloat(el.style.marginLeft)) : 0;
        const last = el.childNodes.length - 1;
        let width = el.childNodes[0].offsetWidth;
        let margin = parseFloat(window.getComputedStyle(el.childNodes[0]).marginLeft) + parseFloat(window.getComputedStyle(el.childNodes[0]).marginRight);
        const delay = [23, 20, 25, 18];
        if (i % 2 !== 0) {
          el.prepend(el.childNodes[last]);
          idx = -width - margin;
        }
        setInterval(() => {
          if (i % 2 === 0) {
            if (idx >= width + margin) {
              idx = 0;
              el.append(el.childNodes[0]);
              width = el.childNodes[0].offsetWidth;
              margin = parseFloat(window.getComputedStyle(el.childNodes[0]).marginLeft) + parseFloat(window.getComputedStyle(el.childNodes[0]).marginRight);
            } else {
              idx += 1;
            }
            el.style.marginLeft = -idx + 'px';
          } else {
            if (idx >= 0) {
              el.prepend(el.childNodes[last]);
              idx = -width - margin;
              width = el.childNodes[0].offsetWidth;
              margin = parseFloat(window.getComputedStyle(el.childNodes[0]).marginLeft) + parseFloat(window.getComputedStyle(el.childNodes[0]).marginRight);
            } else {
              idx += 1;
            }
            el.style.marginLeft = +idx + 'px';
          }
        }, delay[i]);
      });
    },
    cloneItems(parent, num = 1) {
      const cloneArry = [];
      parent.childNodes.forEach((el) => {
        const clone = el.cloneNode(true);
        cloneArry.push(clone);
      });

      for (let i = 0; i < num; i += 1) {
        cloneArry.forEach((item) => {
          parent.appendChild(item.cloneNode(true));
        });
      }
    },
  },
};
</script>

<template>
  <div class="section pd_bottom">
    <h2 class="gd__h1">전체선택</h2>
    <div>
      <h3 class="gd__h2">기본</h3>
      <div>
        <kb-checkbox
          v-model="allCheckedVal"
          large
          @change="checkedAll"
        >
          <template v-if="allCheckedVal">
            전체해제
          </template>
          <template v-else>
            전체선택
          </template>
          : {{ allCheckedVal }}
        </kb-checkbox>
        <hr>
        <ul>
          <li
            v-for="(check,i) in checkList"
            :key="i"
          >
            <kb-checkbox
              v-model="checkedVal"
              :value="check.value"
              @change="checkedItem"
            >
              {{ check.label }}
            </kb-checkbox>
          </li>
        </ul>
        <div>checkedVal: {{ checkedVal }}</div>
      </div>
      <h3 class="gd__h2">약관</h3>
      <div>
        <div class="chk_list">
          <div class="chk_item">
            <kb-checkbox
              v-model="agreeAll"
              large
              input-id="agree1"
              @change="agreeAllEvt"
            >
              전체동의
              <template slot="last">
                <kb-button
                  not
                  class="chk_link toggle"
                  :class="{open:agreeOpen}"
                  aria-label="상세약관목록 확인하기"
                  @click="agreeToggleEvt"
                >상세약관목록 확인하기</kb-button>
              </template>
            </kb-checkbox>
            <kb-folding-panel
              class="chk_child"
              :active="agreeOpen"
            >
              <kb-checkbox
                v-model="agree1"
                large
                input-id="agree1_1"
                @change="agreeItemEvt"
              >
                [필수] 서비스 이용약관 동의
                <template slot="last">
                  <kb-button
                    not
                    class="chk_link"
                    aria-label="해당약관 상세 확인하기"
                  >해당약관 상세 확인하기</kb-button>
                </template>
              </kb-checkbox>
              <kb-checkbox
                v-model="agree2"
                large
                input-id="agree1_2"
                @change="agreeItemEvt"
              >
                [필수] 개인정보수집 및 이용동의
                <template slot="last">
                  <kb-button
                    not
                    class="chk_link"
                    aria-label="해당약관 상세 확인하기"
                  >해당약관 상세 확인하기</kb-button>
                </template>
              </kb-checkbox>
              <kb-checkbox
                v-model="agree3"
                large
                input-id="agree1_3"
                @change="agreeItemEvt"
              >
                [필수] 고유식별번호 처리동의
                <template slot="last">
                  <kb-button
                    not
                    class="chk_link"
                    aria-label="해당약관 상세 확인하기"
                  >해당약관 상세 확인하기</kb-button>
                </template>
              </kb-checkbox>
              <kb-checkbox
                v-model="agree4"
                large
                input-id="agree1_4"
                @change="agreeItemEvt"
              >
                [필수] 표준전자거래금4융 약관동의
                <template slot="last">
                  <kb-button
                    not
                    class="chk_link"
                    aria-label="해당약관 상세 확인하기"
                  >해당약관 상세 확인하기</kb-button>
                </template>
              </kb-checkbox>
            </kb-folding-panel>
          </div>
        </div>
      </div>
    </div>
    <h2 class="gd__h1">animate(function)</h2>
    <div>
      <h3 class="gd__h2">fadeOut, fadeIn</h3>
      <div
        class="gd__box"
        ref="fadeBox"
      >
        BOX
      </div>
      <kb-button-wrap>
        <kb-button line @click="boxFadeOut">fadeOut</kb-button>
        <kb-button line @click="boxFadeIn">fadeIn</kb-button>
      </kb-button-wrap>

      <h3 class="gd__h2">slideUp, slideDown</h3>
      <br>
      <div
        class="gd__box"
        ref="slideBox"
      >
        BOX
      </div>
      <kb-button-wrap>
        <kb-button line @click="boxSlideUp">slideUp</kb-button>
        <kb-button line @click="boxSlideDown">slideDown</kb-button>
      </kb-button-wrap>

      <h3 class="gd__h2">scrollTo</h3>
      <kb-button-wrap>
        <kb-button line @click="scrollToEvt">scrollTo</kb-button>
      </kb-button-wrap>
    </div>
    <h2 class="gd__h1">util</h2>
    <div>
      <h3 class="gd__h2">addComma, removeComma</h3>
      <h4>{{num1}}</h4>
      <kb-button-wrap>
        <kb-button line @click="addCommaEvt">addComma</kb-button>
        <kb-button line @click="removeCommaEvt">removeComma</kb-button>
      </kb-button-wrap>
      <br>
      <p>숫자, 문자 구분을 안하니 숫자에만 사용할 것</p>
      <h3 class="gd__h2">onlyNumber</h3>
      <h4>{{num2}}</h4>
      <kb-button-wrap>
        <kb-button line @click="onlyNumberEvt">onlyNumber</kb-button>
        <kb-button line @click="onlyNumberEvt2">소수점포함</kb-button>
        <kb-button line @click="resetNum2Evt">원래대로</kb-button>
      </kb-button-wrap>
      <br>
      <p>소수점을 포함시킬 때 마침표 유의할 것</p>
      <h3 class="gd__h2">dateString, weekString, dateFormat</h3>
      <div>{{dateString}}</div>
      <kb-button-wrap>
        <template slot="inner">
          <div class="flex">
            <kb-button line @click="dateStringEvt">오늘(전체)</kb-button>
            <kb-button line @click="dateStringEvt(0,8)">오늘(날짜만)</kb-button>
            <kb-button line @click="dateStringEvt(8,6, 'time')">오늘(시간만)</kb-button>
          </div>
          <div class="flex">
            <kb-button line @click="dateStringEvt(0,4)">오늘(년도)</kb-button>
            <kb-button line @click="dateStringEvt(4,2)">오늘(월)</kb-button>
            <kb-button line @click="dateStringEvt(6,2)">오늘(일)</kb-button>
          </div>
          <div class="flex">
            <kb-button line @click="dateStringEvt(8,2)">오늘(시)</kb-button>
            <kb-button line @click="dateStringEvt(10,2)">오늘(분)</kb-button>
            <kb-button line @click="dateStringEvt(12,2)">오늘(초)</kb-button>
          </div>
          <div class="flex">
            <kb-button line @click="dateStringEvt2(5)">오늘 5일후(날짜만)</kb-button>
            <kb-button line @click="dateStringEvt2(-2)">오늘 2일전(날짜만)</kb-button>
          </div>
          <div class="flex">
            <kb-button line @click="weekStringEvt()">오늘(요일)</kb-button>
            <kb-button line @click="weekStringEvt(-1)">어제(요일)</kb-button>
            <kb-button line @click="weekStringEvt(1)">내일(요일)</kb-button>
          </div>
        </template>
      </kb-button-wrap>
    </div>
  </div>
</template>
<script>
export default {
  name: 'etc',
  data() {
    return {
      allCheckedVal: false,
      checkList: [
        { label: '체크박스1', value: 'chk1' },
        { label: '체크박스2', value: 'chk2' },
        { label: '체크박스3', value: 'chk3' },
        { label: '체크박스4', value: 'chk4' },
        { label: '체크박스5', value: 'chk5' },
      ],
      checkedVal: [],

      // 약관
      agreeAll: false,
      agreeOpen: true,
      agree1: false,
      agree2: false,
      agree3: false,
      agree4: false,
      num1: '123123123.0532',
      num2: '123,123.05원 입니다.',
      resetNum2: '',
      dateString: '',
    };
  },
  mounted() {

  },
  methods: {
    checkedAll() {
      this.checkedVal = [];
      if (this.allCheckedVal) {
        this.checkList.forEach((check) => {
          this.checkedVal.push(check.value.toString());
        });
      }
    },
    checkedItem() {
      if (this.checkList.length === this.checkedVal.length) {
        this.allCheckedVal = true;
      } else {
        this.allCheckedVal = false;
      }
    },

    // 약관
    agreeAllEvt() {
      if (this.agreeAll) {
        this.agreeOpen = false;
        this.agree1 = true;
        this.agree2 = true;
        this.agree3 = true;
        this.agree4 = true;
      } else {
        this.agreeOpen = true;
        this.agree1 = false;
        this.agree2 = false;
        this.agree3 = false;
        this.agree4 = false;
      }
    },
    agreeItemEvt() {
      if (this.agree1 === true && this.agree2 === true && this.agree3 === true && this.agree4 === true) {
        this.agreeAll = true;
        this.agreeOpen = false;
      } else {
        this.agreeAll = false;
        this.agreeOpen = true;
      }
    },
    agreeToggleEvt() {
      this.agreeOpen = !this.agreeOpen;
    },
    boxFadeOut() {
      this.$fadeOut(this.$refs.fadeBox, 500, () => {
        console.log('fadeOut End');
      });
    },
    boxFadeIn() {
      this.$fadeIn(this.$refs.fadeBox, 500, () => {
        console.log('fadeIn End');
      });
    },
    boxSlideUp() {
      this.$slideUp(this.$refs.slideBox, 500, () => {
        console.log('slideUp End');
      });
    },
    boxSlideDown() {
      this.$slideDown(this.$refs.slideBox, 500, () => {
        console.log('slideDown End');
      });
    },
    scrollToEvt() {
      const wrap = this.$el.closest('.scl__body');
      this.$scrollTo(wrap, { top: 0 }, 300, () => {
        console.log('scroll End');
      });
    },
    addCommaEvt() {
      this.num1 = this.$addComma(this.num1);
    },
    removeCommaEvt() {
      this.num1 = this.$removeComma(this.num1);
    },
    onlyNumberEvt() {
      if (this.resetNum2 === '') this.resetNum2 = this.num2;
      this.num2 = this.$onlyNumber(this.num2);
    },
    onlyNumberEvt2() {
      if (this.resetNum2 === '') this.resetNum2 = this.num2;
      this.num2 = this.$onlyNumber(this.num2, true);
    },
    resetNum2Evt() {
      this.num2 = this.resetNum2;
      this.resetNum2 = '';
    },
    dateStringEvt(s = 0, d = 14, type = 'day') {
      this.dateString = this.$dateFormat(this.$dateString(s, d), type);
    },
    dateStringEvt2(d) {
      this.dateString = this.$dateFormat(this.$dateString(0, 8, d));
    },
    weekStringEvt(d) {
      if (d !== undefined) {
        const $date = this.$dateFormat(this.$dateString(0, 8, d), 'day', '-');
        this.dateString = this.$weekString($date);
      } else {
        this.dateString = this.$weekString();
      }
    },
  },
};
</script>

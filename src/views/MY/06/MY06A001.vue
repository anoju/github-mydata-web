<template>
  <div  class="mg_t16">
    <kb-btn-toggle small inline class="mg_b24">
      <kb-btn-toggle-row>
        <kb-radio
          v-model="toggleVal"
          button
          value="1"
        >
          주식
        </kb-radio>
        <kb-radio
          v-model="toggleVal"
          button
          value="2"
        >
          펀드
        </kb-radio>
        <kb-radio
          v-model="toggleVal"
          button
          value="3"
        >
          ELS/DLS
        </kb-radio>
        <kb-radio
          v-model="toggleVal"
          button
          value="4"
        >
          채권
        </kb-radio>
        <kb-radio
          v-model="toggleVal"
          button
          value="5"
        >
          퇴직연금
        </kb-radio>
      </kb-btn-toggle-row>
    </kb-btn-toggle>

    <!-- 찜상품이 없는 경우 -->
    <template v-if="noDate">
      <div class="assets_none_box">
        <div class="none_box">
          <i></i>
          등록 된 찜 상품이 없습니다.<br />
          찜 상품을 등록해보세요 :)
          <kb-button line blue class="fz_16">종목검색</kb-button>
        </div>
      </div>
    </template>
    <!-- //찜상품이 없는 경우 -->

    <!-- 주식 -->
    <template v-if="!noDate && toggleVal === '1'">
      <div class="mypage_list2">
        <div class="top">
          <kb-checkbox
            v-model="checkVal1"
            value="1"
            class="no_style"
          >
            전체선택
          </kb-checkbox>

          <div class="right">
            <kb-button aTag not>선택삭제</kb-button>
            <i class="line"></i>
            <kb-button aTag not @click="showFullPopup($event.target)">순서편집</kb-button>
          </div>
        </div>
        <ul>
          <li>
            <kb-checkbox
              v-model="checkVal1"
              value="1"
              small
            >
              <div class="text_box">
                <p class="tit">삼성전자</p>
              </div>
              <div class="money_box">
                <p class="money">59,300원</p>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <p class="small fc_up">59,300원</p>
              </div>
            </kb-checkbox>
            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
          <li>
            <kb-checkbox
              v-model="checkVal1"
              value="1"
              small
            >
              <div class="text_box">
                <p class="tit">삼성전자</p>
              </div>
              <div class="money_box">
                <p class="money">59,300원</p>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <p class="small fc_up">59,300원</p>
              </div>
            </kb-checkbox>
            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
          <li>
            <kb-checkbox
              v-model="checkVal1"
              value="1"
              small
            >
              <div class="text_box">
                <p class="tit">삼성전자</p>
              </div>
              <div class="money_box">
                <p class="money">59,300원</p>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <p class="small fc_up">59,300원</p>
              </div>
            </kb-checkbox>
            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
          <li>
            <kb-checkbox
              v-model="checkVal1"
              value="1"
              small
            >
              <div class="text_box">
                <p class="tit">삼성전자</p>
              </div>
              <div class="money_box">
                <p class="money">59,300원</p>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <p class="small fc_up">59,300원</p>
              </div>
            </kb-checkbox>
            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
          <li>
            <kb-checkbox
              v-model="checkVal1"
              value="1"
              small
            >
              <div class="text_box">
                <p class="tit">삼성전자</p>
              </div>
              <div class="money_box">
                <p class="money">59,300원</p>
                <!--
                  상승 : fc_up
                  하락 : fc_down
                -->
                <p class="small fc_up">59,300원</p>
              </div>
            </kb-checkbox>
            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
        </ul>
      </div>

      <template v-if="checkVal1">
        <kb-button-wrap bottom-fixed>
          <kb-button
            line
            disabled
          >
            실시간 거래
          </kb-button>
          <kb-button
            yellow
          >
            적립식 거래
          </kb-button>
        </kb-button-wrap>
      </template>
    </template>
    <!-- //주식 -->

    <!-- 펀드, ELS/DLS, 채권, 퇴직연금 -->
    <template v-if="!noDate && toggleVal !== '1'">
      <div class="mypage_list2">
        <ul>
          <li>
            <div class="text_box flex11">
              <p class="kind">
                <span>매우높은위험</span>
                <span>해외주식형</span>
              </p>
              <p class="tit">블랙독 글로벌 자산배분 증권..블랙독 글로벌 자산배분 증권..</p>
            </div>
            <!--
              상승 : fc_up
              하락 : fc_down
            -->
            <p class="percent fc_up">+13.25%</p>
            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
          <li>
            <div class="text_box flex11">
              <p class="kind">
                <span>매우높은위험</span>
                <span>해외주식형</span>
              </p>
              <p class="tit">블랙독</p>
            </div>
            <!--
              상승 : fc_up
              하락 : fc_down
            -->
            <p class="percent fc_down">-13.25%</p>
            <!-- 활성화 시 checked 클래스 적용, aria-checked: true -->
            <kb-button
              like
              :class="{checked:islike1}"
              role="checkbox"
              :aria-checked="islike1?'true':'false'"
              @click="islike1 = !islike1"
            >관심등록</kb-button>
          </li>
        </ul>
      </div>
    </template>
    <!--//펀드, ELS/DLS, 채권, 퇴직연금 -->
  </div>
</template>
<script>
export default {
  name: 'MY06A001',
  data() {
    return {
      toggleVal: '1',
      noDate: false,
      islike1: true,
      checkVal1: false,
    };
  },
  mounted() {
  },
  methods: {
    showFullPopup(el) {
      this.$modal({
        component: () => import('@/views/MY/06/MY06A007.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>

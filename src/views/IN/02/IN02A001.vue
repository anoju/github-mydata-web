<template>
  <div class="mg_t32">
    <kb-title-bar h3>
      <template slot="left">
        <kb-button a-tag not class="tit">고수들이 지켜보는 종목</kb-button>
      </template>
    </kb-title-bar>
    <div class="search_util_box mg_t12">
      <div class="tit">
        <strong>장기보유 고수가 <br>1주일 동안 매수한 종목은?</strong>
        <kb-button button class="refresh ico"><span class="blind">새로고침</span></kb-button>
      </div>
      <div class="cont">
        <kb-button not class="item">셀트리온헬스케어</kb-button>
        <kb-button not class="item">한국전력</kb-button>
        <kb-button not class="item">HMM</kb-button>
        <kb-button not class="item">삼성전자</kb-button>
        <kb-button not class="item">이아이디</kb-button>
        <kb-button not class="item">이화전기</kb-button>
        <kb-button not class="item">한화투자증권</kb-button>
      </div>
    </div>

    <kb-title-bar h3 class="mg_t32">
      <template slot="left">
        <kb-button a-tag not class="tit">소문난 요즘 테마</kb-button>
      </template>
    </kb-title-bar>
    <div class="search_util_wrap mg_t8">
      <div class="cont">
        <kb-button not class="item">코로나로 주목 받은 <strong>바이오</strong></kb-button>
        <kb-button not class="item">오늘 맛있게 사먹은 <strong>과자</strong></kb-button>
        <kb-button not class="item">내가 재미있게 본 <strong>웹툰</strong></kb-button>
        <kb-button not class="item">어차피 주식 하는 김에 채권 <strong>주식관련채권</strong></kb-button>
        <kb-button not class="item">강남 언니 오빠가 선택한 <strong>강남펀드</strong></kb-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IN02A001',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

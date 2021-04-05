<template>
  <div class="section">
    <kb-btn-toggle small inline class="mg_t12">
      <kb-btn-toggle-row>
        <kb-radio
          v-model="toggleVal1"
          button
          value="1"
        >
          전체업권
        </kb-radio>
        <kb-radio
          v-model="toggleVal1"
          button
          value="2"
        >
          KB증권
        </kb-radio>
        <kb-radio
          v-model="toggleVal1"
          button
          value="3"
        >
          키움증권
        </kb-radio>
        <kb-radio
          v-model="toggleVal1"
          button
          value="4"
        >
          mini스탁
        </kb-radio>
        <kb-radio
          v-model="toggleVal1"
          button
          value="5"
        >
          한국투자
        </kb-radio>
      </kb-btn-toggle-row>
    </kb-btn-toggle>
    <div class="view_option mg_t16">
      <kb-select
        v-model="selectVal1"
        :options="selectOpt1"
        class="type_nobg"
      />
      <p class="date_tit t_right">조회기간 : 20/10/19 ~ 20/12/12</p>
    </div>
    <ul class="list_tot history loss bdb mg_t8">
      <li class="nothing">
        <i class="ico_big_warning" aria-hidden="true" />
        <p class="txt">거래내역이 없습니다.</p>
      </li>
      <li class="top_tot">
        <div>
          <strong>입금-출금</strong>
          <strong>2,000,160,000원</strong>
        </div>
        <div>
          <span>입금총액</span>
          <span>300,000,000원</span>
        </div>
        <div class="mg_t8">
          <span>출금총액</span>
          <span>300,000,000원</span>
        </div>
      </li>
      <li>
        <p class="date">2020/10/19</p>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <span>입금</span>
            <strong>300,000,000원</strong>
          </div>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <span>출금</span>
            <strong>300,000,000원</strong>
          </div>
        </div>
      </li>
      <li>
        <p class="date">2020/10/19</p>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <span>입금</span>
            <strong>300,000,000원</strong>
          </div>
        </div>
      </li>
      <li>
        <p class="date">2020/10/19</p>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <span>출금</span>
            <strong>300,000,000원</strong>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TO02E004',
  data() {
    return {
      toggleVal1: '1',
      selectVal1: 0,
      selectOpt1: [
        { text: '전체보기', value: 0 },
        { text: '입금만 보기', value: 1 },
        { text: '출금만 보기', value: 2 },
      ],
    };
  },
  props: {
    selVal: { type: [String, Number], default: null },
  },
  beforeMount() {
    this.selectVal1 = this.selVal;
  },
  methods: {
  },
};
</script>

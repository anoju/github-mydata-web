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
    <p class="date_tit t_right mg_t23">조회기간 : 20/10/19 ~ 20/12/12</p>
    <ul class="list_tot history loss mg_t16">
      <li class="top_tot">
        <div>
          <strong>실현손익</strong>
          <strong>2,000,160,000원</strong>
        </div>
      </li>
      <li>
        <div class="ct_tit">
          <strong>국내주식</strong>
          <strong>+10,000,000원</strong>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <kb-button to="#" link>
              네이버
            </kb-button>
            <strong>+300,000,000원</strong>
          </div>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <kb-button to="#" link>
              삼성전자
            </kb-button>
            <strong>-300,000,000원</strong>
          </div>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <kb-button to="#" link>
              LG화학
            </kb-button>
            <strong>+300,000,000원</strong>
          </div>
        </div>
      </li>
      <li>
        <div class="ct_tit">
          <strong>해외주식</strong>
          <strong>+10,000,000원</strong>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <kb-button to="#" link>
              아마존
            </kb-button>
            <strong>+300,000,000원</strong>
          </div>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <kb-button to="#" link>
              구글
            </kb-button>
            <strong>-300,000,000원</strong>
          </div>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <kb-button to="#" link>
              테슬라
            </kb-button>
            <strong>+300,000,000원</strong>
          </div>
        </div>
      </li>
    </ul>
    <hr class="hr_line" aria-hidden="true">
    <ul class="list_tot history loss">
      <li class="top_tot">
        <div>
          <strong>평가손익</strong>
          <strong>2,000,160,000원</strong>
        </div>
      </li>
      <li>
        <div class="ct_tit">
          <strong>국내주식</strong>
          <strong>+10,000,000원</strong>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <kb-button to="#" link>
              네이버
            </kb-button>
            <strong>+300,000,000원</strong>
          </div>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <kb-button to="#" link>
              삼성전자
            </kb-button>
            <strong>-300,000,000원</strong>
          </div>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <kb-button to="#" link>
              LG화학
            </kb-button>
            <strong>+300,000,000원</strong>
          </div>
        </div>
      </li>
      <li>
        <div class="ct_tit">
          <strong>해외주식</strong>
          <strong>+10,000,000원</strong>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <kb-button to="#" link>
              아마존
            </kb-button>
            <strong>+300,000,000원</strong>
          </div>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <kb-button to="#" link>
              구글
            </kb-button>
            <strong>-300,000,000원</strong>
          </div>
        </div>
        <div class="list">
          <div>
            <i class="logo">
              <img src="@/assets/images/TO/02/ico_logo_kb.png" alt="KB증권" />
            </i>
            <kb-button to="#" link>
              테슬라
            </kb-button>
            <strong>+300,000,000원</strong>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TO02E002',
  data() {
    return {
      toggleVal1: '1',
    };
  },
  methods: {
  },
};
</script>

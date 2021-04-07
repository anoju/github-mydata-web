<template>
  <kb-page page-title="하나씩 연동">
    <kb-page-body>
      <div class="section">
        <div class="inner_box">
          <div class="top_logo_txt">
            <p class="img_logo"><img src="@/assets/images/common/img_logo_sub.png" alt="KB증권"></p>
            <p class="txt">아래와 같이 계좌 및 정보 연동을 요청합니다.</p>
          </div>
        </div>
        <kb-form-item
          label="연동정보"
        >
          <template slot="labelRight">
            <kb-button
              line
              small
              @click="showFullPopup($event.target)"
            >
              자세히
            </kb-button>
          </template>
          <div class="form_chkbox flex">
            <kb-checkbox
              v-model="checkVal1"
              value="1"
              disabled
            >
              계좌정보
            </kb-checkbox>
            <kb-checkbox
              v-model="checkVal1"
              value="2"
              disabled
            >
              개인형IRP 정보
            </kb-checkbox>
          </div>
        </kb-form-item>

        <kb-form-item>
          <template slot="labelLeft">
            기본정보 연동주기
            <kb-button
              not
              class="tooltip_btn"
              aria-label="팝업으로 상세내용 확인"
              v-tooltip="'views/UT/14/UT14C014_tip1.vue'"
            >팝업으로 상세내용 확인</kb-button>
          </template>
          <kb-select
            v-model="selectVal1"
            :options="selectOpt1"
            title="기본정보 연동주기 선택"
          >
          </kb-select>
        </kb-form-item>

        <kb-form-item>
          <template slot="labelLeft">
            추가정보 연동주기
            <kb-button
              not
              class="tooltip_btn"
              aria-label="팝업으로 상세내용 확인"
              v-tooltip="'views/UT/14/UT14C014_tip2.vue'"
            >팝업으로 상세내용 확인</kb-button>
          </template>
          <kb-select
            v-model="selectVal2"
            :options="selectOpt2"
            title="추가정보 연동주기 선택"
          >
          </kb-select>
        </kb-form-item>

        <kb-form-item
          label="정보연동 요청기간"
        >
          <div class="datepicker_box">
            <div class="flex">
              <div><kb-input line date v-model="inpVal1" title="시작일 선택" disabled /></div>
              <span>-</span>
              <div><kb-input line date v-model="inpVal2" title="종요일 선택" /></div>
            </div>
          </div>
        </kb-form-item>

        <kb-form-item
          label="정보연동 목적"
        >
          <div class="form_chkbox flex_row">
            <kb-checkbox
              v-model="checkVal2"
              value="1"
            >
              통합자산조회
            </kb-checkbox>
            <kb-checkbox
              v-model="checkVal2"
              value="2"
            >
              금융상품추천
            </kb-checkbox>
            <kb-checkbox
              v-model="checkVal2"
              value="3"
            >
              투자자문/조언
            </kb-checkbox>
            <kb-checkbox
              v-model="checkVal2"
              value="4"
            >
              자산관리 및 설계
            </kb-checkbox>
          </div>
        </kb-form-item>

        <kb-form-item
          label="정보 보유기간"
        >
          <kb-select
            v-model="selectVal3"
            :options="selectOpt3"
            title="추가정보 연동주기 선택"
          >
          </kb-select>
        </kb-form-item>

        <kb-button-wrap bottom-fixed>
          <kb-button
            yellow
          >
            연동요청
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT14C014',
  data() {
    return {
      checkVal1: true,
      selectVal1: '',
      selectOpt1: [
        { text: '선택하기', value: '' },
        { text: '매주', value: '매주' },
        { text: '격주', value: '격주' },
        { text: '매월', value: '매월' },
        { text: '필요할 때마다 요청(비정기)', value: '필요할 때마다 요청(비정기)' },
      ],
      selectVal2: '',
      selectOpt2: [
        { text: '선택하기', value: '' },
        { text: '매일', value: '매일' },
        { text: '매주', value: '매주' },
        { text: '매월', value: '매월' },
        { text: '필요할 때마다 요청(비정기)', value: '필요할 때마다 요청(비정기)' },
      ],
      inpVal1: '',
      inpVal2: '',
      selectVal3: '1',
      selectOpt3: [
        { text: '요청시작일부터 5년', value: '1' },
        { text: '요청시작일부터 1년', value: '2' },
        { text: '서비스 해지 후 즉시 파기', value: '3' },
      ],
      checkVal2: ['1', '2'],
    };
  },
  methods: {
    showFullPopup(el) {
      this.$modal({
        component: () => import('@/views/UT/14/UT14C018.vue'),
        returnFocus: el,
      });
    },
  },
};
</script>

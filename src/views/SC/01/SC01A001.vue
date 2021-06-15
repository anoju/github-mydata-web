<template>
  <kb-page page-title="상담 신청/조회">
    <kb-page-body>
      <div class="section">
        <kb-form-item
          label="예약일자"
        >
          <kb-select
            v-model="dateVal1"
            title="예약일자 선택"
            :options="dateOpt"
          />
        </kb-form-item>
        <kb-form-item
          label="예약시간"
        >
          <kb-select
            v-model="timeVal1"
            title="예약일자 선택"
            :options="timeOpt"
          />
        </kb-form-item>
        <kb-form-item
          label="문의사항"
        >
          <kb-radio
            v-model="radioVal1"
            checkbox
            value="1"
          >
            주식종목
          </kb-radio>
          <kb-radio
            v-model="radioVal1"
            checkbox
            value="2"
          >
            금융상품
          </kb-radio>
          <kb-radio
            v-model="radioVal1"
            checkbox
            value="3"
          >
            자산운용
          </kb-radio>

          <kb-textarea
            v-model="textareaVal1"
            placeholder="내용을 입력해주세요."
            title="내용입력"
            class="mg_t24"
          />
        </kb-form-item>
        <kb-foldings
          not
          class="accordion_dl mg_b25 mg_t32"
        >
          <kb-folding title="이용안내">
            <ul class="txt_list">
              <li class="dot">전화 상담예약은 익영업일부터 신청 가능합니다.</li>
              <li class="dot">통화 가능시간은 09:00 ~ 16:00 입니다.</li>
              <li class="dot">전화상담 서비스는 토요일, 일요일 및 공휴일은 불가하오니 이점 양해하여주시기 바랍니다.</li>
              <li class="dot">전문가가 지정되어 있는 경우 지정된 전문가와 상담 가능합니다</li>
              <li class="dot">주식, 금융상품 이외 문의는 고객센터 1588-6611로 연락바랍니다.</li>
            </ul>
          </kb-folding>
        </kb-foldings>

        <kb-button-wrap bottom-fixed>
          <kb-button yellow>
            상담예약 신청
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'SC01A001',
  data() {
    return {
      dateVal1: '',
      timeVal1: '',
      radioVal1: '1',
      textareaVal1: '',
      dateOpt: [
        { value: '', text: '선택' },
        { value: '1', text: 'YYYY/MM/DD/월요일' },
        { value: '2', text: 'YYYY/MM/DD/화요일' },
        { value: '3', text: 'YYYY/MM/DD/수요일' },
        { value: '4', text: 'YYYY/MM/DD/목요일' },
        { value: '5', text: 'YYYY/MM/DD/금요일' },
        { value: '6', text: 'YYYY/MM/DD/토요일' },
        { value: '7', text: 'YYYY/MM/DD/일요일' },
      ],
      timeOpt: [
        { value: '', text: '선택' },
        { value: '1', text: '09:00 ~ 10:00' },
        { value: '2', text: '10:00 ~ 11:00' },
        { value: '3', text: '11:00 ~ 12:00' },
        { value: '4', text: '12:00 ~ 13:00' },
        { value: '5', text: '13:00 ~ 14:00' },
        { value: '6', text: '14:00 ~ 15:00' },
        { value: '7', text: '15:00 ~ 16:00' },
      ],
    };
  },
  methods: {
  },
};
</script>

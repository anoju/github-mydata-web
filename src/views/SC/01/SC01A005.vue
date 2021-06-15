<template>
  <kb-page page-title="상담 신청/조회">
    <kb-page-body>
      <div class="section">
        <kb-form-item
          label="지역선택"
        >
          <div class="flex_wrap align_center">
            <div class="flex11">
              <kb-select
                v-model="locationVal1"
                title="지역 선택"
                :options="locationOpt1"
              />
            </div>
            <div class="flex11 mg_l8">
              <kb-select
                v-model="locationVal2"
                title="지역 선택"
                :options="locationOpt2"
              />
            </div>
          </div>
        </kb-form-item>

        <kb-form-item
          label="지점명"
        >
          <kb-select
            v-model="locationVal3"
            title="지점 선택"
            :options="locationOpt3"
          />
          <kb-input
            v-model="inpVal3"
            placeholder="지점명"
            title="지점명"
            readonly
          />
          <div class="flex_wrap mg_t8">
            <kb-button line class="flex11" @click="reservation">지점선택 확인</kb-button>
          </div>
        </kb-form-item>

        <template v-if="check">

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
        </template>

        <kb-foldings
          not
          class="accordion_dl mg_b25 mg_t32"
        >
          <kb-folding title="이용안내">
            <ul class="txt_list">
              <li class="dot">전화 상담예약은 2주 이내 신청 가능합니다.</li>
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
  name: 'SC01A005',
  data() {
    return {
      check: false,
      dateVal1: '',
      timeVal1: '',
      textareaVal1: '',
      locationVal1: '',
      locationVal2: '',
      locationVal3: '',
      locationOpt1: [{ value: '', text: '선택' }],
      locationOpt2: [{ value: '', text: '선택' }],
      locationOpt3: [{ value: '', text: '선택' }],
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
    reservation() {
      this.check = true;
    },
  },
};
</script>

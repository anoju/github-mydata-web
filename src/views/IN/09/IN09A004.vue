<template>
  <div class="section">
    <kb-title-bar
      h2
      class="pd_t18"
      title="현재<br>월 수입은 얼마나 되세요?"
    />
    <kb-form-item class="mg_t32">
      <template slot="labelLeft">
        <span class="fz_16">현재 월 수입 정보를 불러왔어요.</span>
      </template>
      <kb-input
        v-model="inpVal1"
        type="tel"
        input-class="t_right"
        front-unit="월"
        unit="원"
        placeholder="금액입력"
        title="금액입력"
      />
    </kb-form-item>

    <hr class="hr_line mg_t32 mg_b32" aria-hidden="true">

    <h2 class="tit fz_18">추가 예상 수입이 있나요?</h2>
    <!-- 반복 -->
    <div class="estimate_box">
      <kb-btn-toggle>
        <kb-btn-toggle-row>
          <kb-radio
            v-model="toggleVal1"
            button
            value="1"
          >
            정기
          </kb-radio>
          <kb-radio
            v-model="toggleVal1"
            button
            value="2"
          >
            비정기
          </kb-radio>
        </kb-btn-toggle-row>
      </kb-btn-toggle>
      <!-- 2021-06-15 삭제
        <kb-input
        v-model="inpVal2"
        placeholder="항목입력(최대 10글자)"
        title="항목입력"
        maxlength="10"
      /> -->
      <kb-input
        v-model="inpVal3"
        type="tel"
        input-class="t_right"
        unit="원"
        placeholder="금액입력"
        title="금액입력"
      />
      <div class="flex align_center mg_t8">
        <div>
          <kb-input
            v-model="inpVal4"
            type="tel"
            input-class="t_right"
            unit="세"
            placeholder="나이입력"
            title="나이입력"
          />
        </div>
        <span class="inblock w_10">-</span>
        <div>
          <kb-input
            v-model="inpVal5"
            type="tel"
            input-class="t_right"
            unit="세"
            placeholder="나이입력"
            title="나이입력"
          />
        </div>
      </div>
      <div class="t_center">
        <kb-button not aTag class="btn_delete" @click="removeInputData(idx)">
          삭제
        </kb-button>
      </div>
    </div>
    <!-- //반복 -->
    <div class="estimate_box">
      <kb-btn-toggle>
        <kb-btn-toggle-row>
          <kb-radio
            v-model="toggleVal2"
            button
            value="1"
          >
            정기
          </kb-radio>
          <kb-radio
            v-model="toggleVal2"
            button
            value="2"
          >
            비정기
          </kb-radio>
        </kb-btn-toggle-row>
      </kb-btn-toggle>
      <kb-input
        v-model="inpVal2"
        placeholder="항목입력(최대 10글자)"
        title="항복입력"
        maxlength="10"
      />
      <kb-input
        v-model="inpVal3"
        type="tel"
        input-class="t_right"
        unit="원"
        placeholder="금액입력"
        title="금액입력"
      />
      <div class="flex align_center mg_t8">
        <div>
          <kb-input
            v-model="inpVal4"
            type="tel"
            input-class="t_right"
            unit="세"
            placeholder="나이입력"
            title="나이입력"
          />
        </div>
      </div>
      <div class="t_center">
        <kb-button not aTag class="btn_delete" @click="removeInputData(idx)">
          삭제
        </kb-button>
      </div>
    </div>

    <kb-button-wrap>
      <kb-button
        line
        class="more fz_16"
      >
        수입 추가
      </kb-button>
    </kb-button-wrap>
    <br><br>

    <kb-button-wrap bottom-fixed>
      <kb-button
        line
        to="/IN/09/IN09A010/2"
      >
        이전
      </kb-button>
      <kb-button
        yellow
        to="/IN/09/IN09A010/4"
      >
        다음
      </kb-button>
    </kb-button-wrap>
  </div>
</template>
<script>

export default {
  name: 'IN09A004',
  data() {
    return {
      inpVal1: '40,000,000',
      inpVal2: '',
      inpVal3: '100,000',
      inpVal4: '60',
      inpVal5: '60',
      toggleVal1: '1',
      toggleVal2: '2',
    };
  },
  methods: {
  },
};
</script>

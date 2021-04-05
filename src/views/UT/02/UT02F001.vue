<template>
  <kb-page page-title="회원정보">
    <kb-page-body>
      <div class="section">
        <kb-form-item
          label="이름"
        >
          <kb-input
            v-model="inpVal1"
            title="이름입력"
          />
        </kb-form-item>

        <kb-form-item
          label="주민등록번호"
        >
          <div class="form_box">
            <div>
              <kb-input
                v-model="inpVal2"
                type="tel"
                title="주민등록번호 앞자리입력"
              />
            </div>
            <div class="wf_20 t_center">-</div>
            <div>
              <kb-input
                v-model="inpVal3"
                title="주민등록번호 뒷지리입력"
              />
            </div>
          </div>
        </kb-form-item>

        <kb-form-item
          label="휴대폰번호"
        >
          <kb-input
            v-model="inpVal4"
            title="휴대폰번호 입력"
          />
        </kb-form-item>

        <kb-form-item
          label="이메일 정보"
        >
          <kb-input
            v-model="inpVal5"
            title="이메일 입력"
          />
        </kb-form-item>

        <kb-button-wrap bottom-fixed>
          <kb-button
            yellow
            :disabled="inpVal1 === '' || inpVal2 === '' || inpVal3 === '' || inpVal4 === '' || inpVal5 === ''"
          >
            확인
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT02F001',
  data() {
    return {
      inpVal1: '',
      inpVal2: '',
      inpVal3: '',
      inpVal4: '',
      inpVal5: '',
    };
  },
  methods: {
  },
};
</script>

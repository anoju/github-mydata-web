<template>
  <kb-page page-title="한번에 연동">
    <kb-page-body>
      <div class="section">

        <div class="interwork_tit">
          <p class="tit">KB증권</p>
          <p class="text">KB증권 계좌번호와 계좌비밀번호, <br />휴대폰인증으로 계좌 및 정보연동</p>
        </div>

        <kb-form-item
          label="KB증권 계좌번호"
        >
          <kb-validate-item
            success=""
            error=""
          >
            <kb-input
              placeholder="입력하세요"
              title="KB증권 계좌번호 입력"
            />
          </kb-validate-item>
        </kb-form-item>

        <!-- 계좌비밀번호 -->
        <kb-form-item
          label="계좌 비밀번호"
        >
          <!-- 계좌 비밀번호 5회 실패시 노출 -->
          <template slot="labelRight">
            <kb-button
              line
              h28
            >
              차단해지
            </kb-button>
          </template>
          <!-- //계좌 비밀번호 5회 실패시 노출 -->
          <kb-validate-item
            success=""
            error=""
          >
            <kb-input
              placeholder="입력하세요"
              title="계좌 비밀번호 입력"
            />
          </kb-validate-item>
        </kb-form-item>

        <kb-button-wrap class="mg_t8">
          <kb-button
            line
            @click="showAlert($event.target)"
          >
            확인
          </kb-button>
        </kb-button-wrap>
        <!-- //계좌비밀번호 -->

        <kb-form-item
          label="수신 인증번호"
        >
          <kb-validate-item
            success=""
            error=""
          >
            <kb-input
              placeholder="인증번호 입력해주세요"
              title="인증번호 입력"
            >
              <div class="timer">03:00</div>
            </kb-input>
          </kb-validate-item>
        </kb-form-item>

        <kb-button-wrap class="mg_t8">
          <kb-button
            line
          >
            인증번호 재전송
          </kb-button>
        </kb-button-wrap>

      </div>

      <kb-button-wrap bottom-fixed>
        <kb-button
          yellow
        >
          확인
        </kb-button>
      </kb-button-wrap>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'UT14C012',
  data() {
    return {
      phoneNum: '010-1234-5678',
    };
  },
  methods: {
    showAlert(el) {
      this.$alert(`
        <div class="t_center">
          계좌정보 확인이 완료되었습니다.<br />
          KB증권에 등록된 휴대폰<br />
          <strong class="fc_blue">${this.phoneNum}</strong>으로<br />
          인증번호가 발송됩니다.<br /></br />
          수신된 인증번호 입력 후 <br />
          인증을 완료해 주세요.
          </div>
      `, el).then(() => {
        console.log('확인');
      });
    },
  },
};
</script>

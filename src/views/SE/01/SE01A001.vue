<template>
  <kb-page page-title="환경설정">
    <kb-page-body>
      <div class="section">
        <!-- 2021-06-03 수정 -->
        <kb-title-bar h3 title="APP Push" class="mg_t24" />
        <div class="option_list mg_t8">
          <div class="item">
            <div class="flex">
              <label for="switch1" class="lbl">알림 받기</label>
              <kb-checkbox
                input-id="switch1"
                v-model="switchVal1"
                switch
              />
            </div>
          </div>
        </div>
        <hr class="hr_line mg_t8" aria-hidden="true">

        <kb-title-bar h3 title="간편인증 로그인" class="mg_t24" />
        <div class="option_list mg_t8">
          <div class="item">
            <div class="flex">
              <div class="lbl">간편인증 비밀번호</div>
              <div>
                <kb-button link><span class="fc_blue">사용중</span></kb-button>
                <!-- <kb-button link><span class="fc_red">미사용</span></kb-button> -->
              </div>
            </div>
          </div>
          <div class="item">
            <div class="flex">
              <label for="switch5" class="lbl">생체인증</label>
              <kb-checkbox
                input-id="switch5"
                v-model="switchVal5"
                switch
              />
            </div>
          </div>
        </div>
        <hr class="hr_line mg_t8" aria-hidden="true">

        <kb-title-bar h3 title="거래용 인증서" class="mg_t24" />
        <div class="option_list mg_t8">
          <div class="item">
            <div class="flex">
              <div class="lbl">
                <span class="block fz_16">공동인증서 가져오기</span>
                <span class="block fz_14 fc_666 mg_t4">KB증권에 등록된 공동인증서</span>
              </div>
              <div>
                <kb-button link><span class="fc_blue">사용중</span></kb-button>
                <!-- <kb-button link><span class="fc_red">미사용</span></kb-button> -->
              </div>
            </div>
          </div>
          <div class="item">
            <div class="flex">
              <div class="lbl">
                <kb-button link class="lbl_link">
                  <span class="block fz_16">공동인증서 가져오기</span>
                </kb-button>
              </div>
            </div>
          </div>
        </div>
        <hr class="hr_line mg_t8" aria-hidden="true">

        <kb-title-bar h3 title="보안" class="mg_t24" />
        <div class="option_list mg_t8">
          <div class="item">
            <div class="flex">
              <div class="lbl">멀티 로그인</div>
              <div>
                <kb-button link><span class="fc_blue">사용중</span></kb-button>
                <!-- <kb-button link><span class="fc_red">미사용</span></kb-button> -->
              </div>
            </div>
          </div>
        </div>
        <hr class="hr_line mg_t8" aria-hidden="true">

        <kb-title-bar h3 title="APP정보" class="mg_t24" />
        <div class="option_list mg_t8">
          <div class="item">
            <div class="flex">
              <div class="lbl">현재버전/최신버전</div>
              <div class="nowrap">
                <strong>8.0.0/8.0.1</strong>
              </div>
            </div>
            <div class="fz_14 fc_666 mg_t4">업데이트 버전이 있습니다.</div>
          </div>
        </div>
        <!-- //2021-06-03 수정 -->
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'SE01A001',
  data() {
    return {
      switchVal1: false,
      switchVal2: false,
      switchVal3: false,
      switchVal4: false,
      switchVal5: false,
    };
  },
  methods: {
  },
};
</script>

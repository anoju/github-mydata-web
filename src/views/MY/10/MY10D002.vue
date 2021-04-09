<template>
  <kb-page page-title="KB증권 연동해지">
    <kb-page-body>
      <div class="section">
        <kb-step :total="3" :now="2">정보 보유기간</kb-step>

        <p class="mg_t8 fz_12 fc_666">정보 연동기간 중에 수집된 정보는 전송요청 시 선택하신 보유기간 동안 보관되며, 연동해지 후에도 보관된 정보로 계속 서비스를 이용하실 수 있습니다. <br>
          보관하지 않고 삭제를 원하실 경우에는 ‘연동해지 후 즉시 삭제’를 체크해 주세요</p>

        <kb-title-bar title="개인신용정보 보유기간" class="mg_t24" />
        <div class="info_txt_box type2 mg_t12">
          <ul class="list">
            <li>
              <div class="th">보유기간</div>
              <div class="td">
                <div><strong>요청 시작일로부터 5년</strong></div>
                <div><strong>2021/01/12 ~ 2022/01/11</strong></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="fz_14 mg_t12"><strong class="fc_red">* 정보 보유기간 종료 후 즉시 삭제</strong></div>
        <kb-checkbox v-model="chkVal1" class="block mg_t32">
          연동해지 후 즉시 삭제
          <template slot="summary">
            위 내용을 확인하였으며 보유기간에 상관없이 즉시 삭제를 요청함
          </template>
        </kb-checkbox>
        <kb-folding-panel
          class="mg_t24"
          :active="chkVal1"
        >
          <div class="black_txt_box">삭제 시 기존에 수집된 정보가 모두 또는 일부 삭제되어 정상적인 서비스 제공이 어려울 수 있습니다.</div>
        </kb-folding-panel>

        <kb-button-wrap bottom-fixed>
          <kb-button
            line
          >
            이전
          </kb-button>
          <kb-button
            yellow
          >
            다음
          </kb-button>
        </kb-button-wrap>
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>
export default {
  name: 'MY10D002',
  data() {
    return {
      chkVal1: false,
    };
  },
  methods: {
  },
};
</script>

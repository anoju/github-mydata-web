<template>
  <div class="section">

    <p class="pd_t8 fz_12 fc_666">정보 연동기간 중에 수집된 정보는 전송요청 시 선택하신 보유기간 동안 보관되며, 연동해지 후에도 보관된 정보로 계속 서비스를 이용하실 수 있습니다. <br>
      보관하지 않고 삭제를 원하실 경우에는 ‘연동해지 후 즉시 삭제’를 체크해 주세요</p>

    <kb-foldings type1 not-toggle class="acc_info_list mg_t24" first-open>
      <kb-folding>
        <template slot="title">
          <div class="acc_info_head">
            <strong>은행</strong>
            <strong class="cut">3</strong>
          </div>
        </template>
        <div class="accordion_box type2">
          <div class="acc_info_box">
            <ul class="transfer_acc_list">
              <li class="type2">
                <p class="fz_16 mg_b8 fw_bold">국민은행</p>
                <dl class="list mg_t8">
                  <dt>연동정보</dt>
                  <dd>
                    <span>수신계좌정보</span><span>투자상품정보</span>
                  </dd>
                </dl>
                <dl class="list">
                  <dt>연동기간</dt>
                  <dd>2020/01/12 ~ 2021/01/11</dd>
                </dl>
              </li>
              <li class="type2">
                <p class="fz_16 mg_b8 fw_bold">국민은행</p>
                <dl class="list mg_t8">
                  <dt>연동정보</dt>
                  <dd>
                    <span>수신계좌정보</span><span>투자상품정보</span>
                  </dd>
                </dl>
                <dl class="list">
                  <dt>연동기간</dt>
                  <dd>2020/01/12 ~ 2021/01/11</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </kb-folding>

      <kb-folding>
        <template slot="title">
          <div class="acc_info_head">
            <strong>투자</strong>
            <strong class="cut">3</strong>
          </div>
        </template>
        <div class="accordion_box type2">
          <div class="acc_info_box">
            <ul class="transfer_acc_list">
              <li class="type2">
                <p class="fz_16 mg_b8 fw_bold">국민은행</p>
                <dl class="list mg_t8">
                  <dt>연동정보</dt>
                  <dd>
                    <span>수신계좌정보</span><span>투자상품정보</span>
                  </dd>
                </dl>
                <dl class="list">
                  <dt>연동기간</dt>
                  <dd>2020/01/12 ~ 2021/01/11</dd>
                </dl>
              </li>
              <li class="type2">
                <p class="fz_16 mg_b8 fw_bold">국민은행</p>
                <dl class="list mg_t8">
                  <dt>연동정보</dt>
                  <dd>
                    <span>수신계좌정보</span><span>투자상품정보</span>
                  </dd>
                </dl>
                <dl class="list">
                  <dt>연동기간</dt>
                  <dd>2020/01/12 ~ 2021/01/11</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </kb-folding>
    </kb-foldings>
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
        to="/MY/10/MY10D010/3"
      >
        이전
      </kb-button>
      <kb-button
        yellow
        to="/MY/10/MY10D010/5"
      >
        다음
      </kb-button>
    </kb-button-wrap>
  </div>
</template>
<script>
export default {
  name: 'MY10D004',
  data() {
    return {
      chkVal1: false,
    };
  },
  methods: {
  },
};
</script>

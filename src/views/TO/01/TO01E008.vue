<template>
  <kb-pop
    full
    title="카드 소비 줄이기"
  >
    <kb-pop-body>
      <div class="section">
        <kb-transition-group :name="slideDirection">
          <div  v-if="step === 0" :key="0" class="pd_t40">
            <kb-title-bar h2 center title="카드 소비 줄이기를 실천할<br>목표기간을 확인하세요." />
            <dl class="info_txt_box no_line dl_type mg_t40">
              <dt class="dt">오늘부터 이번달까지</dt>
              <dd class="dd"><strong>2021/05/02 ~ 2021/05/31</strong></dd>
            </dl>
            <ul class="txt_list mg_t24">
              <li class="dot">소비 줄이기는 한 달씩 진행되요.</li>
              <li class="dot">단, 목표 세우는 날이 20일 이후 일때는 다음달부터 진행 할 수 있어요.</li>
            </ul>
          </div>
          <div v-if="step === 1" :key="1" class="pd_t40">
            <kb-title-bar h2 center title="목표금액을 설정해주세요." />
            <div class="info_txt_box no_line dl_type mg_t40">
              <div class="dd fz_18"><strong>지난 달 카드 지출은<br>30,000,000원이예요.</strong></div>
            </div>
            <kb-form-item label="얼마를 줄여볼까요?" class="mg_t32">
              <kb-select
                v-model="selectVal"
                :options="selectOpt"
              />
            </kb-form-item>
            <kb-form-item label="줄일 수 있는 소비유형을 선택해 보세요." class="mg_t32">
              <div class="ico_toggle_chk">
                <kb-checkbox
                  v-for="(item, i) of chkOpt"
                  :key="i"
                  button
                  :value="item.value"
                  v-model="chkVal"
                >
                  <i :class="item.icon" />
                  <span>{{item.text}}</span>
                </kb-checkbox>
              </div>
            </kb-form-item>
          </div>
          <div class="util_wrap section_in" v-if="step === 2" :key="2">
            <div class="text_box">
              <i class="ico_big_check" aria-hidden="true" />
              <p class="pop_tit mg_t24">한달동안 -10만원<br>목표 설정 완료</p>
              <div class="mg_t8 fc_666">매주 8,333원씩 절약하면 되요!</div>
              <div class="info_txt_list type2 mg_t24">
                <ul class="list">
                  <li>
                    <div class="th">시작 일</div>
                    <div class="td"><strong>2021/05/02 (목)</strong></div>
                  </li>
                  <li>
                    <div class="th">종료 일</div>
                    <div class="td"><strong>2021/05/31 (수)</strong></div>
                  </li>
                  <li>
                    <div class="th">목표금액</div>
                    <div class="td"><strong>99,284,500,000원</strong></div>
                  </li>
                </ul>
                <ul class="list">
                  <li>
                    <div class="th">소비유형</div>
                    <div class="td"><strong>식비, 쇼핑</strong></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </kb-transition-group>
      </div>
    </kb-pop-body>
    <kb-pop-foot v-if="step === 0">
      <kb-button yellow @click="toStep(1)">다음</kb-button>
    </kb-pop-foot>
    <kb-pop-foot v-if="step === 1">
      <kb-button line @click="toStep(0)">이전</kb-button>
      <kb-button yellow @click="toStep(2)">다음</kb-button>
    </kb-pop-foot>
    <kb-pop-foot v-if="step === 2">
      <kb-button line @click="toStep(1)">이전</kb-button>
      <kb-button yellow @click="popClose">시작하기</kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'TO01E008',
  data() {
    return {
      step: 0,
      slideDirection: 'next',
      selectVal: '10',
      selectOpt: [
        { text: '10만원', value: '10' },
        { text: '20만원', value: '20' },
        { text: '30만원', value: '30' },
        { text: '40만원', value: '40' },
        { text: '50만원', value: '50' },
        { text: '60만원', value: '60' },
        { text: '70만원', value: '70' },
        { text: '80만원', value: '80' },
        { text: '90만원', value: '90' },
        { text: '100만원', value: '100' },
        { text: '200만원', value: '200' },
        { text: '300만원', value: '300' },
        { text: '400만원', value: '400' },
        { text: '500만원', value: '500' },
        { text: '1000만원', value: '1000' },
      ],
      chkVal: [],
      chkOpt: [
        { text: '생활', value: '1', icon: 'ico_1' },
        { text: '식비', value: '2', icon: 'ico_2' },
        { text: '쇼핑', value: '3', icon: 'ico_3' },
        { text: '문화', value: '4', icon: 'ico_4' },
        { text: '미용', value: '5', icon: 'ico_5' },
      ],
    };
  },
  methods: {
    toStep(i) {
      if (this.step > i) {
        this.slideDirection = 'prev';
      } else {
        this.slideDirection = 'next';
      }
      this.step = i;
    },
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

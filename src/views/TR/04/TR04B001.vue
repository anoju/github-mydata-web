<template>
  <kb-pop
    bottom
    title="입금기관선택"
  >
    <kb-pop-body>
      <div class="section">
        <kb-btn-toggle-wrap class="fixed">
          <kb-btn-toggle>
            <kb-btn-toggle-row>
              <kb-radio
                v-model="toggleVal"
                button
                value="1"
              >
                은행
              </kb-radio>
              <kb-radio
                v-model="toggleVal"
                button
                value="2"
              >
                증권
              </kb-radio>
            </kb-btn-toggle-row>
          </kb-btn-toggle>
        </kb-btn-toggle-wrap>
        <div v-if="toggleVal === '1'">
          <div class="selete_list_box mg_t12">
            <template
              v-for="(item, i) of bankList"
            >
              <div
                :key="i"
                class="item"
              >
                <kb-button
                  not
                  :value="item.code"
                >
                  <i :class="`ic_company_${item.code}`" aria-hidden="true"></i>
                  <span class="txt">{{item.text}}</span>
                </kb-button>
              </div>
            </template>
          </div>
        </div>
        <div v-if="toggleVal === '2'">
          <div class="selete_list_box mg_t12">
            <template
              v-for="(item, i) of bankList2"
            >
              <div
                :key="i"
                class="item"
              >
                <kb-button
                  not
                  :value="item.code"
                >
                  <i :class="`ic_company_${item.code}`" aria-hidden="true"></i>
                  <span class="txt">{{item.text}}</span>
                </kb-button>
              </div>
            </template>
          </div>
        </div>
      </div>
    </kb-pop-body>
  </kb-pop>
</template>
<script>
export default {
  name: 'TR04B001',
  data() {
    return {
      toggleVal: '1',
      selectVal1: '1',
      selectVal2: '',
      selectVal3: '',
      bankList: [
        // 은행
        { code: '0101001', text: '국민은행' },
        { code: '0101002', text: '경남은행' },
        { code: '0101003', text: '광주은행' },
        { code: '0101004', text: '기업은행' },
        { code: '0101005', text: '농협' },
        { code: '0101006', text: '대구은행' },
        { code: '0101007', text: '부산은행' },
        { code: '0101008', text: '산림조합중앙회' },
        { code: '0101009', text: '산업은행' },
        { code: '0101010', text: '새마을금고' },
        { code: '0101011', text: '수협은행' },
        { code: '0101012', text: '신한은행' },
        { code: '0101013', text: '신협' },
        { code: '0101014', text: '우리은행' },
        { code: '0101015', text: '우체국' },
        { code: '0101016', text: '전북은행' },
        { code: '0101017', text: '제주은행' },
        { code: '0101018', text: '지역 농·축협' },
        { code: '0101019', text: '카카오뱅크' },
        { code: '0101020', text: '케이뱅크' },
        { code: '0101021', text: '하나은행' },
        { code: '0101022', text: '한국씨티' },
        { code: '0101023', text: 'SC은행' },
        { code: '0101024', text: '농협중앙회' },
        { code: '0101025', text: '수협중앙회' },
        { code: '01010026', text: '한국수출입은행' },
      ],
      bankList2: [
        // 투자
        { code: '0301001', text: 'KB증권' },
        { code: '0301002', text: '교보증권' },
        { code: '0301003', text: '대신증권' },
        { code: '0301004', text: '메리츠증권' },
        { code: '0301005', text: '미래에셋대우' },
        { code: '0301006', text: '삼성증권' },
        { code: '0301007', text: '신한금융투자' },
        { code: '0301008', text: '유진투자증권' },
        { code: '0301009', text: '이베스트증권' },
        { code: '0301010', text: '키움증권' },
        { code: '0301011', text: '하나금융투자' },
        { code: '0301012', text: '하이투자증권' },
        { code: '0301013', text: '한국투자증권' },
        { code: '0301014', text: '한화주자증권' },
        { code: '0301015', text: '현대차증권' },
        { code: '0301016', text: 'DB금융증권' },
        { code: '0301017', text: 'NH투자증권' },
        { code: '0301018', text: 'SK증권' },
      ],
    };
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
  },
};
</script>

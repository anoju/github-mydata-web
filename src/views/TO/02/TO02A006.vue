<template>
  <kb-pop
    full
    title="자산 직접 입력"
    class="assets_fullpop_wrap"
  >
    <kb-pop-body>
      <div class="section">
        <div v-for=" (item, idx) in asset.Record1" :key="idx">
          <kb-form-item
            label="명칭"
          >
            <kb-validate-item
              success=""
              error=""
            >
              <kb-input
                v-model="item.output3"
                placeholder="입력하세요"
                disabled
              />
            </kb-validate-item>
          </kb-form-item>

          <kb-form-item
            label="금액"
          >
            <kb-validate-item
              success=""
              error=""
            >
              <kb-input
                v-model="item.output5"
                type="tel"
                input-class="t_right"
                unit="만원"
                placeholder="입력하세요"
                disabled
              />
            </kb-validate-item>
          </kb-form-item>
        </div>

        <!-- 새로 추가되는 항목 -->
        <template v-for="(item, idx) in inputData">
          <div class="assets_add_box" :key="idx">
            <kb-form-item
              label="명칭"
            >
              <kb-validate-item
                success=""
                error=""
              >
                <kb-input
                  v-model="item.output3"
                  placeholder="입력하세요"
                />
              </kb-validate-item>
            </kb-form-item>

            <kb-form-item
              label="금액"
            >
              <kb-validate-item
                success=""
                error=""
              >
                <kb-input
                  v-model="item.output5"
                  type="tel"
                  input-class="t_right"
                  unit="만원"
                  placeholder="입력하세요"
                />
              </kb-validate-item>
            </kb-form-item>

            <kb-button not aTag class="btn_delete" @click="removeInputData(idx)">
              삭제
            </kb-button>
          </div>
        </template>
        <!-- //새로 추가되는 항목 -->

        <kb-button-wrap>
          <kb-button
            line
            class="more fz_16"
            @click="addInputData"
          >
            추가하기
          </kb-button>
        </kb-button-wrap>

      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button
        yellow
        @click="assetSave('01')"
      >
        등록
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'TO02A006',
  props: {
  },
  data() {
    return {
      asset: {
        output3: null,
        output4: null,
        output1: null,
        output2: null,
        lndngF: null,
        output7: null,
        output5: null,
        output6: null,
        thingAddrC: null,
        carOptInfoC: null,
        output9: null,
        output10: null,
        yr: null,
        useArP2: null,
        Record1: [],
        oMsg: null,
        gridCnt: null,
        oLngth: null,
        mmRntAmt: null,
        lsGamt: null,
        carInfoC: null,
        astsDstgChrsNo: null,
        nxtKeyC: null,
        oClsf: null,
      },
      inputData: [
        {
          output1: null, // 마이데이터자산번호
          output2: null, // 마이데이터자산코드
          output3: null, // 마이데이터자산코드명
          output4: null, // 마이데이터자산명
          output5: null, // 마이데이터보유잔액P3

        },
      ],
    };
  },
  methods: {
    popClose() {
      this.$emit('close');
    },
    getData() {
      const payload = [{
        trId: 'MAAM3017',
        input: {
          input1: 'C000000001',
          input2: '',
          inqClsfNm: '01',
          nxtKeyC: '',
        },
      }];
      this.$store.dispatch('today/getAssetSave', payload).then((rst) => {
        console.log(123, rst);
        this.asset = rst;
      }).catch((error) => {
        console.log(125, error);
      });
    },
    addInputData() {
      this.inputData.push({
        output1: null, // 마이데이터자산번호
        output2: null, // 마이데이터자산코드
        output3: null, // 마이데이터자산코드명
        output4: null, // 마이데이터자산명
        output5: null, // 마이데이터보유잔액P3
      });
    },
    removeInputData(idx) {
      this.inputData.splice(idx, 1);
    },
    assetSave(type) {
      const vm = this;
      const payload = [{
        trId: 'MAAM3018',
        input: {
          ccd: type,
          Record1: vm.inputData,
        },
      }];
      console.log(171, payload);
      vm.$store.dispatch('today/assetSave', payload).then((rst) => {
        console.log(178, rst);
        this.popClose();
      }).catch((error) => {
        console.log(125, error);
      }).finally(() => {
      });
    },
  },
  mounted() {
    const vm = this;
    vm.getData();
  },
};
</script>

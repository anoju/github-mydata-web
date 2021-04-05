<template>
  <div class="accordion_box">
    <div class="box_header">
      <p class="sub_tit">
        <span>입출금</span>
        <span>{{isEmpty ? '0': assetDetail[assetDetail.length -1].nxtStmtAmtSum}}원</span>
      </p>
      <!-- 증감액
                    plus : 상승
                    minus : 하락
                  -->
      <p class="amount_money plus">+990,000</p>
    </div>
    <ul class="bank_list">
      <li>
        <div class="info">
          <!-- 이미지(i태그)는 있을수도 있고 없을수도 있음 -->
          <i class="ico" style="background:skyblue"></i>
          <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
          <p class="money">300,000,000원</p>
        </div>
        <p class="amount_money plus">+990,000</p>
      </li>
      <li>
        <div class="info">
          <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
          <p class="money">300,000,000원</p>
        </div>
        <p class="amount_money plus">+990,000</p>
      </li>
      <li>
        <div class="info">
          <i class="ico" style="background:skyblue"></i>
          <p class="list_tit">KB able Plus 통장 KB able Plus 통장</p>
          <p class="money">300,000,000원</p>
        </div>
        <p class="amount_money plus">+990,000</p>
      </li>
    </ul>
  </div>

</template>

<script>
// import To02a006 from './TO02A006.vue';

export default {
  name: 'TO02A002_1',
  props: {
    id: {
      type: String,
      default: 'C000000001',
    },
    type: {
      type: String,
      default: '01',
    },
    nxtKey: {
      type: String,
      default: '',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      assetDetail: [],
    };
  },
  computed: {
    isEmpty() {
      return this._.isEmpty(this.assetDetail.Record1);
    },
  },
  methods: {
    getDetail() {
      const vm = this;
      const payload = [{
        trId: 'MAQM3014',
        input: {
          input1: vm.id,
          input2: vm.type,
          nxtKey: vm.nxtKey,
        },
      }];
      vm.$store.dispatch('today/getAssetByTypeDetail', payload).then((rst) => {
        console.log(123, rst);
        vm.assetDetail = rst.Record1;
      }).catch((error) => {
        console.log(125, error);
      });
    },
  },
  mounted() {
    if (this.visible) {
      this.getDetail();
    }
  },
  watch: {
    visible(t) {
      if (t) {
        this.getDetail();
      }
    },
  },
};
</script>

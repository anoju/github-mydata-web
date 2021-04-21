<template>
  <div
    class="ui_spinner input"
    :class="{disabled:disabled}"
  >
    <button
      type="button"
      class="ui_spinner_btn minus"
      :disabled="disabled || (value <= min)"
      @click="spinnerBtn('minus')"
    >
      빼기
    </button>
    <div class="inner">
      <strong>{{txtVal}}{{unit}}</strong>
      <input
        type="tel"
        :class="{focus:isFocus}"
        :value="value"
        :title="title"
        :disabled="disabled"
        @focus="isFocus = true"
        @blur="isFocus = false"
        v-on="listeners"
      />
    </div>
    <button
      type="button"
      class="ui_spinner_btn plus"
      :disabled="disabled || (value >= max)"
      @click="spinnerBtn('plus')"
    >
      더하기
    </button>
  </div>
</template>

<script>
export default {
  name: 'kbSpinner',
  props: {
    value: { type: [String, Number], default: '' },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 99999999 },
    unit: { type: String, default: null },
    title: { type: String, default: '수량입력' },
    disabled: { type: Boolean, default: false },
  },
  data() {
    return {
      txtVal: '',
      isFocus: false,
    };
  },
  computed: {
    listeners() {
      const vm = this;
      return {
        ...this.$listeners,
        input(event) {
          let val = event.target.value;
          if (val < vm.min) {
            val = vm.min;
            // vm.value = val;
          }
          if (val > vm.max) {
            val = vm.max;
            // vm.value = val;
          }
          vm.$emit('input', Number(val));
        },
      };
    },
  },
  watch: {
    value() {
      this.txtVal = this.$addComma(this.value);
    },
  },
  beforeMount() {
    this.readyEvt();
  },
  methods: {
    readyEvt() {
      this.txtVal = this.$addComma(this.value);
      let val = this.value;
      if (val < this.min) {
        val = this.min;
        this.$emit('input', Number(val));
      }
      if (val > this.max) {
        val = this.max;
        this.$emit('input', Number(val));
      }
    },
    spinnerBtn(type) {
      let val = this.value;
      if (type === 'plus') {
        val += 1;
      } else if (type === 'minus') {
        val -= 1;
      }
      this.$emit('input', Number(val));
    },
  },
};
</script>

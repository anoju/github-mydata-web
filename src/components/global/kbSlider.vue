<template>
  <div class="ui_slider">
    <vue-slider
      :disabled="disabled"
      :marks="marks"
      :min="min"
      :max="max"
      :min-range="minRange"
      :max-range="maxRange"
      :interval="step"
      :height="height"
      :dotSize="dotSize"
      :data="data"
      :adsorb="adsorb"
      :tooltip="tooltip"
      :tooltip-formatter="tooltipFormatter"
      v-model="sliderVal"
    >
    </vue-slider>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'kbSlider',
  components: {
    VueSlider,
  },
  data() {
    return {
      sliderVal: 0,
    };
  },
  watch: {
    sliderVal(v) {
      this.$emit('input', v);
    },
    value() {
      this.valueSet();
    },
  },
  beforeMount() {
    this.valueSet();
  },
  props: {
    value: { type: [String, Number], default: null },
    disabled: { type: Boolean, default: false },
    adsorb: { type: Boolean, default: false },
    marks: { type: [Boolean, Array, Object, Function], default: true },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    minRange: { type: Number, default: null },
    maxRange: { type: Number, default: null },
    step: { type: Number, default: 1 },
    height: { type: Number, default: 8 },
    dotSize: { type: Number, default: 28 },
    data: { type: [Array, Object], default: null },
    tooltip: { type: String, default: 'none' },
    tooltipFormatter: { type: String, default: null },
  },
  mounted() {
  },
  methods: {
    valueSet() {
      const $val = (this.value === null || this.value === '') ? this.min : this.$getOnlyNumber(this.value);
      // if (Number($val) < this.min)$val = this.min;
      // if (Number($val) > this.max)$val = this.max;
      if (this.min <= Number($val) && Number($val) <= this.max) {
        this.sliderVal = $val;
      }
    },
  },
};
</script>

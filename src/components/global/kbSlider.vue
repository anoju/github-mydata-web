<template>
  <div class="kb_slider">
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
      :data-value="data-value"
      :data-label="data-label"
      :adsorb="adsorb"
      :tooltip="tooltip"
      v-model="sliderVal"
    ></vue-slider>
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
  },
  beforeMount() {
    if (this.value !== null) this.sliderVal = this.value;
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
    dataValue: { type: String, default: null },
    dataLabel: { type: String, default: null },
    tooltip: { type: String, default: 'none' },
  },
  methods: {
  },
};
</script>

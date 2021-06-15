<template>
  <div
    class="select"
    :class="{focus: isFocus, disabled:disabled, inline:inline}"
  >
    <div v-if="inline" class="selected_txt" aria-hidden="true">
      {{selected}}
    </div>
    <select
      ref="select"
      :class="[{ off: (value==='')}, selectClass]"
      :title="title"
      :disabled="disabled"
      :dir="dir"
      v-on="listeners"
      @focus="isFocus = true"
      @blur="isFocus = false"
    >
      <option
        v-for="(option, i) of options"
        :key="i"
        :disabled="option.disabled"
        :selected="(option.value===value)"
        :value="option.value"
      >
        {{ option.text }}
      </option>
      <slot />
    </select>
  </div>
</template>
<script>
export default {
  name: 'kbSelect',
  props: {
    options: { type: [Array, Object], default: () => [] },
    value: { type: [Object, String, Number], default: null },
    title: { type: String, default: '선택' },
    dir: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    inline: { type: Boolean, default: false },
    selectClass: { type: String, default: null },
  },
  data() {
    return {
      isFocus: false,
    };
  },
  computed: {
    listeners() {
      const vm = this;
      if (this.disabled) {
        return null;
      }
      return {
        ...this.$listeners,
        input(event) {
          vm.$emit('input', event.target.value);
        },
      };
    },
    selected() {
      const valObj = this.options.filter((obj) => String(obj.value) === String(this.value));
      return valObj[0].text;
    },
  },
  mounted() {
    this.$emit('input', this.value);
  },
  methods: {
    focus() {
      this.$refs.select.focus();
    },
    // updateValue(value) {
    //   this.$emit('input', value);
    // },
  },
};
</script>

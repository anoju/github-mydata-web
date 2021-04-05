<template>
  <component
    :is="wrapTag"
    class="textarea"
    :class="{focus: (isFocus && !readonly), readonly: readonly, disabled: disabled}"
  >
    <span v-if="autoHeight" class="auto_height_space" v-html="value" arai-hidden="true" />
    <textarea
      v-if="!divChange"
      :id="inputId"
      ref="input"
      :value="value"
      :name="name"
      :rows="rows"
      :class="{inputClass, auto: autoHeight}"
      :placeholder="placeholder"
      :title="title"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly"
      :style="textareaStyle"
      v-on="listeners"
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
    <div
      v-else
      contentEditable
      class="divTextarea"
      role="textarea"
      :name="name"
      :class="inputClass"
      @keydown="maxLengthCheck($event.target.innerText,$event)"
      @keyup="updateText($event.target.innerText)"
      @focus="isFocus = true"
      @blur="isFocus = false"
      v-html="value"
    ></div>
    <slot />
  </component>
</template>

<script>
export default {
  name: 'kbTextarea',
  props: {
    autoHeight: { type: Boolean, default: false },
    divChange: { type: Boolean, default: false },
    inputId: { type: String, default: null },
    inputClass: { type: String, default: null },
    value: { type: [String, Number], default: '' },
    name: { type: String, default: null },
    rows: { type: [String, Number], default: null },
    placeholder: { type: String, default: null },
    title: { type: String, default: null },
    wrapTag: { type: String, default: 'div' },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    maxlength: { type: [String, Number], default: null },
  },
  data() {
    return {
      isFocus: false,
      textareaStyle: null,
      textareaHeight: 0,
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
  },
  mounted() {
    const txtara = this.$el.querySelector('textarea');
    if (txtara !== null) this.textareaHeight = this.$el.querySelector('textarea').offsetHeight;
  },
  methods: {
    // updateValue(value) {
    //   this.$emit('input', value);
    // },
    autoHeightChk() {
      if (this.autoHeight) {
        const rows = this.value.split('\n').length;
        const height = rows * this.textareaHeight;
        if (rows === 1) {
          this.textareaStyle = null;
        } else {
          this.textareaStyle = { height: `${height}px` };
        }
      }
    },
    maxLengthCheck(value, e) {
      const exception = [8, 9, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123];
      if (this.maxlength <= value.length && !e.altKey && !e.ctrlKey && (exception.indexOf(e.keyCode) === -1)) {
        e.preventDefault();
      }
    },
    updateText(value) {
      let val = value;
      console.log(value.length);
      if (this.maxlength <= value.length)val = value.substr(0, 10);
      this.$emit('input', val);
    },
  },
};
</script>

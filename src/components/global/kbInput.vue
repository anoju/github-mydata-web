<template>
  <div
    class="input"
    :class="{focus: (isFocus && !readonly), readonly: readonly, disabled: disabled, line: line, date: date, time: time}"
  >
    <template v-if="!empty">
      <div
        v-if="frontUnit != null"
        class="unit front"
      >
        {{ frontUnit }}
      </div>
      <input
        v-if="keypad"
        :id="inputId"
        ref="input"
        :value="value"
        :name="name"
        :class="inputClass"
        :type="type"
        :placeholder="placeholder"
        :title="title"
        :maxlength="maxlength"
        :disabled="disabled"
        :readonly="readonly"
        v-on="listeners"
      />
      <input
        v-else
        :id="inputId"
        ref="input"
        :value="value"
        :name="name"
        :class="inputClass"
        :type="type"
        :placeholder="placeholder"
        :title="title"
        :maxlength="maxlength"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        v-on="listeners"
        @focus="isFocus = true"
        @blur="isFocus = false"
      >
      <input
        v-if="date"
        type="date"
        @change="dateChange"
        @focus="isFocus = true"
        @blur="isFocus = false"
      >
      <div
        v-if="unit != null"
        class="unit"
      >
        {{ unit }}
      </div>
      <div
        v-if="value != '' && !notDel && !readonly && !disabled && !date && !time && !keypad"
        class="del"
      >
        <button
          type="button"
          class="inp_del"
          aria-label="입력내용삭제"
          @click="valueReset"
        >입력내용삭제</button>
      </div>
    </template>
    <slot />
    <template v-if="empty || keypad">
      <i class="inp_line" aria-hidden="true" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'KbInput',
  props: {
    inputId: { type: String, default: null },
    inputClass: { type: String, default: null },
    value: { type: [String, Number], default: '' },
    type: { type: String, default: 'text' },
    name: { type: String, default: null },
    placeholder: { type: String, default: null },
    title: { type: String, default: null },
    autocomplete: { type: String, default: 'off' },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    line: { type: Boolean, default: false },
    date: { type: Boolean, default: false },
    time: { type: Boolean, default: false },
    empty: { type: Boolean, default: false },
    keypad: { type: Boolean, default: false },
    frontUnit: { type: String, default: null },
    unit: { type: String, default: null },
    maxlength: { type: [String, Number], default: null },
    notDel: { type: Boolean, default: false },
    delete: { type: Function, default: null },
  },
  data() {
    return {
      isFocus: false,
    };
  },
  computed: {
    listeners() {
      const vm = this;
      return {
        ...this.$listeners,
        input(event) {
          vm.$emit('input', event.target.value);
        },
      };
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    updateValue(value) {
      this.$emit('input', value);
    },
    valueReset() {
      this.$emit('input', '');
      this.$refs.input.focus();
      if (this.delete !== null) this.delete();
    },
    dateChange(e) {
      let targetVal = e.target.value;
      if (targetVal.indexOf('-'))targetVal = targetVal.split('-').join('/');
      this.$emit('input', targetVal);
    },
  },
};
</script>

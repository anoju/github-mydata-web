<template>
  <div
    :class="checkboxClass"
  >
    <label
      v-if="right && !!$slots.default"
      class="lbl"
      :class="lblClass"
      :for="chkboxId"
    >
      <slot />
    </label>
    <input
      :id="chkboxId"
      ref="checkbox"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      :class="inputClass"
      :title="title"
      :disabled="disabled"
      @click="clickEvt"
      @focus="isFocus = true"
      @blur="isFocus = false"
      v-on="listeners"
      :name="name"
    ><i aria-hidden="true" />
    <label
      v-if="!right && !!$slots.default"
      class="lbl"
      :class="lblClass"
      :style="lblStyle"
      :for="chkboxId"
    >
      <slot />
    </label>
    <div
      v-if="!!$slots.summary"
      class="lbl_child"
    >
      <slot name="summary" />
    </div>
    <slot name="last" />
  </div>
</template>

<script>
let uuid = 0;
export default {
  name: 'kbCheckbox',
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    inputId: { type: String, default: null },
    inputClass: { type: String, default: null },
    title: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    size: { type: String, default: null },
    small: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    radio: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    switch: { type: Boolean, default: false },
    box: { type: Boolean, default: false },
    button: { type: Boolean, default: false },
    value: { type: [String, Number, Object], default: null },
    modelValue: { type: [String, Number, Boolean, Array, Object], default: null },
    trueValue: { type: [String, Number, Boolean], default: true },
    falseValue: { type: [String, Number, Boolean], default: false },
    lblClass: { type: String, default: null },
    lblStyle: { type: String, default: null },
    name: { type: String, default: null },
  },
  data() {
    return {
      isFocus: false,
      checkedState: false,
    };
  },
  beforeCreate() {
    this.uuid = uuid.toString();
    uuid += 1;
  },
  computed: {
    listeners() {
      const vm = this;
      if (this.disabled) {
        return null;
      }
      return {
        ...this.$listeners,
        change(event) {
          // vm.$emit('input', event.target.value);
          const isChecked = event.target.checked;
          if (vm.modelValue instanceof Array) {
            const newValue = [...vm.modelValue];
            if (isChecked) {
              vm.checkedState = true;
              newValue.push(vm.value);
            } else {
              vm.checkedState = false;
              newValue.splice(newValue.indexOf(vm.value), 1);
            }
            vm.$emit('change', newValue);
          } else {
            let returnVal = '';
            if (isChecked) {
              vm.checkedState = true;
              returnVal = vm.trueValue;
            } else {
              vm.checkedState = false;
              returnVal = vm.falseValue;
            }
            vm.$emit('change', returnVal);
          }
        },
      };
    },
    chkboxId() {
      let rtnVal = `chk_${this.uuid}`;
      if (this.inputId)rtnVal = this.inputId;
      return rtnVal;
    },
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue;
    },
    sizeClass() {
      let rtnVal = null;
      if (this.small || this.large) {
        if (this.small) rtnVal = 'small';
        if (this.large) rtnVal = 'large';
      } else if (this.size) {
        rtnVal = this.size;
      }
      return rtnVal;
    },
    checkboxClass() {
      return [
        {
          checkbox: !this.radio,
          radio: this.radio,
          block: this.block,
          switch: this.switch,
          box: this.box,
          btn: this.button,
          focus: this.isFocus,
          disabled: this.disabled,
          checked: this.checkedState,
        },
        this.sizeClass,
      ];
    },
  },
  mounted() {
    if (this.isChecked) this.checkedState = true;
  },
  methods: {
    /*
    updateInput(event) {
      const isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        const newValue = [...this.modelValue];
        if (isChecked) {
          this.checkedState = true;
          newValue.push(this.value);
        } else {
          this.checkedState = false;
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit('change', newValue);
      } else {
        let returnVal = '';
        if (isChecked) {
          this.checkedState = true;
          returnVal = this.trueValue;
        } else {
          this.checkedState = false;
          returnVal = this.falseValue;
        }
        this.$emit('change', returnVal);
      }
    },
    */
    focus() {
      this.$refs.checkbox.focus();
    },
    clickEvt() {
      if (this.button && this.$el.closest('.btn_toggle_row') !== null) {
        const wrap = this.$el.closest('.btn_toggle_row');
        const sclWidth = wrap.scrollWidth;
        if (wrap.offsetWidth < sclWidth) {
          this.sclCenter(this.$el);
        }
      }
    },
    sclCenter(el) {
      const wrap = this.$el.closest('.btn_toggle_row');
      const elX = el.offsetLeft;
      const elW = el.offsetWidth;
      const sclLeft = elX - (wrap.offsetWidth / 2) + (elW / 2);
      this.$scrollTo(wrap, { left: sclLeft }, 300);
    },
  },
};
</script>

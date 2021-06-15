<template>
  <component
    :is="tag"
    class="input"
    :class="{
      focus: (isFocus && !readonly),
      readonly: readonly,
      disabled: disabled,
      line: line,
      date: date,
      time: time,
      datepicker: (datepicker || monthpicker || yearpicker),
    }"
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
        @focus="focusEvt"
        @blur="isFocus = false"
      >
      <input
        v-if="date"
        type="date"
        @change="dateChange"
        @focus="focusEvt"
        @blur="isFocus = false"
      >
      <div
        v-if="unit != null"
        class="unit"
      >
        {{ unit }}
      </div>
      <div
        v-if="value != '' && !notDel && !readonly && !disabled && !date && !time && !keypad && !datepicker && !monthpicker && !yearpicker"
        class="del"
      >
        <button
          type="button"
          class="inp_del"
          aria-label="입력내용삭제"
          @click="valueReset"
        >입력내용삭제</button>
      </div>
      <div
        v-if="datepicker || monthpicker || yearpicker"
        class="datepicker_btn"
      >
        <kb-button
          not
          class="ui-datepicker-btn"
          aria-label="달력팝업으로 기간조회"
          @click="popCalendar($event.target)"
        >달력팝업으로 기간조회</kb-button>
      </div>
    </template>
    <slot />
    <template v-if="empty || keypad">
      <i class="inp_line" aria-hidden="true" />
    </template>
  </component>
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
    comma: { type: Boolean, default: false },
    delete: { type: Function, default: null },
    tag: { type: String, default: 'div' },

    // 달력
    datepicker: { type: Boolean, default: false },
    monthpicker: { type: Boolean, default: false },
    yearpicker: { type: Boolean, default: false },
    min: { type: [Object, String, Number], default: null },
    max: { type: [Object, String, Number], default: null },
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
          let $value = event.target.value;
          if (vm.comma) {
            $value = vm.$removeComma($value);
            $value = vm.$addComma($value);
          }
          vm.$emit('input', $value);
        },
      };
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    focusEvt(e) {
      if (!this.keypad) this.isFocus = true;
      if (this.datepicker || this.monthpicker || this.yearpicker) this.popCalendar(e.target);
      setTimeout(() => {
        // this.focusScroll();
      }, 300);
    },
    focusScroll() {
      const isApp = document.querySelector('html').classList.contains('is_app');
      const isAndroid = document.querySelector('html').classList.contains('android');
      if (isApp && isAndroid) {
        const { $el } = this;
        const $offset = this.$getOffset($el);
        const thisH = $el.offsetHeight;
        let wrap = $el.closest('.scl__body');
        // let headH = 0;
        if (wrap === null)wrap = window.document.scrollingElement || window.document.body || window.document.documentElement;
        // const head = wrap.querySelector('.scl__head');
        // if (head === null)headH = head.offsetHeight;
        const sclTop = wrap.scrollTop;
        const positionTop = $offset.top - sclTop;
        const winCenter = (window.innerHeight / 2);
        const move = $offset.top - (winCenter / 2) - (thisH / 2);
        // console.log(winCenter, positionTop, sclTop, thisH, move);
        if (winCenter < positionTop) {
          this.$scrollTo(wrap, { top: move }, 200);
        }
      }
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

    // 달력
    popCalendar(el) {
      const { min } = this;
      const { max } = this;
      let type = 'day';
      if (this.monthpicker)type = 'month';
      if (this.yearpicker)type = 'year';
      this.$modal({
        component: () => import('@/components/modalContainer/modalCalendar.vue'),
        componentProps: {
          value: this.value,
          type,
          min,
          max,
        },
        returnFocus: el,
      }).then((result) => {
        // console.log(result)
        if ((result.payload !== undefined) && (this.value !== result.payload)) {
          const inpVal = this.autoDateFormet(result.payload, '/');
          this.$emit('input', inpVal);
        }
      });
    },
    autoDateFormet(str, mark) {
      const $date = str.replace(/[^0-9]/g, '');
      const $dateAry = [];
      if (!mark)mark = '/';
      if ($date.length < 5) {
        $dateAry.push($date);
      } else if (str.length < 7) {
        $dateAry.push($date.substr(0, 4));
        $dateAry.push($date.substr(4));
      } else {
        $dateAry.push($date.substr(0, 4));
        $dateAry.push($date.substr(4, 2));
        $dateAry.push($date.substr(6));
      }
      return $dateAry.join(mark);
    },
  },
};
</script>

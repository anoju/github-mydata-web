<template>
  <kb-pop
    modal
    class="ui-calendar"
  >
    <kb-pop-body>
      <kb-calendar
        :value="value"
        :type="type"
        :min="min"
        :max="max"
        @select="selectDate"
      />
    </kb-pop-body>
  </kb-pop>
</template>
<script>

export default {
  name: 'modalCalendar',
  props: {
    value: { type: [Object, String, Number], default: null },
    type: { type: String, default: 'day' },
    min: { type: [Object, String, Number], default: null },
    max: { type: [Object, String, Number], default: null },
  },
  data() {
    return {
    };
  },
  methods: {
    // 버튼기능
    selectDate(val) {
      this.$emit('close', { payload: val });
    },
  },
};
</script>

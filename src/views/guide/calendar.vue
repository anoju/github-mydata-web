<template>
  <div class="section">
    <h2 class="gd__h1">
      달력
    </h2>
    <div>
      <h3 class="gd__h2">
        기본
      </h3>
      <div>
        <kb-input
          v-model="dateVal1"
          line
          datepicker
          title="날짜선택"
          placeholder="날짜선택"
        />

        {{ dateVal1 }}
        <br><br>
        <kb-input
          v-model="dateVal2"
          line
          monthpicker
          title="년,월선택"
          placeholder="년,월선택"
        />
        {{ dateVal2 }}
        <br><br>
        <kb-input
          v-model="dateVal3"
          line
          yearpicker
          title="년선택"
          placeholder="년선택"
        />
        {{ dateVal3 }}
      </div>

      <h3 class="gd__h2">
        min, max
      </h3>
      <div>
        <kb-input
          v-model="dateVal4"
          line
          datepicker
          title="날짜선택"
          min="today"
          placeholder="최소일"
        />
        {{ dateVal4 }}
        <br>
        <br>
        <kb-input
          v-model="dateVal5"
          line
          datepicker
          title="날짜선택"
          :min="{y:1}"
          max="today"
          placeholder="최대일"
        />
        {{ dateVal5 }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'calendar',
  data() {
    return {
      dateVal1: '',
      dateVal2: '',
      dateVal3: '',
      dateVal4: '',
      dateVal5: '',
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

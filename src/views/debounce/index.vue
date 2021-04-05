<template>
  <div id="app">
    <div>
      <button @click="debounceA">debounceA</button>
    </div>
    <div>
      <input type="text" v-model="inputData" @input="debounceB">
      <input type="text" v-model="inputDataLen" readonly>
    </div>

  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'lodash',

  data: () => ({
    inputData: '',
    inputDataLen: 0,
    liList: [],
  }),
  created() {
    this.debounceB = _.debounce(this.debounceB, 250);
  },
  watch: {
    inputData: _.debounce((newVal, oldVal) => {
      console.log(newVal, oldVal);
    }, 250),
  },
  methods: {
    debounceA: _.debounce(() => {
      alert('debounceA Test');
    }, 250),
    debounceB(e) {
      this.inputData = e.target.value;
      this.inputDataLen = this.inputData.length;
    },
  },

};
</script>

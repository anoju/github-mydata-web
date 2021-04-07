<template>
  <kb-page page-title="가상투자">
    <kb-page-body>
      <div class="section">
        <kb-slider
          v-model="sliderVal"
          :step="5"
          :marks="[0, 20, 40, 60, 80, 100]"
        />
        {{sliderVal}}
      </div>
    </kb-page-body>
  </kb-page>
</template>
<script>

export default {
  name: 'IN07A001',
  data() {
    return {
      sliderVal: 20,
    };
  },
  methods: {
  },
};
</script>

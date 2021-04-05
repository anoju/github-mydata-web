<template>
  <div
    class="complete_wrap"
  >
    <div class="bg" aria-hidden="true">
      <template v-for="(el, i) of items">
        <span
          class="item"
          :key="i"
          :class="[
            `color_${(i%3)+1}`,
            `size_${randomNumber(1, 3, 0)}`,
            `type_${randomNumber(1, 6, 0)}`,
          ]"
          :style="{
            'left':`${((100-10)/items*(i+1))+5}%`,
            'animation':`completeSwing${randomNumber(1, 2, 0)} ${randomNumber(30, 50, 0)*50}ms infinite 1400ms, completeDrop ${randomNumber(5, 15, 0)*100}0ms infinite ease-out ${randomNumber(0, 15, 0)*200}ms`
          }"
        >
          {{i}}
          <span></span>
        </span>
      </template>
    </div>
    <div class="inner" v-if="!!$slots.default">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'kbCompleteEf',
  props: {
    items: { type: Number, default: 10 },
  },
  computed: {
  },
  methods: {
    randomNumber(min, max, point) {
      return ((Math.random() * (max - min)) + min).toFixed(point);
    },
  },
};
</script>

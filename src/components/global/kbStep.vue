<template>
  <div class="step_wrap">
    <ol
      class="step_state"
      :class="{short:total > 4}"
      role="img"
      :aria-label="`총 ${total}단계 중 현재단계 ${now}단계`"
    >
      <template v-for="(n, i) in total">
        <li
          v-if="n == now"
          :key="i"
          class="on"
        >
          {{ n }}<span class="blind">단계(현재단계)</span>
        </li>
        <li
          v-else
          :key="i"
        >
          {{ n }}<span class="blind">단계</span>
        </li>
      </template>
    </ol>
    <div v-if="!!$slots.default" class="step_txt">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'kbStep',
  props: {
    total: { type: Number, default: 0, require: true },
    now: { type: Number, default: 0, require: true },
  },
};
</script>

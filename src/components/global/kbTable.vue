<template>
  <div class="table">
    <table>
      <caption>{{ caption }}</caption>
      <colgroup>
        <col
          v-for="(col, i) in colWidth"
          :key="i"
          :style="{width:col}"
        >
      </colgroup>
      <slot />
    </table>
  </div>
</template>

<script>
export default {
  name: 'kbTable',
  props: {
    caption: { type: String, required: true, default: '테이블제목' },
    colWidth: { type: Array, required: true, default: () => [] },
  },
};
</script>

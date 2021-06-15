<template>
  <kb-pop
    full
    title="자주가는 메뉴 편집"
  >
    <kb-pop-body>
      <ul class="quick_menu_list">
        <li>
          <div class="dep1"><kb-checkbox right small v-model="chkVal" value="1">1뎁스 메뉴명</kb-checkbox></div>
          <div class="dep2"><kb-checkbox right small v-model="chkVal" value="2">2뎁스 메뉴명</kb-checkbox></div>
          <div class="dep2"><kb-checkbox right small v-model="chkVal" value="3">2뎁스 메뉴명</kb-checkbox></div>
          <div class="dep3"><kb-checkbox right small v-model="chkVal" value="4">3뎁스 메뉴명</kb-checkbox></div>
          <div class="dep3"><kb-checkbox right small v-model="chkVal" value="5">3뎁스 메뉴명</kb-checkbox></div>
          <div class="dep3"><kb-checkbox right small v-model="chkVal" value="6">3뎁스 메뉴명</kb-checkbox></div>
          <div class="dep3"><kb-checkbox right small v-model="chkVal" value="7">3뎁스 메뉴명</kb-checkbox></div>
          <div class="dep2"><kb-checkbox right small v-model="chkVal" value="8">2뎁스 메뉴명</kb-checkbox></div>
        </li>
        <li>
          <div class="dep1"><kb-checkbox right small v-model="chkVal" value="9">1뎁스 메뉴명</kb-checkbox></div>
          <div class="dep2"><kb-checkbox right small v-model="chkVal" value="10">2뎁스 메뉴명</kb-checkbox></div>
          <div class="dep2"><kb-checkbox right small v-model="chkVal" value="11">2뎁스 메뉴명</kb-checkbox></div>
          <div class="dep3"><kb-checkbox right small v-model="chkVal" value="12">3뎁스 메뉴명</kb-checkbox></div>
          <div class="dep3"><kb-checkbox right small v-model="chkVal" value="13">3뎁스 메뉴명</kb-checkbox></div>
          <div class="dep3"><kb-checkbox right small v-model="chkVal" value="14">3뎁스 메뉴명</kb-checkbox></div>
          <div class="dep3"><kb-checkbox right small v-model="chkVal" value="15">3뎁스 메뉴명</kb-checkbox></div>
          <div class="dep2"><kb-checkbox right small v-model="chkVal" value="16">2뎁스 메뉴명</kb-checkbox></div>
        </li>
      </ul>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button line>초기화</kb-button>
      <kb-button yellow>저장</kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
export default {
  name: 'TO01C001',
  data() {
    return {
      chkVal: [],
    };
  },
  methods: {

  },
};
</script>

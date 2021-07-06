<template>
  <kb-pop
    full
  >
    <kb-pop-body>
      <div class="section mg_t40">
        <pose v-if="charater === 0" />
        <luna v-if="charater === 1" />
        <mellang v-if="charater === 2" />
        <bibi v-if="charater === 3" />
        <lollo v-if="charater === 4" />
        <div class="flex_wrap align_center justify_center mg_t32" v-if="!noChange">
          <kb-button
            not
            class="tooltip_btn mg_r5"
            v-tooltip="'views/PE/01/PE01A001_tip.vue'"
            aria-label="팝업으로 상세내용 확인"
          >팝업으로 상세내용 확인</kb-button>
          <kb-button link blue>투자성향 만들기 <i aria-hidden="true" class="bt_ic_arr"></i></kb-button>
        </div>
      </div>
    </kb-pop-body>
    <kb-pop-foot>
      <kb-button line @click="changeCharater" v-if="!noChange">바꾸기</kb-button>
      <kb-button yellow @click="changeType">
        {{noChange? '확인': '선택완료'}}
      </kb-button>
    </kb-pop-foot>
  </kb-pop>
</template>
<script>
import pose from '../character/pose.vue';
import luna from '../character/luna.vue';
import mellang from '../character/mellang.vue';
import bibi from '../character/bibi.vue';
import lollo from '../character/lollo.vue';

export default {
  name: 'PE03A001',
  components: {
    pose,
    luna,
    mellang,
    bibi,
    lollo,
  },
  data() {
    return {
      charater: 0,
      noChange: false,
    };
  },
  methods: {
    changeCharater() {
      // 퍼블 확인용
      this.charater += 1;
      if (this.charater >= 5) this.charater = 0;
    },
    changeType() {
      // 퍼블 확인용
      this.noChange = !this.noChange;
    },
  },
};
</script>

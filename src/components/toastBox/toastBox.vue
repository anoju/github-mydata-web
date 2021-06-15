<template>
  <div
    v-if="toastAry.length || alarmAry.length"
    class="toast_container"
  >
    <!-- 토스트 팝업 -->
    <div
      v-for="(toast, i) in toastAry"
      :key="i"
      class="pop_toast"
      :class="{show:toast.show, no_ef:toast.noEf}"
    >
      <div
        v-if="toast.type !== undefined && toast.type !== null && toast.type !== ''"
        class="ty2"
        :class="toast.type"
      >
        <div
          class="inner"
          v-html="toast.text"
        />
        <div
          v-if="toast.link !== undefined && toast.link !== null && toast.link !== ''"
        >
          <kb-button
            :to="toast.link"
            h32
            round
            purple
            @click.native="onToastClose(toast.idx)"
          >
            <template v-if="toast.type == 'mission'">보상받기</template>
            <template v-else>바로가기</template>
          </kb-button>
        </div>
      </div>
      <div v-else>
        {{toast.type}}
        <router-link
          v-if="toast.link !== undefined && toast.link !== null && toast.link !== ''"
          :to="toast.link"
          class="inner"
          @click.native="onToastClose(toast.idx)"
        >
          {{ toast.text }}
        </router-link>
        <div
          v-else
          class="inner"
          v-html="toast.text"
        />
      </div>
    </div>

    <!-- 알람 팝업 -->
    <div
      v-for="(alarm, j) in alarmAry"
      :key="j"
      class="pop_alarm"
      :class="{show:alarm.show, no_ef:alarm.noEf}"
    >
      <div>
        <router-link
          v-if="alarm.link !== undefined && alarm.link !== null && alarm.link !== ''"
          :to="alarm.link"
          class="inner"
          @click.native="onClose(alarm.idx)"
        >
          {{ alarm.text }}
        </router-link>
        <div
          v-else
          class="inner"
          v-html="alarm.text"
        />
        <kb-button
          not
          class="pop_close"
          aria-label="닫기"
          @click="onAlarmClose(alarm.idx)"
        >닫기</kb-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToastBox',
  data() {
    return {
      toastAry: [],
      toastIdx: 0,
      isToastOpen: false,
      isToastClose: false,
      alarmAry: [],
      alarmIdx: 0,
      isAlarmOpen: false,
      isAlarmClose: false,
    };
  },
  created() {
    this.$toastBoxInstance = this;
  },
  beforeDestroy() {
    this.$toastBoxInstance = null;
  },
  methods: {
    addToast(text, link, type) {
      // if (!this.isToastOpen) return;
      // this.isToastOpen = true;
      const index = this.toastIdx;
      this.toastAry.push({
        idx: index,
        text,
        link,
        type,
        show: false,
        noEf: false,
      });
      this.toastIdx += 1;

      // 열림
      this.onToastOpen();

      setTimeout(() => {
        this.onToastClose(index);
      }, 3000);
    },
    onToastOpen() {
      setTimeout(() => {
        this.toastAry[this.toastAry.length - 1].show = true;
        setTimeout(() => {
          this.toastAry[this.toastAry.length - 1].noEf = true;
          // this.isToastOpen = false;
        }, 201);
      }, 1);
    },
    onToastClose(index) {
      const idx = Number(index);
      const aryIdx = this.toastAry.findIndex((item) => item.idx === idx);
      this.toastAry[aryIdx].noEf = false;
      this.toastAry[aryIdx].show = false;
      setTimeout(() => {
        this.toastAry.splice(aryIdx, 1);
      }, 201);
    },
    addAlarm(text, link) {
      // if (this.isAlarmOpen) return;
      // this.isAlarmOpen = true;
      this.alarmAry.push({
        idx: this.alarmIdx,
        text,
        link,
        show: false,
        noEf: false,
      });
      this.alarmIdx += 1;

      // 열림
      this.onAlarmOpen();
    },
    onAlarmOpen() {
      setTimeout(() => {
        this.alarmAry[this.alarmAry.length - 1].show = true;
        setTimeout(() => {
          this.alarmAry[this.alarmAry.length - 1].noEf = true;
          // this.isAlarmOpen = false;
        }, 201);
      }, 1);
    },
    onAlarmClose(index) {
      // if (this.isAlarmClose) return;
      // this.isAlarmClose = true;
      const idx = Number(index);
      const aryIdx = this.alarmAry.findIndex((item) => item.idx === idx);
      this.alarmAry[aryIdx].noEf = false;
      this.alarmAry[aryIdx].show = false;
      setTimeout(() => {
        this.alarmAry.splice(aryIdx, 1);
        // this.isAlarmClose = false;
      }, 201);
    },
  },
};
</script>

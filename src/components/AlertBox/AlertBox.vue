<template>
  <div
    v-if="messages.length"
    class="modal_container"
  >
    <template v-for="(msg, i) in messages">
      <kb-pop-wrap
        ref="alert"
        :key="i"
        class="modal alert"
        :class="[
          msg.addClass,
          msg.show ? 'show' : ''
        ]"
        v-if="!msg.empty"
        role="dialog"
      >
        <kb-pop :title="msg.title" no-close>
          <kb-pop-body>
            <div class="section">
              <div
                ref="message"
                class="message"
                tabindex="-1"
              >
                <div
                  role="alert"
                  aria-live="assertive"
                  v-html="msg.text"
                />
              </div>
            </div>
          </kb-pop-body>
          <kb-pop-foot>
            <kb-button
              v-if="msg.isConfirm"
              line
              @click="onClose(i, false)"
            >
              {{ msg.cancelTxt }}
            </kb-button>
            <kb-button
              yellow
              @click="onClose(i, true)"
            >
              {{ msg.confirmTxt }}
            </kb-button>
          </kb-pop-foot>
        </kb-pop>
      </kb-pop-wrap>
    </template>
  </div>
</template>

<script>
import uiEventBus from '../uiEventBus.vue';

export default {
  name: 'MessageBox',
  data() {
    return {
      messages: [],
      index: 0,
    };
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        this.messages = [];
        this.index = 0;
      }
    },
  },
  created() {
    this.$msgBoxInstance = this;
  },
  beforeDestroy() {
    this.$msgBoxInstance = null;
  },
  methods: {
    async addMessage(resolve, isConfirm, text, title, options, returnFocus) {
      const addClass = (options !== undefined && options.addClass !== undefined) ? options.addClass : null;
      const confirmTxt = (options !== undefined && options.confirmTxt !== undefined) ? options.confirmTxt : '확인';
      const cancelTxt = (options !== undefined && options.cancelTxt !== undefined) ? options.cancelTxt : '취소';
      let isOpend = false;
      if (this.messages.length) {
        this.messages.forEach((msg, i) => {
          if (msg.text === text && msg.title === title && msg.isConfirm === isConfirm && msg.addClass === addClass && msg.confirmTxt === confirmTxt && msg.cancelTxt === cancelTxt) {
            if (msg.empty) {
              this.messages.splice(i, 1);
            } else {
              isOpend = true;
            }
          }
        });
      }
      if (isOpend) return;
      this.messages.push({
        text,
        title,
        addClass,
        confirmTxt,
        cancelTxt,
        isConfirm,
        returnFocus,
        show: false,
        empty: false,
        resolve,
      });
      const index = this.messages.length - 1;
      this.onOpen(index);
    },
    onOpen(index) {
      if (!document.querySelectorAll('.alert.show').length && document.querySelector('.lock') === null) uiEventBus.$emit('lock-wrap');
      const $message = this.messages[index];
      setTimeout(() => {
        $message.show = true;
      }, 1);
      setTimeout(() => {
        const $length = document.querySelectorAll('.alert.show').length;
        if (!$length) return;
        const $last = this.$refs.alert[$length - 1].$el;
        if ($message.title === '' || $message.title === null || $message.title === undefined) {
          $last.querySelector('.message').focus();
        } else {
          $last.querySelector('.pop_head h1').focus();
        }
      }, 650);
    },
    onClose(index, result) {
      const $message = this.messages[index];
      $message.show = false;
      $message.resolve(result);
      let focusEl = $message.returnFocus;
      setTimeout(() => {
        $message.empty = true;
        if (!document.querySelectorAll('.alert.show').length) uiEventBus.$emit('unlock-wrap');
        if (focusEl !== undefined) {
          if (focusEl.closest('.button') !== null) focusEl = focusEl.closest('.button');
          focusEl.focus();
        }
      }, 600);
    },
  },
};
</script>

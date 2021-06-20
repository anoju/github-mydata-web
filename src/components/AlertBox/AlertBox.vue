<template>
  <div
    v-if="show"
    class="popup modal alert"
    :class="message.addClass"
    role="dialog"
  >
    <kb-pop :title="message.title" no-close>
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
              v-html="message.text"
            />
          </div>
        </div>
      </kb-pop-body>
      <kb-pop-foot>
        <kb-button
          v-if="message.isConfirm"
          line
          @click="onClose(false)"
        >
          {{ message.cancelTxt }}
        </kb-button>
        <kb-button
          yellow
          @click="onClose(true)"
        >
          {{ message.confirmTxt }}
        </kb-button>
      </kb-pop-foot>
    </kb-pop>
  </div>
</template>

<script>
import uiEventBus from '../uiEventBus.vue';

// const DELAY_MS = 100

export default {
  name: 'MessageBox',
  data() {
    return {
      isOpen: false,
      delay: false,
      queue: [],
      message: null,
    };
  },
  computed: {
    show() {
      // return !this.delay && this.queue.length > 0
      return this.queue.length > 0;
    },
  },
  watch: {
    show(newValue) {
      if (newValue) {
        const {
          text,
          title,
          addClass,
          confirmTxt,
          cancelTxt,
          isConfirm,
          returnFocus,
          resolve,
        } = this.queue[0];

        this.message = {
          text: text || null,
          title: title || null,
          addClass: addClass || null,
          confirmTxt: confirmTxt || '확인',
          cancelTxt: cancelTxt || '취소',
          isConfirm,
          returnFocus,
          resolve,
        };

        this.$nextTick(() => {
          this.onOpen();
        });
      }
    },
  },
  created() {
    this.$msgBoxInstance = this;
  },
  methods: {
    addMessage(message) {
      if (!this.isOpen) {
        this.isOpen = true;
        this.queue.push(message);
      }
    },
    onOpen() {
      if (document.querySelector('.lock') === null) uiEventBus.$emit('lock-wrap');
      setTimeout(() => {
        this.$el.classList.add('show');
      }, 50);
      setTimeout(() => {
        if (this.message.title === '' || this.message.title === null) {
          this.$refs.message.focus();
        } else {
          this.$el.querySelector('.pop_head h1').focus();
        }
      }, 650);
    },
    onClose(result) {
      this.$el.classList.remove('show');
      let focusEl = this.message.returnFocus;
      this.message.resolve(result);
      setTimeout(() => {
        this.queue.splice(0, 1);
        this.isOpen = false;
        if (document.querySelectorAll('.popup').length === 1) uiEventBus.$emit('unlock-wrap');
        if (focusEl !== undefined) {
          if (focusEl.closest('.button') !== null) focusEl = focusEl.closest('.button');
          focusEl.focus();
        }
      }, 600);
    },
  },
};
</script>

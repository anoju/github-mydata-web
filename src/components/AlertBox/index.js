// this.$alert('변경된 테스트 값이 없습니다.')

// const res = await this.$confirm(this.$t('pre.messages.sampleAsyncConfirm'))
// this.$alert(`결과: ${res}`)

// this.$confirm(this.text, {
//  confirmTxt: this.confirmTxt,
//  cancelTxt: this.cancelTxt
// })
function MessageBox() {
  const msgBox = {
    installed: false,
    instance: null,

    install(Vue) {
      if (this.installed) return;

      this.installed = true;
      Vue.prototype.$alert = this.alert;
      Vue.prototype.$confirm = this.confirm;

      Object.defineProperty(Vue.prototype, '$msgBoxInstance', {
        set(instance) {
          if (instance === null) return;
          if (instance.$vnode.tag.endsWith('MessageBox')) {
            msgBox.instance = instance;
          }
        },
        // get() {
        //   return msgBox.instance;
        // },
      });
    },

    alert(text, returnFocus, title, options = {}) {
      return new Promise((resolve) => {
        msgBox.instance.addMessage(
          resolve,
          false,
          text,
          title,
          options,
          // addClass: options.addClass || null,
          // confirmTxt: options.confirmTxt || '확인',
          returnFocus,
        );
      });
    },

    confirm(text, returnFocus, title, options = {}) {
      return new Promise((resolve) => {
        msgBox.instance.addMessage(
          resolve,
          true,
          text,
          title,
          options,
          // addClass: options.addClass || null,
          // confirmTxt: options.confirmTxt || '확인',
          // cancelTxt: options.cancelTxt || '취소',
          returnFocus,
        );
      });
    },
  };

  return msgBox;
}

export default MessageBox();

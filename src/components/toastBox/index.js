/*
this.$toast(msg, url);
this.$alarm(msg, url);
*/

function ToastBox() {
  const toastBox = {
    installed: false,
    instance: null,

    install(Vue) {
      if (this.installed) return;

      this.installed = true;
      Vue.prototype.$toast = this.toast;
      Vue.prototype.$alarm = this.alarm;

      Object.defineProperty(Vue.prototype, '$toastBoxInstance', {
        set(instance) {
          if (instance === null) return;
          if (instance.$vnode.tag.endsWith('ToastBox')) {
            toastBox.instance = instance;
          }
        },
      });
    },

    toast(text, link) {
      toastBox.instance.addToast(text, link);
    },
    alarm(text, link) {
      toastBox.instance.addAlarm(text, link);
    },
  };

  return toastBox;
}

export default ToastBox();

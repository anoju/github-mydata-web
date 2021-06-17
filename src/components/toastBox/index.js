/*
this.$toast(msg, url, type);
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
      Vue.prototype.$toastOnce = this.toastOnce;
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

    toast(text, link, type) {
      toastBox.instance.addToast(text, link, type);
    },
    toastOnce(text, link, type) {
      toastBox.instance.addToast(text, link, type, true);
    },
    alarm(text, link) {
      toastBox.instance.addAlarm(text, link);
    },
  };

  return toastBox;
}

export default ToastBox();

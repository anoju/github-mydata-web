// this.$loading(true)
// this.$loading(false)
function Loader() {
  const loader = {
    installed: false,
    instance: null,

    install(Vue) {
      if (this.installed) return;

      this.installed = true;
      Vue.prototype.$loading = this.loading;

      Object.defineProperty(Vue.prototype, '$loaderInstance', {
        set(instance) {
          if (instance === null) return;
          if (instance.$vnode.tag.endsWith('Loading')) {
            loader.instance = instance;
          }
        },
      });
    },

    loading(load = true, text, type) {
      if (typeof load !== 'boolean') {
        throw Error('[plugin/loader] Parameter type must be boolean');
      }
      const typeAry = ['A', 'B', 'C'];
      if (type === undefined || type === '')type = 'A';
      if (typeAry.indexOf(type) === -1) {
        throw Error('[plugin/loader] Loading type must be one of A,B,C.');
      }
      if (loader.instance === null) return;
      loader.instance[load ? 'increaseLoad' : 'decreaseLoad']();
      loader.instance.addLoading(text, type);
    },
  };

  return loader;
}

export default Loader();

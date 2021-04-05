/*
this.$modal({
    component: () => import('$dev/views/meta/ParamObjectP.vue'),
    componentProps: {
        jsonData: clickData.value,
        isEdit: false,
        isReadOnly: true
    }
})
*/

function ModalContainer() {
  const modalContainer = {
    installed: false,
    instance: null,

    install(Vue) {
      if (this.installed) return;

      this.installed = true;
      Vue.prototype.$modal = this.modal;

      Object.defineProperty(Vue.prototype, '$modalInstance', {
        set(instance) {
          if (instance === null) return;
          if (instance.$vnode.tag.endsWith('ModalContainer')) {
            modalContainer.instance = instance;
          }
        },
      });
    },

    modal({
      component, componentProps, modalProps, returnFocus,
    }) {
      return new Promise((resolve) => {
        modalContainer.instance.addModal(
          resolve,
          component,
          componentProps,
          modalProps,
          returnFocus,
        );
      });
    },
  };

  return modalContainer;
}

export default ModalContainer();

export default {

  loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;

      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error('script load error'));
      document.body.append(script);
    });
  },
  action(options) {
    return new Promise((resolve) => {
      window.NetFunnel_Action(options, {
        success(ev, ret) {
          console.log('success', ret);
          resolve(false);
        },
        block(ev, ret) {
          console.log('block', ret);
          resolve(false);
        },
      });
    });
  },
};

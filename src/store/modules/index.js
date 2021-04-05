const modules = {};

const requireModule = require.context('.', true, /\.js$/);

requireModule.keys().forEach((item) => {
  if (item.indexOf('index') < 0) {
    const moduleName = item.replace(/(\.\/|\.js)/g, '');
    modules[moduleName] = requireModule(item).default;
  }
});

export default modules;

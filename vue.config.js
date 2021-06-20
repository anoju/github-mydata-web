const isDev = process.env.VUE_APP_BUILD === 'development';

module.exports = {
  // publicPath: '/vue-NHCard/',
  css: {
    sourceMap: isDev,
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/scss/common/_function.scss";@import "~@/assets/scss/common/_mixin.scss";',
      },
    },
  },
};

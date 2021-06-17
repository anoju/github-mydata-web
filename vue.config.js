const isDev = (process.env.NODE_ENV !== 'production');
module.exports = {
  css: {
    sourceMap: isDev,
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/scss/common/_function.scss";@import "~@/assets/scss/common/_mixin.scss";',
      },
    },
  },
  devServer: {
    proxy: {
    },
    port: 8082,
  },
};

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
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/api': '' },
      },
      '/kings': {
        target: 'http://14.35.234.7:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/kings': '',
        },
      },
    },
    port: 8082,
  },
};

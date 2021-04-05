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
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      overrideEndpoint: false,
      region: 'us-east-1',
      bucket: 'kb-stock',
      createBucket: true,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: false,
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 5,
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

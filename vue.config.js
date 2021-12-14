module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      region: 'us-east-1',
      // http://{bucket}.s3-website-{region}.amazonaws.com
      bucket: 'template-vue', // http://template-vue.s3-website-us-east-1.amazonaws.com
      createBucket: true,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: true,
      pwaFiles: 'service-worker.js',
      enableCloudfront: false,
      uploadConcurrency: 5,
      pluginVersion: '3.0.0',
    },
  },

  // pluginOptions: {
  //   i18n: {
  //     locale: 'en',
  //     fallbackLocale: 'en',
  //     localeDir: 'locales',
  //     enableInSFC: true,
  //   },
  // },
};

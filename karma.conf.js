// karma.conf.js
module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['ui5'],

    // REMOVE THE 'files' ARRAY ENTIRELY
    // files: [
    //   { pattern: 'webapp/test/unit/unitTests.qunit.html', watched: false }
    // ],

    exclude: [],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['FirefoxHeadless'],
    singleRun: true,
    concurrency: Infinity,
    ui5: {
      url: 'https://sapui5.hana.ondemand.com',
      mode: 'html', // Keep this!
    },
    reporters: ['progress']
  });
};
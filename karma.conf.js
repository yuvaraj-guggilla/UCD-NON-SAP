// karma.conf.js
module.exports = function(config) {
    config.set({
      // base path that will be used to resolve all your patterns (e.g., files, exclude)
      basePath: './',
  
      // frameworks to use
      // The 'ui5' framework is provided by 'karma-ui5' plugin
      frameworks: ['ui5'],
  
      // list of files / patterns to load in the browser
      // This is where you point Karma to your unit test runner HTML file.
      files: [
        { pattern: 'webapp/test/unit/unitTests.qunit.html', watched: false } // <--- Key file to load
      ],
  
      // list of files / patterns to exclude
      exclude: [],
  
      // web server port
      port: 9876,
  
      // enable / disable colors in the output (reporters and logs)
      colors: true,
  
      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,
  
      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: false, // Set to true for local development, false for CI
  
      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['FirefoxHeadless'], // Consistent with your package.json script
  
      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: true,
  
      // Concurrency level
      // how many browser should be started simultaneously
      concurrency: Infinity,
  
      // Configure the karma-ui5 plugin
      ui5: {
        url: 'https://sapui5.hana.ondemand.com', // Or your local UI5 resource URL if available
        mode: 'html', // Specifies that a standalone HTML test runner is used
        // For more complex setups, you might need to specify testpage and paths
        // e.g., testpage: 'webapp/test/unit/unitTests.qunit.html' if `files` is just for serving.
        // paths: {
        //   '/resources': 'https://sapui5.hana.ondemand.com/resources',
        //   '/test-resources': 'https://sapui5.hana.ondemand.com/test-resources'
        // }
      },
  
      // To add more specific configuration for FirefoxHeadless if needed (less common than Chrome)
      // customLaunchers: {
      //   FirefoxHeadless: {
      //     base: 'Firefox',
      //     flags: ['-headless', 'no-sandbox'] // 'no-sandbox' might still be useful here for containers
      //   }
      // },
  
      // Reporters for test results
      reporters: ['progress'] // 'progress' for console output, 'junit' for XML reports
    });
  };
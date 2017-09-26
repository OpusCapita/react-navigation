module.exports.config = {
  host: '0.0.0.0',
  port: 4444,
  path: '/wd/hub',
  specs: [
    'test/regression/spec/**'
  ],
  maxInstances: 2,
  capabilities: [{
    browserName: 'firefox'
  }],
  debug: false,
  execArgv: null,
  sync: false,
  logLevel: 'verbose',
  coloredLogs: true,
  bail: 0,
  screenshotPath: 'shots',
  baseUrl: 'http://localhost:8080',
  waitforTimeout: 1000,
  // framework: 'mocha',
  reporters: ['dot', 'allure', 'junit'],
  reporterOptions: {
    outputDir: './'
  },
  // mochaOpts: {
  //   ui: 'bdd'
  // },
  // jasmineNodeOpts: {
  //   defaultTimeoutInterval: 5000,
  //   expectationResultHandler: function(passed, assertion) {
  //     // do something
  //   }
  // },
  //
  // If you are using Cucumber you need to specify where your step definitions are located.
  // See also: https://github.com/webdriverio/wdio-cucumber-framework#cucumberopts-options
  // cucumberOpts: {
  //   require: [],        // <string[]> (file/dir) require files before executing features
  //   backtrace: false,   // <boolean> show full backtrace for errors
  //   compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  //   dryRun: false,      // <boolean> invoke formatters without executing steps
  //   failFast: false,    // <boolean> abort the run on first failure
  //   format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
  //   colors: true,       // <boolean> disable colors in formatter output
  //   snippets: true,     // <boolean> hide step definition snippets for pending steps
  //   source: true,       // <boolean> hide source URIs
  //   profile: [],        // <string[]> (name) specify the profile to use
  //   strict: false,      // <boolean> fail if there are any undefined or pending steps
  //   tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
  //   timeout: 20000,      // <number> timeout for step definitions
  //   ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
  // },
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides a several hooks you can use to interfere the test process in order to enhance
  // it and build services around it. You can either apply a single function to it or an array of
  // methods. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  //
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: function (config, capabilities) {
  },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  beforeSession: function (config, capabilities, specs) {
  },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before: function (capabilities, specs) {
  },
  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  beforeSuite: function (suite) {
  },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  beforeHook: function () {
  },
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  afterHook: function () {
  },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  beforeTest: function (test) {
  },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  beforeCommand: function (commandName, args) {
  },
  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  afterCommand: function (commandName, args, result, error) {
  },
  /**
   * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  afterTest: function (test) {
  },
  /**
   * Hook that gets executed after the suite has ended
   * @param {Object} suite suite details
   */
  afterSuite: function (suite) {
  },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  after: function (result, capabilities, specs) {
  },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  afterSession: function (config, capabilities, specs) {
  },
  /**
   * Gets executed after all workers got shut down and the process is about to exit.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onComplete: function (exitCode, config, capabilities) {
  },
  //
  // Cucumber specific hooks
  beforeFeature: function (feature) {
  },
  beforeScenario: function (scenario) {
  },
  beforeStep: function (step) {
  },
  afterStep: function (stepResult) {
  },
  afterScenario: function (scenario) {
  },
  afterFeature: function (feature) {
  }
};

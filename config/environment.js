/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dare-two',
    environment: environment,
    rootURL: '/',
    locationType: 'router-scroll',
    historySupportMiddleware: true,
    firebase: {
      apiKey: "AIzaSyBJ3H0GGe9ZIVnDQ-UaBT73Ln6gk8G-x3I",
      authDomain: "truthdare-4354a.firebaseapp.com",
      databaseURL: "https://truthdare-4354a.firebaseio.com",
      storageBucket: "truthdare-4354a.appspot.com",
      messagingSenderId: "5122499625"
    },
    torii: {
      sessionServiceName: 'session',
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.rootURL = '/';
    ENV.locationType= 'router-scroll';
    ENV.historySupportMiddleware= true;
  }

  return ENV;
};

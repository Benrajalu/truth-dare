/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var env = EmberApp.env();
var isProductionLikeBuild = ['production', 'staging'].indexOf(env) > -1;
var fontRepo = 'fonts';
var compression = 'expanded';

if(isProductionLikeBuild) {
  fontRepo = 'fonts';
}

var compassOptions = {
  fontsDir: fontRepo, 
  outputStyle: compression
}

module.exports = function(defaults, fontRepo) {
  var app = new EmberApp(defaults, {
    // Add options here
    compassOptions: compassOptions
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};

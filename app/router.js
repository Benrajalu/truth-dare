import Ember from 'ember';
import config from './config/environment';
import RouterScroll from 'ember-router-scroll';

const Router = Ember.Router.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.authenticatedRoute('index', { path: '/' });
  this.authenticatedRoute("fourohFour", { path: "/*path"});
  this.authenticatedRoute('listing');
  this.authenticatedRoute('new-card');
});

export default Router;

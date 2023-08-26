/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const _ = require('lodash');

const views = require('./routes-views.js').routesviews;
const restful = require('./routes-restful.js').routesrestful;
const redirects = {
  'get *': {
    controller: 'RootURLController',
    action: 'get',
  },
  'post *': {
    controller: 'RootURLController',
    action: 'methods',
  },
  'patch *': {
    controller: 'RootURLController',
    action: 'methods',
  },
  'delete *': {
    controller: 'RootURLController',
    action: 'methods',
  },
};

module.exports.routes = _.assign(redirects, views, restful);

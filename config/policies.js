/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  '*': [ 'passport', 'sessionAuth'],

  'security/grant-csrf-token': true,

  'RootURLController': {
    '*': true
  },

  'AuthController': {
    '*': true
  }
};

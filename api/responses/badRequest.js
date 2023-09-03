/**
 * badRequest.js
 *
 * A custom response that content-negotiates the current request to either:
 *  • serve an HTML error page about the specified token being invalid or expired
 *  • or send back 400 (Token Expired/Invalid) with no response body.
 *
 * Example usage:
 * ```
 *     return res.expired();
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       badToken: {
 *         description: 'Provided token was expired, invalid, or already used up.',
 *         responseType: 'expired'
 *       }
 *     }
 * ```
 */
module.exports = function expired() {

  var req = this.req;
  var res = this.res;

  sails.log.verbose('Ran custom response: res.badRequest()');

  if (req.wantsJSON) {
    return res.status(400).send('Sending 400 ("Bad Request") response');
  }
  else {
    return res.status(400).view('400');
  }

};

var request = require('request');

module.exports = {
  calculate: function(subtotal, state, done) {
    request.post({
      url: 'https://some-tax-service.com/request',
      method: 'post',
      json: {}
    }, function(error, response, body) {
      done(body);
    });
  }
};
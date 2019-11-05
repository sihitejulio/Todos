
const oauthServer = require('oauth2-server');
const Request = oauthServer.Request;
const Response = oauthServer.Response;
let oauth = new oauthServer({
    model: require('./models.js')
});

module.exports = function(options){
  let options = options || {};
  return function(req, res, next) {
    let request = new Request({
      headers: {authorization: req.headers.authorization},
      method: req.method,
      query: req.query,
      body: req.body
    });
    let response = new Response(res);

    oauth.authenticate(request, response,options)
      .then(function (token) {
        // Request is authorized.
        req.user = token
        next()
      })
      .catch(function (err) {
        // Request is not authorized.
        res.status(err.code || 500).json(err)
      });
  }
}
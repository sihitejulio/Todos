'use strict';
var config = require('./../../config')
var sqldb = require('./sqldb');

var Thing = sqldb.Thing;
var OAuthAccessToken = sqldb.OAuthAccessToken
var OAuthAuthorizationCode = sqldb.OAuthAuthorizationCode
var OAuthClient = sqldb.OAuthClient
var OAuthRefreshToken = sqldb.OAuthRefreshToken
var OAuthScope = sqldb.OAuthScope
var User = sqldb.User
//
//User.sync({force:config.seedDBForce}).then(function() {
//    return User.destroy({ where: {} });
//  })
//  .then(function() {
//    User.bulkCreate([{username:'admin',password:'admin'}])
//  })
//

OAuthClient.sync({ force: config.seedDBForce }).then(function () {
    return OAuthClient.destroy({ where: {} });
})
    .then(function () {
        OAuthClient.bulkCreate([{
            client_id: 'democlient',
            client_secret: 'democlientsecret',
            redirect_uri: 'http://localhost/cb'
        }])
    })
OAuthAccessToken.sync({ force: config.seedDBForce })
OAuthRefreshToken.sync({ force: config.seedDBForce })
OAuthAuthorizationCode.sync({ force: config.seedDBForce })


OAuthScope.sync({ force: config.seedDBForce }).then(function () {
    return OAuthScope.destroy({ where: {} });
}).then(function () {
    OAuthScope.bulkCreate([{ scope: 'profile' }])
})
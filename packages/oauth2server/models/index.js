'use strict';

const path = require('path');
const Sequelize = require('sequelize');
// const env = process.env.NODE_ENV;
const config = require(__dirname + '/config.json');

const db = {
    sequelize = new Sequelize(
        config.database, 
        config.username, 
        config.password, 
        Object.assign(
            {}, 
            config, {
                pool: {
                max: 5,
                idle: 30000,
                acquire: 60000,
            },
            operatorsAliases: false
        }))
};
// let sequelize;

db.OAuthAccessToken = sequelize.import('./oauth_access_token');
db.OAuthAuthorizationCode = sequelize.import('./oauth_authorization_code');
db.OAuthClient = sequelize.import('./oauth_client');
db.OAuthRefreshToken = sequelize.import('./oauth_refresh_token');
db.OAuthScope = sequelize.import('./oauth_scope');
db.User = sequelize.import('./user');
db.Thing = sequelize.import('./thing');

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;

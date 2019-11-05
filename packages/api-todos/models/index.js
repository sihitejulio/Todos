'use strict';
const Sequelize = require('sequelize');
const config = require('./../config/db_config/config.json');

process.env.TZ = 'Asia/Jakarta'
console.log(config)

var db = {};
var sequelize;

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
        operatorsAliases: false,
    })
);

db.Workspace = sequelize.import('./workspace');
db.Todo = sequelize.import('./todo');
db.TodoItem = sequelize.import('./todo_item');

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;
'use strict';
module.exports = (sequelize, DataTypes) => {
    const Thing = sequelize.define('Thing', {
        _id: {
            ype: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        info: DataTypes.STRING,
        active: DataTypes.BOOLEAN
    });

    return Thing;
};

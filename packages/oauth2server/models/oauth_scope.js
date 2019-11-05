'use strict';
module.exports = (sequelize, DataTypes) => {
      const OAuthScope = sequelize.define('OAuthScope', {
          id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
          },
          scope: DataTypes.TEXT,
          is_default: DataTypes.BOOLEAN
      }, {
          tableName: 'oauth_scopes',
          timestamps: false,
          underscored: true,
      });

      return OAuthScope;
};

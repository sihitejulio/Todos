'use strict';

module.exports = (sequelize, DataTypes) => {
    const Workspace = sequelize.define('Workspace', {
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
			primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: DataTypes.STRING(300),
        status:DataTypes.INTEGER(1),
        create_date:DataTypes.DATE,
        update_date:DataTypes.DATE
    }, {
        tableName: 'workspace',
        timestamps: false,
        underscored: true,
    });

    Workspace.associate =  function associate(models) {
        Workspace.hasMany(models.Todo, {
            foreignKey: 'id_workspace',
        });
    };

    return  Workspace;
}
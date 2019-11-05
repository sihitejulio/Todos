'use strict';

module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
			primaryKey: true,
            allowNull: false,
            unique: true
        },
        id_workspace:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        name: DataTypes.STRING(300),
        status:DataTypes.INTEGER(1),
        create_date:DataTypes.DATE,
        update_date:DataTypes.DATE
    }, {
        tableName: 'todo',
        timestamps: false,
        underscored: true,
    });

    Todo.associate = function associate(models) {
        Todo.belongsTo(models.Workspace, {
            foreignKey: 'id_workspace',
        });
    };

    return Todo;
}

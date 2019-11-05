'use strict';

module.exports = (sequelize, DataTypes) => {
    const TodoItem = sequelize.define('TodoItem', {
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
			primaryKey: true,
            allowNull: false,
            unique: true
        },
        id_todo:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        name: DataTypes.STRING(300),
        status:DataTypes.INTEGER(1),
        create_date:DataTypes.DATE,
        update_date:DataTypes.DATE
    }, {
        tableName: 'todo_item',
        timestamps: false,
        underscored: true,
    });

    TodoItem.associate = function associate(models) {
        TodoItem.belongsTo(models.Todo, {
            foreignKey: 'id_todo',
        });
    };
    return TodoItem;
}

// const { validationResult }  = require('express-validator');
const moment = require('moment');
var db = require('../models');
var Todo = db.Todo;
var TodoItem = db.TodoItem;

async function createTodo(req, res) {
    const {
        id_workspace,
        name
    } = req.body;

    let todo = {
        id_workspace:id_workspace,
        name: name,
        create_date: moment().format("YYYY-MM-DD HH:mm:ss"),
        update_date: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    await Todo.create(todo)
        .then(function (data) {
            res.status(200).json({
                status: true,
                data: todo,
                message: 'Add Success'
            })
        })
        .catch(function (err) {
            res.status(200).json({
                status: false,
                message: 'Add Failed'
            })
        })

}

async function getTodo(req, res) {
    let limit = 10;   // number of records per page
    let offset = 0;
    let numberPage = 1; // exmple

    await Todo.findAndCountAll()
        .then(async function (data) {
            let page = 1;
            if (numberPage > 1) {
                page = numberPage;
            }
            let countOfTodo= data.count;
            let pages = Math.ceil(countOfTodo / limit);
            offset = limit * (page - 1);

            await Todo.findAll({
                limit: limit,
                offset: offset,
                raw: true
            }).then(function (result) {
                if (result) {
                    res.status(200).json({
                        status: true,
                        data: result,
                        count: countOfTodo,
                        pages: pages
                    });
                } else {
                    res.status(200).json({
                        status: false,
                        message: "Data Empty"
                    });
                }
            }).catch(function (err) {
                res.status(500).json({
                    status: false,
                    message: 'Server error'
                })
            })
        })
}

async function getTodoById(req, res) {
    let id = req.params.id
    await Todo.findOne({
        raw:true,
        where: {
            id: id
        }
    }).then(async function (result) {
        let todosItem = await new Promise(function (resolve, reject) {
            TodoItem.findAll({
                where: {
                    id_todo: result.id
                }
            }).then(function (resultTodo) {
                resolve(resultTodo)
                console.log(resultTodo)
            }).catch(function (err) {
                console.log(err)
            })
        })
     
        if (result) {
            result.todos_item=todosItem;
            res.status(200).json({
                status: true,
                data: result,
            });
        } else {
            res.status(200).json({
                status: false,
                message: "Data not found"
            });
        }

        if (result) {
            res.status(200).json({
                status: true,
                data: result,
            });
        } else {
            res.status(200).json({
                status: false,
                message: "Data not found"
            });
        }

    }).catch(function (err) {
        res.status(500).json({
            status: false,
            message: 'Server error'
        })
    })
}

async function updateTodo(req, res) {
    let dataUdapte = req.body
    let id = req.params.id


    await Todo.update({
        ...dataUdapte
    },{
        where: {
            id: id
        }
    }).then(function (result) {
        if (result) {
            res.status(200).json({
                status: true,
                data: "Update data success"

            });
        } else {
            res.status(200).json({
                status: false,
                message: "Update data failed"
            });
        }
    }).catch(function (err) {
        res.status(500).json({
            status: false,
            message: 'Server error'
        })
    })
}

async function deleteTodo(req, res) {
    let id = req.params.id

    await Todo.destroy({
        where: {
            id: id
        }
    }).then(function (result) {
        if (result) {
            res.status(200).json({
                status: true,
                data: `Data id ${id} success deleted`

            });
        } else {
            res.status(200).json({
                status: false,
                message: "Data not found"
            });
        }
    }).catch(function (err) {
        res.status(500).json({
            status: false,
            message: 'Server error'
        })
    })
}

module.exports = {
    createTodo,
    getTodo,
    updateTodo,
    getTodoById,
    deleteTodo
}
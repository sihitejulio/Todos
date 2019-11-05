// const { validationResult }  = require('express-validator');
const moment = require('moment');
var db = require('../models');
var TodoItem = db.TodoItem;

async function createTodoItem(req, res) {
    const {
        id_todo,
        name
    } = req.body;

    let todoItem = {
        id_todo:id_todo,
        name: name,
        create_date: moment().format("YYYY-MM-DD HH:mm:ss"),
        update_date: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    await TodoItem.create(todoItem)
        .then(function (data) {
            res.status(200).json({
                status: true,
                data: todoItem,
                message: 'Add Success'
            })
        })
        .catch(function (err) {
            console.log(err)
            res.status(200).json({
                status: false,
                message: 'Add Failed'
            })
        })

}

async function getTodoItem(req, res) {
    let limit = 10;   // number of records per page
    let offset = 0;
    let numberPage = 1; // exmple

    await TodoItem.findAndCountAll()
        .then(async function (data) {
            let page = 1;
            if (numberPage > 1) {
                page = numberPage;
            }
            let countOfTodoItem= data.count;
            let pages = Math.ceil(countOfTodoItem / limit);
            offset = limit * (page - 1);

            await TodoItem.findAll({
                limit: limit,
                offset: offset,
                raw: true
            }).then(function (result) {
                if (result) {
                    res.status(200).json({
                        status: true,
                        data: result,
                        count: countOfTodoItem,
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

async function getTodoItemById(req, res) {
    let id = req.params.id
    await TodoItem.findOne({
        where: {
            id: id
        }
    }).then(function (result) {
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
        });
    })
}

async function updateTodoItem(req, res) {
    let dataUdapte = req.body
    let id = req.params.id


    await TodoItem.update({
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

async function deleteTodoItem(req, res) {
    let id = req.params.id

    await TodoItem.destroy({
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
    createTodoItem,
    getTodoItem,
    updateTodoItem,
    getTodoItemById,
    deleteTodoItem
}
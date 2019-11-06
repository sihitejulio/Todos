// const { validationResult }  = require('express-validator');
const moment = require('moment');
var db = require('../models');
var Workspace = db.Workspace;
var Todo = db.Todo;

async function createWorkspace(req, res) {
    const {
        name
    } = req.body;

    let workspace = {
        name: name,
        create_date: moment().format("YYYY-MM-DD HH:mm:ss"),
        update_date: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    await Workspace.create(workspace)
        .then(function (data) {
            res.status(200).json({
                status: true,
                data: workspace,
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

async function getWorkspace(req, res) {
    let limit = 10;   // number of records per page
    let offset = 0;
    let numberPage = 1; // exmple

    await Workspace.findAndCountAll({
        include: [{
            model: Todo,
        }]
    })
        .then(async function (data) {
            let page = 1;
            if (numberPage > 1) {
                page = numberPage;
            }
            let countOfWorkspace = data.count;
            let pages = Math.ceil(countOfWorkspace / limit);
            offset = limit * (page - 1);

            await Workspace.findAll({
                include: [{
                    model: Todo,
                }],
                limit: limit,
                offset: offset
                // raw: true
            }).then(function (result) {
                if (result) {
                    res.status(200).json({
                        status: true,
                        data: result,
                        count: countOfWorkspace,
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




async function getWorkspaceById(req, res) {
    let id = req.params.id

    await Workspace.findOne({
        raw: true,
        where: {
            id: id
        }
    }).then(async function (result) {
        let todos = await new Promise(function (resolve, reject) {
            Todo.findAll({
                // raw: true,
                where: {
                    id_workspace: result.id
                }
            }).then(function (resultTodo) {
                resolve(resultTodo)
                console.log(resultTodo)
            }).catch(function (err) {
                console.log(err)
            })
        })
     
        if (result) {
            result.todos=todos;
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
        console.log(err)
        res.status(500).json({
            status: false,
            message: 'Server error'
        })
    })
}

async function updateWorkspace(req, res) {
    let dataUdapte = req.body
    let id = req.params.id


    await Workspace.update({
        ...dataUdapte
    }, {
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

async function deleteWorkspace(req, res) {
    let id = req.params.id

    await Workspace.destroy({
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
    createWorkspace,
    getWorkspace,
    updateWorkspace,
    getWorkspaceById,
    deleteWorkspace
}
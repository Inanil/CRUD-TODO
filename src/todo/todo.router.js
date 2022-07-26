const router = require('express').Router()
const { Router } = require('express')
const httpTodo = require('./todo.http')


router.route('/todo')
    .get(httpTodo.getAll)
    .post(httpTodo.createTo)

router.route('/todo/:id')
    .get(httpTodo.getById)
    .put(httpTodo.updateById)
    .delete(httpTodo.deleteById)



module.exports = {
    router
}
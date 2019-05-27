
const express = require('express')

module.exports = function(server){
    
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //TODO Router
    const todoServece= require('../api/todo/todoService')
    todoServece.register(router, '/todo')    
    
}
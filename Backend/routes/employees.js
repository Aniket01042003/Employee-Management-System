const express = require('express');
const Router = express.Router();
const { getAll, create, getById, update, remove } = require('../controllers/employeeController');

Router.get('/', getAll);
Router.post('/',create);
Router.get('/:id',getById);
Router.put('/:id',update);
Router.delete('/:id',remove);

module.exports = Router;



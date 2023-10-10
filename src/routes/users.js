//imports
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

//obtener users
router.get('/', usersController.getAllUsers);

//crear user
router.post('/', usersController.createUser);

module.exports = router;
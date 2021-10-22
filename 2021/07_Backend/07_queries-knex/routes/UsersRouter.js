const express = require('express');
const router = express.Router();
const { UsersController } = require('../controllers')

router.get('/', UsersController.getAllUsers);
router.post('/', UsersController.createUser);

module.exports = router;
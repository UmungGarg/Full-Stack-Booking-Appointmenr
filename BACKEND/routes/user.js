const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/add-user', userController.getAddUser);

router.post('/add-user', userController.postAddUser);

router.delete('/delete-user/:userId', userController.postDeleteUser)

module.exports = router;
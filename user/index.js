const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.post('/sign-up', UserController.signup);


module.exports = router;






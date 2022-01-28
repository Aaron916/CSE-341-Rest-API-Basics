const express = require('express');
const indexController = require('../controllers/index');

const router = express.Router();

router.get('/professional', indexController.getIndex);

module.exports = router;
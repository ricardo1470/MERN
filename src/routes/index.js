const express = require('express');
const router = express.Router();

const { getinit } = require('../controllers/init');

router.get('/', getinit);

module.exports = router;
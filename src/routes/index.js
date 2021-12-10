const express = require('express');
const router = express.Router();

const { getInit, getInitById ,postInit, putInit, deleteInit } = require('../controllers/init');

router.get('/api/task', getInit);

router.get('/api/task/:id', getInitById);

router.post('/api/task', postInit);

router.put('/api/task/:id', putInit);

router.delete('/api/task/:id', deleteInit);

module.exports = router;

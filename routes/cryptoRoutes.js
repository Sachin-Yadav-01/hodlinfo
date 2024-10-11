const express = require('express');
const { getStoredData } = require('../controllers/cryptoController');

const router = express.Router();

router.get('/', getStoredData);

module.exports = router;


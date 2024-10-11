const express = require('express');
const { getStoredData } = require('../controllers/cryptoController');

const router = express.Router();

// Route to get stored data
router.get('/', getStoredData);

module.exports = router;


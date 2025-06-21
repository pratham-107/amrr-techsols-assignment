// backend/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const { getItems, addItem, enquireItem } = require('../controllers/itemController');

router.get('/items', getItems);
router.post('/items', addItem);
router.post('/enquire', enquireItem);

module.exports = router;

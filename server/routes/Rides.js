const express = require('express');
const router = express.Router();

const { createride, getAllride, getOneride, updateride, deleteride } = require('../controllers/Rides');


router.post('/rides',  createride);
router.get('/rides', getAllride);
router.get('/rides/:id', getOneride);
router.put('/rides/:id',  updateride);
router.delete('/rides/:id' , deleteride);

module.exports = router;
const express = require('express');
const router = express.Router();
const { createDriver, getAllDrivers, getOneDriver, updateDriver, deleteDriver } = require('../controllers/Driver');


router.post('/drivers',  createDriver);
router.get('/drivers', getAllDrivers);
router.get('/drivers/:id', getOneDriver);
router.put('/drivers/:id',  updateDriver);
router.delete('/drivers/:id', deleteDriver);

module.exports = router;

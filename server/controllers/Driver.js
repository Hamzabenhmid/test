const driver = require('../database/models/Driver');

module.exports = {
  getAllDrivers: function(req, res) {
    driver.getAll((err, results) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  getOneDriver: function(req, res) {
    const driverId = req.params.id;
    driver.getOne(driverId, (err, results) => {
      if (err) res.status(500).send(err);
      else if (results.length === 0) res.status(404).json({ message: 'Driver not found' });
      else res.json(results[0]);
    });
  },

  createDriver: function(req, res) {
    const newDriver = {
      name: req.body.name,
      num: req.body.num,
      email: req.body.email,
      password: req.body.password
    };

    driver.add(newDriver, (err, results) => {
      if (err) res.status(500).send(err);
      else res.status(201).json({ message: 'Driver added successfully', id: results.insertId });
    });
  },

  deleteDriver: function(req, res) {
    const driverId = req.params.id;
    driver.delete(driverId, (err, results) => {
      if (err) res.status(500).send(err);
      else if (results.affectedRows === 0) res.status(404).json({ message: 'Driver not found' });
      else res.status(200).json({ message: 'Driver deleted successfully' });
    });
  },

  updateDriver: function(req, res) {
    const driverId = req.params.id;
    const updatedDriver = {
      name: req.body.name,
      num: req.body.num,
      email: req.body.email,
      password: req.body.password
    };

    driver.update(driverId, updatedDriver, (err, results) => {
      if (err) res.status(500).send(err);
      else if (results.affectedRows === 0) res.status(404).json({ message: 'Driver not found' });
      else res.status(200).json({ message: 'Driver updated successfully' });
    });
  }
};

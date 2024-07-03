const user = require('../database/models/User');

module.exports = {
  getAllusers: function(req, res) {
    user.getAll((err, results) => {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  getOneuser: function(req, res) {
    const userId = req.params.id;
    user.getOne(userId, (err, results) => {
      if (err) res.status(500).send(err);
      else if (results.length === 0) res.status(404).json({ message: 'user not found' });
      else res.json(results[0]);
    });
  },

  createuser: function(req, res) {
    const newuser = {
      name: req.body.name,
      num: req.body.num,
      email:req.body.email,
      password:req.body.password
    };

    user.add(newuser, (err, results) => {
      if (err) res.status(500).send(err);
      else res.status(201).json({ message: 'user added successfully', id: results.insertId });
    });
  },

  deleteuser: function(req, res) {
    const userId = req.params.id;
    user.delete(userId, (err, results) => {
      if (err) res.status(500).send(err);
      else if (results.affectedRows === 0) res.status(404).json({ message: 'user not found' });
      else res.status(200).json({ message: 'user deleted successfully' });
    });
  },

  updateuser: function(req, res) {
    const userId = req.params.id;
    const updateduser = {
      name: req.body.name,
      num: req.body.num,
      email:req.body.email,
      password:req.body.password
    };

    user.update(userId, updateduser, (err, results) => {
      if (err) res.status(500).send(err);
      else if (results.affectedRows === 0) res.status(404).json({ message: 'user not found' });
      else res.status(200).json({ message: 'user updated successfully' });
    });
  }
};

const conn = require('../index');

module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM driver';
    conn.query(sql, (error, results) => {
      callback(error, results);
    });
  },

  getOne: function(id, callback) {
    const sql = 'SELECT * FROM driver WHERE iddriver = ?';
    conn.query(sql, [id], (error, results) => {
      callback(error, results);
    });
  },

  add: function(driver, callback) {
    const sql = 'INSERT INTO driver (name, num, email, password) VALUES (?, ?, ?, ?)';
    const values = [driver.name, driver.num, driver.email, driver.password];
    conn.query(sql, values, (error, results) => {
      callback(error, results);
    });
  },

  delete: function(id, callback) {
    const sql = 'DELETE FROM driver WHERE iddriver = ?';
    conn.query(sql, [id], (error, results) => {
      callback(error, results);
    });
  },

  update: function(id, driver, callback) {
    const sql = 'UPDATE driver SET name = ?, num = ?, email = ?, password = ? WHERE iddriver = ?';
    const values = [driver.name, driver.num, driver.email, driver.password, id];
    conn.query(sql, values, (error, results) => {
      callback(error, results);
    });
  }
};

// Import the database connection
const conn = require("../index");

module.exports = {
    // A function which fetches all the rides
    getAll: function (callback) {
        const sql = 'SELECT * FROM `rides`';
        conn.query(sql, function (error, results, fields) {
            callback(error, results);
        });
    },
    // A function that retrieves one ride record based on the provided id.
    getOne: function (id, callback) {
        const sql = 'SELECT * FROM `rides` WHERE idrides = ?';
        conn.query(sql, [id], function (error, results, fields) {
            callback(error, results);
        });
    },
    // A function that can be used to insert a ride into the database
    add: function (ride, callback) {
        const sql = 'INSERT INTO `rides` (departure, destination, date, availableSeats) VALUES (?,  ?, ?, ?)';
        const values = [ride.departure, ride.destination, ride.date, ride.availableSeats];
        conn.query(sql, values, function (error, results, fields) {
            callback(error, results);
        });
    },
    // A function that deletes a ride from the database based on the provided id.
    delete: function (id, callback) {
        const sql = 'DELETE FROM `rides` WHERE idrides = ?';
        conn.query(sql, [id], function (error, results, fields) {
            callback(error, results);
        });
    },
    // A function that updates a ride in the database based on the provided id.
    update: function (id, ride, callback) {
        const sql = 'UPDATE `rides` SET departure = ?, destination = ?, date = ?, availableSeats = ?  WHERE idrides = ?';
        const values = [ride.departure, ride.destination, ride.date, ride.availableSeats,  id];
        conn.query(sql, values, function (error, results, fields) {
            callback(error, results);
        });
    }
};

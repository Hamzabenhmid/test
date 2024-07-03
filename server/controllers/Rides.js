// Controller related to rides resource.
const ride = require("../database/models/Rides");

// Complete the request handlers with models interaction after importing them from the database folder
module.exports = {
    // Method to fetch all rides from the database.
    getAllride: function(req, res) {
        ride.getAll(function(err, results) {
            if (err) res.status(500).send(err);
            else res.json(results);
        });
    },
    // Method to get one ride by id.
    getOneride: function (req, res) {
        const rideId = req.params.id;
    
        ride.getOne(rideId, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.length === 0) {
                res.status(404).json({ message: 'Ride not found' });
            } else {
                res.json(results[0]);
            }
        });
    },
    // Method to add a ride to the database via the respective model function.
    createride: function (req, res) {
        const newride = {
            departure: req.body.departure,
            destination: req.body.destination,
            date: req.body.date,
            availableSeats: req.body.availableSeats,
            driver_iddriver: req.body.driver_iddriver // Ensure this is provided
        };
        
        ride.add(newride, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).json({ message: 'Ride added successfully', id: results.insertId });
            }
        });
    },
    // Method to delete a ride from the database.
    deleteride: function(req, res) {
        const rideId = req.params.id; // Extract ID from request parameters
        
        // Call the delete method from the model, passing the rideId
        ride.delete(rideId, function(err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Ride not found' });
            } else {
                res.status(200).json({ message: 'Ride deleted successfully' });
            }
        });
    },
    // Method to update a ride in the database.
    updateride: function (req, res) {
        const rideId = req.params.id;
        const updatedride = {
            departure: req.body.departure,
            destination: req.body.destination,
            date: req.body.date,
            availableSeats: req.body.availableSeats
        };
    
        ride.update(rideId, updatedride, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Ride not found' });
            } else {
                res.status(200).json({ message: 'Ride updated successfully' });
            }
        });
    }
};

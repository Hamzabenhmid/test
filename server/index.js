const express = require('express');
const app = express();
const db = require("./database/index");
const cors = require("cors");

// Setting the port and listening for connections
const port = 3000;

// Require application Route modules
const driverRoute = require('./routes/Driver');
const rideRoute = require('./routes/Rides');

// Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add Routes to the middleware handling path, specifying the respective URL path
app.use('/api', driverRoute);
app.use('/api', rideRoute);



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

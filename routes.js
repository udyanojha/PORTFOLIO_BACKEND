const express = require('express');
const UserRoutes = require('./user');

const route = express.Router();

route.use('/user', UserRoutes);




// Exporting the route
module.exports = route;
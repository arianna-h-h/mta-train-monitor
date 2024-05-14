const express = require('express');
const router = express.Router();
const expressListEndpoints = require('express-list-endpoints');


// Import route file
const trainRoutes = require('./trainRoutes');

// // Mount route file onto the Express app
router.use('/train', trainRoutes);
// // Can also mount auth routes here

const endpoints = expressListEndpoints(router);
console.log(endpoints)


module.exports = router;
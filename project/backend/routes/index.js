const express = require('express');
const router = express.Router();
const expressListEndpoints = require('express-list-endpoints');

// Import train routes file
const trainRoutes = require('./trainRoutes');

// Mount route file onto the Express app
router.use('/train', trainRoutes);
// Can also mount auth routes or other routes here

// Used for debugging
const endpoints = expressListEndpoints(router);
console.log('train routes', endpoints);

module.exports = router;
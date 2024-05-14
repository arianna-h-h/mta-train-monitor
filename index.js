const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./project/backend/routes'); // Import train routes
const expressListEndpoints = require('express-list-endpoints');

// Create an Express app
const app = express();

// Parse JSON request bodies
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Mount routes onto the Express app
app.use('/api', routes);

// Define a default route
app.get('/', (req, res) => {
    res.send('Welcome to the Train Application!');
});

const endpoints = expressListEndpoints(app);
console.log('main index', endpoints)
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

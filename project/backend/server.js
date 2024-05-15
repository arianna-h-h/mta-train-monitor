require('dotenv').config();

const express = require('express');
const cors = require('cors');

const routes = require('./routes'); // Import routes

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
})); // Use cors to allow cross 

// Mount routes onto the Express app
app.use('/api', routes);

// Define a default route used for initial debugging
app.get('/', (req, res) => {
    res.send('Welcome to the Train Application!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

// Route for getting train arrival data
// Could add other routes here for getting the station info, etc
router.get('/arrival', trainController.getTrainArrivalData);

module.exports = router;
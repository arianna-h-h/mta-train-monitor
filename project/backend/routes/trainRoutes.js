const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

console.log("--------------")
// Route for getting train arrival data
router.get('/arrival', trainController.getTrainArrivalData);

module.exports = router;
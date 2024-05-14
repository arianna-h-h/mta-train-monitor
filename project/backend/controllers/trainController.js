const axios = require('axios');
const { WMATA_API_KEY } = process.env; // Load WMATA API key from environment variables

// Controller function to handle train arrival data request
exports.getTrainArrivalData = async (req, res) => {
    try {
        // Get station code from request query parameters
        // API also takes an array of station codes.
        const { stationCode } = req.query;
        
        // Make a GET request to WMATA API to fetch train arrival data
        // Should store URL in an env variable
        const response = await axios.get(`https://api.wmata.com/StationPrediction.svc/json/GetPrediction/${stationCode}?api_key=${WMATA_API_KEY}`);
        
        // Get relevant train arrival data from the response
        // Only some of these fields are displayed for now
        const trainArrivals = response.data.Trains.map(train => ({
            arrivalTime: train.Min,
            destination: train.DestinationName,
            destinationCode: train.DestinationCode,
            line: train.Line,
            track: train.Group,
            stationCode: train.LocationCode
        }));

        // Send the train arrival data as JSON response
        res.status(200).json(trainArrivals);
    } catch (error) {
        // Handle errors - can customize
        console.error('Error fetching train arrival data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
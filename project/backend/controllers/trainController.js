const axios = require('axios'); // Import axios for making HTTP requests
const { WMATA_API_KEY } = process.env; // Load WMATA API key from environment variables

// Controller function to handle train arrival data request
exports.getTrainArrivalData = async (req, res) => {
    try {
        // Get station code from request query parameters
        const { stationCode } = req.query;
        
        // Make a GET request to WMATA API to fetch train arrival data
        // Could also store URL in an env variable
        const response = await axios.get(`https://api.wmata.com/StationPrediction.svc/json/GetPrediction/${stationCode}?api_key=${WMATA_API_KEY}`);
        
        // Get relevant train arrival data from the response
        const trainArrivals = response.data.Trains.map(train => ({
            arrivalTime: train.Min,
            destination: train.DestinationName,
            destinationCode: train.DestinationCode,
            line: train.Line,
            track: train.Group,
        }));
        
        // Send the train arrival data as JSON response
        res.status(200).json(trainArrivals);
    } catch (error) {
        // Handle errors
        console.error('Error fetching train arrival data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
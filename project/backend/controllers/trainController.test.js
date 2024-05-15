const axios = require('axios');
const { getTrainArrivalData } = require('./trainController');

// Mocking GET function
jest.mock('axios');

describe('getTrainArrivalData', () => {
    it('should return train arrival data for a given station code', async () => {
        // Mock with fake response data
        // Check that response data is equal to mocked
    });

    it('should handle errors and return 500 status code', async () => {
        // Mock axios.get implementation to throw an error
        axios.get.mockRejectedValue(new Error('Network Error'));

        // Mock request and response
        const req = { query: { stationCode: 'A01' } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        // Call the controller
        await getTrainArrivalData(req, res);

        // Expectations
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error' });
    });
});

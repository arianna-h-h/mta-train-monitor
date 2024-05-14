const axios = require('axios');
const { getTrainArrivalData } = require('./trainController');

// Mocking GET function
// This could also be done with a stub.
jest.mock('axios');

describe('getTrainArrivalData', () => {
    it('should return train arrival data for a given station code', async () => {
        // Mocked response data
        const mockResponse = {
            data: {
                Trains: [
                    { DestinationName: 'White House', Line: 'Red', Min: '5', Group: '1', DestinationCode: 'W01' },
                    { DestinationName: 'Pentagon', Line: 'Blue', Min: '10', Group: '2', DestinationCode: 'P01' }
                ]
            }
        };

        // Mock axios.get implementation
        axios.get.mockResolvedValue(mockResponse);

        // Mock request and response objects
        const req = { query: { stationCode: 'P01' } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        // Call the controller function
        await getTrainArrivalData(req, res);

        // Expectations
        expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('P01'));
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([
            { destination: 'White House', line: 'Red', arrivalTime: '5', track: '1', destinationCode: 'W01' },
            { destination: 'Pentagon', line: 'Blue', arrivalTime: '10', track: '2', destinationCode: 'P01' }
        ]);
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

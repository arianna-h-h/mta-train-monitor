const request = require('supertest');
const express = require('express');
const trainRoutes = require('../routes/trainRoutes'); // Import trainRoutes
const trainController = require('../controllers/trainController');
const app = require('../server')

describe('Train Routes', () => {
//   it('should respond with train arrival data for GET /arrival', async () => {
//     // Make the request
//     const response = await request(app).get('/api/train/arrival');

//     // Assertions
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(mockTrainArrivalData);
//   });
});
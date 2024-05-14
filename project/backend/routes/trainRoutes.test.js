const request = require('supertest');
const express = require('express');
const trainRoutes = require('../routes/trainRoutes');

const app = express();
app.use(trainRoutes);

describe('Train Routes', () => {
    it('should respond with train arrival data for GET /train/arrival', async () => {
        const response = await request(app).get('/train/arrival');
        expect(response.status).toBe(200);
    });
});
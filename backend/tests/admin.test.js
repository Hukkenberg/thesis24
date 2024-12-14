const request = require('supertest');
const app = require('../app');

describe('Admin API', () => {
  it('should fetch all patients', async () => {
    const res = await request(app).get('/api/admin/patients');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('patients');
  });
});

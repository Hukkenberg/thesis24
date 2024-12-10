const request = require('supertest');
const app = require('../../src/app');

describe('PatientRoutes', () => {
  it('should fetch patients endpoint', async () => {
    const response = await request(app)
      .get('/patient')
      .set('Authorization', 'Bearer validtoken');
    
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

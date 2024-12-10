const request = require('supertest');
const app = require('../../src/app');

describe('DoctorController', () => {
  it('should fetch patients for a doctor', async () => {
    const response = await request(app)
      .get('/doctor/patients')
      .set('Authorization', 'Bearer validtoken');
    
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

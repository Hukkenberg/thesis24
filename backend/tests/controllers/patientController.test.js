const request = require('supertest');
const app = require('../../src/app');

describe('PatientController', () => {
  it('should fetch all patients', async () => {
    const response = await request(app)
      .get('/patient')
      .set('Authorization', 'Bearer validtoken');
    
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should create a new patient', async () => {
    const response = await request(app)
      .post('/patient')
      .set('Authorization', 'Bearer validtoken')
      .send({ name: 'John Doe', age: 30, gender: 'male', doctorId: '12345' });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});

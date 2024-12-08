const request = require('supertest');
const app = require('../../src/app');
const jwt = require('jsonwebtoken');

describe('Patient Routes', () => {
  const token = jwt.sign({ id: 1, role: 'patient' }, process.env.JWT_SECRET);

  it('should fetch patient profile', async () => {
    const response = await request(app)
      .get('/patients/profile')
      .set('Authorization', token);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
  });

  it('should update patient profile', async () => {
    const response = await request(app)
      .put('/patients/profile')
      .set('Authorization', token)
      .send({ name: 'Updated Name', age: 30 });
    expect(response.status).toBe(200);
  });
});

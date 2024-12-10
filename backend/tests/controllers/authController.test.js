const request = require('supertest');
const app = require('../../src/app');
const jwt = require('jsonwebtoken');

describe('AuthController', () => {
  it('should log in a user and return a token', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ username: 'testuser', password: 'testpass' });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should return 401 for invalid credentials', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ username: 'wronguser', password: 'wrongpass' });
    
    expect(response.status).toBe(401);
  });
});

const request = require('supertest');
const app = require('../../src/app');

describe('AuthRoutes', () => {
  it('should handle login endpoint', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ username: 'testuser', password: 'testpass' });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});

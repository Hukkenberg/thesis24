const request = require('supertest');
const app = require('../../src/app');

describe('Auth Controller', () => {
  it('should login successfully with valid credentials', async () => {
    const response = await request(app).post('/auth/login').send({
      username: 'testuser',
      password: 'password123'
    });
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it('should fail login with invalid credentials', async () => {
    const response = await request(app).post('/auth/login').send({
      username: 'testuser',
      password: 'wrongpassword'
    });
    expect(response.status).toBe(401);
  });

  it('should register a new user successfully', async () => {
    const response = await request(app).post('/auth/register').send({
      username: 'newuser',
      password: 'newpassword123',
      role: 'patient'
    });
    expect(response.status).toBe(201);
  });
});

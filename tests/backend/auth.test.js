
const request = require('supertest');
const app = require('../../src/app');

describe('Auth API Tests', () => {
    it('should log in successfully with valid credentials', async () => {
        const response = await request(app).post('/auth/login').send({
            username: 'admin',
            password: 'adminpassword',
        });
        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();
    });

    it('should fail to log in with invalid credentials', async () => {
        const response = await request(app).post('/auth/login').send({
            username: 'admin',
            password: 'wrongpassword',
        });
        expect(response.status).toBe(401);
    });
});

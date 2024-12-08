const pool = require('../../src/config/db');

describe('Database Utilities', () => {
  afterAll(() => {
    pool.end();
  });

  it('should connect to the database', async () => {
    const res = await pool.query('SELECT NOW()');
    expect(res.rows).toBeDefined();
  });

  it('should insert and fetch data correctly', async () => {
    await pool.query("INSERT INTO users (username, password, role) VALUES ('testuser', 'password', 'patient')");
    const res = await pool.query("SELECT * FROM users WHERE username = 'testuser'");
    expect(res.rows.length).toBe(1);
    expect(res.rows[0].username).toBe('testuser');
  });
});

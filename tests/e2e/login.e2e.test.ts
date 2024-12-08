
import { test, expect } from '@playwright/test';

test('Login functionality', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[placeholder="Username"]', 'admin');
    await page.fill('input[placeholder="Password"]', 'adminpassword');
    await page.click('button');
    expect(page.url()).toContain('/dashboard');
});

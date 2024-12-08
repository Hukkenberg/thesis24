
-- Migration: Add email to users
ALTER TABLE users ADD COLUMN email VARCHAR(255);

INSERT INTO users (name, email, password, role, created_at, updated_at)
VALUES
    ('Admin', 'admin@example.com', '$2a$10$eW5w5/j8h9uhXc8dPpu5DeK3uXHFTNvh7sNuWbN3t8eTr2k.jShFu', 'admin', NOW(), NOW()),
    ('Doctor', 'doctor_user@example.com', '$2a$10$dOZ7RbvKP45OfHlpF2eLsOTTT8wOiM8rHJX4LY/69BJ6fh7XZ8hOe', 'doctor', NOW(), NOW()),
    ('Patient One', 'patient_one@example.com', '$2a$10$4Fs1MvjS7DNWAlOHup5bUuZTc1YY8UvrNyz89vRmiIjlWpqUqpkxC', 'patient', NOW(), NOW()),
    ('Patient Two', 'patient_two@example.com', '$2a$10$4Fs1MvjS7DNWAlOHup5bUuZTc1YY8UvrNyz89vRmiIjlWpqUqpkxC', 'patient', NOW(), NOW()),
    ('Patient Three', 'patient_three@example.com', '$2a$10$4Fs1MvjS7DNWAlOHup5bUuZTc1YY8UvrNyz89vRmiIjlWpqUqpkxC', 'patient', NOW(), NOW()),
    ('Lab', 'lab_user@example.com', '$2a$10$CxBy3Io8FHscTpuI7lgHROjc/2S89fIZbsUVG5I42tSxCSG5owpWa', 'lab', NOW(), NOW());

INSERT INTO users (name, email, password, role, created_at, updated_at)
VALUES
  ('Admin User', 'admin@example.com', crypt('admin_password', gen_salt('bf')), 'admin', NOW(), NOW()),
  ('Doctor User', 'doctor@example.com', crypt('doctor_password', gen_salt('bf')), 'doctor', NOW(), NOW()),
  ('Lab User', 'lab@example.com', crypt('lab_password', gen_salt('bf')), 'lab', NOW(), NOW()),
  ('Patient User', 'patient@example.com', crypt('patient_password', gen_salt('bf')), 'patient', NOW(), NOW());

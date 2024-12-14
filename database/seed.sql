INSERT INTO users (name, email, password, role) VALUES
('Admin User', 'admin@example.com', 'hashedpassword', 'admin'),
('Doctor User', 'doctor@example.com', 'hashedpassword', 'doctor'),
('Lab User', 'lab@example.com', 'hashedpassword', 'lab_technician'),
('Patient User', 'patient@example.com', 'hashedpassword', 'patient');

INSERT INTO patients (user_id, age, gender, address, medical_history) VALUES
(4, 30, 'male', '123 Street, City', 'No prior history');

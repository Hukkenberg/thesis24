
INSERT INTO Users (name, email, password, role) VALUES
('Admin User', 'admin@example.com', 'hashedpassword123', 'admin'),
('Doctor One', 'doctor1@example.com', 'hashedpassword123', 'doctor'),
('Patient One', 'patient1@example.com', 'hashedpassword123', 'patient');

INSERT INTO Doctors (user_id, specialization) VALUES
(2, 'Cardiologist');

INSERT INTO Patients (user_id, medical_history) VALUES
(3, 'Diabetes, Hypertension');

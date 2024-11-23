
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'patient',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Patients (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id),
    medical_history TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Doctors (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id),
    specialization VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Appointments (
    id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES Patients(id),
    doctor_id INT REFERENCES Doctors(id),
    date TIMESTAMP NOT NULL,
    status VARCHAR(50) DEFAULT 'scheduled',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

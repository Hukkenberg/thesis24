DROP TABLE IF EXISTS prescriptions CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS lab_results CASCADE;
DROP TABLE IF EXISTS doctors CASCADE;
DROP TABLE IF EXISTS patients CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) CHECK (role IN ('admin', 'doctor', 'lab', 'patient')) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TABLE patients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(50) CHECK (gender IN ('male', 'female', 'other')) NOT NULL,
    diagnosis TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON patients
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TABLE doctors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    specialization VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON doctors
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TABLE lab_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID REFERENCES patients(id) ON DELETE CASCADE NOT NULL,
    test_type VARCHAR(255) NOT NULL,
    result TEXT,
    status VARCHAR(50) CHECK (status IN ('pending', 'completed', 'requested')) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON lab_results
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID REFERENCES patients(id) ON DELETE CASCADE NOT NULL,
    doctor_id UUID REFERENCES doctors(id) ON DELETE CASCADE NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    status VARCHAR(50) CHECK (status IN ('scheduled', 'completed', 'canceled')) DEFAULT 'scheduled',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON appointments
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TABLE prescriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_id UUID REFERENCES patients(id) ON DELETE CASCADE NOT NULL,
    doctor_id UUID REFERENCES doctors(id) ON DELETE CASCADE NOT NULL,
    medications TEXT NOT NULL,
    notes TEXT,
    status VARCHAR(50) CHECK (status IN ('active', 'completed', 'canceled')) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON prescriptions
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

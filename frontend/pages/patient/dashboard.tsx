import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Patient {
  personalInfo: string;
  clinicalInfo: string;
}

const PatientDashboard: React.FC = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [formData, setFormData] = useState<Patient>({
    personalInfo: '',
    clinicalInfo: '',
  });

  useEffect(() => {
    axios
      .get('/api/patient/123') // Replace with dynamic patient ID
      .then((response) => {
        setPatient(response.data);
        setFormData({
          personalInfo: response.data.personalInfo,
          clinicalInfo: response.data.clinicalInfo,
        });
      })
      .catch((error) => console.error('Error fetching patient data:', error));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    axios
      .put('/api/patient/update', { patientId: 123, ...formData }) // Replace with dynamic patient ID
      .then(() => alert('Information updated successfully'))
      .catch((error) => console.error('Error updating patient information:', error));
  };

  return (
    <div>
      <h1>Patient Dashboard</h1>
      {patient ? (
        <form>
          <div>
            <label>Personal Info:</label>
            <textarea
              name="personalInfo"
              value={formData.personalInfo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Clinical Info:</label>
            <textarea
              name="clinicalInfo"
              value={formData.clinicalInfo}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" onClick={handleSave}>Save</button>
          <button type="button" onClick={() => setFormData(patient)}>Cancel</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PatientDashboard;

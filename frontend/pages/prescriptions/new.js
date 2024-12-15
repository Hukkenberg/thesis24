import { useState } from 'react';
import axios from 'axios';

export default function NewPrescription() {
  const [medicineList, setMedicineList] = useState('');
  const [notes, setNotes] = useState('');

  const handleCreatePrescription = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}$1`,
        { medicineList, notes },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Prescription created successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to create prescription');
    }
  };

  return (
    <form onSubmit={handleCreatePrescription}>
      <h1>New Prescription</h1>
      <textarea
        placeholder="Medicine List"
        value={medicineList}
        onChange={(e) => setMedicineList(e.target.value)}
        required
      />
      <textarea
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Create Prescription</button>
    </form>
  );
}

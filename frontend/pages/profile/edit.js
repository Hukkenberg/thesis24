import { useState } from 'react';
import axios from 'axios';

export default function EditProfile() {
  const [formData, setFormData] = useState({ name: '', email: '', age: '', gender: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/patients/profile', formData);
      alert('Profile updated successfully');
    } catch (error) {
      alert('Error updating profile');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
      <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder="Age" />
      <select name="gender" value={formData.gender} onChange={handleInputChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
}

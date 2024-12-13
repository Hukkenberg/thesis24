import axios from 'axios';

export async function createAppointment(patientId: string, doctorId: string, date: string) {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/appointments`, { patientId, doctorId, date });
  return response.data; // Sử dụng 'status', 'message', và 'data'
}

export async function getAppointments() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/appointments`);
  return response.data; // Sử dụng 'status', 'message', và 'data'
}

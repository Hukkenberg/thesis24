
import axios from 'axios';

export async function fetchDoctorAppointments(page = 1, limit = 10) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/doctors/appointments`,
    { params: { page, limit } }
  );
  return response.data;
}

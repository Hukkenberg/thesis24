
import axios from 'axios';

export async function fetchPatientAppointments(patientId, page = 1, limit = 10) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/patients/${patientId}/appointments`,
    { params: { page, limit } }
  );
  return response.data;
}

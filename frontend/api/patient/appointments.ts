import axios from 'axios';

export async function fetchPatientAppointments(
  patientId: string, // Định nghĩa kiểu dữ liệu là string
  page: number = 1,
  limit: number = 10
) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/patients/${patientId}/appointments`,
    { params: { page, limit } }
  );
  return response.data;
}

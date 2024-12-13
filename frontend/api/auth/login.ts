import axios from 'axios';

export async function login(email: string, password: string) {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });
  return response.data; // Trả về token và thông tin người dùng
}

// frontend/utils/api.ts
import axios from 'axios';

export const fetchData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const postData = async (url: string, data: any) => {
  const response = await axios.post(url, data);
  return response.data;
};

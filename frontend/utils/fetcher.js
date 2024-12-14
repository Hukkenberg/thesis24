import axios from 'axios';

const fetcher = async (url, options = {}) => {
  try {
    const response = await axios(url, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error(error.response?.data?.message || 'Có lỗi xảy ra!');
  }
};

export default fetcher;

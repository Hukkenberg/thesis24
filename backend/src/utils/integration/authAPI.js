import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Contains token and role
  } catch (error) {
    throw new Error(error.response.data.error || "Login failed");
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; // Contains success message or user details
  } catch (error) {
    throw new Error(error.response.data.error || "Registration failed");
  }
};
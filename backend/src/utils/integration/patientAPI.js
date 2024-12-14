import axios from "axios";

const API_URL = "http://localhost:5000/api/patients";

export const getAllPatients = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // List of patients
  } catch (error) {
    throw new Error(error.response.data.error || "Failed to fetch patients");
  }
};

export const getPatientById = async (id, token) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Patient details
  } catch (error) {
    throw new Error(error.response.data.error || "Failed to fetch patient details");
  }
};
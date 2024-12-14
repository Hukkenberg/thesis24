import axios from "axios";

const login = async (email, password) => {
  try {
    const response = await axios.post("/api/auth/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

const logout = async () => {
  try {
    await axios.post("/api/auth/logout");
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};

const getCurrentUser = async () => {
  try {
    const response = await axios.get("/api/auth/user");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    throw error;
  }
};

export { login, logout, getCurrentUser };
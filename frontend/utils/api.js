import axios from "axios";

const api = axios.create({
  baseURL: "https://thesis24.onrender.com", // Thay đường dẫn nếu cần
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export default api;

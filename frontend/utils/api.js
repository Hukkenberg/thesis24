import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Thay đường dẫn nếu cần
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export default api;

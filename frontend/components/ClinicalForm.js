import { useState } from "react";
import api from "../utils/api";

export default function ClinicalForm({ onRefresh }) {
  const [clinicalData, setClinicalData] = useState({ history: "", symptoms: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/patient/clinical", clinicalData);
    onRefresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cập nhật thông tin lâm sàng</h2>
      <textarea
        placeholder="Tiền sử bệnh"
        value={clinicalData.history}
        onChange={(e) => setClinicalData({ ...clinicalData, history: e.target.value })}
      />
      <textarea
        placeholder="Triệu chứng"
        value={clinicalData.symptoms}
        onChange={(e) => setClinicalData({ ...clinicalData, symptoms: e.target.value })}
      />
      <button type="submit">Lưu</button>
    </form>
  );
}

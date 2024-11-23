import { useState } from "react";
import api from "../utils/api";

export default function ProgressTracker({ onUpdate }) {
  const [progressData, setProgressData] = useState({ patientId: "", details: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/doctor/progress", progressData);
    onUpdate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cập nhật tiến triển</h2>
      <input
        type="text"
        placeholder="ID Bệnh nhân"
        value={progressData.patientId}
        onChange={(e) => setProgressData({ ...progressData, patientId: e.target.value })}
      />
      <textarea
        placeholder="Chi tiết tiến triển"
        value={progressData.details}
        onChange={(e) => setProgressData({ ...progressData, details: e.target.value })}
      />
      <button type="submit">Cập nhật</button>
    </form>
  );
}

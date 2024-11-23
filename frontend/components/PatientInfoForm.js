import { useState } from "react";
import api from "../utils/api";

export default function PatientInfoForm({ info, onRefresh }) {
  const [formData, setFormData] = useState(info);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put("/patient/info", formData);
    onRefresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cập nhật thông tin</h2>
      <input
        type="text"
        placeholder="Họ và tên"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      <input
        type="date"
        value={formData.dob}
        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
      />
      <input
        type="text"
        placeholder="Địa chỉ"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="Số điện thoại"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <button type="submit">Lưu</button>
    </form>
  );
}

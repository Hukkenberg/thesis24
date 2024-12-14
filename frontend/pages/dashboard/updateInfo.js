import { useState, useEffect } from 'react';

export default function UpdateInfo() {
  const [info, setInfo] = useState({
    age: '',
    gender: '',
    medical_history: '',
    symptoms: '',
  });

  useEffect(() => {
    async function fetchInfo() {
      const res = await fetch('/api/patient/info');
      const data = await res.json();
      setInfo(data);
    }
    fetchInfo();
  }, []);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/patient/info', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info),
    });
    if (res.ok) {
      alert('Cập nhật thông tin thành công!');
    } else {
      alert('Có lỗi xảy ra!');
    }
  };

  return (
    <div className="update-info">
      <h1>Cập nhật thông tin</h1>
      <form onSubmit={handleSubmit}>
        <label>Tuổi:</label>
        <input
          type="number"
          name="age"
          value={info.age}
          onChange={handleChange}
          required
        />
        <label>Giới tính:</label>
        <select name="gender" value={info.gender} onChange={handleChange}>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
          <option value="other">Khác</option>
        </select>
        <label>Tiền sử bệnh:</label>
        <textarea
          name="medical_history"
          value={info.medical_history}
          onChange={handleChange}
        />
        <label>Triệu chứng:</label>
        <textarea
          name="symptoms"
          value={info.symptoms}
          onChange={handleChange}
        />
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
}
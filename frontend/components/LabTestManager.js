export default function LabTestManager({ labTests, onRefresh }) {
  const handleUpdate = async (id, result, status) => {
    await api.put("/lab/tests", { id, result, status });
    onRefresh();
  };

  return (
    <div>
      <h2>Quản lý Xét Nghiệm</h2>
      <table>
        <thead>
          <tr>
            <th>Bệnh Nhân</th>
            <th>Loại Xét Nghiệm</th>
            <th>Kết Quả</th>
            <th>Trạng Thái</th>
          </tr>
        </thead>
        <tbody>
          {labTests.map((test) => (
            <tr key={test.id}>
              <td>{test.patientId}</td>
              <td>{test.testType}</td>
              <td>{test.result || "Chưa có"}</td>
              <td>
                <select
                  value={test.status}
                  onChange={(e) => handleUpdate(test.id, test.result, e.target.value)}
                >
                  <option value="pending">Chờ xử lý</option>
                  <option value="completed">Hoàn thành</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

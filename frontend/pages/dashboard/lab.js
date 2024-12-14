import { useState, useEffect } from 'react';
import Table from '../../components/Table';

export default function LabDashboard() {
  const [pendingTests, setPendingTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLabTests() {
      try {
        const res = await fetch('/api/lab/tests');
        const data = await res.json();
        setPendingTests(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching lab tests:', error);
      }
    }
    fetchLabTests();
  }, []);

  const handleUpdateResult = async (testId, result) => {
    try {
      const res = await fetch(`/api/lab/tests/${testId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ result }),
      });
      if (res.ok) {
        alert('Cập nhật kết quả xét nghiệm thành công!');
        setPendingTests((prev) =>
          prev.filter((test) => test.id !== testId)
        );
      } else {
        alert('Có lỗi xảy ra!');
      }
    } catch (error) {
      console.error('Error updating lab result:', error);
    }
  };

  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <div className="dashboard">
      <h1>Dashboard Nhân viên Xét nghiệm</h1>
      <section>
        <h2>Danh sách xét nghiệm chờ xử lý</h2>
        <Table
          data={pendingTests}
          renderActions={(test) => (
            <button
              onClick={() =>
                handleUpdateResult(test.id, prompt('Nhập kết quả:'))
              }
            >
              Cập nhật kết quả
            </button>
          )}
        />
      </section>
    </div>
  );
}
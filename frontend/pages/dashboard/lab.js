import { useEffect, useState } from "react";
import api from "../../utils/api";
import LabTestManager from "../../components/LabTestManager";

export default function LabDashboard() {
  const [labTests, setLabTests] = useState([]);

  useEffect(() => {
    fetchLabTests();
  }, []);

  const fetchLabTests = async () => {
    const { data } = await api.get("/lab/tests");
    setLabTests(data);
  };

  return (
    <div>
      <h1>Dashboard Nhân Viên Xét Nghiệm</h1>
      <LabTestManager labTests={labTests} onRefresh={fetchLabTests} />
    </div>
  );
}

import { useEffect, useState } from "react";
import api from "../../utils/api";
import PatientInfoForm from "../../components/PatientInfoForm";
import ClinicalForm from "../../components/ClinicalForm";
import ProgressView from "../../components/ProgressView";
import AppointmentView from "../../components/AppointmentView";

export default function PatientDashboard() {
  const [patientInfo, setPatientInfo] = useState({});
  const [progress, setProgress] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchPatientInfo();
    fetchProgress();
    fetchAppointments();
  }, []);

  const fetchPatientInfo = async () => {
    const { data } = await api.get("/patient/info");
    setPatientInfo(data);
  };

  const fetchProgress = async () => {
    const { data } = await api.get("/patient/progress");
    setProgress(data);
  };

  const fetchAppointments = async () => {
    const { data } = await api.get("/patient/appointments");
    setAppointments(data);
  };

  return (
    <div>
      <h1>Dashboard Bệnh Nhân</h1>
      <PatientInfoForm info={patientInfo} onRefresh={fetchPatientInfo} />
      <ClinicalForm onRefresh={fetchProgress} />
      <ProgressView progress={progress} />
      <AppointmentView appointments={appointments} />
    </div>
  );
}

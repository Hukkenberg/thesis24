import { useEffect, useState } from "react";
import api from "../../utils/api";
import DoctorPatientList from "../../components/DoctorPatientList";
import AppointmentManager from "../../components/AppointmentManager";
import ProgressTracker from "../../components/ProgressTracker";

export default function DoctorDashboard() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchPatients();
    fetchAppointments();
  }, []);

  const fetchPatients = async () => {
    const { data } = await api.get("/doctor/patients");
    setPatients(data);
  };

  const fetchAppointments = async () => {
    const { data } = await api.get("/doctor/appointments");
    setAppointments(data);
  };

  return (
    <div>
      <h1>Dashboard Bác Sĩ</h1>
      <DoctorPatientList patients={patients} />
      <AppointmentManager appointments={appointments} />
      <ProgressTracker onUpdate={fetchPatients} />
    </div>
  );
}

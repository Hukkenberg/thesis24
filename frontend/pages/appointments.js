
const Appointments = ({ role }) => {
  if (role === "patient") {
    return <h1>Your Appointments</h1>;
  }

  if (role === "doctor") {
    return <h1>All Appointments</h1>;
  }

  if (role === "admin_staff") {
    return <h1>Manage Appointments</h1>;
  }

  return <h1>Appointments</h1>;
};

export default Appointments;

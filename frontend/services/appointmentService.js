
export const fetchAppointments = async () => {
    const response = await fetch('/api/appointments');
    return response.json();
};

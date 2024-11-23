
export const fetchPatients = async () => {
    const response = await fetch('/api/patients');
    return response.json();
};

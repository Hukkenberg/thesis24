
export const fetchDoctors = async () => {
    const response = await fetch('/api/doctors');
    return response.json();
};

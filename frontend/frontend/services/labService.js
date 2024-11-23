
export const fetchLabTests = async () => {
    const response = await fetch('/api/labs');
    return response.json();
};

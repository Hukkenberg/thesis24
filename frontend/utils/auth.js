// Save token to localStorage
export const setToken = (token) => {
    localStorage.setItem('token', token);
};

// Retrieve token
export const getToken = () => {
    return localStorage.getItem('token');
};

// Check if user is authenticated
export const isAuthenticated = () => {
    return !!getToken();
};
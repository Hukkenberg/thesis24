export const isAuthenticated = () => !!localStorage.getItem('token');

export const saveToken = (token: string) => localStorage.setItem('token', token);

export const clearToken = () => localStorage.removeItem('token');

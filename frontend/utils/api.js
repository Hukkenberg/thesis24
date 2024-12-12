export const apiCall = async (endpoint, method = 'GET', body = null) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    console.log(`API Request: ${method} ${API_URL}${endpoint}`);
    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : null,
    });

    console.log(`Response for ${method} ${endpoint}:`, response);
    if (!response.ok) {
      const error = await response.json();
      console.error(`API Error (${response.status}):`, error);
      throw new Error(error.error || 'API request failed');
    }

    const data = await response.json();
    console.log(`Data from ${method} ${endpoint}:`, data);
    return data;
  } catch (err) {
    console.error('API Call Failed:', err.message);
    throw err;
  }
};

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function request(endpoint, options = {}) {

    const url = `${API_BASE_URL}/${endpoint}`;

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('API request failed:', error.message);
        throw error;
    }
}
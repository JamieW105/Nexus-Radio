import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const logCall = async (callData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/calls`, callData);
        return response.data;
    } catch (error) {
        console.error('Error logging call:', error);
        throw error;
    }
};

export const dispatchUnit = async (unitData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/dispatch`, unitData);
        return response.data;
    } catch (error) {
        console.error('Error dispatching unit:', error);
        throw error;
    }
};

export const getCallLogs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/calls`);
        return response.data;
    } catch (error) {
        console.error('Error fetching call logs:', error);
        throw error;
    }
};
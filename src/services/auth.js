import { apiClient } from './config';

export const apiSignup = async (payload) => {
    const response = await apiClient.post('/api/users/register', payload);
    
    return response;
};

export const apiLogin = async (payload) => {
    const response = await apiClient.post('/api/users/login', payload);
    
    const { token } = response.data; 

    localStorage.setItem('token', token);
    
    return response;
};
import { apiClient } from './config';


export const apiSignup = async (payload) => {
    return await apiClient.post("/api/users/register", payload);   
};

export const apiLogin = async ({ email, password, role }) => {
    return await apiClient.post('/api/users/login', {
        email,
        password,
        role
    });
};


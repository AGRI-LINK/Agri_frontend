import axios from 'axios';

export const apiSignup = async (payload) => {
    return await axios.post('/api/users/register', payload);
};

export const apiLogin = async ({ email, password, role }) => {
    return await axios.post('/api/users/login', {
        email,
        password,
        role
    });
};

export const apiGetProfile = async () => {
    return await axios.get('/api/users/profile');
};

export const apiUpdateProfile = async (payload) => {
    return await axios.put('/api/users/profile', payload);
};
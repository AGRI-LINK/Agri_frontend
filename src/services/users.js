import { apiClient } from "./config";

export const apiGetProfile = async () => {
    const token = localStorage.getItem('token');
    return await apiClient.get(`/api/users/profile/get`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}; 

export const apiUpdateProfile = async (payload) => {
    return await apiClient.patch(`/api/users/profile`, payload);
};


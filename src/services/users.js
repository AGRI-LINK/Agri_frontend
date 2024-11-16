import { apiClient } from "./config";

export const apiUpdateProfile = async (payload) => {
    return await apiClient.patch(`/api/users/profile`, payload);
}

export const apiGetProfile = async() => apiClient.get(`/api/users/profile/get`);

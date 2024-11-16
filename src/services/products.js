import { apiClient } from "./config";

export const apiAddproduct = async (payload) => {
    return await apiClient.post('/api/products/add', payload);
}
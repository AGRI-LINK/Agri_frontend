import { apiClient } from "./config";

export const apiAddproduct = async (payload) => {
    return await apiClient.post('/api/products/add', payload);
}

export const apiGetProducts = async () => {
     return await apiClient.get(`/api/products/list`)
    };

export const apiGetProductbyId = async (id) => {
    return await apiClient.get(`/api/products/get/${id}`)
};

export const apiUpdateProductbyId = async (payload) => {
    return await apiClient.patch(`/api/products/update/:id`, payload);
}
export const apiDeleteProductbyId = async (id) => {
    return await apiClient.delete(`/api/products/delete/:id${id}`);
}





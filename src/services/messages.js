import { apiClient } from "./config"

export const apiMessages = async(payload) => {
   const response = await apiClient.post(`/api/messages/send`, payload);

   return response;
};


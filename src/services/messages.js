import { apiClient } from "./config"

export const apiMessages = async(payload) => {
   const response = await apiClient.post(`/api/messages/send`, payload);

   return response;
};

export const apiGetInbox = async () => {
   return await apiClient.get(`/api/messages/inbox`)
};


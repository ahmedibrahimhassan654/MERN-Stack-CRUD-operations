import axios from "axios";

const baseUrl = "http://localhost:4000/";

const api = {
  postMessage(url = baseUrl + "postmessages/") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  },
};
export default api;

import axiosClient from './axiosClient';

const userApi = {
  getAll: (params) => {
    const url = 'users';
    axiosClient.get(url, { params });
  },
  getById: (id) => {
    const url = `users/${id}`;
    axiosClient.get(url);
  },
  create: (data) => {
    const url = 'users';
    axiosClient.post(url, data);
  },
  update: (id, data) => {
    const url = `users/${id}`;
    axiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `users/${id}`;
    axiosClient.delete(url);
  },
};
export default userApi;

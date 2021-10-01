import axiosClient from './axiosClient';

const todoApi = {
  getAll: (params) => {
    const url = 'todos';
    axiosClient.get(url, { params });
  },
  getById: (id) => {
    const url = `todos/${id}`;
    axiosClient.get(url);
  },
  create: (data) => {
    const url = 'todos';
    axiosClient.post(url, data);
  },
  update: (id, data) => {
    const url = `todos/${id}`;
    axiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `todos/${id}`;
    axiosClient.delete(url);
  },
};
export default todoApi;

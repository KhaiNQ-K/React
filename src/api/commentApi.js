import axiosClient from './axiosClient';

const commentApi = {
  getAll: (params) => {
    const url = 'comments';
    axiosClient.get(url, { params });
  },
  getById: (id) => {
    const url = `comments/${id}`;
    axiosClient.get(url);
  },
  create: (data) => {
    const url = 'comments';
    axiosClient.post(url, data);
  },
  update: (id, data) => {
    const url = `comments/${id}`;
    axiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `comments/${id}`;
    axiosClient.delete(url);
  },
};
export default commentApi;

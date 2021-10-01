import axiosClient from './axiosClient';

const postApi = {
  getAll: (params) => {
    const url = 'posts';
    axiosClient.get(url, { params });
  },
  getById: (id) => {
    const url = `posts/${id}`;
    axiosClient.get(url);
  },
  create: (data) => {
    const url = 'posts';
    axiosClient.post(url, data);
  },
  update: (id, data) => {
    const url = `posts/${id}`;
    axiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `posts/${id}`;
    axiosClient.delete(url);
  },
};
export default postApi;

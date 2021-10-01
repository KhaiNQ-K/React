import axios from 'axios';
import queryString from 'query-string';
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'Content-Type': 'Application/Json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    if (response && response.data) {
      return response;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosClient;

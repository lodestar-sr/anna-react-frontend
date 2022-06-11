import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
});

apiClient.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    request.headers.authorization = `Bearer ${accessToken}`;
    request.headers.accessToken = accessToken;
  }
  return request;
});

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    const { config, response } = error;
    if (response.status === 401 && response.data?.status === 'ExpiredJwt') {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw error;
      }

      return apiClient
        .post('/admin/refresh', {
          refreshToken,
        })
        .then((res) => {
          if (res) {
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            return apiClient.request(config);
          }
          throw error;
        })
        .catch(() => {
          throw error;
        });
    }
    throw error;
  },
);

export default apiClient;

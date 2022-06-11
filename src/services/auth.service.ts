import apiClient from './index';

export async function login(email: string, password: string) {
  return apiClient
    .post('/auth/signin', {
      email,
      password,
    })
    .then((response) => {
      if (response) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        return response.data;
      }
      return Promise.reject();
    })
}

export async function register(user: any) {
  return apiClient
    .post('/auth/signup', user)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
}

export async function fetchMe() {
  return apiClient
    .get('auth/me')
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
}
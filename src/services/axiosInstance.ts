import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { CustomInstance } from '@/types/api';

const axiosConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
};

export const axiosInstance: CustomInstance = axios.create(axiosConfig);
export const axiosAuthInstance: CustomInstance = axios.create(axiosConfig);

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};

const onError = (error: AxiosError) => {
  console.error(error);
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(onResponse, onError);
axiosAuthInstance.interceptors.response.use(onResponse, onError);

const onRequest = (config: InternalAxiosRequestConfig) => {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
};

axiosAuthInstance.interceptors.request.use(onRequest, onError);

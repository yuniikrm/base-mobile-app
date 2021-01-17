import { API_TIMEOUT } from '../config';
import { commonStore } from '../store';
import axiosDefault from '../utils/axios';

function getToken() {
  const useStore = commonStore;
  const { token } = useStore.getState();
  if (token) {
    return {
      Authorization: token,
    };
  }
  return null;
}

export function postApi(url, data) {
  const response = axiosDefault.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
      ...getToken(),
    },
    timeout: API_TIMEOUT,
  });
  return response;
}

export function getApi(url) {
  const response = axiosDefault.get(url, {
    headers: {
      'Content-Type': 'application/json',
      ...getToken(),
    },
    timeout: API_TIMEOUT,
  });
  return response;
}

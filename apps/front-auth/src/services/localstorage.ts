import { AuthDAO, LOCAL_STORAGE_KEYS } from '@love-match/definitions';

export const saveToken = (authResponse: AuthDAO) => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, authResponse.jwt);
  window.dispatchEvent(new Event('setAuthToken'));
};

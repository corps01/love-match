import { LOCAL_STORAGE_KEYS } from '@love-match/definitions';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [haveToken, sethaveToken] = useState<boolean>(
    localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN) !== null
  );

  useEffect(() => {
    const onSetAuthToken = () => {
      const settingValue = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
      sethaveToken(settingValue !== null);
    };

    const chekingAuthValue = ({ key, newValue }: StorageEvent) => {
      if (key === LOCAL_STORAGE_KEYS.AUTH_TOKEN) {
        sethaveToken(newValue !== null);
      }
    };

    window.addEventListener('setAuthToken', onSetAuthToken);
    window.addEventListener('storage', chekingAuthValue);

    return () => {
      window.removeEventListener('setAuthToken', onSetAuthToken);
      window.removeEventListener('storage', chekingAuthValue);
    };
  }, []);

  return { haveToken };
};

//create a hook that handle the token
import { useState } from 'react';

export const useToken = () => {
      const [token, setTokenkeInternal] = useState(() => {
            return localStorage.getItem('token');
      });

      const setToken = (newToken) => {
            localStorage.setItem('token', newToken);
            setTokenkeInternal(newToken);
      }

      return [token, setToken];
}
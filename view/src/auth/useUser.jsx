import { useState, useEffect } from 'react';
import { useToken } from './useToken';

//for resident
export const useUser = () => {
      const [token] = useToken();

      //retrieve  payload 
      const getPayloadFromToken = (token) => {
            const encodedPayLoad = token.split('.')[1];

            return JSON.parse(window.atob(encodedPayLoad));
      }

      const [user, setUser] = useState(() => {
            if (!token) return null;

            return getPayloadFromToken(token);
      });


      useEffect(() => {
            if (!token) {
                  setUser(null);
            }
            setUser(getPayloadFromToken(token));

      }, [token]);

      return user;
}
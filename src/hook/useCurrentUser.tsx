import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';

export const useCurrentUser = () => {
  const [userId, setUserId] = useState('');
  const currentUser = useContext(AuthContext);

  useEffect(() => {
    if (currentUser?.currentUser?.uid) {
      setUserId(currentUser.currentUser.uid);
    }
  }, [userId, currentUser]);

  return userId;
};

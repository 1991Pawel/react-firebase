import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { FirebaseUser } from '../types/types';

export const useCurrentUser = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const currentUser = useContext(AuthContext);

  useEffect(() => {
    if (currentUser?.currentUser) {
      setUser(currentUser.currentUser);
    }
  }, [user, currentUser]);

  return user;
};

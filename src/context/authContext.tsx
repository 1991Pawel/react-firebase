import React, { useEffect, useState, createContext } from 'react';
import { auth } from '../firebase/firebase';
import { FirebaseUser } from '../types/types';

interface Auth {
  currentUser: FirebaseUser;
  loading: boolean;
}

export const AuthContext = createContext<Auth | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

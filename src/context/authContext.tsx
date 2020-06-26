import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';

type FirebaseUser = firebase.User | null;

interface Auth {
  currentUser: FirebaseUser;
  loading: boolean;
}

export const AuthContext = React.createContext<Auth | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

    return auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

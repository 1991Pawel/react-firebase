import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';

type FirebaseUser = firebase.User | null;

export const AuthContext = React.createContext<FirebaseUser>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser>(null);

  useEffect(() => {
    return auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

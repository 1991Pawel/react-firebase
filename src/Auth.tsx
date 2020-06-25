import React, { useEffect, useState } from 'react';
import app from './firebase';

type FirebaseUser = firebase.User | null;

export const AuthContext = React.createContext<FirebaseUser>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser>(null);

  useEffect(() => {
    return app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

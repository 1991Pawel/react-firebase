import { useState, useEffect, useContext } from 'react';
import { db } from '../firebase/firebase';
import { CollectionItem } from '../types/types';
import { AuthContext } from '../context/authContext';
import { useCurrentUser } from './useCurrentUser';

export const useCollection = (name: string) => {
  const userId = useCurrentUser();
  const currentUser = useContext(AuthContext);
  const [collection, setCollection] = useState<CollectionItem[]>([]);
  const documentsCollection = (doc: firebase.firestore.DocumentData) => {
    return { id: doc.id, ...doc.data() };
  };
  useEffect((): (() => void) => {
    const subscribe = db.collection(name).onSnapshot((snapshot) => {
      const dataFromCollection = snapshot.docs.map(documentsCollection);
      const filterUser = dataFromCollection.filter(
        (user) => user.userId === userId
      );
      setCollection(filterUser);
    });
    return () => subscribe();
  }, [currentUser, name, userId]);

  return collection;
};

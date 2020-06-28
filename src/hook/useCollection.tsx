import { useState, useEffect, useContext } from 'react';
import { db } from '../firebase/firebase';
import { CollectionItem } from '../types/types';
import { AuthContext } from '../context/authContext';
import { useCurrentUser } from './useCurrentUser';

export const useCollection = (name: string) => {
  const currentUser = useContext(AuthContext);
  const [collection, setCollection] = useState<CollectionItem[]>([]);
  const user = useCurrentUser();

  const documentsCollection = (doc: firebase.firestore.DocumentData) => {
    return { id: doc.id, ...doc.data() };
  };
  useEffect(() => {
    const subscribe = db.collection(name).onSnapshot((snapshot) => {
      const dataFromCollection = snapshot.docs.map(documentsCollection);
      const filterDataByUser = dataFromCollection.filter(
        (item) => item.userId === user?.uid
      );
      setCollection(filterDataByUser);
    });
    return () => subscribe();
  }, [currentUser, name, user]);

  return collection;
};

import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';

interface CollectionItem {
  id: string;
  city: string;
  title: string;
}

export const useCollection = (name: string) => {
  const [collection, setCollection] = useState<CollectionItem[]>([]);

  const documentsCollection = (doc: firebase.firestore.DocumentData) => {
    return { id: doc.id, ...doc.data() };
  };

  useEffect((): (() => void) => {
    const subscribe = db.collection(name).onSnapshot((snapshot) => {
      const dataFromCollection = snapshot.docs.map(documentsCollection);
      setCollection(dataFromCollection);
    });
    return () => subscribe;
  }, [name]);

  return collection;
};

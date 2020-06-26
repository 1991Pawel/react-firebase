import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';

// type Firestore = firebase.firestore.DocumentReference<T>;

export const useCollection = (name: string) => {
  const [collection, setCollection] = useState<any>([]);

  const documentsCollection = (doc: any) => {
    return { id: doc.id, ...doc.data() };
  };

  useEffect((): any => {
    const subscribe = db.collection(name).onSnapshot((snapshot: any) => {
      const dataFromCollection = snapshot.docs.map(documentsCollection);
      setCollection(dataFromCollection);
    });
    return () => subscribe;
  }, [name]);

  return collection;
};

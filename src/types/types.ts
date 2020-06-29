export interface CollectionItem {
  weight: string;
  id: string;
  city?: string;
  title: string;
  userId?: string;
  name: string;
  height: string;
}
export type FirebaseUser = firebase.User | null;

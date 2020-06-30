export interface CollectionItem {
  weight: string;
  id: string;
  city?: string;
  title: string;
  userId?: string;
  name: string;
  height: string;
}
export interface Form {
  setHaveAccount: React.Dispatch<React.SetStateAction<boolean>>;
}
export type FirebaseUser = firebase.User | null;
export type FirebaseError = firebase.auth.Error | boolean;

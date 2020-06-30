import { useState } from 'react';
import { useHistory } from 'react-router-dom';

type FirebaseError = firebase.auth.Error | boolean;
export const useForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [error, setError] = useState<FirebaseError>(false);
  return {
    email,
    setEmail,
    password,
    setPassword,
    history,
    error,
    setError,
  };
};

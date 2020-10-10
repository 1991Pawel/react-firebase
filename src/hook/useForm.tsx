import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseError } from '../types/types';

export const useForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [error, setError] = useState<FirebaseError>(false);
  const [errorMessage, setErrorMessage] = useState('');
  return {
  
    email,
    setEmail,
    password,
    setPassword,
    history,
    error,
    setError,
    errorMessage,
    setErrorMessage,
    loading,
    setLoading,
  };
};

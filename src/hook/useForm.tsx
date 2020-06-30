import React, { useState } from 'react';

export const useForm = (initial: any) => {
  const [value, setValue] = useState(initial);

  const updateValue = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return [updateValue];
};

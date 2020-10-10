import React from 'react';
import { WrapperInput } from './StyledForm';
/* eslint-disable jsx-a11y/label-has-associated-control */
const FormFields = ({ loading, password, setPassword, setEmail, email }) => {  
  return (
    <WrapperInput {...loading}>
      <label htmlFor="email">Adres Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        name="email"
        type="text"
        value={email}
      />
      <label htmlFor="password">Hasło</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        name="password"
        type="password"
        value={password}
      />
    </WrapperInput>
  );
};
export default FormFields;
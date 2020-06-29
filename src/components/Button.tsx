import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<{ primary?: boolean }>`
  width: 2rem;
  min-height: 2rem;
  display: block;
  height: 2.5rem;
  min-width: 7rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  margin-right: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  ${({ primary, theme }) =>
    primary &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.light};
    `};
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
}

const Button = ({ children, onClick, primary }: ButtonProps) => {
  return (
    <StyledButton primary={primary} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

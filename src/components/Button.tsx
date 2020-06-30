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
  border: 1px solid ${({ theme }) => theme.colors.primary};

  margin-right: 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
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
  onClick?: any;
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

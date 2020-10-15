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
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);

  margin-right: 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
  }
  cursor: pointer;
  ${({ primary, theme }) =>
    primary &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.textLight};
      background-image: linear-gradient(90deg, #5c51f2, #234bcf);
    `};
`;

// fix type
console.log('pamietac');
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

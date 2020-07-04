import styled from 'styled-components';

export const Logo = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media only screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;

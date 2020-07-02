import styled from 'styled-components';

const Logo = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
export default Logo;

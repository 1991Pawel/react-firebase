import React from 'react';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  height: 100vh;
  border: 1px solid red;
  width: 300px;
  background: #ccc;
`;

const SideBar = () => {
  return <SideBarWrapper>sidebar</SideBarWrapper>;
};

export default SideBar;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled, { css } from 'styled-components';
import { useThemeContext } from '../hook/useThemeContext';

const ThemeWrapper = styled.div<{ isDarkTheme: boolean }>`
  display: block; 
  position: relative;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: inset 0 0 10px #888888;
  height: 1.5rem;
  width: 4rem;
  overflow:hidden;

  span {
    display: block; 
    position: absolute;
    top:50%;
    left:10%;
    transform:translatey(-50%);
    border-top: 1px solid #FFF;
    border-bottom: 1px solid #AAA;
    border-radius: 100%;
    background: #48E8AA;
    height: 1.2rem; 
    width: 1.2rem;
    box-shadow: 0 0 2px rgba(0,0,0,0.25);
    transition:.2s all;

    ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
        transform: translate(30px,-50%);
    `};
   
    
  }

  label {
    position: absolute;
    overflow:hidden;
    display: block; 
    width:4rem;
    top:50%;
    left:0;
    right:0;
    bottom:0;
    padding:1rem;
    z-index: 9999;
    cursor: pointer;
    transform:translate(-10px,-50%);
    ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
         transform:translate(-60%,-50%);
    `};
    }
    input {
      opacity:0;
    }

    label:after {
      content:"on";
      display: block; 
      position: absolute;
      top:50%;
      transform:translatey(-50%);
      right:10px;
      font-size:1rem;
      color:#FFF;

      ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
        content:"off";
         transform:translate(-100%,-50%);
    `};
    }
    }


    ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
          background: ${({ theme }) => theme.colors.green};
    `};
    
`;


const ThemeButton = () => {
  const { setDarkTheme, isDarkTheme } = useThemeContext();

  return (
    <ThemeWrapper isDarkTheme={isDarkTheme}>
      <span>
        <input onChange={() => setDarkTheme((prev) => !prev)} checked={isDarkTheme} id="checkbox" type="checkbox" />
        <label htmlFor="checkbox" />
      </span>
    </ThemeWrapper>
  );
};

export default ThemeButton;
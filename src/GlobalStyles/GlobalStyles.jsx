import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding:0;
  }

body {
    font-size:10px;
    font-family: 'Montserrat', sans-serif;
    
}

input {
  font-size:1rem;
}

select {
  font-size:1rem;
}

.highlight {
  background:#574CF2;
  color:#fff;
}


`;

export default GlobalStyle;

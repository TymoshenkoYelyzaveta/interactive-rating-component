import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  	font-family: 'Overpass', sans-serif;
  	font-display: fallback; 
  }
`;

export default GlobalStyle;

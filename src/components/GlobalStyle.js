import { createGlobalStyle } from "styled-components";
import one from "../images/roadrage-owgbd.woff2";
import two from "../images/roadrage-owgbd.woff";

const GlobalStyle = createGlobalStyle`

 * {
     margin: 0;
     padding: 0;
     color: whitesmoke;
     box-sizing: border-box;
 }

 @font-face {
    font-family: 'road_rageregular';
    src: url(${one}) format('woff2'),
         url(${two}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;

}

html {
  overflow-x: clip;
}

body {
  scroll-behavior: smooth;
  background: black;
  overflow-x: clip;
}

h1, h2, h3 {
        color: red;
        font-family: 'road_rageregular';
        text-shadow: 5px 3px 8px navy;
}

h1 { font-size: 5vh;

}

h2 {
    font-size: 2.5rem;

    @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
}

h3 {
    font-size: 1.6rem;
}
    

label {
  font-family: 'Montserrat', sans-serif;
  text-shadow: 1px 1px 10px black;
}

 p {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.4;
    font-size: 1.2rem;
    text-shadow: 1px 1px black;
 }

 &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: salmon;
  }

  &::-webkit-scrollbar-track {
    background: pink;
  }

h4 {
  font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    font-size: 1.4rem;
    text-shadow: 1px 1px black;
}
  
`;

export default GlobalStyle;

import { createGlobalStyle, styled } from "styled-components";

export const GlobalCSS = createGlobalStyle`
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  font-family: 'Montserrat', sans-serif;

  text-decoration: none;

  list-style: none;
}

img{ 
  width: 100%;
}

body{
  background-color: #d0d0d0;
  
  max-width: 100vw;
  
  width: 100%;
  height: 100%;
}
`;

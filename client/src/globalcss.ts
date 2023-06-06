import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  
  text-decoration: none;
  
  list-style: none;
}

a{
  color: inherit;
}

img{ 
  width: 100%;
}

body{
  font-family: 'Geologica', sans-serif;

  position: relative;
  
  background-color: #ccc;
  
  max-width: 100vw;
  
  width: 100%;
  height: 100%;
}
`;

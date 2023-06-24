import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  
  text-decoration: none;
  
  list-style: none;
  
  border: none

}
:root {
  --header-height: 60px;
}



a{
  color: inherit;
}

img{ 
  width: 100%;
}

button{
  cursor: pointer;;
}

body{
  -moz-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  
  font-family: 'Montserrat', sans-serif;

  position: relative;
  
  background-color: #ccc;
  
  max-width: 100vw;
  
  width: 100%;
  height: 100%;
}
`;

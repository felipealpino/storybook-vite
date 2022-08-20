import { createGlobalStyle } from "styled-components";
import { colorGet } from "../../shared/utils";

export const BaseStyles = createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing: border-box;
	}
  
  html{
    @media (max-width: 1080px) {
      font-size: 93,75%;
		}
    
		@media (max-width: 720px) {
      font-size: 87,5%;
		}
	}
  
  body {
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-family: sans-serif;
    color: ${colorGet("basic", 800)};
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600; 
	}


  /* width */
  /* ::-webkit-scrollbar {
    width: 6px;
    height:6px;
  } */
  
  /* Track */
  /* ::-webkit-scrollbar-track {
     background-color: #202024; 
  } */
  
  /* Handle */
  /* ::-webkit-scrollbar-thumb {
    background-color: #ababab;
    border-radius: 10px;
  } */

`;

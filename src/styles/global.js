import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import backgroundImage from '../assets/background.svg';

export default createGlobalStyle`
* {
  color: #fff;
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
}

a {
  cursor: pointer;
}

body {
  background: #131313 url(${backgroundImage}) no-repeat center top;
  -webkit-font-smoothing: antialised;
}

body, input, button {
  font: 14px 'Poppins', sans-serif;;
}

#root {
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
}

button {
  cursor: pointer;
}
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  color: white;
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  background: #131313;
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

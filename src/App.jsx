import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Routes from './routes';
import store from './store';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
          <ToastContainer autoClose={3000} limit={1} />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

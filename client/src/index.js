import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components' 
import UserProvider from './contexts/auth.context';
import App from './App';
import theme from './styles/theme'
import './styles/style.css'
import LoadingProvider from './contexts/loading';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </UserProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

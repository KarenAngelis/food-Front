import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import SignIn from './pages/SingIn'; // Importando SignIn corretamente

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SignIn /> {/* Renderizando SignIn */}
    </ThemeProvider>
  </React.StrictMode>
);


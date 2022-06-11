import React from 'react';
import { Router } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';

import theme from '../../theme';
import history from '../../shared/history';
import Routes from '../../routes';
import AppProviders from '../../contexts/appProviders';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProviders>
        <Router history={history}>
          <Routes />
        </Router>
      </AppProviders>
    </ThemeProvider>
  );
}

export default App;

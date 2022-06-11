import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';

import Header from './Header';

const Root = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  '& main': {
    minHeight: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(10),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: '100%',
  }
}));

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Root>
      <CssBaseline />
      <Header />
      <main>
        { children }
      </main>
    </Root>
  );
};

export default Layout;

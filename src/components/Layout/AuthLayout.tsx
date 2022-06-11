import React, {ReactNode} from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import { SnackbarContent } from './SnackbarContent';

const PREFIX = 'auth-layout';
const classes = {
  root: `${PREFIX}-root`,
  container: `${PREFIX}-container`,
};

const Root = styled('div')(() => ({
  [`&.${classes.root}`]: {
    background: 'linear-gradient(#e9ecef, #dee2e6)',
  },
  [`& .${classes.container}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    minHeight: '100vh',
  },
}));

interface LayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <Root className={classes.root}>
      <SnackbarContent>
        <Container className={classes.container} maxWidth="xl">
          {children}
        </Container>
      </SnackbarContent>
    </Root>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;

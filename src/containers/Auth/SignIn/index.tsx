import React from 'react';
import { useHistory } from "react-router";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';

import CommonTextField from '../../../components/Forms/CommonTextField';
import { loginSchema } from '../../../validations/auth.schema';
import { useAuth } from '../../../contexts/auth.context';

const PREFIX = 'login';
const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`,
  title: `${PREFIX}-title`,
  content: `${PREFIX}-content`,
  action: `${PREFIX}-action`,
  link: `${PREFIX}-link`,
};

const Root = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.card}`]: {
    width: '400px',
    padding: theme.spacing(4),
  },
  [`& .${classes.title}`]: {
    marginBottom: theme.spacing(4),
  },
  [`& .${classes.content}`]: {
    display: 'flex',
    flexDirection: 'column',

    '& .MuiTextField-root': {
      marginBottom: theme.spacing(3),
    }
  },
  [`& .${classes.action}`]: {
    display: 'flex',
    justifyContent: 'center',

    '& button': {
      width: '100%',
    },
  },
  [`& .${classes.link}`]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),

    '& .MuiTypography-root': {
      marginRight: theme.spacing(1),
    }
  }
}));

const SignIn = () => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      login(values).then(() => history.push('/'));
    },
  });

  const history = useHistory();

  return (
    <Root className={classes.root}>
      <Card className={classes.card}>
        <form onSubmit={formik.handleSubmit}>
          <Box className={classes.title}>
            <Typography variant="h5" align="center">
              SIGN IN
            </Typography>
          </Box>
          <Box className={classes.content}>
            <CommonTextField
              size="normal"
              label="Email"
              error={formik.touched.email && formik.errors.email}
              {...formik.getFieldProps('email')}
            />
            <CommonTextField
              size="normal"
              label="Password"
              type="password"
              error={formik.touched.password && formik.errors.password}
              {...formik.getFieldProps('password')}
            />
          </Box>
          <Box className={classes.action}>
            <Button variant="contained" size="large" type="submit">
              Log In
            </Button>
          </Box>
        </form>
      </Card>
      <Box className={classes.link}>
        <Typography>Don't have an account?</Typography>
        <Link href="/auth/signup" underline="none">
          <Typography>Sign Up</Typography>
        </Link>
      </Box>
    </Root>
  )
};

export default SignIn;

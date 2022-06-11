import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';

import { useAuth } from '../../../contexts/auth.context';
import { registerSchema } from '../../../validations/auth.schema';
import CommonTextField from '../../../components/Forms/CommonTextField';

const PREFIX = 'register';
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
    minWidth: '400px',
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

const SignUp = () => {
  const { register, loading} = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      register(values);
    },
  });

  return (
    <Root className={classes.root}>
      <Card className={classes.card}>
        <form onSubmit={formik.handleSubmit}>
          <Box className={classes.title}>
            <Typography variant="h5" align="center">
              SIGN UP
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
            <CommonTextField
              size="normal"
              label="Confirm Password"
              type="password"
              error={formik.touched.confirmPassword && formik.errors.confirmPassword}
              {...formik.getFieldProps('confirmPassword')}
            />
          </Box>
          <Box className={classes.action}>
            <LoadingButton variant="contained" size="large" type="submit" loading={loading}>
              Register
            </LoadingButton>
          </Box>
        </form>
      </Card>
      <Box className={classes.link}>
        <Typography>Already have account?</Typography>
        <Link href="/auth/signin" underline="none">
          <Typography>Sign In</Typography>
        </Link>
      </Box>
    </Root>
  )
};

export default SignUp;

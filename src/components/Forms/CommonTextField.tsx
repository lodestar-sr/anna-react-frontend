import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/material/styles';

const Root = styled((props: any) => (
  <TextField {...props} />
))(() => ({
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: '0 !important',
    fontSize: '0.8rem',
    fontWeight: '400',
  },
}));

interface Props {
  className?: string
  size?: string
  error?: string | boolean
  type?: string
  readOnly?: boolean
  label?: string;
}

const CommonTextField = ({
  className,
  size,
  error,
  type,
  readOnly,
  label,
  ...rest
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <Root
      className={className}
      size={size || 'small'}
      type={(showPassword || type !== 'password') ? 'text' : 'password'}
      error={!!error}
      helperText={error}
      label={label}
      InputProps={{
        readOnly,
        endAdornment: type === 'password' && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff/> : <Visibility/>}
            </IconButton>
          </InputAdornment>
        )}
      }
      {...rest}
    />
  )
};

export default CommonTextField;
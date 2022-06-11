import React, {ReactNode, Ref} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useSnackbar } from '../../../contexts/snack.context';

interface Props {
  children: ReactNode;
}

const Alert = React.forwardRef(function Alert(props: any, ref: Ref<any>) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function SnackbarContent({ children }: Props) {
  const { open, handleClose, message, status } = useSnackbar();

  return (
    <>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

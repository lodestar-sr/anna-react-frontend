import React, { useState } from 'react';

const SnackContext = React.createContext({});

/**
 * @return {null}
 */
function NotifyProvider(props: any) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string>();
  const [status, setStatus] = useState<string>();

  const handleClose = () => setOpen(false);

  const notify = (notification: string, variant: string) => {
    setStatus(variant);
    setMessage(notification);
    setOpen(true);
  };

  return (
    <SnackContext.Provider
      value={{
        notify,
        handleClose,
        message,
        status,
        open,
      }}
      {...props}
    />
  );
}

function useSnackbar() {
  const context: any = React.useContext(SnackContext);
  if (context === undefined) {
    throw new Error('useSnackbar must be used within a NotifyProvider');
  }
  return context;
}

export { NotifyProvider, useSnackbar };

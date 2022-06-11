import React, {ReactNode} from 'react';

import { AuthProvider } from './auth.context';
import { NotifyProvider } from './snack.context';

interface Props {
  children: ReactNode;
}

function AppProviders({ children }: Props) {
  return (
    <NotifyProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </NotifyProvider>
  );
}

export default AppProviders;

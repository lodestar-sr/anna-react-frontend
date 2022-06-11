import React, { useEffect, useState } from 'react';

import * as AuthService from '../services/auth.service';
import { useSnackbar } from './snack.context';

const AuthContext = React.createContext({});

/**
 * @return {null}
 */
function AuthProvider(props: any) {
  const [me, setMe] = useState<any>();
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const { notify } = useSnackbar();

  const fetchMe = async () => {
    try {
      setLoaded(false);
      await AuthService.fetchMe().then((res) => {
        setMe(res.data);
        setLoaded(true);
      });
    } catch (err) {
      setMe(undefined);
      setLoaded(true);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchMe();
    })();
  }, []);

  const login = async ({ email, password }: {email: string, password: string}) => {
    setLoading(true);
    AuthService.login(email, password)
      .then(() => {
        fetchMe();
        setLoading(false);
        notify('Login successfully');
      })
      .catch((e) => {
        setLoading(false);
        notify(e.response?.data?.message, 'error');
      });
  };

  const register = async (user: any) => {
    setLoading(true);
    AuthService.register(user)
      .then((res) => {
        setLoading(false);
        notify(res.message);
      })
      .catch((e) => {
        setLoading(false);
        notify(e.response?.data?.message, 'error');
      });
  };

  const logout = async () => {
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
    setMe(null);
  };

  return (
    <AuthContext.Provider
      value={{
        me,
        login,
        logout,
        loaded,
        register,
        fetchMe,
        loading,
      }}
      {...props}
    />
  );
}

function useAuth() {
  const context: any = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };

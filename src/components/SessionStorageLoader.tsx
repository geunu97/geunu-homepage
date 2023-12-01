'use client';

import UserContext from '@/store/UserProvider';
import sessionStorageHandler from '@/utils/sessionStorageHandler';
import React, { useContext, useEffect } from 'react';

const SessionStorageLoader = ({ children }: { children: React.ReactNode }) => {
  const { dispatch } = useContext(UserContext);

  const setUser = () => {
    const user = sessionStorageHandler.getItem('user');
    if (user) {
      dispatch({ type: 'LOGIN', user: user });
      return;
    }
    dispatch({ type: 'LOGOUT' });
  };

  useEffect(() => {
    setUser();
  }, []);

  return <>{children}</>;
};

export default SessionStorageLoader;

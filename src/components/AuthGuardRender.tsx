'use client';

import React, { useContext } from 'react';
import UserContext from '../store/UserProvider';

export default function AuthGuardRender({ children }: { children: React.ReactNode }) {
  const { state } = useContext(UserContext);

  if (state.isAuth) {
    return <>{children}</>;
  }

  return <></>;
}

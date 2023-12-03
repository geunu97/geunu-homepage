'use client';

import { UserActionType, UserType } from '@/types/user';
import React, { createContext, useReducer } from 'react';

const initialState: UserType = {
  isAuth: false,
};

const reducer = (state: UserType, action: UserActionType) => {
  switch (action.type) {
    case 'LOGIN':
      return { isAuth: true, user: action.user };
    case 'LOGOUT':
      return { ...initialState };
    default:
      return state;
  }
};

const UserContext = createContext<{ state: UserType; dispatch: React.Dispatch<UserActionType> }>({
  state: initialState,
  dispatch: () => undefined,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export default UserContext;

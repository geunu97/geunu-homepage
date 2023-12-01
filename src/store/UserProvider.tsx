'use client';

import { UserCredential } from 'firebase/auth';
import React, { createContext, useReducer } from 'react';

interface UserType {
  isAuth: boolean;
  user?: UserCredential['user'];
}

const initialState: UserType = {
  isAuth: false,
};

interface ActionType {
  type: string;
  user?: UserCredential['user'];
}

const reducer = (state: UserType, action: ActionType) => {
  switch (action.type) {
    case 'LOGIN':
      return { isAuth: true, user: action.user };
    case 'LOGOUT':
      return { ...initialState };
    default:
      return state;
  }
};

const UserContext = createContext<{ state: UserType; dispatch: React.Dispatch<ActionType> }>({
  state: initialState,
  dispatch: () => undefined,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export default UserContext;

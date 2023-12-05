import { UserCredential } from 'firebase/auth';

export interface UserType {
  isAuth?: boolean;
  user?: UserCredential['user'];
}

export interface UserActionType {
  type: string;
  user?: UserCredential['user'];
}

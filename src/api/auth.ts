import { auth } from '@/config/firebase';
import { UserCredential, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

export const login = async (email: string, password: string): Promise<UserCredential['user'] | undefined> => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (error: any) {
    toast.error('로그인에 실패하였습니다.', {
      autoClose: 5000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
    return;
  }
};

export const logout = async (): Promise<boolean | undefined> => {
  try {
    await signOut(auth);
    return true;
  } catch (error: any) {
    toast.error('로그아웃에 실패하였습니다.', {
      autoClose: 5000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
    return;
  }
};

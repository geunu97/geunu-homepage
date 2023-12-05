'use client';

import useEffectAfterMount from '@/hooks/useEffectAfterMount';
import UserContext from '@/store/UserProvider';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function PageAuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { state } = useContext(UserContext);
  const authRequiredPaths = ['/blog/register', '/blog/edit'];
  const authNotRequiredPaths = ['/login'];

  const redirectToLogin = () => {
    const isAuthRequired = authRequiredPaths.some((path) => pathname.startsWith(path));
    if (isAuthRequired) {
      router.push('/login');
      toast.error('로그인을 해주세요.', {
        autoClose: 5000,
        theme: 'dark',
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const redirectToHome = () => {
    const isAuthNotRequired = authNotRequiredPaths.some((path) => pathname.startsWith(path));
    if (isAuthNotRequired) {
      router.push('/');
    }
  };

  useEffectAfterMount(() => {
    if (state && Object.keys(state).length > 0) {
      state.isAuth ? redirectToHome() : redirectToLogin();
    }
  }, [state]);

  return <>{children}</>;
}

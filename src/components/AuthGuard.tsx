'use client';

import useEffectAfterMount from '@/hooks/useEffectAfterMount';
import UserContext from '@/store/UserProvider';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { state } = useContext(UserContext);
  const authRequiredPaths = ['/blog/register', '/blog/edit'];
  const authNotRequiredPaths = ['/login'];

  const redirectToLogin = () => {
    authRequiredPaths.forEach((authRequiredPath) => {
      if (pathname.startsWith(authRequiredPath)) {
        router.push('/login');
        toast.info('로그인을 해주세요.', {
          autoClose: 5000,
          theme: 'dark',
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    });
  };

  const redirectToHome = () => {
    authNotRequiredPaths.forEach((authNotRequiredPath) => {
      if (pathname.startsWith(authNotRequiredPath)) {
        router.push('/');
      }
    });
  };

  useEffectAfterMount(() => {
    if (router && pathname) {
      state.isAuth ? redirectToHome() : redirectToLogin();
    }
  }, [router, pathname, state.isAuth]);

  return <>{children}</>;
}

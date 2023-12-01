'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/* 임시 */
export default function Temporary() {
  const router = useRouter();

  const redirect = () => {
    router.push('/');
  };

  useEffect(() => {
    redirect();
  }, []);

  return <></>;
}

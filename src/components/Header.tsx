'use client';

import Link from 'next/link';
import styles from '../styles/header.module.css';
import Logo from './Logo';
import { FormEvent, useContext } from 'react';
import { logout } from '@/api/auth';
import sessionStorageHandler from '@/utils/sessionStorageHandler';
import UserContext from '@/store/UserProvider';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const { state, dispatch } = useContext(UserContext);

  const onLogout = async (e: FormEvent) => {
    e.preventDefault();
    const response = await logout();
    if (response) {
      sessionStorageHandler.removeItem('user');
      dispatch({ type: 'LOGOUT' });
      router.push('/login');
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <Logo />
        </div>
        <ul className={styles.rightWrapper}>
          <li className="exo2-font">
            <Link href="/">Home</Link>
          </li>
          <li className="exo2-font">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="exo2-font">{state.isAuth ? <button onClick={onLogout}>Logout</button> : <Link href="/login">Login</Link>}</li>
        </ul>
      </div>
    </div>
  );
}

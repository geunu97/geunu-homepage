'use client';

import { login } from '@/api/auth';
import styles from '@/styles/loginForm.module.css';
import { useState, FormEvent, useContext } from 'react';
import sessionStorageHandler from '@/utils/sessionStorageHandler';
import { useRouter } from 'next/navigation';
import UserContext from '@/store/UserProvider';

export default function LoginForm() {
  const router = useRouter();
  const { dispatch } = useContext(UserContext);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const user = await login(id, password);
    if (user) {
      sessionStorageHandler.setItem('user', user);
      dispatch({ type: 'LOGIN', user: user });
      router.push('/');
    }
  };

  return (
    <>
      <form className={styles.loginForm} onSubmit={onSubmit}>
        <input type="text" placeholder="아이디를 입력해주세요." value={id} onChange={(e) => setId(e.target.value)} />
        <input type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}

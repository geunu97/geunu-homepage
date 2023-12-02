'use client';

import { useState, FormEvent, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import UserContext from '@/store/UserProvider';
import styles from '../styles/blogForm.module.css';

export default function BlogForm() {
  const router = useRouter();
  const { state } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (state.isAuth) {
      router.push('/');
    }
  }, [state.isAuth, router]);

  return (
    <>
      <form className={styles.blogForm} onSubmit={onSubmit}>
        <input type="text" placeholder="제목을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="내용을 입력해주세요." value={content} onChange={(e) => setContent(e.target.value)} />
        <div className={styles.submitWrapper}>
          <button type="submit">등록하기</button>
        </div>
      </form>
    </>
  );
}

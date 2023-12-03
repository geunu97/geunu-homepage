'use client';

import { useState, FormEvent, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { PostRequestType, PostResponseType } from '@/types/post';
import { createBlogPost, updateBlogPost } from '@/api/blogPost';
import UserContext from '@/store/UserProvider';
import useEffectAfterMount from '@/hooks/useEffectAfterMount';
import dynamic from 'next/dynamic';
import dateFormatter from '@/utils/dateFormatter';
import styles from '@/styles/blogForm.module.css';

const TuiEditor = dynamic(() => import('@/components/TuiEditor'), {
  ssr: false,
});

interface BlogFormProps {
  post?: PostResponseType | undefined;
}

export default function BlogForm({ post }: BlogFormProps) {
  const router = useRouter();
  const { state } = useContext(UserContext);
  const [formTemplate, setFormTemplate] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(' ');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isSuccess = formTemplate === 'RegisterForm' ? await onCreate() : await onUpdate();
    if (isSuccess) {
      router.push('/blog');
      router.refresh();
    }
  };

  const onCreate = async () => {
    const newPost: PostRequestType = {
      title,
      content,
      userUid: state.user ? state.user.uid : '',
      // userProfileImg: state.user?.providerData[0].photoURL,
      author: 'geunu', // author: state.user?.displayName,
      date: dateFormatter(`${new Date()}`, '년-월-일'),
      comment: [],
      likeCount: 0,
    };

    return await createBlogPost(newPost);
  };

  const onUpdate = async () => {
    if (post) {
      return await updateBlogPost(post.postId, { title, content });
    }
  };

  useEffectAfterMount(() => {
    if (post) {
      setFormTemplate('EditForm');
      setTitle(post.title);
      setContent(post.content);
      return;
    }

    setFormTemplate('RegisterForm');
  }, [post]);

  return (
    <>
      <form className={styles.blogForm} onSubmit={onSubmit}>
        <input type="text" placeholder="제목을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className={styles.contentWrapper}>
          <TuiEditor content={content} setContent={setContent} />
        </div>
        <div className={styles.submitWrapper}>
          <button type="submit">{formTemplate === 'RegisterForm' ? '등록하기' : '수정하기'}</button>
        </div>
      </form>
    </>
  );
}

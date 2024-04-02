'use client';

import { useState, FormEvent, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { PostResponseType } from '@/types/post';
import { createBlogPost, updateBlogPost } from '@/api/blogPost';
import { uploadImageToStorage } from '@/api/file';
import UserContext from '@/store/UserProvider';
import useEffectAfterMount from '@/hooks/useEffectAfterMount';
import dateFormatter from '@/utils/dateFormatter';
import styles from '@/styles/blogForm.module.css';
import { toast } from 'react-toastify';
import MarkdownEditor from './MarkdownEditor';
import ImageUploader from './ImageUploader';
import Link from 'next/link';

interface BlogFormProps {
  post?: PostResponseType | undefined;
}

export default function BlogForm({ post }: BlogFormProps) {
  const router = useRouter();
  const { state } = useContext(UserContext);
  const [formTemplate, setFormTemplate] = useState<'RegisterForm' | 'EditForm'>('RegisterForm');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(' ');
  const [imageUrl, setImageUrl] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const isSuccess = formTemplate === 'RegisterForm' ? await onCreate() : await onUpdate();
    if (isSuccess) {
      router.push('/blog');
      router.refresh();
    }
  };

  const onCreate = async () => {
    const newPost = {
      title,
      content,
      userUid: state.user ? state.user.uid : '',
      imageUrl,
      author: 'geunu', // author: state.user?.displayName,
      date: dateFormatter(`${new Date()}`, '년-월-일'),
      comment: [],
      likeCount: 0,
    };

    return await createBlogPost(newPost);
  };

  const onUpdate = async () => {
    const updatePost = {
      title,
      content,
      imageUrl,
    };
    if (post) {
      return await updateBlogPost(post.postId, updatePost);
    }
  };

  useEffectAfterMount(() => {
    if (post) {
      setFormTemplate('EditForm');
      setTitle(post.title ? post.title : '');
      setContent(post.content ? post.content : '');
      setImageUrl(post.imageUrl ? post.imageUrl : '');
      return;
    }

    setFormTemplate('RegisterForm');
  }, [post]);

  useEffectAfterMount(() => {
    if (post && state.user) {
      if (post.userUid !== state.user.uid) {
        router.push('/blog');
        toast.error('잘못된 접근입니다.', {
          autoClose: 5000,
          theme: 'dark',
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    }
  }, [post, state]);

  return (
    <>
      <form className={styles.blogForm} onSubmit={onSubmit}>
        <input type="text" placeholder="제목을 입력해주세요." value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className={styles.contentWrapper}>
          <MarkdownEditor content={content} setContent={setContent} />
        </div>
        <div className={styles.imageUploadWrapper}>
          <ImageUploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </div>
        <div className={styles.submitWrapper}>
          <button type="submit">{formTemplate === 'RegisterForm' ? '등록하기' : '수정하기'}</button>
        </div>
      </form>
    </>
  );
}

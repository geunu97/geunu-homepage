import { db } from '@/config/firebase';
import { PostRequestType, PostResponseType } from '@/types/post';
import { collection, doc, getDoc, getDocs, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const collectionText = 'blogPost';

export const getBlogPosts = async (): Promise<PostResponseType[] | undefined> => {
  try {
    const docsCollection = collection(db, collectionText);
    const docsSnap = await getDocs(docsCollection);
    const posts: PostResponseType[] = [];
    docsSnap.forEach((docSnap) => {
      posts.push({ postId: docSnap.id, ...docSnap.data() } as PostResponseType);
    });
    return posts.reverse();
  } catch (error) {
    toast.error('게시글의 정보를 가져올 수 없습니다.', {
      autoClose: 5000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};

export const getBlogPost = async (postId: string): Promise<PostResponseType | undefined> => {
  try {
    const docRef = doc(db, collectionText, postId);
    const docSnap = await getDoc(docRef);
    return { postId: docSnap.id, ...docSnap.data() } as PostResponseType;
  } catch (error) {
    toast.error('게시글의 정보를 가져올 수 없습니다.', {
      autoClose: 5000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};

export const createBlogPost = async (data: PostRequestType): Promise<boolean | undefined> => {
  try {
    const latestPostId = await getLatestBlogPostId();
    const docRef = doc(db, collectionText, `${latestPostId + 1}`);
    await setDoc(docRef, data);
    toast.success('게시글이 등록되었습니다.', {
      autoClose: 5000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
    return true;
  } catch (error) {
    toast.error('게시글을 등록할 수 없습니다.', {
      autoClose: 5000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};

export const updateBlogPost = async (
  postId: string,
  data: { title: string; content: string; imageUrl: string },
): Promise<boolean | undefined> => {
  try {
    const docRef = doc(db, collectionText, postId);
    await updateDoc(docRef, data);
    toast.success('게시글이 수정되었습니다.', {
      autoClose: 5000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
    return true;
  } catch (error) {
    toast.error('게시글을 수정할 수 없습니다.', {
      autoClose: 5000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};

export const deleteBlogPost = async (postId: string): Promise<boolean | undefined> => {
  try {
    const docRef = doc(db, collectionText, postId);
    await deleteDoc(docRef);
    toast.success('게시글이 삭제되었습니다.', {
      autoClose: 5000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
    return true;
  } catch (error) {
    toast.error('게시글을 삭제할 수 없습니다.', {
      autoClose: 5000,
      theme: 'dark',
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};

export const getLatestBlogPostId = async (): Promise<number> => {
  const posts = await getBlogPosts();
  if (posts && posts.length !== 0) {
    return Number(posts[0].postId);
  }
  return 0;
};

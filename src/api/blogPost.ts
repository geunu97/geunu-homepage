import { db } from '@/config/firebase';
import { collection, doc, getDoc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';

const collectionText = 'blogPost';

export const getBlogPosts = async () => {
  try {
    const docsCollection = collection(db, collectionText);
    const docsSnap = await getDocs(docsCollection);
    const posts: any = [];
    docsSnap.forEach((docSnap) => {
      posts.push({ postId: docSnap.id, ...docSnap.data() });
    });
    return posts;
  } catch (error) {
    // 에러 처리 해야함 (문서 확인)
  }
};

export const getBlogPost = async (postId: string) => {
  try {
    const docRef = doc(db, collectionText, `${postId}`);
    const docSnap = await getDoc(docRef);
    return { postId: docSnap.id, ...docSnap.data() };
  } catch (error) {
    // 에러 처리 해야함 (문서 확인)
  }
};

export const createBlogPost = async () => {
  try {
    const latestPostId = await getLatestBlogPostId();
    const docRef = doc(db, collectionText, `${latestPostId + 1}`);
    await setDoc(docRef, { contents: '데이터 저장 테스트' });
  } catch (error) {
    console.log(error);
    // 에러 처리 해야함 (문서 확인)
  }
};

export const deleteBlogPost = async (postId: string) => {
  try {
    const docRef = doc(db, collectionText, `${postId}`);
    await deleteDoc(docRef);
  } catch (error) {
    // 에러 처리 해야함 (문서 확인)
  }
};

export const getLatestBlogPostId = async () => {
  const posts = await getBlogPosts();
  return posts.length !== 0 ? posts.at(-1).postId : 0;
};

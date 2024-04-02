import { storage } from '@/config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const uploadImageToStorage = async (image: File): Promise<string> => {
  const imageRef = ref(storage, `images/${image.name}`);
  await uploadBytes(imageRef, image);
  const imageUrl = await getDownloadURL(imageRef);
  return imageUrl;
};

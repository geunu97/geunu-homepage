import React, { useState } from 'react';
import { uploadImageToStorage } from '@/api/file';
import Link from 'next/link';
import styles from '@/styles/imageUploader.module.css';

interface ImageUploaderProps {
  imageUrl: string;
  setImageUrl: (imageUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ imageUrl, setImageUrl }) => {
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = await uploadImageToStorage(e.target.files[0]);
      setImageUrl(imageUrl);
    }
  };

  return (
    <div className={styles.imageUploader}>
      <div className={styles.buttonWrapper}>
        <label className={styles.label} htmlFor="image-upload">
          파일첨부
        </label>
        <input className={styles.input} type="file" id="image-upload" onChange={handleImageChange} />
      </div>
      <p className={styles.currentFile}>{imageUrl ? <Link href={imageUrl}>{imageUrl}</Link> : ''}</p>
    </div>
  );
};

export default ImageUploader;

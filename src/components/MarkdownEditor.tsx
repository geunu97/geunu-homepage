'use client';

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

interface MarkdownEditorProps {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}

const MarkdownEditor = ({ content, setContent }: MarkdownEditorProps) => {
  return (
    <>
      <MDEditor height={800} value={content} onChange={(value) => value && setContent(value)} />
    </>
  );
};

export default MarkdownEditor;

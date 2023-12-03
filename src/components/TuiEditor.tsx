'use client';

import { Editor } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import useResetObserver from '@/hooks/useReset';

interface TuiEditorProps {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}

const TuiEditor = ({ content, setContent }: TuiEditorProps) => {
  const editorRef = useRef<Editor>(null);
  const { hasReset } = useResetObserver<string>({ stateToWatch: content });

  const handleEditorChange = () => {
    // const htmlContent = editorRef.current?.getInstance().getHTML();
    const markdownContent = editorRef.current?.getInstance().getMarkdown();
    setContent(markdownContent);
  };

  return (
    <>
      {/* https://nhn.github.io/tui.editor/latest/ToastUIEditorCore */}
      {hasReset && (
        <Editor
          previewStyle="tab"
          height="600px"
          initialEditType="markdown"
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          hideModeSwitch={true}
          ref={editorRef}
          initialValue={content}
          onChange={handleEditorChange}
        />
      )}
    </>
  );
};

export default TuiEditor;

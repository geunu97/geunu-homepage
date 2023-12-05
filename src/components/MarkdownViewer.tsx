'use client';

import MDEditor from '@uiw/react-md-editor';

interface MarkdownViewerProps {
  content: string;
}

const MarkdownViewer = ({ content }: MarkdownViewerProps) => {
  return (
    <>
      <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap', fontSize: '14px' }} />
    </>
  );
};

export default MarkdownViewer;

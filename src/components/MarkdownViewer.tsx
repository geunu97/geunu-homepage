'use client'

import 'github-markdown-css/github-markdown.css'

interface MarkdownViewerProps {
  content: string
}

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  return <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
}

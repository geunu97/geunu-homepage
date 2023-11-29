'use client'

import 'github-markdown-css/github-markdown.css'

interface MarkdownViewerType {
  content: string
}

export default function MarkdownViewer({ content }: MarkdownViewerType) {
  return <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
}

export interface PostHeaderType {
  id: number
  title: string
  date: string
  author: string
}

export interface PostContentType {
  content: string
}

export interface PostType extends PostContentType {
  header: PostHeaderType
}

export interface PostListType {
  posts: PostType[]
}

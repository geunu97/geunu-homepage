export interface PostRequestType {
  title: string;
  content: string;
  userUid: string;
  author: string;
  date: string;
  comment: string[];
  likeCount: number;
}

export interface PostResponseType extends PostRequestType {
  postId: string;
}

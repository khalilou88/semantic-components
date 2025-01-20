export interface ScUserModel {
  id: number;
  name: string;
  avatar: string;
}

export interface ScCommentModel {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: Date;
  likes: number;
  replies: ScCommentModel[];
}

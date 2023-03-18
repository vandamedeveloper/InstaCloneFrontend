import { User } from './User';

export interface Post {
  user: User;
  caption: string;
  likes: string[];
  comments: string[];
  createdAt: Date;
}

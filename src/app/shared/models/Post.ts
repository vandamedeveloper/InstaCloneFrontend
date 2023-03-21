import { User } from './User';

export interface Post {
  user: User;
  caption: string;
  likes: string[];
  image: {
    contentType: string;
    filename: string;
    length: number;
    imageUrl: string;
    metadata: {
      user: string;
      post: any;
    };
  };
  uploadDate: string;
  comments: string[];
  createdAt: Date;
}

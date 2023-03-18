export interface User {
  username: string;
  email: string;
  fullName: string;
  profilePicture: string;
  biography?: string;
  website?: string;
  gender?: string;
  phone?: string;
  birthday?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  /**
   * Unique ID of the user
   */
  id?: string;

  /**
   * Username of the user
   */
  username?: string;

  /**
   * Email address of the user
   */
  email?: string;

  /**
   * Full name of the user
   */
  name?: string;

  /**
   * Short bio of the user
   */
  bio?: string;

  /**
   * URL of the user's profile picture
   */
  profilePictureUrl?: string;

  /**
   * URL of the user's website
   */
  website?: string;

  /**
   * Gender of the user
   */
  gender?: string;

  /**
   * Phone number of the user
   */
  phoneNumber?: string;

  /**
   * Birthday of the user
   */
  birthday?: Date;

  /**
   * Number of posts created by the user
   */
  posts?: number;

  /**
   * Number of followers of the user
   */
  followers?: number;

  /**
   * Number of users followed by the user
   */
  following?: number;

  /**
   * Date when the user's account was created
   */
  createdDate?: Date;

  /**
   * Date when the user last logged in
   */
  lastLoggedIn?: Date;
}

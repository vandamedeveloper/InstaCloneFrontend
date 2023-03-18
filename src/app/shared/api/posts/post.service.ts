import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Post } from '../../models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  protected basePath = 'http://localhost:3000/api';

  constructor(private _httpClient: HttpClient) {}

  /**
   *  CREATE NEW POST
   */

  createPost(postData: FormData) {
    let headers = new HttpHeaders();
    headers = headers.set(
      'Authorization',
      `Bearer ${localStorage.getItem('access_token')}`
    );
    return this._httpClient.post(`${this.basePath}/posts/upload`, postData, {
      headers,
    });
  }

  /**
   *  GET ALL POSTS
   */

  getPosts(): Observable<Post[]> {
    let headers = new HttpHeaders();
    headers = headers.set(
      'Authorization',
      `Bearer ${localStorage.getItem('access_token')}`
    );
    return this._httpClient.get<Post[]>(`${this.basePath}/posts/posts`, {
      headers,
    });
  }
}

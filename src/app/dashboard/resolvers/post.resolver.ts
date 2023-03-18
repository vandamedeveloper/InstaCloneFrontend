import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostService } from 'src/app/shared/api/posts/post.service';
import { Post } from 'src/app/shared/models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<Observable<Post[]>> {
  constructor(private _postService: PostService) {}
  resolve(): Observable<Post[]> {
    return this._postService.getPosts();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/shared/api/posts/post.service';
import { Post } from 'src/app/shared/models/Post';
import { UserProfile } from 'src/app/shared/models/UserProfile';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
})
export class DashboardContainerComponent implements OnInit {
  user: UserProfile;
  showCreateModal: boolean = false;
  loading = false;
  error: any = null;
  posts: Post[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _postService: PostService
  ) {}

  ngOnInit(): void {
    this.user = this._route.snapshot.data['user'];
    this.posts = this._route.snapshot.data['posts'].posts;
    console.log('SNAPSHOT: ', this.user, this.posts);
  }

  postSubscription() {
    this._postService.getPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts['posts'];
      },
      error: (error) => {
        this.error = error;
      },
    });
  }

  showCreatePostModal(): void {
    this.showCreateModal = true;
  }
  hideCreatePostModal(): void {
    this.showCreateModal = false;
  }
  OnCreatePost(event: { image: File; message: string }) {
    this.loading = true;
    const formData = new FormData();
    formData.append('caption', event.message);
    formData.append('image', event.image);

    this._postService.createPost(formData).subscribe({
      next: () => {
        this.showCreateModal = false;
        //redirect user to dashboard
        this.loading = false;
        this.postSubscription();
      },
      error: (error) => {
        //show error on console
        console.log(error);
      },
    });
  }
}

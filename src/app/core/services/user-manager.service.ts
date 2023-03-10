import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserProfile } from 'src/app/shared/models/UserProfile';

@Injectable({
  providedIn: 'root',
})
export class UserManagerService {
  private userSubject = new Subject<UserProfile>();
  user$ = this.userSubject.asObservable();

  user: UserProfile;

  setUser(user: UserProfile) {
    this.user = user;
    this.userSubject.next(user);
  }
}

import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserManagerService } from 'src/app/core/services/user-manager.service';
import { UserProfile } from '../models/UserProfile';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<UserProfile> {
  constructor(private _userManagerService: UserManagerService) {}
  resolve(): UserProfile {
    return this._userManagerService.user;
  }
}

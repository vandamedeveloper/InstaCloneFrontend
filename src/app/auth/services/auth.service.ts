import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserNetwork } from 'src/app/shared/models/UserNetwork';
import { UserProfile } from 'src/app/shared/models/UserProfile';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  protected basePath = 'http://localhost:3000/api';

  constructor(private _httpClient: HttpClient) {}

  /**
   *  REGISTER NEW USER ON THE APP
   */
  signup(user: UserNetwork): Observable<UserProfile> {
    const url = `${this.basePath}/users/signup`;
    return this._httpClient.post<UserProfile>(url, user);
  }
}

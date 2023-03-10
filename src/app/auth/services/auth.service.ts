import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  signup(user: UserProfile): Observable<UserProfile> {
    const url = `${this.basePath}/users/signup`;
    return this._httpClient.post<UserProfile>(url, user);
  }
}

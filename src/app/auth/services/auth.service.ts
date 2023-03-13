import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
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
    return this._httpClient
      .post<UserProfile>(url, user)
      .pipe(
        tap((data) =>
          localStorage.setItem('access_token', data['access_token'])
        )
      );
  }

  /**
   *  LOGIN USER
   */

  /**
   *  RETURN TOKEN
   */
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  /**
   *  CHECK IF USER IS AUTHENTICATED
   */
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? true : false;
  }

  /**
   *  REMOVE TOKEN ON LOGOUT
   */
  logout(): void {
    localStorage.removeItem('access_token');
  }
}

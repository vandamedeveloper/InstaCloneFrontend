import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/UserProfile';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  protected basePath = 'http://localhost:3000/api';

  getUserInfo(): Observable<UserProfile> {
    let headers = new HttpHeaders();
    headers = headers.set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    );
    return this._httpClient.get<UserProfile>(`${this.basePath}/users/me`, {
      headers,
    });
  }
}

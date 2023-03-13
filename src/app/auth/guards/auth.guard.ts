import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { UserManagerService } from 'src/app/core/services/user-manager.service';
import { UserService } from 'src/app/shared/api/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _userService: UserService,
    private _userManagerService: UserManagerService,
    private _router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._userService.getUserInfo().pipe(
      tap((user) => {
        this._userManagerService.setUser(user);
      }),
      map(() => true),
      catchError((error) => {
        this._router.navigate(['auth']);
        return of(null);
      })
    );
  }
}

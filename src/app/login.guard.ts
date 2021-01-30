import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LOGIN_COOKIE_NAME, LOGIN_URL } from './constants';
import { CookieService } from './services/coookie.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private readonly cookieService: CookieService,
    private readonly router: Router
    ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    let loginCookie = this.cookieService.getCookie(LOGIN_COOKIE_NAME);
    if (!loginCookie) {
      this.router.navigate([LOGIN_URL])
      return false;
    }
    return true;
  }
}

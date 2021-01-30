import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../login/login.component';
import { UserType } from '../models/enums';
import { ConfigUtil } from '../utils/config-utils';
import { LOGIN_COOKIE_NAME, LOGIN_URL } from './../constants';
import { CookieService } from './../services/coookie.service';

@Injectable()
export class ApprovalPendingGuard implements CanActivate {

  constructor(
    private readonly cookieService: CookieService,
    private readonly router: Router
    ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    let loginCookie = this.cookieService.getCookie(LOGIN_COOKIE_NAME);
    if (!loginCookie) {
      this.router.navigate([LOGIN_URL]);
      return false;
    }
    const user: User = JSON.parse(loginCookie);
    if(user.type === UserType.APPROVAL_PENDING)
      return true;

    this.router.navigate([ConfigUtil.getRedirectUrl(user.type)]);
    return false;
  }
}

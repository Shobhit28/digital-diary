import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LOGIN_COOKIE_NAME } from './constants';
import { CookieService } from './services/coookie.service';

@Injectable()
export class LoginGuard implements CanActivate {

  LOGIN_URL = '/login';
  constructor(
    private readonly cookieService: CookieService,
    private readonly router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    
    if(this.cookieService.getCookie(LOGIN_COOKIE_NAME))
      return true;
    
    this.router.navigate([this.LOGIN_URL])
    return false;
  }
}

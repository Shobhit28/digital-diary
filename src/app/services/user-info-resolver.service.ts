import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { EXPIRATION_DAYS, LOGIN_COOKIE_NAME } from "../constants";
import { User } from "../login/login.component";
import { ApiService } from "./api.service";
import { CookieService } from "./coookie.service";
import 'rxjs/add/operator/map'
@Injectable()
export class UserInfoResolverService implements Resolve<User> {
  constructor(
    private apiService: ApiService,
    private readonly cookieService: CookieService
    ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {

    return this.apiService.getUserInfo().map((data)=>{
      this.cookieService.setCookie(LOGIN_COOKIE_NAME, JSON.stringify(data), EXPIRATION_DAYS);
      return data;
    });
    
  }
}
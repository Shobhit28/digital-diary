import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../login/login.component";
import { ApiService } from "./api.service";

@Injectable()
export class UserInfoResolverService implements Resolve<User> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {

    return this.apiService.getUserInfo();
    
  }
}
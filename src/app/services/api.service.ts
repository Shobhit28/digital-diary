import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from './coookie.service';
import { APPROVAL_LIST_URL, BRANCH_DETAILS_URL, CREATE_BRANCH_URL, CREATE_MEMBERSHIP_REQUEST_URL, CREATE_USER_URL, HOSTNAME, LOGIN_COOKIE_NAME, UPDATE_USER_TYPE_URL, USER_INFO_URL, USER_LIST_URL } from '../constants';
import { User } from '../login/login.component';
import { CreateApprovalPayload, CreateBranchPayload } from '../models/request-payoad';
import { ApprovalStatus, UserType } from '../models/enums';
@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService) { }


  createUser(payload) {
    return this.http.post(this.getUrl(CREATE_USER_URL), payload, this.getOptions());
  }

  createBranch(payload: CreateBranchPayload) {
    return this.http.post(this.getUrl(CREATE_BRANCH_URL), payload, this.getOptions());
  }

  createMembershipRequest(payload: CreateApprovalPayload) {
    return this.http.post(this.getUrl(CREATE_MEMBERSHIP_REQUEST_URL), payload, this.getOptions());
  }

  getUserInfo() {
    return this.http.get(this.getUrl(USER_INFO_URL), this.getOptions());
  }

  getUserList(branchId: string) {
    const url = this.getUrl(USER_LIST_URL) + "/" + branchId;
    return this.http.get(url, this.getOptions());
  }

  getBranchDetails(branchId: string) {
    const url = this.getUrl(BRANCH_DETAILS_URL) + "/" + branchId;
    return this.http.get(url, this.getOptions());
  }

  getApprovalList(branchId: string) {
    const url = this.getUrl(APPROVAL_LIST_URL) + "/" + branchId;
    return this.http.get(url, this.getOptions());
  }

  updateUserType(userId: string, status: ApprovalStatus) {
    return this.http.put(this.getUrl(UPDATE_USER_TYPE_URL), {userId, status}, this.getOptions());
  }

  private getUrl(path) {
    return HOSTNAME + path;
  }

  private getOptions() {
    let user: User = JSON.parse(this.cookieService.getCookie(LOGIN_COOKIE_NAME));
    return { headers: new HttpHeaders({ "user_info": user.email }) }
  }
}
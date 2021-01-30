import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ADMIN_URL, APPROVAL_PENDING_URL, EXPIRATION_DAYS, LOGIN_COOKIE_NAME } from '../constants';
import { User } from '../login/login.component';
import { CreateApprovalPayload, CreateBranchPayload } from '../models/request-payoad';
import { ApiService } from '../services/api.service';
import { CookieService } from '../services/coookie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  applicationName = 'Digital Diary'
  user:User;
  branchForm = new FormGroup({
    branchName: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl(''),
    pincode: new FormControl('')
  })

  memberForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    branchCode: new FormControl('')
  });

  constructor(
    private cookieService: CookieService,
    private readonly apiService: ApiService,
    private readonly router: Router
    ){ }
  
  ngOnInit() {
    this.user = JSON.parse(this.cookieService.getCookie(LOGIN_COOKIE_NAME));
  }

  submitBranchForm() {
    const payload: CreateBranchPayload = {
      name: this.branchForm.value.branchName,
      city: this.branchForm.value.city,
      address: this.branchForm.value.address,
      pincode: this.branchForm.value.pincode
    }
    this.apiService.createBranch(payload).subscribe((response) => {
      this.user.type = response['type'];
      this.cookieService.setCookie(LOGIN_COOKIE_NAME, JSON.stringify(this.user), EXPIRATION_DAYS)
      this.router.navigate([ADMIN_URL]);
    });
  }

  submitMemberForm() {
    const payload: CreateApprovalPayload = {
      userId: this.user.email,
      branchId: this.memberForm.value.branchCode
    }
    this.apiService.createMembershipRequest(payload).subscribe((response) => {
      this.user.type = response['type'];
      this.cookieService.setCookie(LOGIN_COOKIE_NAME, JSON.stringify(this.user), EXPIRATION_DAYS)
      this.router.navigate([APPROVAL_PENDING_URL]);
    });
  }
}

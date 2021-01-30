import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EXPIRATION_DAYS, LOGIN_COOKIE_NAME } from '../../constants';
import { User } from '../../login/login.component';
import { ApprovalStatus } from '../../models/enums';
import { ApiService } from '../../services/api.service';
import { CookieService } from '../../services/coookie.service';

@Component({
  selector: 'app-pendingapprovals',
  templateUrl: './pendingapprovals.component.html',
  styleUrls: ['./pendingapprovals.component.css']
})
export class PendingapprovalsComponent implements OnInit {
  members: User[];
  status: ApprovalStatus;
  user: User;
  constructor(
    private route: ActivatedRoute,
    private readonly apiService: ApiService,
    private readonly cookieService: CookieService
  ) {}

  ngOnInit() {
   this.fetchApprovals(); 
  }

  updateUserType(userId: string, status: ApprovalStatus) {
    this.apiService.updateUserType(userId, status).subscribe((response) => {
      this.fetchApprovals();
    });
  }

  private fetchApprovals() {
    this.route.parent.data.subscribe((data) => {
      this.apiService.getApprovalList(data['userInfo']['branch_id']).subscribe((response: User[]) => {
        this.members = response;
      })
    });
  }

}

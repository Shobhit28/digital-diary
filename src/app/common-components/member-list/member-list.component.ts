import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../login/login.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberlistComponent implements OnInit {

  welcome: string = '';
  members: User[];
  constructor(
    private route: ActivatedRoute,
    private readonly apiService: ApiService
  ) {
    this.welcome = "List of Members in the branch";
  };

  ngOnInit() {

    this.route.parent.data.subscribe((data) => {
      this.apiService.getUserList(data['userInfo']['branch_id']).subscribe((response: User[]) => {
        this.members = response;
      })
    })

  }

}

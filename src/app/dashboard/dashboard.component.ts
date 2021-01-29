import { Component, OnInit } from '@angular/core';
import { LOGIN_COOKIE_NAME } from '../constants';
import { User } from '../login/login.component';
import { CookieService } from '../services/coookie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  applicationName = 'Digital Diary'
  user: User;
  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    
    this.user = JSON.parse(this.cookieService.getCookie(LOGIN_COOKIE_NAME));
  }

}

import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EXPIRATION_DAYS, LOGIN_COOKIE_NAME } from '../constants';
import { CookieService } from '../services/coookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  auth2: any;
  constructor(
    private readonly ngZone: NgZone,
    private readonly cookieService: CookieService,
    private readonly router: Router
  ) {
    window['onSignIn'] = (user) => this.ngZone.run(() => this.onSignIn(user));
  }

  ngOnInit() {

    this.googleSDK();
  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const user: User = {
      id: profile.getId(),
      name: profile.getName(),
      profileImageUrl: profile.getImageUrl(),
      email: profile.getEmail()
    }
    this.cookieService.setCookie(LOGIN_COOKIE_NAME, JSON.stringify(user), EXPIRATION_DAYS);
    this.router.navigate(['admin']);


  }

  googleSDK() {

    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '857854339377-qagskb2seajnlr6jft4c5nvlr90sgclg.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
      });
    }

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));

  }
}

export interface User {
  id: string;
  name: string;
  profileImageUrl: string;
  email: string;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    console.log('Name: ' + profile.getName()); 
    alert("logged in as: ");  
  }
  
   
  clicked() {
    alert("Pop up");
  }
  ngOnInit() {
  }

}

import { Component, OnInit,Input } from '@angular/core';
import { LOGIN_COOKIE_NAME } from '../constants';
import { User } from '../login/login.component';
import { CookieService } from '../services/coookie.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { OnlyNumbersValidators } from '../only-numbers.validators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  applicationName = 'Digital Diary'
  user:User;
  @Input() enroll:FormGroup;
  clicked = false;
  constructor(private cookieService: CookieService){ }

  
   formenroll=new FormGroup({
      enrollment:new FormControl('',[Validators.required,
                                    OnlyNumbersValidators.onlyNumber]),
   });
    get enrollment()
      {
        return this.formenroll.get('enrollment');
      }
  
  
  
  ngOnInit() {
    this.user = JSON.parse(this.cookieService.getCookie(LOGIN_COOKIE_NAME));
  }
}

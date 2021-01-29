import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})

export class MemberlistComponent implements OnInit {
 
  welcome : string='';
  members : any[];
  constructor(){
      this.welcome = "List of Members in the branch"

      this.members = [{
          membername : "Ashi Agarwal",
          email: "ashigarwal@gmail.com"
          
      },
      {
        membername : "Ashna Agarwal",
        email: "ashnagarwal9@gmail.com"
          
      },
      {
        membername : "Astha Rajput",
        email: "astharajput@gmail.com"
          
      },
      {
        membername : "Shreya yadav",
        email: "shreyayadav@gmail.com"
          
      }]
  };

  ngOnInit() {
  }

}

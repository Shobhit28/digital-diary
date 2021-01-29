import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendingapprovals',
  templateUrl: './pendingapprovals.component.html',
  styleUrls: ['./pendingapprovals.component.css']
})
export class PendingapprovalsComponent implements OnInit {
  members : any[];
  
  constructor() {  this.members = [{
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
 }

 foo() {
  document.getElementById("buttonAccept") ;
  document.getElementById("buttonRefuse") ;
  return true;
}
  ngOnInit() {
  }

}

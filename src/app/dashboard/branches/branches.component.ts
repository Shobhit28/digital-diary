import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  constructor() { }

  nameSearch:string=''
  selectedMembers:string=''
  

  Memberarr:any[]=[
  { name:'Ashi Agarwal'},
  {name:'Shubhi Agarwal'},
  {name:'Astha Rajput'},
  { name:'Ashna Agarwal'},
  {name:'Hardik'},
  {name:'Shobhit Srivastava'},
  {name:'Vratika'},
  {name:'Niharika'},
]

onClickEntry(name){
  this.selectedMembers=name;
}
//   
firstname;
lastname;
gender;
address;
pincode;
city;
state;
country;
email;
contact;

 age;
 
 mobilenumber;
 aadhaarnumber;
 formdata2 ;
 openform=false;
 onClickOpenForm(){
  this.openform=true;
  return this.openform;

  }


 onClickSubmitForm(data2){
 this.email=data2.email;
 this.age=data2.age;
 this.mobilenumber=data2.mobilenumber;
 this.aadhaarnumber=data2.aadhaarnumber;
 this.firstname=data2.name;
 this.lastname=data2.lastname;
 this.gender=data2.gender;
 this.contact=data2.contact;
 this.address=data2.address;
 this.city=data2.city;
 this.state=data2.state;
 this.country=data2.country;
 this.pincode=data2.pincode;

    }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

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
name;

 email;
 age;
 lastname;
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
 this.name=data2.name;
 this.lastname=data2.lastname;


    }

ngOnInit() {
}
}

  
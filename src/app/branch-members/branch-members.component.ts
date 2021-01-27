import { Component, OnInit , Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-branch-members',
  templateUrl: './branch-members.component.html',
  styleUrls: ['./branch-members.component.css']
})
export class BranchMembersComponent implements OnInit {

  @Input() formpersonal:FormGroup;
  searchText:string='';
  selectedMembers: string='';
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('',Validators.required),
    mail: new FormControl('',Validators.required),
    br: new FormControl(''),
    mid: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });


  characters:any[] = [
    {name:'Ashi'},
    {name:'Ashna'},
    {name:'Astha'},
    {name:'pooja'},
    {name:'Tarika'},
    {name:'Shreya'},
    {name:'Apoorv'},
    {name:'Poorva'},
  ]
  onClickEntry(name){
    this.selectedMembers=name;
}

openform=false;
 onClickOpenForm(){
  this.openform=true;
  return this.openform;
  }

onSubmit() {
  console.warn(this.formpersonal.value);
}

ngOnInit() {
}
}




  




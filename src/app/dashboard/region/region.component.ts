import { Component, OnInit } from '@angular/core';

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
  { name:'Ashna'},
  {name:'Vratika'},
  {name:'Tanu'},
  {name:'Shobhit Srivastav'},
  {name:'Hardik'},
]
onClickEntry(name){
  this.selectedMembers=name;
}
ngOnInit() {
}
}

  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {

  branchDetails: BranchDetails;
  constructor(
    private route: ActivatedRoute,
    private readonly apiService: ApiService) { 

  }

  ngOnInit() {
    this.route.parent.data.subscribe((data) => {
      this.apiService.getBranchDetails(data['userInfo']['branch_id']).subscribe((response: BranchDetails) => {
        this.branchDetails = response;
      })
    })
  }

}

export interface BranchDetails {
  id: number;
  name: string;
  address: string;
  city: string;
  pincode: string;
}

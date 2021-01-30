import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BranchDetailsComponent } from '../common-components/branch-details/branch-details.component';
import { MemberlistComponent } from '../common-components/member-list/member-list.component';
import { MemberDashboardRoutingModule } from './member-dashboard-routing.module';
import { MemberdashboardComponent } from './member-dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    MemberDashboardRoutingModule,
  ],
  
  declarations: [
    MemberlistComponent,
    BranchDetailsComponent,
    MemberdashboardComponent
  ],

})
export class MemberDashboardModule { }

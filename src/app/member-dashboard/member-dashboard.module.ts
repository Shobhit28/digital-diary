import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BranchDetailsComponent } from '../common-components/branch-details/branch-details.component';
import { AppCommonModule } from '../common-components/common.module';
import { MemberlistComponent } from '../common-components/member-list/member-list.component';
import { MemberDashboardRoutingModule } from './member-dashboard-routing.module';
import { MemberdashboardComponent } from './member-dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    MemberDashboardRoutingModule
  ],
  
  declarations: [
    MemberdashboardComponent
  ],

})
export class MemberDashboardModule { }

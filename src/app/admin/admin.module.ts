import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BranchDetailsComponent } from '../common-components/branch-details/branch-details.component';
import { MemberlistComponent } from '../common-components/member-list/member-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PendingapprovalsComponent } from './pendingapprovals/pendingapprovals.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  
  declarations: [
    AdminComponent,
    BranchDetailsComponent,
    MemberlistComponent,
    PendingapprovalsComponent
  ],

})
export class AdminModule { }

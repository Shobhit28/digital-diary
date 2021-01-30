import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchDetailsComponent } from '../common-components/branch-details/branch-details.component';
import { MemberlistComponent } from '../common-components/member-list/member-list.component';
import { AdminComponent } from './admin.component';
import { PendingapprovalsComponent } from './pendingapprovals/pendingapprovals.component';


const routes: Routes = [
  {

  path: '',
  component: AdminComponent,
  resolve:  {
    userInfo: 'userInfoResolver'
  },
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'branch-details'
  },
  {

    path: 'branch-details',
    component: BranchDetailsComponent
  },
  {
    path: 'member',
    component: MemberlistComponent
  },
  {
    path: 'approval-list',
    component: PendingapprovalsComponent
  }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

 
  exports: [RouterModule]
})
export class AdminRoutingModule { }
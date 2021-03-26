import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchDetailsComponent } from '../common-components/branch-details/branch-details.component';
import { MemberlistComponent } from '../common-components/member-list/member-list.component';
import { MemberdashboardComponent } from './member-dashboard.component';


const routes: Routes = [
  {

  path: '',
  component: MemberdashboardComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'branch-details'
  },
  {
    path: 'member-list',
    component: MemberlistComponent
  },
  {

    path: 'branch-details',
    component: BranchDetailsComponent
  }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

 
  exports: [RouterModule]
})
export class MemberDashboardRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { MemberdashboardComponent }from './memberdashboard/memberdashboard.component'
import { MemberlistComponent } from './commoncomponent/memberlist/memberlist.component';
import { BranchdetailsComponent} from './commoncomponent/branchdetails/branchdetails.component';
import { PendingapprovalsdashboardComponent} from './pendingapprovalsdashboard/pendingapprovalsdashboard.component';
import { PendingapprovalsComponent } from './admindashbord/pendingapprovals/pendingapprovals.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'memberdashboard'
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }
     
    ]
  },
 {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
     
    ]
  },
  {
    path: '',
    component: PendingapprovalsdashboardComponent,
    children: [
      {
        path: 'pendingapprovalsdashboard',
        component: PendingapprovalsdashboardComponent
      }
     
    ]
  },
  {
    path: 'admindashbord',
    component: AdmindashbordComponent,
    children: [
      {
        path: 'memberlist',
        component: MemberlistComponent
      },
      {
        path: 'branchdetails',
        component: BranchdetailsComponent
      },
      {
        path: 'pendingapprovals',
        component: PendingapprovalsComponent
      }
    ]
  },
  {
    path: 'memberdashboard',
    component: MemberdashboardComponent,
    children: [
      {
        path: 'memberlist',
        component: MemberlistComponent
      },
      {
        path: 'branchdetails',
        component: BranchdetailsComponent
      }
     
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [[RouterModule.forChild(routes)],
    [RouterModule.forRoot(routes)]],
  exports: [RouterModule],
})
export class AppRoutingModule { }

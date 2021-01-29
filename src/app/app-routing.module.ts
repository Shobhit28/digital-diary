import { MemberlistComponent } from './common components/memberlist/memberlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { PendingapprovalsComponent } from './admin/pendingapprovals/pendingapprovals.component';
import { MemberdashboardComponent } from './memberdashboard/memberdashboard.component';
import { BranchComponent } from './common components/branch/branch.component';
import { MemberapprovalComponent } from './memberapproval/memberapproval.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }

    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
    {
      path: 'approvals',
      component: PendingapprovalsComponent
    },{
      path: 'member',
      component: MemberlistComponent
    },
    {
      path: 'branch details',
      component: BranchComponent
    }
  
]
},
{
  path: 'memberdashboard',
  component: MemberdashboardComponent,
  children: [
    {
      path: 'member',
      component: MemberlistComponent
    },
    {
      path: 'branch details',
      component: BranchComponent
    }
  ]},
  {
    path: 'waitingforapprovals',
    component: MemberapprovalComponent
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

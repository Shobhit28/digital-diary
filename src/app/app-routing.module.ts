import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MemberapprovalComponent } from './approval-pending/approval-pending.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeGuard } from './guards/home-guard.service';
import { MemberGuard } from './guards/member-guard.service';
import { ApprovalPendingGuard } from './guards/approval-pending.guard.service';
import { AdminGuard } from './guards/admin-guard.service';
import { UserInfoResolverService } from './services/user-info-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'app',
    canActivate: [LoginGuard],
    resolve:  {
      userInfo: UserInfoResolverService
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [HomeGuard]
      },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AdminGuard]
      },
      {
        path: 'member',
        loadChildren: './member-dashboard/member-dashboard.module#MemberDashboardModule',
        canActivate: [MemberGuard]
      },
      {
        path: 'approval-pending',
        component: MemberapprovalComponent,
        canActivate: [ApprovalPendingGuard]
      },
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { RegionComponent } from './region/region.component';


const routes: Routes = [{
=======
import { BranchesComponent} from './branches/branches.component';
const routes: Routes = [
  {

  path: '',
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {

    path: 'region',
    component: RegionComponent

    path: 'branches',
      component: BranchesComponent
  }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

 
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

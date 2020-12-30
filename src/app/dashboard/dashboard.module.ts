import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';

import { RegionComponent } from './region/region.component';

import { BranchesComponent } from './branches/branches.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],

  declarations: [HomeComponent, RegionComponent]

  declarations: [HomeComponent, BranchesComponent]
   

})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { RegionComponent } from './region/region.component';
import { BranchesComponent } from './branches/branches.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  
  declarations: [
    HomeComponent, 
    RegionComponent, 
    BranchesComponent, 
    FilterPipe

  ],
   



})
export class DashboardModule { }

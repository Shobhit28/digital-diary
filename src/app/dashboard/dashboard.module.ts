import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { BranchesComponent } from './branches/branches.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent,
     BranchesComponent,
     FilterPipe]
   
})
export class DashboardModule { }

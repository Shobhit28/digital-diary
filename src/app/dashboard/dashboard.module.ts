import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

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
  
  declarations: [
     
    FilterPipe

  ],
   



})
export class DashboardModule { }

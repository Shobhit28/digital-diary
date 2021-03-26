import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from '../common-components/common.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PendingapprovalsComponent } from './pendingapprovals/pendingapprovals.component';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    AdminRoutingModule,
  ],
  
  declarations: [
    AdminComponent,
    PendingapprovalsComponent
  ],

})
export class AdminModule { }

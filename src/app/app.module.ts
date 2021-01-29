import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { MemberdashboardComponent } from './memberdashboard/memberdashboard.component';
import { BranchdetailsComponent } from './commoncomponent/branchdetails/branchdetails.component';
import { MemberlistComponent } from './commoncomponent/memberlist/memberlist.component';
import { PendingapprovalsComponent } from './admindashbord/pendingapprovals/pendingapprovals.component';
import { PendingapprovalsdashboardComponent } from './pendingapprovalsdashboard/pendingapprovalsdashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LoginComponent,
   
    AdmindashbordComponent,
   
    MemberdashboardComponent,
   
    BranchdetailsComponent,
   
    MemberlistComponent,
   
    PendingapprovalsComponent,
   
    PendingapprovalsdashboardComponent,
   
     
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

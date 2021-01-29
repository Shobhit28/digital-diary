import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { CookieService } from './services/coookie.service';
import { AdminComponent } from './admin/admin.component';
import { MemberlistComponent } from './common components/memberlist/memberlist.component';
import { PendingapprovalsComponent } from './admin/pendingapprovals/pendingapprovals.component';
import { MemberdashboardComponent } from './memberdashboard/memberdashboard.component';
import { BranchComponent } from './common components/branch/branch.component';
import { MemberapprovalComponent } from './memberapproval/memberapproval.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdminComponent,
    MemberlistComponent,
    PendingapprovalsComponent,
    MemberdashboardComponent,
    BranchComponent,
    MemberapprovalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    LoginGuard,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

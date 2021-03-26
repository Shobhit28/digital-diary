import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { CookieService } from './services/coookie.service';
import { MemberdashboardComponent } from './member-dashboard/member-dashboard.component';
import { MemberapprovalComponent } from './approval-pending/approval-pending.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInfoResolverService } from './services/user-info-resolver.service';
import { HomeGuard } from './guards/home-guard.service';
import { AdminGuard } from './guards/admin-guard.service';
import { MemberGuard } from './guards/member-guard.service';
import { ApprovalPendingGuard } from './guards/approval-pending.guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    MemberapprovalComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    CookieService,
    ApiService,
    LoginGuard,
    HomeGuard,
    AdminGuard,
    MemberGuard,
    ApprovalPendingGuard,
    UserInfoResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

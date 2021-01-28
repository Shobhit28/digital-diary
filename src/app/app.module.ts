import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
=======
import { LoginGuard } from './login.guard';
import { CookieService } from './services/coookie.service';

>>>>>>> e5c87d0db8946205b71beb2dfefbbfd9db2c7123



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LoginComponent
<<<<<<< HEAD
    
=======
>>>>>>> e5c87d0db8946205b71beb2dfefbbfd9db2c7123
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    
  ],
  providers: [
    LoginGuard,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

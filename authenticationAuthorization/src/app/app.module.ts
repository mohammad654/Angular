import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// HttpClientModule
import { HttpClientModule } from '@angular/common/http';
// Routes
import { RouterModule, Routes } from '@angular/router';
// components
import { DataComponent } from './data/data.component';
import { AdminComponent } from './admin/admin.component';
import { HelpersComponent } from './helpers/helpers.component';
import { HomeComponent } from './home/home.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
// services
import { DataService } from './services/data.service';
// add ng Model
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginGuardService } from './services/login-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoginGuardService],
  },
  { path: 'data', component: DataComponent },
  { path: 'no-access', component: NoAccessComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    AdminComponent,
    HelpersComponent,
    HomeComponent,
    NoAccessComponent,
    NotFoundComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [DataService, LoginGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}

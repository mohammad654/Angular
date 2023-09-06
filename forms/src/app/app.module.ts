import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
// reactive form
import { HttpComponent } from './http/http.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo/photo.component';
import { HttpService } from './services/http.service';
// Routes
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RouterModule, Routes } from '@angular/router';


import { FooterComponent } from './footer/footer.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'photos/:id', component: ProfileInfoComponent },
  { path: 'photos', component: PhotoComponent },
  { path: 'posts/:id/:title', component: HttpComponent },
  { path: 'posts', component: HttpComponent },
  { path: 'template', component: ContactFormComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    HttpComponent,
    PhotoComponent,
//     Routes
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    ProfileInfoComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
//     HttpClientModule,
    //     Routes
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [
  HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

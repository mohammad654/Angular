import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { ZippyComponent } from './zippy/zippy.component';

import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ReduxComponent } from './redux/redux.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpservicesComponent } from './httpservices/httpservices.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './services/posts.service';
import { MaterialComponent } from './material/material.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

// import { StoreModule } from '@ngrx/store';
//
// import { IAppStats } from './redux/store';

// firebaseConfig
// import { environment } from '../environments/environment';
// import { environment } from './../environments/environment';
// import { AngularFireModule } from '@angular/fire';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'zippy', component: ZippyComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'httpservice', component: HttpservicesComponent },
  { path: 'httpservice/info/:id/:title', component: ReduxComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    TodosComponent,
    ZippyComponent,
    ReduxComponent,
    TemplateComponent,
    HttpservicesComponent,
    MaterialComponent,

    //     StoreModule.forRoot()
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDialogModule,
    //     StoreModule.forRoot({}, {}),
    //   AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

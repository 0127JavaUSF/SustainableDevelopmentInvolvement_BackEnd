import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CreateProjectContributionComponent } from './components/create-project-contribution/create-project-contribution.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';



@NgModule({
  declarations: [
    AppComponent,   
    CreateProjectContributionComponent,
    NewProjectComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    AllProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule

  ],

  // providers can be used to register services 
  bootstrap: [AppComponent]
})
export class AppModule { }

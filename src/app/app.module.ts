import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CreateProjectContributionComponent } from './components/create-project-contribution/create-project-contribution.component';
import { NewProjectComponent } from './components/new-project/new-project.component';



@NgModule({
  declarations: [
    AppComponent,   
    CreateProjectContributionComponent,
    NewProjectComponent,
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

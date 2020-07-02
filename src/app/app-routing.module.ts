import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProjectContributionComponent } from './components/create-project-contribution/create-project-contribution.component';
import {NewProjectComponent} from './components/new-project/new-project.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';

const routes: Routes = [
  
  { path: '', component: LandingPageComponent},
  /* Sustainable Development Projects */
  {path: 'new-project-contribution', component: CreateProjectContributionComponent},
  {path: 'new-project', component: NewProjectComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

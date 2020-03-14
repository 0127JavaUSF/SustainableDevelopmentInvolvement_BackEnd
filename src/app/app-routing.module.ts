import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ListingComponent } from './components/listing/listing.component';
import { SearchComponent } from './components/search/search.component';
import { ReviewApplicantsComponent } from './components/review-applicants/review-applicants.component';
import { ViewPastApplicationsComponent } from './components/view-past-applications/view-past-applications.component';
import { ViewPastListingsComponent } from './components/view-past-listings/view-past-listings.component';
import { NewListingComponent } from './components/new-listing/new-listing.component';
import { CaroselComponent } from './components/carosel/carosel.component';

/**
 * Registration of our routes
 * when the URL context is /pizzas then the router-outlet will render PizzaComponent
 */

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'newlisting', component: NewListingComponent},
  { path: 'search', component: SearchComponent},
  { path: 'reviewApp', component: ReviewApplicantsComponent},
  { path: 'pastApp', component: ViewPastApplicationsComponent},
  { path: 'pastListing', component: ViewPastListingsComponent},
  { path: 'app-listing/:id', component: ListingComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

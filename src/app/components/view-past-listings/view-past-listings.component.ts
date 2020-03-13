import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-view-past-listings',
  templateUrl: './view-past-listings.component.html',
  styleUrls: ['./view-past-listings.component.css']
})
export class ViewPastListingsComponent implements OnInit {

  results : any;
  selectedType : string;

  constructor(private shared: SharedService, private route : Router, private listingService : ListingService) { 
  
  }

  ngOnInit() {

    this.listingService.getPastListing().subscribe(data => {
      this.results = data;
    }, error => {
      const test = 0;
    });
  }

  onViewApplicantsClicked(event, result) {

    //get listing id
    this.shared.reviewAppsListingId = result.id;

    this.route.navigate(['/reviewApp']);
  }
}
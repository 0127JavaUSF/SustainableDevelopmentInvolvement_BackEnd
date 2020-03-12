// Boilerplate  bootstrap card code from Henry.

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


  selectedType : string;
  test : string = "The view listings works";

  results : any;

  constructor(private shared: SharedService, private route : Router, private listingService : ListingService) { 
  
  }

  ngOnInit() {

    this.listingService.getPastListing().subscribe(data => {
      this.results = data;
    }, error => {
    });
    //do post request to get search results


  }

  onDetailsClicked(event, result) {

    //get listing id
    let id : number = result.id;
    this.test = "id:" + id;
    this.shared.listingId = id;
    this.route.navigate(['/reviewApp']);
    //show the details component
  }

  onTypeSelected(event) {

    this.test = "type:" + this.selectedType + this.shared.typeToNumber(this.selectedType);
  }
}
// Look at Mitch's example 
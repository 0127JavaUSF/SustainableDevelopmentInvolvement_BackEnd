import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../../services/shared.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class ListingComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private shared: SharedService, private sanitizer: DomSanitizer) {
    // customize default values of carousels used by this component tree
    config.interval = 0; //setting the interval seems to refresh the page which restarts any videos playing. so do not set > 0
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  //fake server call result
  result : {
      id : Number,
      name : String,
      type: Number,
      age : Number,
      color : Number,
      sex : Number,
      species : String,
      city : String,
      state : String,
      zipCode : String,
      imageUrls : String[],
      videoUrls : String[],
      fixed : Number,
      about : String
  };

  ngOnInit() {

    this.result = {
        id : 1,
        name : 'Fido',
        type: 1,
        age : 4,
        color : 2,
        sex : 1,
        species : 'Pitbull',
        city : 'Tampa',
        state : 'FL',
        zipCode : '32720',
        imageUrls : ["/assets/images/funny_dog.jpg", "/assets/images/funny_dog2.jpg"],
        videoUrls : ['https://www.youtube.com/embed/AcL0MeVZIxM', 'https://www.youtube.com/embed/BkD2nN5275c'],
        fixed : 1,
        about : "Retired police dog looking for an owner who enjoys naps, lounging by the pool, long summer days and rolling in the grass."
      };
  }

  onAdoptClicked(event) {

    //testing click
    //this.result.name="Chance";
  }
}
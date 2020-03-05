import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class ListingComponent implements OnInit {

  images : String[] = ["/assets/images/dog2.png", "/assets/images/dog3.png", "/assets/images/dog2.png", "/assets/images/professor.png"];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

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
      fixed : Boolean
  };

  ngOnInit() {

    this.result = {
        id : 1,
        name : 'Fido',
        type: 1,
        age : 0,
        color : 2,
        sex : 1,
        species: 'Pitbull',
        city: 'Tampa',
        state: 'FL',
        zipCode: '32720',
        imageUrls : ['m1_0.png', 'm2_0.png'],
        videoUrls : [''],
        fixed : true
      };
  }
}

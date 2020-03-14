import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../../services/shared.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ListingService } from '../../services/listing.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class ListingComponent implements OnInit {

  constructor(
    private listingService: ListingService,
    config: NgbCarouselConfig,
    private sanitizer: DomSanitizer,
    private shared: SharedService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    // customize default values of carousels used by this component tree
    config.interval = 0; //setting the interval seems to refresh the page which restarts any videos playing. so do not set > 0
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  result: any;

  ngOnInit() {

    //get id from url
    this.route.queryParams.subscribe(params => {

      if(!params.id) {
        return;
      }

      this.listingService.getListing(params.id).subscribe(data => {
        this.result = data;
      },
      error => {
        const test = 0;
      });
    })
  }

  onAdoptClicked(event) {

    //this.router.navigate(['listing', id]);
  }
}
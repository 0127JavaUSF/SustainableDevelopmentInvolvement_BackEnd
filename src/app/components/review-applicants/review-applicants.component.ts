
import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
    selector: 'app-review-applicants',
    templateUrl: './review-applicants.component.html',
    styleUrls: ['./review-applicants.component.css']
})
export class ReviewApplicantsComponent implements OnInit {

    results: any = null;

    constructor(
        private applicationService: ApplicationService,
        private shared: SharedService
    ) { }

    onClick(event, result) {

    };
    ngOnInit() {

        this.applicationService.getApplication(this.shared.reviewAppsListingId).subscribe(data => {
            this.results = data;

            const test = 0;
        },
        error => {
            const test = 0;
        });
    }
}
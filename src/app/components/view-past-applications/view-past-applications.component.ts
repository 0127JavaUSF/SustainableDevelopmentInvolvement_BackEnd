import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-view-past-applications',
  templateUrl: './view-past-applications.component.html',
  styleUrls: ['./view-past-applications.component.css']
})
export class ViewPastApplicationsComponent implements OnInit {

  results : any;
  constructor(private shared: SharedService, private route : Router, private applicationService : ApplicationService) { }

  ngOnInit() {
    this.applicationService.getPastApplication().subscribe(data => {
      this.results = data;

      for(let app of this.results) {
        if(app.status == null) { //error prevention
          app.status = 0;
        }
      }
    },
    error => {
      const test = 0;
    });
  }
}



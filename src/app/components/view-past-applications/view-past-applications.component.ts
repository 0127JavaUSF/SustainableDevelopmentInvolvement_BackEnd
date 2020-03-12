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

  selectedType : String;
  test : String = "Search Works";

  results : any;
  constructor(private shared: SharedService, private route : Router, private applicationService : ApplicationService) { }

  ngOnInit() {
    this.applicationService.getPastApplication().subscribe(data => {
      this.results = data;
    }, error => {
    });

    //do post request to get search results

  }
  onDetailsClicked(event, result) {

    //get listing id
    let id : Number = result.id;
    this.test = "id:" + id;
    //show the details component
  }

}



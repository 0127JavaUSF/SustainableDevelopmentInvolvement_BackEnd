import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-view-past-applications',
  templateUrl: './view-past-applications.component.html',
  styleUrls: ['./view-past-applications.component.css']
})
export class ViewPastApplicationsComponent implements OnInit {

  selectedType : String;
  test : String = "Search Works";

  results : [
    {
      id : Number,
      name : String,
      age : Number,
      sex : Number,
      species : String,
      city : String,
      state : String,
      zipCode : String,
      imageUrls : String[],
      fixed : Boolean,
      status: String,
      date: String
  },
  {
    id : Number,
    name : String,
    age : Number,
    sex : Number,
    species : String,
    city : String,
    state : String,
    zipCode : String,
    imageUrls : String[],
    fixed : Boolean,
    status: String,
    date: String
  }
  ];

  constructor(private shared: SharedService) { }

  ngOnInit() {

    //do post request to get search results

    //fake data from post request
    this.results = [
      {
        id : 1,
        name : 'Fido',
        age : 0,
        sex : 1,
        species: 'Pitbull',
        city: 'Tampa',
        state: 'FL',
        zipCode: '32720',
        imageUrls : ['m1_0.png', 'm2_0.png'],
        fixed : true,
        status: 'pending',
        date:'today'

      },
      {
        id : 2,
        name : 'Spot',
        age : 1,
        sex : 0,
        species: '',
        city: 'Tampa',
        state: 'FL',
        zipCode: '32720',
        imageUrls : ['m2_0.png', 'm1_0.png'],
        fixed : true,
        status: 'accepted',
        date:'yesterday'
      }
    ];
  }

  onDetailsClicked(event, result) {

    //get listing id
    let id : Number = result.id;
    this.test = "id:" + id;
    //show the details component
  }

}



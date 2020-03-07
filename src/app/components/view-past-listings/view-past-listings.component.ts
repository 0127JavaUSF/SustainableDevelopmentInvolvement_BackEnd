// Boilerplate  bootstrap card code from Henry.

import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-view-past-listings',
  templateUrl: './view-past-listings.component.html',
  styleUrls: ['./view-past-listings.component.css']
})
export class ViewPastListingsComponent implements OnInit {


  selectedType : String;
  test : String = "The view listings works";

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
      fixed : Boolean
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
    fixed : Boolean
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
        fixed : true
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
        fixed : true
      }
    ];
  }

  onDetailsClicked(event, result) {

    //get listing id
    let id : Number = result.id;
    this.test = "id:" + id;

    //show the details component
  }

  onTypeSelected(event) {

    this.test = "type:" + this.selectedType + this.shared.typeToNumber(this.selectedType);
  }
}

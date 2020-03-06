import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-review-applicants',
  templateUrl: './review-applicants.component.html',
  styleUrls: ['./review-applicants.component.css']
})
export class ReviewApplicantsComponent implements OnInit {

  selectedType : String;
  test : String = "The review applicants works";

results : [
 { id : Number,
  User_id : Number,
  Ad_id : Number,
  Date_filled_out : Timestamp
//In Java List<AppQuestion> questions
 },
];

  constructor(private shared : SharedService) { }
  ngOnInit() {
    this.results = [
      {
        id : 1,
        User_id : 

      }
    ];
  }

  

}


import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-review-applicants',
templateUrl: './review-applicants.component.html',
styleUrls: ['./review-applicants.component.css']
})
export class ReviewApplicantsComponent implements OnInit {
    test : String = "This is a test";
    results : [
        {
        date : String,
        name : String,
        questions: Object[]
    },
    {
        date : String,
        name : String,
        questions: Object[]
    }
    ];
    constructor(){
        this.results = [
            {
            date : "3/4/2121",
            name : "Dio Brando",
            questions: [{question: "Are you allergic to cats?", answer: "Yes"},
            {question: "Do you have a yard? ", answer: "Yes"}
            ],
        },
        {
            date : "12/3/2121",
            name : "Jotaro Kujo",
            questions: [{question: "Are you allergic to cats?", answer: "Yes"},
        {question: "Do you have a yard? ", answer: "Yes"}]
        }
        ];
    }
        onClick(event, result){
            this.test = "This is onClick"//get function working for on click
    
        };
    ngOnInit(){

// look up the event. 

    }
}
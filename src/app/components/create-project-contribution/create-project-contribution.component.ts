import { Component, OnInit } from '@angular/core';
import { GoalsService } from 'src/app/services/goals.service';
import {Router} from '@angular/router';

/* NB: Code inspired from the code for the Furever Home project.
I do not master yet the code used in this application. */

@Component({
  selector: 'app-create-project-contribution',
  templateUrl: './create-project-contribution.component.html',
  styleUrls: ['./create-project-contribution.component.css']
})
export class CreateProjectContributionComponent implements OnInit {

  constructor(private goalService:GoalsService, private router:Router) { }

  resultsGoals:any;
  firstName:string;
  lastName:string;

  ngOnInit() {
    this.goalService.resultsGoals().subscribe(
        data => {this.results = data;}, 
        error => {const test = 0;}
    );
  }

  onNewProjectClicked(event){
    this.router.navigate(['new-project']);
  }

}

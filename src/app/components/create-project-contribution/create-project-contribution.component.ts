import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import {Router} from '@angular/router';

/* NB: Code inspired from the code for the Furever Home project.
I do not master yet the code used in this application. */

@Component({
  selector: 'app-create-project-contribution',
  templateUrl: './create-project-contribution.component.html',
  styleUrls: ['./create-project-contribution.component.css']
})
export class CreateProjectContributionComponent implements OnInit {

  constructor(private projectService:ProjectService, private router:Router) { }

  resultsProjects:any;
  firstName:string;
  lastName:string;

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
        data => {this.resultsProjects = data;},         
        error => {const test = 0;}
    );
    console.log("resultProjects", this.resultsProjects);
    
  }

  onNewProjectClicked(event){
    this.router.navigate(['new-project']);
  }

}

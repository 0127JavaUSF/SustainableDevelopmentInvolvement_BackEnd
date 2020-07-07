import { Component, OnInit, DoCheck } from '@angular/core';
import {Project} from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/projects.service';
import { resolve } from 'url';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit, DoCheck {

  allProjectsResults:Array<Project>;
  e2eTestString="";


  constructor(private projectService:ProjectService) { }

  ngOnInit() {
     this.projectService.getAllProjects().subscribe(
        data => (this.allProjectsResults = data),
        error=> (console.log("Received an error in the observable to get all projects: "+error))
    );
    
    
   
  }

  createE2eTestString(){
    
    this.allProjectsResults.forEach(element => {
      if(element.name === "Project name_e2e test"){
        this.e2eTestString = element.name+element.description+element.goal_id+element.url+element.comments;
      }
    });

  }

  ngDoCheck(){
    if (this.allProjectsResults !== undefined)
    this.createE2eTestString();
  }
   

 

 

}

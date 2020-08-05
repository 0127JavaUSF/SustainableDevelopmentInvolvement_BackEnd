import { Component, OnInit, DoCheck } from '@angular/core';
import {Project} from 'src/app/models/Project';
import { ProjectExtendedData } from 'src/app/models/ProjectExtendedData';
import {Goal} from '../../models/Goal';
import { ProjectService } from 'src/app/services/projects.service';
import { GoalService } from 'src/app/services/goals.service';
import {MapCreationService} from 'src/app/services/map-creation.service';
@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit, DoCheck {

  allProjectsResults:Array<Project>;
  allGoalsResults:Array<Goal>;
  projectsExtendedDataResults = new Array<ProjectExtendedData>();
  e2eTestString="";


  constructor(private projectService:ProjectService, private goalService:GoalService, private mapCreationService:MapCreationService) { }

  ngOnInit() {
     this.projectService.getAllProjects().then(
        data => {this.allProjectsResults = data;console.log("getAllProjects: data obtained");
        this.goalService.getAllGoals().then(
          data => {this.allGoalsResults = data;console.log("getAllGoals ; data obtained");
          console.log("Before Goals map creation");
          let goalsMap = this.mapCreationService.createGoalsMap(this.allGoalsResults);
          
          //adding the project name 
          this.allProjectsResults.forEach(element => {
            let projectExtendedData = new ProjectExtendedData();
            projectExtendedData.id = element.id;
            projectExtendedData.name = element.name;
            projectExtendedData.description = element.description;
            projectExtendedData.url = element.url;
            projectExtendedData.goal_name = goalsMap.get(element.goal_id);
            this.projectsExtendedDataResults.push(projectExtendedData);
            console.log("Project added to extended data.");
          });
        },
          error => {console.log("Received an error in the promise to get all goals: ");JSON.stringify(error);}
        );
      },
        error => {console.log("Received an error in the promise to get all projects: ");JSON.stringify(error);}
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

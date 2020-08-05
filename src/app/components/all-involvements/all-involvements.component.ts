import { Component, OnInit } from '@angular/core';
import {EmployeeInvolvement} from 'src/app/models/EmployeeInvolvement';
import {Project} from 'src/app/models/Project';
import {Goal} from 'src/app/models/Goal';
import {EmployeeInvolvementExtendedData} from 'src/app/models/EmployeeInvolvementExtendedData';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProjectService } from 'src/app/services/projects.service';
import { GoalService } from 'src/app/services/goals.service';


@Component({
  selector: 'app-all-involvements',
  templateUrl: './all-involvements.component.html',
  styleUrls: ['./all-involvements.component.css']
})
export class AllInvolvementsComponent implements OnInit {
  
  constructor(private employeeService:EmployeeService, private projectService:ProjectService, private goalService:GoalService) { }

  allInvolvedUsersResults: Array<EmployeeInvolvement>;  
  allGoalsResults: Array<Goal>;
  allProjectsResults: Array<Project>;
  mapGoals = new Map();
  mapProjects = new Map();
  mapProjectIdGoalId = new Map();
  allInvolvementExtendedData = new Array<EmployeeInvolvementExtendedData>();

  e2eTestString="";


  ngOnInit() {      
   // The promises are nested  
    this.getAllGoals();    
  }

  createE2eTestString(){
    this.allInvolvedUsersResults.forEach(element => {
      if(element.firstName === "First Name_E2eTest"){        
        this.e2eTestString = element.firstName + element.lastName + element.projectId;
        console.log(this.e2eTestString);
      }
    });
  }

  getAllInvolvedProfiles(){
    this.employeeService.getAllInvolvedUsers().then(
      data => {this.allInvolvedUsersResults = data;
              console.log("allInvolvedUsersResults : ",this.allInvolvedUsersResults);
              this.allInvolvedUsersResults.forEach(element => {
                let extendedDataElement = new EmployeeInvolvementExtendedData();
                extendedDataElement.id = element.id;
                extendedDataElement.firstName = element.firstName;
                extendedDataElement.lastName = element.lastName;
                extendedDataElement.projectName = this.mapProjects.get(element.projectId);
                extendedDataElement.goalName = this.mapGoals.get(this.mapProjectIdGoalId.get(element.id));               
                this.allInvolvementExtendedData.push(extendedDataElement);
              });
              console.log("this.allInvolvementExtendedData: "+this.allInvolvementExtendedData);
            },
      error => (console.log("Error while receiving the data: concerning the employees involved ",error))
    );    
  }

  getAllGoals(){
      this.goalService.getAllGoals().then(
      data => {this.allGoalsResults = data;console.log("Goal list received from the promise");
              this.allGoalsResults.forEach(element => {
                  this.mapGoals.set(element.id, element.goalName);                
              }); 
              console.log("mapGoals size : "+this.mapGoals.size);
              this.getAllProjects();
              },

      error => {console.log("Error while receiving the list of goals", error)}
    );
  }

  getAllProjects(){
    this.projectService.getAllProjects().then(
      data => { this.allProjectsResults = data;
                console.log("allProjectsResults: ", this.allProjectsResults);
                this.allProjectsResults.forEach(element => {
                  this.mapProjects.set(element.id,element.name);
                  this.mapProjectIdGoalId.set(element.id, element.goal_id);
               }); 
               console.log("mapProjects size : "+this.mapProjects.size);
                this.getAllInvolvedProfiles();
              },
      error=> (console.log("Received an error in the observable to get all projects: ", JSON.stringify(error)))
   ); 
  }

}

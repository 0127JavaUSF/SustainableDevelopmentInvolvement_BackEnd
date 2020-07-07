import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from 'src/app/services/projects.service';
import {EmployeeInvolvement} from 'src/app/models/EmployeeInvolvement';
import { EmployeeService} from 'src/app/services/employee.service';


/* NB: Code inspired from the code for the Furever Home project.
I do not master yet the code used in this application. */

@Component({
  selector: 'app-create-project-contribution',
  templateUrl: './create-project-contribution.component.html',
  styleUrls: ['./create-project-contribution.component.css']
})
export class CreateProjectContributionComponent implements OnInit {

  constructor(private projectService:ProjectService, private employeeService:EmployeeService, private router:Router) { }

  allProjectsResults:any;
  newEmployeeInvolvementSubmissionResult:any;
  firstName:string;
  lastName:string;
  projectId:number;

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
        data => {this.allProjectsResults = data;},         
        error => {const test = 0;}
    );
    console.log("resultProjects", this.allProjectsResults);
    
  }

  onNewProjectClicked(){
    this.router.navigate(['new-project']);
  }

  createProjectContribution(){
    let employeeProfile = new EmployeeInvolvement()
    employeeProfile.firstName = this.firstName;
    employeeProfile.lastName = this.lastName;
    employeeProfile.projectId = this.projectId;

    console.log("employeeProfile", employeeProfile);

    this.employeeService.createEmployeeInvolvement(employeeProfile).subscribe(
        data => (this.newEmployeeInvolvementSubmissionResult = data),
        error => {const test=0;}
    );

    document.getElementsByClassName("closeAlert")[0].setAttribute("style","display:block;visibility:visible;");

    this.router.navigate(['']);

    

  }

}

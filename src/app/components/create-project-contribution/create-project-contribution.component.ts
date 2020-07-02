import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from 'src/app/services/project.service';
import {EmployeeProfile} from 'src/app/models/EmployeeProfile';
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
  project_Id:number;

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
    let employeeProfile = new EmployeeProfile()
    employeeProfile.firstName = this.firstName;
    employeeProfile.lastName = this.lastName;
    employeeProfile.project_Id = this.project_Id;

    console.log("employeeProfile", employeeProfile);

    this.employeeService.createEmployeeInvolvement(employeeProfile).subscribe(
        data => (this.newEmployeeInvolvementSubmissionResult = data),
        error => {const test=0;}
    );

    document.getElementsByClassName("closeAlert")[0].setAttribute("style","display:block;");

    this.router.navigate(['']);

    

  }

}

import { Component, OnInit } from '@angular/core';
import {EmployeeInvolvement} from 'src/app/models/EmployeeInvolvement';
import { EmployeeService } from 'src/app/services/employee.service';
import { element } from 'protractor';

@Component({
  selector: 'app-all-involvements',
  templateUrl: './all-involvements.component.html',
  styleUrls: ['./all-involvements.component.css']
})
export class AllInvolvementsComponent implements OnInit {
  
  constructor(private employeeService:EmployeeService) { }

  allInvolvementProfiles: Array<EmployeeInvolvement>;
  e2eTestString="";


  ngOnInit() {
    this.employeeService.getAllInvolvements().subscribe(
      data => (this.allInvolvementProfiles = data),
      error => (console.log("Error while receiving the employees' involvement data: ",error))
    );      

    
  }

  createE2eTestString(){
    this.allInvolvementProfiles.forEach(element => {
      if(element.firstName === "First Name_E2eTest"){
        this.e2eTestString = element.firstName + element.lastName + element.projectId;
        console.log(this.e2eTestString);
      }
    });
  }

  ngDoCheck(){
    if(this.allInvolvementProfiles !== undefined){
      this.allInvolvementProfiles.forEach(element => {
        console.log(element);
      }); 
      this.createE2eTestString();
    }
  }

}

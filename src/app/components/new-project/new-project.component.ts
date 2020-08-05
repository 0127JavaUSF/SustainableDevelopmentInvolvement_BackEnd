import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/services/goals.service';
import { ProjectService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/Project';
import { Router} from '@angular/router';
import { Goal } from 'src/app/models/Goal';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(private goalService:GoalService, private projectService:ProjectService, private router:Router) { }

  private goalsResults:Array<Goal>;
  private projectResults:Array<Project>;
  private id:number;
  private name:string;
  private description:string;
  private comments:string;
  private url:string;
  private goal_id:number;
  


  ngOnInit() {
    console.log("Entering ngOnInit");
    this.goalService.getAllGoals().then(
      (data:Array<Goal>) => {console.log("Retrieving the goal data and assigning value to this.goalsResults");this.goalsResults = data;} ,
      (error) => {console.log("Error during getAllGoals()", JSON.stringify(error))}
      );
    
  }

  createProjectReference(){
    let project = new Project();
    project.id = this.id;
    project.name = this.name;
    project.description = this.description;
    project.comments = this.comments;
    project.url = this.url;
    project.goal_id = this.goal_id;
    

    console.log("project in createProjectReference",project);

    this.projectService.createProjectReference(project).subscribe(
      data => {this.projectResults = data;},
      error => {const test=0;}
    );
    this.router.navigate(['/new-project-contribution']);

    document.getElementsByClassName('closeAlert')[0].setAttribute("style","display:block;visibility:visible;");
  }

}

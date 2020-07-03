import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/services/goals.service';
import { ProjectService } from 'src/app/services/project.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/Project';
import { Router} from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(private goalService:GoalService, private projectService:ProjectService, private router:Router) { }

  private goalsResults:any
  private projectResults:any;
  private id:number;
  private name:string;
  private description:string;
  private comments:string;
  private url:string;
  private goal_Id:number;


  ngOnInit() {
    this.goalService.getAllGoals().subscribe(
      data => {this.goalsResults = data;},
      error => {const test=0;}
    );
    
  }

  createProjectReference(){
    let project = new Project();
    project.id = this.id;
    project.name = this.name;
    project.description = this.description;
    project.comments = this.comments;
    project.url = this.url;
    project.goal_Id = this.goal_Id;

    console.log("project in createProjectReference",project);

    this.projectService.createProjectReference(project).subscribe(
      data => {this.projectResults = data;},
      error => {const test=0;}
    );
    this.router.navigate(['/new-project-contribution']);

    document.getElementsByClassName('closeAlert')[0].setAttribute("style","display:block;");
  }

}

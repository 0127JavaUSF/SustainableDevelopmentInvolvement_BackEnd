import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(private goalService:GoalsService, private router:Router) { }

  results:any;

  ngOnInit() {
    this.goalService.getAllGoals().subscribe(
      data => {this.results = data;},
      error => {const test=0;}
    );
    
  }

}

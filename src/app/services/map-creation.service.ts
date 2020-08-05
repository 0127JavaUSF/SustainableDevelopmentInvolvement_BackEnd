import { Injectable } from '@angular/core';
import { Goal } from 'src/app/models/Goal';

@Injectable({
  providedIn: 'root'
})
export class MapCreationService {

  constructor() { }

  createGoalsMap(allGoalResults:Array<Goal>):Map<number,string>{
    let map = new Map();
    allGoalResults.forEach(element => {map.set(element.id,element.goalName);     
    });
    
    return map;
  }
}

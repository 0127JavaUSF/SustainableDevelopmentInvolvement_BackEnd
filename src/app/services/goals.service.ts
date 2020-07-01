import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private base_url = "http://localhost:8080/goals";


  constructor(private http:HttpClient) { }

  getAllGoals(): Observable<any>{
      return this.http.get(`${this.base_url}`);

  }
}

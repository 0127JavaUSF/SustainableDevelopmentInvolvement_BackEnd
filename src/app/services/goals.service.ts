import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SD_StringExternalisation } from '../models/StringExternalisation';
import { Goal } from '../models/Goal';


@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http:HttpClient) { }

  private  stringExternalisation  = new SD_StringExternalisation();
  private base_url = this.stringExternalisation.base_url;

  async getAllGoals(): Promise<any>{
    console.log("Inside getAllGoals()");
    let promise = await this.http.get(`${this.base_url}/goals`).toPromise();
    return promise;
  }
}

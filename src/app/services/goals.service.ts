import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SD_StringExternalisation } from '../models/StringExternalisation';


@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http:HttpClient) { }

  private  stringExternalisation  = new SD_StringExternalisation();
  private base_url = this.stringExternalisation.base_url;

  getAllGoals(): Observable<any>{
      return this.http.get(`${this.base_url}/goals`);

  }
}

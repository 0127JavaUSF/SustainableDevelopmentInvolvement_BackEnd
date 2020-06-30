import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private base_url = "http://localhost:8080";

    constructor(private http:HttpClient) { }

    
  createProjectReference(project:Object): Observable<Object>{
    return this.http.post(`${this.base_url}/projects`, project );
  }
}
